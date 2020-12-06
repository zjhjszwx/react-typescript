// enum:一组具有名字的常量集合

// 数字枚举
enum Direction {
  up = 1,
  down,
  left,
  right
}
// console.log(Direction.down); //2
enum Direction2 {
  down,
  left,
  right,
  up = "UP"
}
//字符串枚举
enum Direction3 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

// console.log(Direction2.down); //0
// console.log(Direction2[0]); // 数字枚举可以 反向映射访问
// console.log(Direction2)

//异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

//枚举成员
// Direction3.Up = 'up2' 只读属性,无法修改
enum Char {
  //const
  a,
  b = Char.a,
  c = 1 + 3,
  //computed 在运行时才会被计算
  d = Math.random(),
  e = '123'.length,
  // f 在computed后面的属性必须要赋值
}

// 常量枚举 (当不需要变量, 而需要变量的值的时候,可以用常量枚举)
const enum Month {
  Jan,
  Feb
}

let month = [Month.Jan, Month.Feb]

//枚举类型
//在某些情况在枚举和枚举成员都可以作为单独的类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'a', b = 'b' }

let e: E = 3
let f: F = 3

let e1: E.a = 2
let e2: F.b
// e1 === e2 不同枚举成员之间不能比较
//同一枚举类型的不同成员属于不同类型，但都与number类型兼容，所以它们可以被赋值number，但不能比较（因为类型永远不同，没有比较的必要）
let e3: E.a = 1
e1 === e3 //可以比较

let g1: G = G.b
let g2: G.b = G.b //只能是自己

function initByRole(role) {
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
}

enum RoleTypes {
  a = 1,
  b,
  c,
  d,
  f,
}

function initByRoleTs(role: RoleTypes) {
  if (role === RoleTypes.a || role === RoleTypes.b) {
    // do sth
  } else if (role === RoleTypes.c || role === RoleTypes.d) {
    // do sth
  } else if (role === RoleTypes.f) {
    // do st
  } else {
    // do sth
  }
}
