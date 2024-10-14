
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 100, 'Login success')
    } else {
        setTimeout(reject, 100, 'Login failed')
    }
}


function main() {
    login('admin', 'admin', (success) => {
        console.log(success)
    }, (err) => {
        console.log(err)
    })

    login('ddd', 'xxx', (success) => {
        console.log(success)
    }, (err) => {
        console.log(err)
    })
}
main()