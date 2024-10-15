//code to be
//console.log('hello')
//exports is just variable its default value is empty literal object

//add new property on to the object which is pointed by exports variable
exports.message = 'Hello'
exports.name = 'subramanian'
exports.age = 18
exports.status = true
exports.address = {
    city: 'Coimbatore'
}
exports.skills = ['js', 'react']
exports.sayHello = function () {
    return 'hello'
}