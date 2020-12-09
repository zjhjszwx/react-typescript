//一个一个 导出
module.exports.age = 1
module.exports.foo = function () { }
exports.a = 'hello'

//整体导出
module.exports = { age: 1, a: 'hello', foo: function () { }, obj: { xx: 11 } }

//整体导出不能用`exports` 用exports不能在导入的时候使用。是空对象 {}
// exports = { age: 1, a: 'hello', foo: function () { } }