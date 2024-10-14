function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    setTimeout(callback, 5000, 'hello')
}

function main() {
    blockMe('start')
    delay(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()