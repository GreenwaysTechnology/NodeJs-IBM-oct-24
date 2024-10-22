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
        }
    }
})



async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        //invoke service methods
        const response = await broker.call('hello.sayHello')
        console.log(response)
        
    }
    catch (err) {
        console.log(err)
    }
}
main()