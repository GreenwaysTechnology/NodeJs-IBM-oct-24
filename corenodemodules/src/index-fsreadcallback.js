// const fs = require('node:fs')
const { readFile } = require('node:fs')

function main() {
    const path = './src/assets/info.txt'
    const options = {
        encoding: 'utf-8'
    }
    console.log('start')
    readFile(path, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
    console.log('end')
}
main()