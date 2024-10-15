// const TodoService = require('./services/todo.service')
// console.log(TodoService)
// const todoService = require('./services/todo.service')
const { findAll } = require('./services/todo.service')

function main() {
    // let todoservice = new TodoService()
    // console.log(todoService.findAll())
    console.log(findAll())

}
main()