const { ServiceBroker } = require('moleculer')
const ApiGateway = require('moleculer-web')

const broker = new ServiceBroker()

//apiGateway
broker.createService({
    name: 'ApiGateway',
    mixins: [ApiGateway]
})


async function main() {
    try {
        await broker.start()
        // broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()