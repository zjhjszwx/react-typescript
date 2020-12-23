type isBoolean = (arg: boolean) => Boolean;
type idNumber = (arg: number) => number;
type isString = (arg: string) => string;

const id: isBoolean = bool => {
  return bool;
};
// 需要 id1, id2..

console.log(id(true));

// 泛型就是对类型进行编程
// 1.泛型函数
function id2<T>(arg: T): T {
  return arg;
}
const id3 = <T>(arg: T): T => {
  return arg;
};

// 2.泛型接口
interface id<T> {
  id: T;
}
// 3.类泛型
// class MyComponent extends Component<Props, State> {
//   ...
// }

interface NameType {
  name: string;
}
// 集合操作
type NameType2 = NameType & { age: number };
// 泛型约束 extends
const id4 = <T extends NameType2>(arg: T): T => {
  console.log(arg.name);
  console.log(arg.age);

  return arg;
};
// https://juliangaramendy.dev/blog/when-ts-generics

// 集合类也是泛型
const a: Array<string> = ['1'];

// 类型推导
function id5<T>(arg: T): T {
  return arg;
}
id5<string>('lucifer'); // 这是ok的，也是最完整的写法
id5('lucifer'); // 基于类型推导，我们可以这样简写
