import TodoService, { token } from "./services/todo.service.js"

function main() {
    let todoService = new TodoService()
    console.log(todoService.findAll())
    console.log(token)
}
main()