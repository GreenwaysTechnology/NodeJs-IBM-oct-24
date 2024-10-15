const { getProducts, listProducts, findAll } = require('./services/product.service')

async function main() {
    //sync api call
    //   const products = getProducts()
    //   console.log(products)
    //ASYNC Call using callbacks
    // listProducts((products) => {
    //     console.log(products)
    // }, err => console.log(err))

    //async call using promise with then and catch
    //  findAll().then(products => console.log(products)).catch(err => console.log(err))

    //async call using promise with async await
    try {
        const products = await findAll()
        console.log(products)
    }
    catch (err) {
        console.log(err)
    }

}
main()