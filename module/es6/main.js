
// https://segmentfault.com/a/1190000017878394 深入 CommonJs 与 ES6 Module
// https://juejin.cn/post/6844904080955932680#heading-8 CommonJS 和 ES6 Module 究竟有什么区别？
// https://segmentfault.com/a/1190000015337690 前端模块化（一）nodeJS中的CommonJS规范
// 命名导入 main.js
// import { a, b, c } from './a.js'; 
// console.log(a,b,c)
// import { a as newA, b, c as newC } from './a.js'; 
// console.log(b, newA,newC)

//默认导入
// import defaultExport from './a.js';
// console.log(defaultExport)

// 混合导入 
// import defaultExport, { a, b, c as newC} from './a.js'; 
//defaultExport: [1, 2, 3]  a: 1  b: 2  newC: 3
// import defaultExport, * as name from 'module'; 
//defaultExport: [1, 2, 3]  name: { a: 1, b: 2, c: 3 }
// import * as name from 'module'; 
// name: { a: 1, b: 2, c: 3, default: [1, 2, 3] }

//副作用
// 执行module 不导出值  多次调用module.js只运行一次
// import './a.js'

//动态导入
// var promise = import('./a.js');
// console.log(promise)

// ES6 module特点
//1.import 会自动提升到代码的顶层
//2.export 和 import 只能出现在代码的顶层，下面这段语法是错误的
//3.import 的导入名不能为字符串或在判断语句，下面代码是错误的
// let name = 'Export'
// import 'default' + name from 'module'
//4. es6 module 中基本类型也按引用传递
// import { a, count } from './a.js'
// console.log(a) //1
// count()
// console.log(a) //2

//循环引用
// import { bar } from './b.js'
// console.log(bar)  //bar is not defined

//区别
// CommonJs导出的是变量的一份拷贝，ES6 Module导出的是变量的绑定（export default 是特殊的）
// CommonJs是单个值导出，ES6 Module可以导出多个
// CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层
// CommonJs的 this 是当前模块，ES6 Module的 this 是 undefined