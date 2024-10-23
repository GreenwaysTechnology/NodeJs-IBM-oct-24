const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })

const broker = new ServiceBroker({
    transporter:"nats://localhost:4222"
})
//service 1
broker.createService({
    name: 'math',
    actions: {
        multiply: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                //biz logic
                const { a, b } = ctx.params
                return ctx.call('calculator.multiply', { a, b })
            }
        }
    }
})

async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()

