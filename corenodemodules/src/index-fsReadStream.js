const fs = require('node:fs')

function main() {
    const filePath = './src/assets/info.txt'
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