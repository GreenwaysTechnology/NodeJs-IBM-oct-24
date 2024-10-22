//start:
const { ServiceBroker } = require('moleculer')

//create service Broker instance
const broker = new ServiceBroker()

//create service: which represents biz logic
broker.createService({
    name: "hello",
    actions: {
        //here we write biz logic
        sayHello(ctx) {
            console.log(ctx.params)
            return `Hello ${ctx.params.name}`
        },
    }
})
broker.createService({
    name: "math",
    actions: {
        //here we write biz logic
        add(ctx) {
            const { a, b } = ctx.params
            const res = a + b 
            return `Result = ${res}`
        },
    }
})



async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        //invoke service methods
        const hello = await broker.call('hello.sayHello', { name: 'Subramanian' })
        console.log(hello)
        const result = await broker.call('math.add', { a: 10, b: 20 })
        console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}
main()