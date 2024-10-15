async function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return 'login success'
    } else {
        return Promise.reject('login is failed')
    }
}

async function main() {
    try {
        const status = await login('admin','admin')
        console.log(status)
    }
    catch (err) {
        console.log(err)
    }
}
main()