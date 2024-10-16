// const fs = require('node:fs')
const { readFile } = require('node:fs')


function getFile() {
    return new Promise((resolve, reject) => {
        const path = './src/assets/info.txt'
        const options = {
            encoding: 'utf-8'
        }
        readFile(path, options, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


// function main() {
//     getFile().then(data => console.log(data)).catch(err => console.log(err))
// }
async function main() {
    try {
        const data = await getFile()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}
main()