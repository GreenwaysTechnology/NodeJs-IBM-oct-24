const http = require('node:http')
const { save } = require('./services/user.service')

const server = http.createServer((request, response) => {
    //get input
    let data = ''
    request.on('data', (chunk) => {
        data += chunk
    })
    request.on('end', () => {
        //call save method
        save(JSON.parse(data))
        response.end('save')
    })
})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
