//start:
const { ServiceBroker } = require('moleculer')
//create service Broker instance
const broker = new ServiceBroker()

// broker.createService({
//     name: "math",
//     actions: {
//         add: {
//             //meta information
//             params: {
//                 a: "number",
//                 b: "number"
//             },
//             handler(ctx) {
//                 const { a, b } = ctx.params
//                 return a + b
//             }
//         }
//     }
// })


broker.createService({
    name: "math",
    actions: {
        add: {
            //meta information
            params: {
                a: { type: "number", positive: true, integer: true, default: 0 },
                b: { type: "number", positive: true, integer: true, default: 0 }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
        }
    }
})

async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        //invoke service methods
        // const result = await broker.call('math.add', { a: 10, b: 20 })
        // const result = await broker.call('math.add', { a: '10', b: 20 })
        // const result = await broker.call('math.add', { a: -10, b: 20 })
        // const result = await broker.call('math.add', { a: 10.8, b: 20 })
        const result = await broker.call('math.add')
        console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}
main()