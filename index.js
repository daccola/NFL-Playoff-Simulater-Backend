
import getTeamInfo from './GetTeamInfo.js'

exports.handler = async (event) => {

  console.log(getTeamInfo())
  //const info = 
  const data = {
    version: "1.0",
    time: "",
    teamInfoToDate: [],

    nfcEastStandings: [],
    nfcNorthStandings: [],
    nfcSouthStandings: [],
    nfcWestStandings: [],

    nfcDivisionChamps: [],
    nfcWildCardTeams: [],

       
    afcEastStandings: [],
    afcNorthStandings: [],
    afcSouthStandings: [],
    afcWestStandings: [],

    afcDivisionChamps: [],
    afcWildCardTeams: [],
 
  }

  console.log('$$$$$$$$$')
  console.log(JSON.stringify(data))
  console.log('$$$$$$$$$')

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda and Github!"),
  }
  return response
}