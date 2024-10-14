function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    callback()
}

function main() {
    blockMe('start')
    delay(function () {
        console.log('hello')
    })
    blockMe('end')
}
main()