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