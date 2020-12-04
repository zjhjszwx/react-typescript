//语法
//(变量/函数):type


//number string
let name1: string = "xxx";
let number1: number = 11;
// 元组
let x: [number, string];
x = [10, "string"];
// 枚举
enum Color {
  Red,
  Green = 2,
  Blue
}
let c: Color = Color.Green;
// console.log(c);
//void
let unusable: void = null;

// 类型断言
let somevalue: any = "this a string";
// let strLen: number = (<string>somevalue).length
let strLen: number = (somevalue as string).length;

// 接口
interface LabelValue {
  label: string;
  size?: number;
}

function printLabel(obj: LabelValue): string {
  //   console.log(obj.label);
  return obj.label;
}
let myObj = { size1: 10, label: "label mam" };
printLabel(myObj);
//? 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性
interface Point {
  readonly x: number;
}
let p1: Point = {
  x: 20
};
// readonly和const的区别,如果作为变量使用就是const,如果作为属性就使用readonly

// 额外的属性检测
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color,
    area: config.width * config.width
  };
}
let colorObj = { width: 20, colur: "red" }; //这样调用不会报错,因为不会进行额外检测
let mySquare = createSquare({ width: 20, colur: "red" } as SquareConfig);
// console.log(mySquare);

// 函数类型的接口
interface Ifun {
  (xx: string): boolean;
}
let func: Ifun = function(s: string) {
  return true;
};

//可索引类型
interface StringArray {
  readonly [0]: number;
  [1]: string;
}

let myArray: StringArray;
myArray = [1, "bob"];
let myStr: number = myArray[0];
// console.log(myStr);
// 可索引类型有一个索引签名,描述了对象索引的类型,还有相应的索引返回值类型
interface StringObj {
  ["a"]: string;
  [xx: string]: any;
}
let myObj1: StringObj = { a: "11", name: "bob" };
// console.log(myObj1.name);

//类的接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
  //   new (h: number, n: number);
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(x: Date) {
    this.currentTime = x;
  }
  constructor(h: number, n: number) {}
}
let myClock = new Clock(10, 10);
myClock.setTime(new Date());
// console.log(myClock);
//接口描述类的公共部分.当类实现一个接口时,只对其实例部分进行类型检测,constructor存在于类的静态部分,所以不在检测的范围

//类继承接口,可以继承多个接口
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLen: number;
}
let squareObj = <Square>{};
squareObj.color = "red";
squareObj.sideLen = 1;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(s: number) {};
  counter.reset = function() {};
  counter.interval = 123;
  //   counter.r = 1; //Counter 上面没有属性r
  return counter;
}

//接口继承类
//接口会继承类的private和protected成员
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}
//SelectableControl继承了 Control, 所以这个接口类型只能被Control或者他的子类实现
// class Image implements SelectableControl {
//   select(){}
// }
