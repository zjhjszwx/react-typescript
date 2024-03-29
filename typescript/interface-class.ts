interface Human {
  name: string;
  eat: () => void;
  // new (name: string):void;
}

// 类实现接口的时候必须要实现所有的属性
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {
    console.log('eat');
  }
}

// 接口只能约束类的公有成员
// 接口不能约束类的构造函数

// 接口可以相互继承, 也可以一对多继承
interface Man extends Human {
  run: () => void;
}
interface Child {
  cry: () => void;
}

interface Boy extends Man, Child {}

let hoy: Boy = {
  run() {},
  cry() {},
  name: 'hh',
  eat() {}
};

// 接口也可以继承类,相当于继承类的结构
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }
// class Location {
// }
