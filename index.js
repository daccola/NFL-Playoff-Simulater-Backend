import { getUpdatedTeamInfo } from './TeamInfoHelpers.js'
import { getDivisionStandings } from './DivisionHelpers.js'

export const handler = async () => {
  const teamInfo = await getUpdatedTeamInfo('2021')

  const nfcEastTeamsSorted = getDivisionStandings('NFC', 'East', teamInfo)  
  const nfcNorthTeamsSorted = getDivisionStandings('NFC', 'North', teamInfo)
  const nfcSouthTeamsSorted = getDivisionStandings('NFC', 'South', teamInfo)  
  const nfcWestTeamsSorted = getDivisionStandings('NFC', 'West', teamInfo)
  
  const afcEastTeamsSorted = getDivisionStandings('AFC', 'East', teamInfo)  
  const afcNorthTeamsSorted = getDivisionStandings('AFC', 'North', teamInfo)  
  const afcSouthTeamsSorted = getDivisionStandings('AFC', 'South', teamInfo)  
  const afcWestTeamsSorted = getDivisionStandings('AFC', 'West', teamInfo)
  
  //TODO Update
  const nfcDivisionSeeds = [nfcEastTeamsSorted[0], nfcNorthTeamsSorted[0], nfcSouthTeamsSorted[0], nfcWestTeamsSorted[0]]
  const afcDivisionSeeds = [afcEastTeamsSorted[0], afcNorthTeamsSorted[0], afcSouthTeamsSorted[0], afcWestTeamsSorted[0]]


  //TODO Temp WildCard Teams
  const nfcWildCardSeeds = [nfcEastTeamsSorted[3], nfcNorthTeamsSorted[3], nfcSouthTeamsSorted[3]]
  const afcWildCardSeeds = [afcEastTeamsSorted[3], afcNorthTeamsSorted[3], afcSouthTeamsSorted[3]]

  const allData = {
    version: "1.0",
    time: "",
    teamInfoToDate: teamInfo,

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