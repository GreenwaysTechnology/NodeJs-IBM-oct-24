const { ServiceBroker } = require('moleculer')

//create broker object
const broker = new ServiceBroker({
    logger: {
        type: "File",
        options: {
            // Logging level
            level: "info",
            // Folder path to save files. You can use {nodeID} & {namespace} variables.
            folder: "./logs",
            // Filename template. You can use {date}, {nodeID} & {namespace} variables.
            filename: "moleculer-{date}.log",
            // Line formatter. It can be "json", "short", "simple", "full", a `Function` or a template string like "{timestamp} {level} {nodeID}/{mod}: {msg}"
            formatter: "json",
            // Custom object printer. If not defined, it uses the `util.inspect` method.
            objectPrinter: null,
            // End of line. Default values comes from the OS settings.
            eol: "\n",
            // File appending interval in milliseconds.
            interval: 1 * 1000
        }

    }

})
//create service
broker.createService({
    name: 'hello',
    //biz logic 
    actions: {
        //methods
        sayHello() {
            //log
            //console.log("say Hello is called")
            this.logger.info("Say Hello is called")
            return "Hello"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
