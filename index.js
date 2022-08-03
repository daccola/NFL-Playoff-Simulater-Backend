import { getUpdatedInfo } from './GetInfoHelpers.js'
import { getDivisionStandings } from './DivisionHelpers.js'
import { getWildCardTeams } from './WildCardHelpers.js'

import { getDivisionChampionsStandings } from './DivisionChampionsHelpers.js'


export const handler = async (event) => {
  const year = event.year

  const info = await getUpdatedInfo(year)
  const teamInfo = info.teamInfo
  const gameInfo = info.gameInfo

  const nfcEastTeamsSorted = getDivisionStandings('NFC', 'East', teamInfo)  
  const nfcNorthTeamsSorted = getDivisionStandings('NFC', 'North', teamInfo)
  const nfcSouthTeamsSorted = getDivisionStandings('NFC', 'South', teamInfo)  
  const nfcWestTeamsSorted = getDivisionStandings('NFC', 'West', teamInfo)
  
  const afcEastTeamsSorted = getDivisionStandings('AFC', 'East', teamInfo)  
  const afcNorthTeamsSorted = getDivisionStandings('AFC', 'North', teamInfo)  
  const afcSouthTeamsSorted = getDivisionStandings('AFC', 'South', teamInfo)  
  const afcWestTeamsSorted = getDivisionStandings('AFC', 'West', teamInfo)
  
  //TODO Update
  const nfcDivisionSeeds = getDivisionChampionsStandings([nfcEastTeamsSorted[0], nfcNorthTeamsSorted[0], nfcSouthTeamsSorted[0], nfcWestTeamsSorted[0]])
  const afcDivisionSeeds = getDivisionChampionsStandings([afcEastTeamsSorted[0], afcNorthTeamsSorted[0], afcSouthTeamsSorted[0], afcWestTeamsSorted[0]])

  //TODO Temp WildCard Teams
  const nfcWildCardSeeds = getWildCardTeams('NFC', nfcDivisionSeeds, teamInfo)
  const afcWildCardSeeds = getWildCardTeams('AFC', afcDivisionSeeds, teamInfo)

  const allData = {
    version: "1.0",
    time: "",

    teamInfoToDate: teamInfo,
    gameInfoToDate: gameInfo,

    nfcEastStandings: nfcEastTeamsSorted,
    nfcNorthStandings: nfcNorthTeamsSorted,
    nfcSouthStandings: nfcSouthTeamsSorted,
    nfcWestStandings: nfcWestTeamsSorted,

    nfcDivisionChamps: nfcDivisionSeeds,
    nfcWildCardTeams: nfcWildCardSeeds,

    afcEastStandings: afcEastTeamsSorted,
    afcNorthStandings: afcNorthTeamsSorted,
    afcSouthStandings: afcSouthTeamsSorted,
    afcWestStandings: afcWestTeamsSorted,

    afcDivisionChamps: afcDivisionSeeds,
    afcWildCardTeams: afcWildCardSeeds,
  }
  
  const response = {
    statusCode: 200,
    body: allData,
  }

  return response
}