//start:
const { ServiceBroker } = require('moleculer')

//create service Broker instance
const broker = new ServiceBroker()

//create service: which represents biz logic
broker.createService({
    name: "hello",
    actions: {
        //here we write biz logic
        sayHello() {
            return 'Hello MicroService'
        },
    }
})
broker.createService({
    name: "hai",
    actions: {
        //here we write biz logic
        sayHai() {
            return 'Hai MicroService'
        },
    }
})


async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        //invoke service methods
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        console.log(hello, hai)

    }
    catch (err) {
        console.log(err)
    }
}
main()