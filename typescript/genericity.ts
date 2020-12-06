//让函数在运行的时候才确定变量的类型, 让函数拥有多个类型

// 泛型
function identity<T>(arg: T): T {
  return arg;
}
//两种调用方式
//1
let output = identity<string>("myString");
//2
let output1 = identity('sting2')
// let output = identity("myString") //自动推导
// 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。

// 泛型函数定义
type Identity = <T>(arg: T) => T
let identity4: Identity = (arg) => { return arg }

// 等价
// function loggingIdentity<a>(arg: a[]): a[] {
function loggingIdentity<a>(arg: Array<a>): Array<a> {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface GenericIdentity {
  <T>(arg: T): T;
}
function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity2: GenericIdentity = identity2;
// console.log(myIdentity2(1));

//接口的所有成员都可以受到泛型变量的约束, 在实现的时候必须指定一个类型或者指定一个默认类型
// 传入一个类型参数来指定泛型类型
interface GenericIdentity3<T = string> {
  (arg: T): T;
}
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity3: GenericIdentity3<number> = identity3;
// console.log(myIdentity2(1));
// 不再描述泛型函数, 而是把非泛型函数签名作为泛型类型的一部分.

// 泛型类(使用<>扩起泛型类型,跟在类名后面)
class GenericNumber<T> {
  value: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
//实例的方法将会受到泛型约束
myGenericNumber.add = function (x, y) {
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
