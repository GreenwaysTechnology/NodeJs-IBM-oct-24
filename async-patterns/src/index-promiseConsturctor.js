
function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}



function main() {
    login('admin','admin')
        .then(status => console.log(status))
        .catch(err => {
            console.log(err)
        })
}
main()