
const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

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
                return ctx.call('multiplier.multiply', { a, b })
            }
        }
    }
})

//service 2
broker.createService({
    name: 'multiplier',
    actions: {
        multiply: {
            handler(ctx) {
                //biz logic
                const { a, b } = ctx.params
                return a * b
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