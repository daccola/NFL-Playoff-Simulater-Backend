const https = require('https')

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

function getDefaultTeamInfo() {
  const teams = {}

	teams['ARI'] = {
		location: 'Arizona',
		abbreviation: 'ARI',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['ATL'] = {
		location: 'Atlanta',
		abbreviation: 'ATL',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['BAL'] = {
		location: 'Baltimore',
		abbreviation: 'BAL',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['BUF'] = {
		location: 'Buffalo',
		abbreviation: 'BUF',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CAR'] = {
		location: 'Carolina',
		abbreviation: 'CAR',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CHI'] = {
		location: 'Chicago',
		abbreviation: 'CHI',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CIN'] = {
		location: 'Cincinnati',
		abbreviation: 'CIN',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CLE'] = {
		location: 'Cleveland',
		abbreviation: 'CLE',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DAL'] = {
		location: 'Dallas',
		abbreviation: 'DAL',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DEN'] = {
		location: 'Denver',
		abbreviation: 'DEN',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DET'] = {
		location: 'Detroit',
		abbreviation: 'DET',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['GB'] = {
		location: 'Green Bay',
		abbreviation: 'GB',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['HOU'] = {
		location: 'Houston',
		abbreviation: 'HOU',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['IND'] = {
		location: 'Indianapolis',
		abbreviation: 'IND',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['JAX'] = {
		location: 'Jacksonville',
		abbreviation: 'JAX',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['KC'] = {
		location: 'Kansas City',
		abbreviation: 'KC',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LV'] = {
		location: 'Las Vegas',
		abbreviation: 'LV',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LAC'] = {
		location: 'Los Angeles',
		abbreviation: 'LAC',
		alternateName: 'LA Chargers',
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LAR'] = {
		location: 'Los Angeles',
		abbreviation: 'LAR',
		alternateName: 'LA Rams',
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['MIA'] = {
		location: 'Miami',
		abbreviation: 'MIA',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['MIN'] = {
		location: 'Minnesota',
		abbreviation: 'MIN',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NE'] = {
		location: 'New England',
		abbreviation: 'NE',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NO'] = {
		location: 'New Orleans',
		abbreviation: 'NO',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NYG'] = {
		location: 'New York',
		abbreviation: 'NYG',
		alternateName: "NY Giants",
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NYJ'] = {
		location: 'New York',
		abbreviation: 'NYJ',
		alternateName: 'NY Jets',
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['PHI'] = {
		location: 'Philadelphia',
		abbreviation: 'PHI',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['PIT'] = {
		location: 'Pittsburgh',
		abbreviation: 'PIT',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['SF'] = {
		location: 'San Francisco',
		abbreviation: 'SF',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['SEA'] = {
		location: 'Seattle',
		abbreviation: 'SEA',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['TB'] = {
		location: 'Tampa Bay',
		abbreviation: 'TB',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['TEN'] = {
		location: 'Tennessee',
		abbreviation: 'TEN',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['WSH'] = {
		location: 'Washington',
		abbreviation: 'WSH',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

    return teams
}

function getTeamsByDivision(conference, division, teamInfo) {
	const divisionTeams = []
	for (const team of Object.keys(teamInfo)) {
		if(teamInfo[team].conference === conference && teamInfo[team].division === division){
			divisionTeams.push(teamInfo[team])
	  }
	}
	return divisionTeams
}

function getDivisionStandings(divisionTeams){
	//returns array of divison teams sorted
	
	//sort by games 
  const sortedStandings = sortOnlyByRecord(divisionTeams)

	const wonLostTiedPercentage0 = getWonLostTiedPercentage(sortedStandings[0].overallRecord)
	const wonLostTiedPercentage1 = getWonLostTiedPercentage(sortedStandings[1].overallRecord)
	const wonLostTiedPercentage2 = getWonLostTiedPercentage(sortedStandings[2].overallRecord)
	const wonLostTiedPercentage3 = getWonLostTiedPercentage(sortedStandings[3].overallRecord)

	//Four Way Tie
	if(wonLostTiedPercentage0 === wonLostTiedPercentage1 &&
	   wonLostTiedPercentage0 === wonLostTiedPercentage2 && 
	   wonLostTiedPercentage0 === wonLostTiedPercentage3) {
	   	
	 }
	 //Three Way Tie
	 else if(wonLostTiedPercentage0 === wonLostTiedPercentage1 &&
			 wonLostTiedPercentage0 === wonLostTiedPercentage2) {
	 	
	 }
	 else if(wonLostTiedPercentage0 === wonLostTiedPercentage1 &&
			 wonLostTiedPercentage0 === wonLostTiedPercentage3) {
	 	
	 }
	 else if(wonLostTiedPercentage0 === wonLostTiedPercentage2 &&
			 wonLostTiedPercentage0 === wonLostTiedPercentage3) {
	 	
	 }
	 else if(wonLostTiedPercentage1 === wonLostTiedPercentage2 &&
			 wonLostTiedPercentage1 === wonLostTiedPercentage3) {
	 	
	 }
	 else {
	 	//sort completley
	 }
	//if four way tie remove odd one
	//if three way tie
	//if two way tie
	//const sortedStandings = 
	return sortedStandings
}

function sortOnlyByRecord(divsionTeams){
  const sorted = divsionTeams.sort(function (x, y) {
  	var diff = getWonLostTiedPercentage(y.overallRecord) - getWonLostTiedPercentage(x.overallRecord)
    return diff
  })
  return sorted
}

function getWonLostTiedPercentage(record){
	const totalGames = record[0] + record[1] + record[2]
	if(totalGames === 0){
		return 0
	}
	return (record[0] + (record[2] * 0.500)) / totalGames
}

function sortCompletely(divisionTeams){
	return divisionTeams
}