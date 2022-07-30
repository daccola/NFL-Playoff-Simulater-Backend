import { sortOnlyByRecord } from './GeneralHelpers.js'

export function getWildCardTeams (conference, divisionChamps, teamInfo) {
  const potentialWildCardTeams = removeInvalidTeams(conference, divisionChamps, teamInfo)
	const sortedWildCardTeams = sortOnlyByRecord(potentialWildCardTeams)

	return [sortedWildCardTeams[0], sortedWildCardTeams[1], sortedWildCardTeams[2]]
}

export function removeInvalidTeams(conference, divisionChamps, teamInfo) {
	let potentialWildCardTeams = Object.values(teamInfo).filter(teams => teams.conference === conference);
  divisionChamps.forEach((divisionChamp) => { 
    potentialWildCardTeams = potentialWildCardTeams.filter(teams => teams.abbreviation !== divisionChamp.abbreviation );
  })

	return potentialWildCardTeams
}
