const http = require('node:http')

const server = http.createServer((request, response) => {
    const data = [{ id: 1, name: 'Subramanian' }, { id: 2, name: 'Ram' }]
    const jsonData = JSON.stringify(data)
    //set content type
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.write(jsonData)
    response.end()
})

//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
