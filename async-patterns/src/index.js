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


async function main() {
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(user,status,page)  
    }
    catch (err) {
        console.log(err)
    }
}
main()