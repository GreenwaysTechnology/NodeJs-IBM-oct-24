const fs = require('fs');
const path = require('path');

function main() {
    const fileName = path.join(__dirname, 'assets/courses.txt');
    const config = {
        encoding: 'utf8',
        flag: 'w'
    };
    const outputStream = fs.createWriteStream(fileName, config);
    const data = ['react', 'node', 'microservices', 'devops'];

    data.forEach((data)=>{
        outputStream.write(data + " ");
        console.log("Wrote: %s", data);
    })

    outputStream.close();

    outputStream.on('close', function () {
        console.log('file has been closed ')
    })
}
main()


