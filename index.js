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
  
  const allData = {
    version: "1.0",
    time: "",
    teamInfoToDate: teamInfo,

    nfcEastStandings: nfcEastTeamsSorted,
    nfcNorthStandings: nfcNorthTeamsSorted,
    nfcSouthStandings: nfcSouthTeamsSorted,
    nfcWestStandings: nfcWestTeamsSorted,

    nfcDivisionChamps: [],
    nfcWildCardTeams: [],

    afcEastStandings: afcEastTeamsSorted,
    afcNorthStandings: afcNorthTeamsSorted,
    afcSouthStandings: afcSouthTeamsSorted,
    afcWestStandings: afcWestTeamsSorted,

    afcDivisionChamps: [],
    afcWildCardTeams: [],
  }
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(allData),
  }

  return response
}