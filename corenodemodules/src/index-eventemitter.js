const EventEmitter = require('node:events')

class Sales extends EventEmitter {
    constructor() {
        super()
        //register listener 
        this.on('sold', (evt) => {
            console.log(evt)
        })
    }
    //biz method
    sell(product) {
        //emit event
        this.emit('sold', product)
    }
}

function main() {
    let sales = new Sales()
    sales.sell({ id: 1, name: 'Iphone', price: 100000 })

}
main()