// 类型断言
interface Foo {
  bar: number;
  bas: string;
}

const foo1 = {} as Foo;
foo1.bar = 123;
foo1.bas = 'hello';

let foo2: any;
let bar2 = '123';

// demo
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}
function getName(animal: Cat | Fish): boolean {
  console.log(animal.name);
  // console.log(animal.swim);
  console.log((animal as Fish).swim);

  return true;
}

//避免滥用

// 类型兼容
// 当一个类型Y可以被赋值给另一个类型x的时候, 可以说类型X兼容类型Y
// x是目标类型 y是源类型
let s: string = 'a';
s = null;

//接口兼容
interface X {
  a: number;
}
interface Y {
  a: any;
  b: any;
}
let x: X = { a: 1 };
let y: Y = { a: 1, b: 2 };
x = y;
// y = x //报错

//函数兼容
type Handle = (a: number, b: number) => void;
function hoc(handle: Handle) {
  return handle;
}
//函数兼容需要满足3个条件
//1.参数要少于函数接口
let handle1 = a => {};
hoc(handle1);

let a = (a: number, b: number) => {};
let b = (a?: number, b?: number) => {};
let c = (...args: number[]) => {};

a = b;
a = c;
// b = c //error
// b = a //error
c = a;
c = b;

//2.参数类型
let handle3 = (a: string) => {};
// hoc(handle3) //error

//3.返回类型需要相同或者是子类型

//enum类型兼容
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yellow
}
let fruit: Fruit.Apple = 3;
let color: number = Color.Red;
// let color2: Color.Red = Fruit.Apple //error

//类的兼容
// 静态类型和构造函数不参与比较
// 如果有private, 那只有父类和子类兼容

class A {
  constructor(a: number) {}
  id: number = 1;
  static b = 1;
  // private c
}
class B {
  constructor(a: number) {}
  id: number = 2;
  static b = 1;
}
let aa = new A(1);
let bb = new B(1);
aa = bb;
bb == aa;

//泛型兼容
// interface Empty<T> {
//   value: T
// }
// let obj1: Empty<number> = { value: 1}
// let obj2: Empty<string> = { value: 2}
// obj1 = obj2

//如果两个泛型函数定义相同, 而且还没有指定参数, 那也是兼容的
let log1 = <T>(x: T): T => {
  return x;
};
let log2 = <U>(x: U): U => {
  return x;
};

log1 = log2;

//结构之间兼容, 成员少的兼容成员多的
// 函数之间兼容, 参数多的兼容参数少的
