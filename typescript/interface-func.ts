//1.直接定义函数接口
interface Add {
  (x: number, y: number): number
}
//2.还有一种使用类型别名
type Add1 = (x: number, y: number) => number

// 3.使用变量的方式
// let add = (x: number, y: number) => x + y
let add1: Add = (x, y) => x + y

add1(1, 1)

// 混合类型的接口
// 既可以定义函数, 又还有属性和方法
interface Lib {
  (): void
  version: string
  func(): void
}

let lib: Lib = (() => { }) as Lib; //需要使用类型断言, 否则还是报错. ts在变量定义的时候就进行了检查
lib.version = '1';
lib.func = () => { };

//可选参数 可选参数必须要在后面
function add3(x: number, y?: number) {
  return x + y
}
add3(1, 1)


// 函数重载
// 先要定义函数声明, 然后在类型最宽泛的函数中实现该函数
function add4(x: string, y: string): string;
function add4(x: number, y: number): number;
// function add(x: any, y: any): any;
function add4(x: any, y: any): any {
  if (typeof x === "string") {
    return "string";
  } else if (typeof x === "number") {
    return x + y;
  }
}