class Dog {
  constructor(public name: string) {
    this.name = name
  }
  // name: string
  func() { }
  private sound: string
  protected pro() {
    console.log('pro')
  }
  readonly legs: number = 4
  static food: string = 'gutou'

}
// 无论是es还是ts中类成员的属性都是实例属性,不是原型属性. 类成员的方法都是原型方法
// ts中实例的属性,都要有初始值,或者在构造函数中初始化(可以通过public字段来声明)
// console.log(Dog.prototype)
let dog = new Dog('ww')
// console.log(Dog.prototype)
// console.log(dog)
// console.log(Dog.food)

//类的继承
class husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
    this.pro()
  }
  color: string
}
let h1 = new husky('xx', 'red')
// console.log(h1)
// console.log(husky.food)

//类的成员修饰符
// public 类的所有属性默认都是public
// private 只能在类的本身调用, 不能被实例,子类调用,也不能被继承
// protected 只能在类是子类中调用, 不能被实例调用
// readonly 不能被更改
// static 只能通过类名来调用, 可以被继承

//抽象类,只能被继承,不能被实例化的类
// 有益于代码复用
abstract class Animal {
  //实现具体的方法,这样子类就不用实现类
  eat() {
    console.log('eat ..')
  }
  //也可以不指定具体的方法实现, 也就是抽象方法, 
  abstract sleep(): void
}

class Dog2 extends Animal {
  constructor(public name: string) {
    super()
    this.name = name
  }
  sleep() {
    console.log('dog sleep')
  }
}
let dog2 = new Dog2('wangwang')
console.log(dog2)
dog2.sleep()
//多态 在父类中定义一个抽象方法,在子类中实现不同的方法. 根据不同的对象,执行不同的操作

class cat2 extends Animal {
  constructor(public name: string) {
    super()
  }
  sleep() {
    console.log('cat sleep')
  }
}
//this类型, 类的方法可以返回this, 可以很方便的链式调用
class WorkFlow {
  step1() {
    console.log('step1...')
    return this
  }
  step2() {
    console.log('step2...')
    return this
  }
}

let w = new WorkFlow()
// console.log(w.step1().step2())

class Work extends WorkFlow {
  next() {
    console.log('next')
    return this
  }
}

let work = new Work()
new Work().step1().next().step2().next().step1()