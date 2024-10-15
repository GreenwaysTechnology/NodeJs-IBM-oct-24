const PRODUCTS = require('../mock-data/products')

class ProductService {

    //sync apis
    getProducts() {
        return PRODUCTS
    }
    //async api - with callback
    listProducts(resolve, reject) {
        setTimeout(resolve, 1000, PRODUCTS)
    }
    //async api -with Promise
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, PRODUCTS)
        })
    }

}
module.exports = new ProductService()