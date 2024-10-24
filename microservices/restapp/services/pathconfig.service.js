const { ServiceBroker } = require('moleculer')
const ApiGateway = require('moleculer-web')

const broker = new ServiceBroker()

//service
broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello'
            }
        }
    }
})

//apiGateway
broker.createService({
    name: 'ApiGateway',
    mixins: [ApiGateway],
    //webserver settings/configuration
    settings: {
        routes: [{
            path: '/api'
        },
        {
            path: '/admin'
        }
        ]
    }
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