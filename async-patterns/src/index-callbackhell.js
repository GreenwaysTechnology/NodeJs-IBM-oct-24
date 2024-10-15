//nested callback or async composition.
//the out put of one callback would be input to another callback.

//getUser ---> login ----> showDashboard

const getUser = (resolve, reject) => {
    console.log('getUser is called')
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
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 100, 'login success')
    } else {
        setTimeout(reject, 100, 'login is failed')
    }

}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 100, 'welcome to admin')
    } else {
        setTimeout(reject, 100, 'welcome to guest')
    }
}


function main() {
    getUser((user) => {
        login(user, (status) => {
            showDashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()