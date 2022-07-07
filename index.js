const https = require('https')

exports.handler = async (event) => {
  const info = getDefaultTeamInfo()

	//Gets game info for all 18 weeks
  for (let i = 1; i <= 18; i++) {
    let dataString = ''
    const url=`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2021&seasontype=2&week=${i}`
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
        const homeConference = info[homeTeam].conference
        const roadConference = info[roadTeam].conference
        const homeDivision = info[homeTeam].division 
        const roadDivision = info[roadTeam].division 

				// Complete Game
				if(game.competitions[0].status.type.completed) {
				  
					// Same Division
					if(homeConference === roadConference && homeDivision === roadDivision) {
					  
						// Tie
						if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
							info[homeTeam].overallRecord[2] += 1
							info[roadTeam].overallRecord[2] += 1

							info[homeTeam].conferenceRecord[2] += 1
							info[roadTeam].conferenceRecord[2] += 1

							info[homeTeam].divisionRecord[2] += 1
							info[roadTeam].divisionRecord[2] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
								
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							info[homeTeam].overallRecord[0] += 1
							info[roadTeam].overallRecord[1] += 1

							info[homeTeam].conferenceRecord[0] += 1
							info[roadTeam].conferenceRecord[1] += 1

							info[homeTeam].divisionRecord[0] += 1
							info[roadTeam].divisionRecord[1] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							info[homeTeam].overallRecord[1] += 1
							info[roadTeam].overallRecord[0] += 1

							info[homeTeam].conferenceRecord[1] += 1
							info[roadTeam].conferenceRecord[0] += 1

							info[homeTeam].divisionRecord[1] += 1
							info[roadTeam].divisionRecord[0] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
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
							info[homeTeam].overallRecord[2] += 1
							info[roadTeam].overallRecord[2] += 1

							info[homeTeam].conferenceRecord[2] += 1
							info[roadTeam].conferenceRecord[2] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							info[homeTeam].overallRecord[0] += 1
							info[roadTeam].overallRecord[1] += 1

							info[homeTeam].conferenceRecord[0] += 1
							info[roadTeam].conferenceRecord[1] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							info[homeTeam].overallRecord[1] += 1
							info[roadTeam].overallRecord[0] += 1

							info[homeTeam].conferenceRecord[1] += 1
							info[roadTeam].conferenceRecord[0] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
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
							info[homeTeam].overallRecord[2] += 1
							info[roadTeam].overallRecord[2] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "tie",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Home Win
						} else if (game.competitions[0].competitors[0].winner){
							info[homeTeam].overallRecord[0] += 1
							info[roadTeam].overallRecord[1] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "win",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[1].score),
								opponent: homeTeam,
								oppScore: parseInt(game.competitions[0].competitors[0].score),
							}
							
						// Road Win
						} else if (game.competitions[0].competitors[1].winner){					
							info[homeTeam].overallRecord[1] += 1
							info[roadTeam].overallRecord[0] += 1

							info[homeTeam].games[i] = {
								isCompleted: true,
								result: "loss",
								score: parseInt(game.competitions[0].competitors[0].score),
								opponent: roadTeam,
								oppScore: parseInt(game.competitions[0].competitors[1].score),
							}

							info[roadTeam].games[i] = {
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
					info[homeTeam].games[i] = {
						isCompleted: false,
						result: "",
						score: 0,
						opponent: roadTeam,
						oppScore: 0,
					}

					info[roadTeam].games[i] = {
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
  
  const allData = {
    version: "1.0",
    time: "",
    teamInfoToDate: info,

    nfcEastStandings: [],
    nfcNorthStandings: [],
    nfcSouthStandings: [],
    nfcWestStandings: [],

    nfcDivisionChamps: [],
    nfcWildCardTeams: [],

    afcEastStandings: [],
    afcNorthStandings: [],
    afcSouthStandings: [],
    afcWestStandings: [],

    afcDivisionChamps: [],
    afcWildCardTeams: [],
  }
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(allData),
  }
   
  return response
}

function getDefaultTeamInfo() {
  const teams = {}

	teams['ARI'] = {
		location: 'Arizona',
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
