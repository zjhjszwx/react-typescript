type Second = number; // 基本类型
let timeInSecond: number = 10;
let time: Second = 10;  // time的类型其实就是number类型
type userOjb = { name: string } // 对象
type getName = () => string  // 函数
type data = [number, string] // 元组
type numOrFun = Second | getName  // 联合类型

//和接口一样，用来描述对象或函数的类型
//https://juejin.cn/post/6876359681464336397
