const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    serializer: "JSON"
})

const PRODUCTS = [{
    id: 1,
    name: 'A',
    price: 100,
    qty: 34

},
{
    id: 2,
    name: 'A1',
    price: 1002,
    qty: 342

}]
broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        get: {
            handler(ctx) {
                console.log(ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create(ctx) {
            console.log(ctx.params)
            return 'Product Created'
        },
        //update
        update(ctx) {
            return 'Product updated'
        },
        //delete
        remove(ctx) {
            return 'Product removed'
        }
    }
})
broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "GET products": "products.list",  //GET list is default method
                "GET products/:id": "products.get", //products/1 products/2 
                "POST products": "products.create",
                "PUT products/:id": "products.update",
                "DELETE products/:id": "products.remove"
            }
        }]
    }
})

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();