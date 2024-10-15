const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        //failure
        //user = null 
        if (user) {
            setTimeout(resolve, 100, user)
        } else {
            setTimeout(reject, 100, 'User Not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 100, 'login success')
        } else {
            setTimeout(reject, 100, 'login is failed')
        }
    })

}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 100, 'welcome to admin')
        } else {
            setTimeout(reject, 100, 'welcome to guest')
        }
    })
}


function main() {
    // getUser((user) => {
    //     login(user, (status) => {
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, (err) => {
    //         console.log(err)
    //     })
    // }, (err) => {
    //     console.log(err)
    // })


    //with promise chaining
    // getUser()
    //     .then(user => {
    //         login(user).then(status => {
    //             showDashboard(status).then(page => {
    //                 console.log(page)
    //             }).catch(err => console.log(err))
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     })
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))

    const { log } = console
    getUser()
        .then(login)
        .then(showDashboard)
        .then(log)
        .catch(log)

}
main()