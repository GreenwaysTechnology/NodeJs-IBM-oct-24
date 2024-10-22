//start:
const { ServiceBroker } = require('moleculer')

//create service Broker instance
const broker = new ServiceBroker()

//create service: which represents biz logic
broker.createService({
    name: "greet",
    actions: {
        //here we write biz logic
        sayHello() {
            return 'Hello MicroService'
        },
        sayHai() {
            return 'Hai MicroService'
        },
        sayGreet() {
            return 'Greet Microservice'
        }
    }
})



async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        //invoke service methods
        const hello = await broker.call('greet.sayHello')
        const hai = await broker.call('greet.sayHai')
        const greet = await broker.call('greet.sayGreet')
        console.log(hello, hai, greet)

    }
    catch (err) {
        console.log(err)
    }
}
main()