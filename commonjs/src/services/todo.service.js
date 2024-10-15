const TODOS = require("../mock-data/todos")

class TodoService {
    constructor() {

    }
    findAll() {
        // return [{ id: 1, status: true, text: 'learn node' }]
        return TODOS
    }
}
//we share only class
// module.exports = TodoService

//we share here object
module.exports = new TodoService()