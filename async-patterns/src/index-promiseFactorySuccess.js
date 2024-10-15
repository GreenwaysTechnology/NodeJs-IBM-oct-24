
function blockMe(message) {
    console.log(message)
}

function getValue() {
    return Promise.resolve(10)
}


function main() {
    blockMe('start')
    getValue().then(value => {
        console.log(value)
    })
    blockMe('end')
}
main()