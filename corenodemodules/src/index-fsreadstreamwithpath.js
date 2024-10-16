const fs = require('node:fs')
const path = require('node:path')

function main() {
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    //create input stream 
    const inputstream = fs.createReadStream(filePath, options)

    //attach listener
    let data = ''
    inputstream.on('data', (chunk) => {
        data += chunk
    })
    inputstream.on('end', () => {
        console.log(data)
    })
    inputstream.on('close', () => {
        console.log('close event is called')
    })
    inputstream.on('error', (err) => {
        consoe.log(err)
        console.log('error event is called')
    })
}
main()