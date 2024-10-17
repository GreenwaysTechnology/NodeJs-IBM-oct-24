const _ = require('lodash')

function main() {
    console.log(_.VERSION)
    const res = _.partition([1, 2, 3, 4], n => n % 2);
    console.log(res)
}
main()