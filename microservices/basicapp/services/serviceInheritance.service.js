const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

//parent service
const hello = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello'
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'hai'
        }
    }
}

//child service
broker.createService({
    name: 'greeter',
    mixins: [hello, hai],
    actions: {
        sayGreet() {
            return 'greet'
        }
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();