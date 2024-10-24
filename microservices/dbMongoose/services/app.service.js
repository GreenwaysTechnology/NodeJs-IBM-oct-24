const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");
const ApiGateWayService = require('moleculer-web')

const broker = new ServiceBroker({
    logger: "Console",
    cacher: "Memory"
});
const DATABASE_URL = "mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0"

// Create a Mongoose service for `post` entities
broker.createService({
    name: "postsdb",
    mixins: [DbService],
    adapter: new MongooseAdapter(DATABASE_URL),
    model: mongoose.model("Post", mongoose.Schema({
        title: { type: String },
        content: { type: String },
        votes: { type: Number, default: 0 }
    }))
});
broker.createService({
    name: 'posts',
    actions: {
        //GET ALL 
        list: {
            rest: "GET /",
            async handler(ctx) {
                //return ctx.
                const posts = await ctx.call('postsdb.find')
                return posts
            }
        },

        //save
        create: {
            rest: "POST /",
            async handler(ctx) {
                const { title, content, votes } = ctx.params
                const res = await ctx.call("postsdb.create", {
                    title: title,
                    content: content,
                    votes: votes
                })
                console.log(res)
                return 'post Created'
            }
        },
        //start adding other options

    },
    afterConnected() {
        this.logger.info("Connected successfully");
    },

})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "REST posts": "posts"
            }
        }]
    }
})


async function init() {
    try {
        await broker.start();
        broker.repl()
    }
    catch (e) {
        log(e);
    }
}
init();


