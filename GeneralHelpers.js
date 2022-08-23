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
    if(diff === 0) {
			if(getWonLostTiedPercentage(x.overallRecord) === 1 && getWonLostTiedPercentage(y.overallRecord) === 1) {
				diff = y.overallRecord[0] - x.overallRecord[0]
			} else if(getWonLostTiedPercentage(x.overallRecord) === 0 && getWonLostTiedPercentage(y.overallRecord) === 0) {
				diff = x.overallRecord[1] - y.overallRecord[1]
			} else if(x.overallRecord[0] === 0 && x.overallRecord[1] === 0 && y.overallRecord[0] === 0 && y.overallRecord[1] === 0) {
				diff = y.overallRecord[2] - x.overallRecord[2]
			}
		}
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