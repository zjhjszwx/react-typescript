/* eslint-disable @typescript-eslint/no-require-imports */
module.exports.a = 1
// eslint-disable-next-line no-var
var b = require('./b')
console.log(b)
module.exports.a = 2