// 基本类型
let bool: boolean = true
let num: number = 123
let str: string = "123"

//Array
let arr1: number[] = [1, 2, 3]
let arr2: Array<Number | string> = [1, 2, 3, 'a']

// tuple 
// 元组越界无法访问
let tuple: [number, string] = [0, 'a']

//function
//返回值会自己推断出来
let add = (x: number, y: number) => x + y
//对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
//Symbol
let s1: Symbol = Symbol()
//undefined 和 null
let un: undefined = undefined
let nu: null = null

//void
//void 0 = undefined
let noReturn = () => { }

//any
let x
x = 1
x = true

//never never类型表示的是那些永不存在的值的类型。
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) { }
}
