function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    setTimeout(callback, 5000)
}

function main() {
    blockMe('start')
    delay(function () {
        console.log('hello')
    })
    blockMe('end')
}
main()