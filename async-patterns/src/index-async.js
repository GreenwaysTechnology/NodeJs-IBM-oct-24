
// function getValue() {
//     return 10
// }

// function getValue() {
//     return Promise.resolve(10)
// }

async function getValue() {
    return 10  // Promise.resolve(10)
}

function main() {
    const value = getValue()
    console.log(value)
    value.then(res => console.log(res))
}
main()