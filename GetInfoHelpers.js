import Axios from 'axios'

export function getDefaultTeamInfo() {
	const teams = {}
  
  teams['ARI'] = {
    location: 'Arizona',
		abbreviation: 'ARI',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/car.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lv.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/min.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyj.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png',
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
		url: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/wsh.png',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}
  
  return teams
}

export async function getUpdatedInfo(year) {
	const teamInfo = getDefaultTeamInfo()
	const gameInfo = []

	for (let i = 1; i <= 18; i++) {    
		await Axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${year}&seasontype=2&week=${i}`)
			.then((response) => {
				gameInfo[i] = []

				response.data.events.forEach((game) => {
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)

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
							
								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)

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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
							
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
								
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
								
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
							
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

								const newGame = {
									completed: game.competitions[0].status.type.completed,
									info: game.competitions[0].status.type.detail,
									state: game.competitions[0].status.type.state,
									tempState: "",
									homeTeam: game.competitions[0].competitors[0].team.abbreviation,
									homeScore: parseInt(game.competitions[0].competitors[0].score),
									homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
									roadTeam: game.competitions[0].competitors[1].team.abbreviation,
									roadScore: parseInt(game.competitions[0].competitors[1].score),
									roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
								}
								
								gameInfo[i].push(newGame)
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

						const newGame = {
							completed: game.competitions[0].status.type.completed,
							info: game.competitions[0].status.type.detail,
							state: game.competitions[0].status.type.state,
							tempState: "Default",
							homeTeam: game.competitions[0].competitors[0].team.abbreviation,
							homeScore: parseInt(game.competitions[0].competitors[0].score),
							homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
							roadTeam: game.competitions[0].competitors[1].team.abbreviation,
							roadScore: parseInt(game.competitions[0].competitors[1].score),
							roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
						}
						
						gameInfo[i].push(newGame)
					}
      	})
			})
			.catch((error) => {
				console.error('Failed to retrieve game information')
				console.error(error)
			})
  }

	const allInfo = {
		teamInfo: teamInfo,
		gameInfo: gameInfo
	}

	return allInfo
}