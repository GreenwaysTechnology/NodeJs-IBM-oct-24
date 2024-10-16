const http = require('node:http')
const { findAll } = require('./services/user.service')

// const server = http.createServer((request, response) => {
//     const data = findAll()
//     const jsonData = JSON.stringify(data)
//     //set content type
//     response.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     response.write(jsonData)
//     response.end()
// })
const server = http.createServer(async (request, response) => {
    try {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        const data = await findAll()
        const jsonData = JSON.stringify(data)
        response.end(jsonData)
    }
    catch (err) {
        response.writeHead(500, {
            'Content-Type': 'application/json'
        })
        response.end({ err: err })
    }
})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
