import { getDefaultTeamInfo } from './GeneralHelpers.js'
import { getTeamsByDivision, getDivisionStandings } from './DivisionHelpers.js'
//getTeamsByDivision
//getDivisionStandings
//const https = require('https')
import https from 'https'
exports.handler = async (event) => {
  const teamInfo = getDefaultTeamInfo()

const year = '2021'

	//Gets game info for all 18 weeks
  for (let i = 1; i <= 18; i++) {
    let dataString = ''
    const url=`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${year}&seasontype=2&week=${i}`
    const response = await new Promise((resolve, reject) => {
      const req = https.get(url, function(res) {
        res.on('data', chunk => {
          dataString += chunk
        })
        res.on('end', () => {
          resolve({
            statusCode: 200,
            body: JSON.parse(dataString)
          })
        })
      })
      
      req.on('error', (e) => {
        reject({
          statusCode: 500
        })
      })
    })
    
    //Updates game info
    if(response.statusCode === 200) {
      response.body.events.forEach((game) => {
        const homeTeam = game.competitions[0].competitors[0].team.abbreviation
        const roadTeam = game.competitions[0].competitors[1].team.abbreviation
        const homeConference = teamInfo[homeTeam].conference
        const roadConference = teamInfo[roadTeam].conference
        const homeDivision = teamInfo[homeTeam].division 
        const roadDivision = teamInfo[roadTeam].division 

				// Complete Game
				if(game.competitions[0].status.type.completed) {
				  
					// Same Division
					if(homeConference === roadConference && homeDivision === roadDivision) {
					  
						// Tie
						if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
							teamInfo[homeTeam].overallRecord[2] += 1
							teamInfo[roadTeam].overallRecord[2] += 1

							teamInfo[homeTeam].conferenceRecord[2] += 1
							teamInfo[roadTeam].conferenceRecord[2] += 1

							teamInfo[homeTeam].divisionRecord[2] += 1
							teamInfo[roadTeam].divisionRecord[2] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
								
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							teamInfo[homeTeam].overallRecord[0] += 1
							teamInfo[roadTeam].overallRecord[1] += 1

							teamInfo[homeTeam].conferenceRecord[0] += 1
							teamInfo[roadTeam].conferenceRecord[1] += 1

							teamInfo[homeTeam].divisionRecord[0] += 1
							teamInfo[roadTeam].divisionRecord[1] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							teamInfo[homeTeam].overallRecord[1] += 1
							teamInfo[roadTeam].overallRecord[0] += 1

							teamInfo[homeTeam].conferenceRecord[1] += 1
							teamInfo[roadTeam].conferenceRecord[0] += 1

							teamInfo[homeTeam].divisionRecord[1] += 1
							teamInfo[roadTeam].divisionRecord[0] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
						}
						
				  // Same Conference
					} else if(homeConference === roadConference) {
					  
						// Tie
						if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
							teamInfo[homeTeam].overallRecord[2] += 1
							teamInfo[roadTeam].overallRecord[2] += 1

							teamInfo[homeTeam].conferenceRecord[2] += 1
							teamInfo[roadTeam].conferenceRecord[2] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							teamInfo[homeTeam].overallRecord[0] += 1
							teamInfo[roadTeam].overallRecord[1] += 1

							teamInfo[homeTeam].conferenceRecord[0] += 1
							teamInfo[roadTeam].conferenceRecord[1] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							teamInfo[homeTeam].overallRecord[1] += 1
							teamInfo[roadTeam].overallRecord[0] += 1

							teamInfo[homeTeam].conferenceRecord[1] += 1
							teamInfo[roadTeam].conferenceRecord[0] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
						}
						
					// Different Conference
					} else {
					  
						// Tie
						if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
							teamInfo[homeTeam].overallRecord[2] += 1
							teamInfo[roadTeam].overallRecord[2] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							teamInfo[homeTeam].overallRecord[0] += 1
							teamInfo[roadTeam].overallRecord[1] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							teamInfo[homeTeam].overallRecord[1] += 1
							teamInfo[roadTeam].overallRecord[0] += 1

							teamInfo[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							teamInfo[roadTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
						}
					}
					
				// Incomplete Game
				} else {
					teamInfo[homeTeam].games[i] = {
						isCompleted: false,
						result: "",
						score: 0,
						opponent: roadTeam,
						oppScore: 0,
					}

					teamInfo[roadTeam].games[i] = {
						isCompleted: false,
						result: "",
						score: 0,
						opponent: homeTeam,
						oppScore: 0,
					}
				}
      })
    }
  }
  
  const nfcEastTeams = getTeamsByDivision('NFC', 'East', teamInfo)
  const nfcEastTeamsSorted = getDivisionStandings(nfcEastTeams)
  
  const nfcNorthTeams = getTeamsByDivision('NFC', 'North', teamInfo)
  const nfcNorthTeamsSorted = getDivisionStandings(nfcNorthTeams)
  
  const nfcSouthTeams = getTeamsByDivision('NFC', 'South', teamInfo)
  const nfcSouthTeamsSorted = getDivisionStandings(nfcSouthTeams)
  
  const nfcWestTeams = getTeamsByDivision('NFC', 'West', teamInfo)
  const nfcWestTeamsSorted = getDivisionStandings(nfcWestTeams)
  
  const afcEastTeams = getTeamsByDivision('AFC', 'East', teamInfo)
  const afcEastTeamsSorted = getDivisionStandings(afcEastTeams)
  
  const afcNorthTeams = getTeamsByDivision('AFC', 'North', teamInfo)
  const afcNorthTeamsSorted = getDivisionStandings(afcNorthTeams)
  
  const afcSouthTeams = getTeamsByDivision('AFC', 'South', teamInfo)
  const afcSouthTeamsSorted = getDivisionStandings(afcSouthTeams)
  
  const afcWestTeams = getTeamsByDivision('AFC', 'West', teamInfo)
  const afcWestTeamsSorted = getDivisionStandings(afcWestTeams)
  
  const allData = {
    version: "1.0",
    time: "",
    teamInfoToDate: teamInfo,

    nfcEastStandings: nfcEastTeamsSorted,
    nfcNorthStandings: nfcNorthTeamsSorted,
    nfcSouthStandings: nfcSouthTeamsSorted,
    nfcWestStandings: nfcWestTeamsSorted,

    nfcDivisionChamps: [],
    nfcWildCardTeams: [],

    afcEastStandings: afcEastTeamsSorted,
    afcNorthStandings: afcNorthTeamsSorted,
    afcSouthStandings: afcSouthTeamsSorted,
    afcWestStandings: afcWestTeamsSorted,

    afcDivisionChamps: [],
    afcWildCardTeams: [],
  }
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(allData),
  }
   //return getWonLostTiedPercentage(allData.teamInfoToDate['GB'].overallRecord)
  return response
}