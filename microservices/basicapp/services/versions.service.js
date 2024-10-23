//start:
const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: "hello",
    version: 1,
    actions: {
        //here we write biz logic
        sayHello() {
            return 'Hello Old MicroService'
        }
    }
})
broker.createService({
    name: "hello",
    version: 2,
    actions: {
        //here we write biz logic
        sayHello() {
            return 'Hello New MicroService'
        }
    }
})


async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        broker.repl()

    }
    catch (err) {
        console.log(err)
    }
}
main()