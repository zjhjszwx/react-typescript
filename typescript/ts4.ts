//类型保护
// 一个变量,可能是字符串, 也可能是数组
type P = string | string[]

function counter(per: P) {
  //判断类型之后,会有代码提升, 这种处理，就叫做类型保护。
  if (typeof (per) === 'string') {
    // per.bold
  } else {

  }
}

//索引类型 把类型的索引当成值
interface Person {
  name: string,
  age: number
}
// type Key = 'name' | 'age';
let key: keyof Person = 'name';
console.log(key)
