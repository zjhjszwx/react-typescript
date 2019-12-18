// 泛型
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
// let output = identity("myString") //自动推导

// 等价
// function loggingIdentity<a>(arg: a[]): a[] {
function loggingIdentity<a>(arg: Array<a>): Array<a> {
  console.log(arg.length);
  return arg;
}
// 泛型函数loggingIdentity 类型参数a 参数arg
// loggingIdentity([1, 2]);

//泛型类型
let myIdentity: <T>(arg: T) => T = identity;
// let myIdentity: {<T>(arg: T):T} = identity;
// console.log(myIdentity(1));

// 泛型接口
interface GenericIdentity {
  <T>(arg11: T): T;
}
function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity2: GenericIdentity = identity2;
// console.log(myIdentity2(1));

// 传入一个类型参数来指定泛型类型
interface GenericIdentity3<T> {
  (arg: T): T;
}
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity3: GenericIdentity3<number> = identity3;
// console.log(myIdentity2(1));
// 不再描述泛型函数, 而是吧非泛型函数签名作为泛型类型的一部分.

// 泛型类(使用<>扩起泛型类型,跟在类名后面)
class GenericNumber<T> {
  value: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.add = function(x, y) {
  return x + y;
};
myGenericNumber.add(1, 2);
myGenericNumber.value = 2;
//??? 泛型类指的是类的实例部分,所以类的静态属性不能使用这个泛型

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  //   console.log("loggingIdentity2", arg.length);
  return arg;
}
loggingIdentity2([1, 2]);

// 在泛型约束中使用类型参数

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x1 = { a: 1, b: 2 };
getProperty(x1, "a");
