import { sortOnlyByRecord } from './GeneralHelpers.js'

export function getDivisionChampionsStandings(teams) {
	const sortedDivisionChampions = sortOnlyByRecord(teams)

    return sortedDivisionChampions
}
