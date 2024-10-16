const USERS = require('../mock-data/users')

class UserService {
    constructor() {

    }
    //sync api
    findAll() {
        return USERS;
    }
    //async api -  using Promises
    findAllAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS)
        })
    }
    save(user) {
        console.log(user)
    }
}
module.exports = new UserService()