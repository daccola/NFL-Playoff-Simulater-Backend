import fs from 'fs'

import { handler } from '../index.js'

const returnedInformation = await handler ({}, {})

fs.writeFile("./Test/RunLocal.json", returnedInformation.body, function(err) {
    if(err) return console.log(err)
})

//Run in Node using "node .\Test\RunLocal.js"