export function getWonLostTiedPercentage(record){
	const totalGames = record[0] + record[1] + record[2]
	if(totalGames === 0) {
		return 0
	}
	return (record[0] + (record[2] * 0.500)) / totalGames
}

export function sortOnlyByRecord(teams){
  const sorted = teams.sort(function (x, y) {
    var diff = getWonLostTiedPercentage(y.overallRecord) - getWonLostTiedPercentage(x.overallRecord)
    return diff
  })

  return sorted
}

export function sortCompletely(divisionTeams){
	//TODO
	return divisionTeams
}

export function getHeadToHeadWonLostTiedPercentage(team, opposingTeams) {
	const headToHeadRecord = [0, 0, 0]

	for(let i = 1; i <= 18; i++){
		opposingTeams.forEach(opponent => {
			if(team.games[i] && team.games[i].opponent === opponent.abbreviation){
				if(team.games[i].result === 'win'){
					headToHeadRecord[0]++
				} else if(team.games[i].result === 'loss'){
					headToHeadRecord[1]++
				} else if(team.games[i].result === 'tie'){
					headToHeadRecord[2]++
				}
			}
		})	
	}

	return getWonLostTiedPercentage(headToHeadRecord)
}