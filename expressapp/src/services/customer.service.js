const CUSTOMERS = [{
    id: 1,
    name: 'Subramanian',
    location: 'Coimbatore'
}]

class CustomerService {
    constructor() { }

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, CUSTOMERS)
        })
    }
    save(customer) {
        console.log(customer)
        return Promise.resolve('saved')
    }

}

module.exports = new CustomerService()