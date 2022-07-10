import { getUpdatedTeamInfo } from './TeamInfoHelpers.js'
import { getTeamsByDivision, getDivisionStandings } from './DivisionHelpers.js'
//getTeamsByDivision
//getDivisionStandings
//const https = require('https')
import https from 'https'

export const handler = async () => {

//exports.handler = async (event) => {
  //const teamInfo = getDefaultTeamInfo()
  const teamInfo = await getUpdatedTeamInfo('2021')

//const year = '2021'

	//Gets game info for all 18 weeks
  
		//end for loop
  //}
  
  // const nfcEastTeams = getTeamsByDivision('NFC', 'East', teamInfo)
  // const nfcEastTeamsSorted = getDivisionStandings(nfcEastTeams)
  
  // const nfcNorthTeams = getTeamsByDivision('NFC', 'North', teamInfo)
  // const nfcNorthTeamsSorted = getDivisionStandings(nfcNorthTeams)
  
  // const nfcSouthTeams = getTeamsByDivision('NFC', 'South', teamInfo)
  // const nfcSouthTeamsSorted = getDivisionStandings(nfcSouthTeams)
  
  // const nfcWestTeams = getTeamsByDivision('NFC', 'West', teamInfo)
  // const nfcWestTeamsSorted = getDivisionStandings(nfcWestTeams)
  
  // const afcEastTeams = getTeamsByDivision('AFC', 'East', teamInfo)
  // const afcEastTeamsSorted = getDivisionStandings(afcEastTeams)
  
  // const afcNorthTeams = getTeamsByDivision('AFC', 'North', teamInfo)
  // const afcNorthTeamsSorted = getDivisionStandings(afcNorthTeams)
  
  // const afcSouthTeams = getTeamsByDivision('AFC', 'South', teamInfo)
  // const afcSouthTeamsSorted = getDivisionStandings(afcSouthTeams)
  
  // const afcWestTeams = getTeamsByDivision('AFC', 'West', teamInfo)
  // const afcWestTeamsSorted = getDivisionStandings(afcWestTeams)
  
  // const allData = {
  //   version: "1.0",
  //   time: "",
  //   teamInfoToDate: teamInfo,

  //   nfcEastStandings: nfcEastTeamsSorted,
  //   nfcNorthStandings: nfcNorthTeamsSorted,
  //   nfcSouthStandings: nfcSouthTeamsSorted,
  //   nfcWestStandings: nfcWestTeamsSorted,

  //   nfcDivisionChamps: [],
  //   nfcWildCardTeams: [],

  //   afcEastStandings: afcEastTeamsSorted,
  //   afcNorthStandings: afcNorthTeamsSorted,
  //   afcSouthStandings: afcSouthTeamsSorted,
  //   afcWestStandings: afcWestTeamsSorted,

  //   afcDivisionChamps: [],
  //   afcWildCardTeams: [],
  // }
  
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify(allData),
  // }
  //  //return getWonLostTiedPercentage(allData.teamInfoToDate['GB'].overallRecord)
  // return response

	return JSON.stringify(teamInfo)
}