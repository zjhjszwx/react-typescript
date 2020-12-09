// 命名导出
// let a = 1,b = 2
// export { a, b }
// export let c = 3

// 默认导出
// export default 1

// 混合导出 module.js
// let a = 1
// export { a }
// const b = 2
// export { b }
// export let c = 3
// export default [1, 2, 3]

console.log('remove2')

//4. es6 module 中基本类型也按引用传递
// export let a = 1
// export function count(){
//   a++
// }

import { foo } from './b.js'
console.log(foo);
export let bar = 'bar'