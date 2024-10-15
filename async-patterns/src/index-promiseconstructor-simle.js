
function getValue() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 10)
    })
}



function main() {
    getValue().then(value => console.log(value))
}
main()