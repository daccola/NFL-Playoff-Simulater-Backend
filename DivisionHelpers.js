import { sortOnlyByRecord, getWonLostTiedPercentage } from './GeneralHelpers.js'

export function getTeamsByDivision(conference, division, teamInfo) {
	const divisionTeams = []
	for (const team of Object.keys(teamInfo)) {
		if(teamInfo[team].conference === conference && teamInfo[team].division === division){
			divisionTeams.push(teamInfo[team])
	  }
	}
	return divisionTeams
}

export function getDivisionStandings(conference, division, teamInfo){
	//returns array of divison teams sorted
	
	const divisionTeams = getTeamsByDivision(conference, division, teamInfo)
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