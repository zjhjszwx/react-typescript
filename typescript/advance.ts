// 交叉类型
interface IDog {
  run: () => void;
}
interface ICat {
  jump: () => void;
}
let pet: IDog & ICat = {
  run() {},
  jump() {}
};

// 联合类型
// 声明的类型可以是多个类型中的一个
let a2: number | string; // 限定类型
let b2: 'b1' | 'b2' | 'b3'; // 限定值
// 可区分的联合类型,本质上是联合类型和自变量类的一种类型保护方法

interface IPerson {
  name: string;
  age: number;
}
interface IMan {
  love: string;
  age: number;
}
let me: IPerson | IMan;
// me.age = 1;
// me.name = 'ss';//只能访问公共部分
// 如何访问非公共部分?
// 1.使用类型断言
// console.log((me as IPerson).name);
// console.log((me as IMan).love);
// 2.使用类型保护
function isIPerson(obj: IPerson | IMan): obj is IPerson {
  return (obj as IPerson).name !== undefined;
}

// 索引类型
// 索引类型查询操作符: keyof , 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合. 看着话有点绕, 直接看例子吧
interface Person {
  name: string;
  age: number;
}
let person1: keyof Person; // name | age

let obj = {
  a: 1,
  b: 2,
  c: 3
};

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}
interface Obj {
  a: number;
  b: string;
}
// let key: keyof Obj; // "a" | "b"
console.log(getValues(obj, ['a', 'b']));
// console.log(getValues(obj, ['c', 'd'])) //error

// 映射类型
// 把一个旧的类型变成一个新的类型
interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}

type ReadonlyObj = Readonly<Obj>;
let readonlyE: ReadonlyObj = {
  a: 1,
  b: 'str'
};
// readonlyE.a = 2
// 参数可选
type PartialObj = Partial<Obj>;
// 单独抽取
type PickObj = Pick<Obj, 'a'>;
type RecordObj = Record<'x' | 'y', Obj>;

// 条件类型
// T extends U ? X : Y
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'Function'
  : 'object';

type t1 = TypeName<number>; // 自变量number

// 分布式条件类型
// (A | B) extends U ? X : Y

type Diff<T, U> = T extends U ? never : T;

type t4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;

type t5 = Extract<'a' | 'b' | 'c', 'a' | 'e'>;

type t7 = ReturnType<() => string>;
