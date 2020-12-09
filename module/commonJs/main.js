// let demo = require("./demo/demo");
// console.log(demo)
// demo.obj.xx = 33
// console.log(demo)
// let demo2 = require("./demo/demo");
// console.log(demo2)

// let demo1 = require("./demo1");  //Cannot find module './demo1'

// CommonJS定义的模块分为:

// CommonJS定义的模块分为:
/**
 模块引用(require)
 模块定义(exports)
 模块标识(module)
 */

//  NodeJs模块
/**
 * 核心模块
 * 第三方模块
 * 文件模块
 * 文件夹模块
 */

// console.log(module)
/* Module {
  id: '.', //模块的识别符，通常是带有绝对路径的模块文件名。
  path: 'F:\\zw\\project\\react-typescript\\module\\commonJs',
  exports: {}, //表示模块对外输出的值。
  parent: null, //返回一个对象，表示调用该模块的模块。
  filename: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\main.js', //模块的文件名，带有绝对路径。
  loaded: false, //返回一个布尔值，表示模块是否已经完成加载。
  children: [ // 返回一个数组，表示该模块要用到的其他模块。
    Module {
      id: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo\\demo.js',
      path: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo',
      exports: {},
      parent: [Circular],
      filename: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo\\demo.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [...]
} */

var str = "I'm child";
exports.str = str;
// console.log(module);
/* Module {
  id: '.',
  path: 'F:\\zw\\project\\react-typescript\\module\\commonJs',
  exports: { str: "I'm child" },
  parent: null,
  filename: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\main.js',
  loaded: false,
  children: [
    Module {
      id: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo\\demo.js',
      path: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo',
      exports: {},
      parent: [Circular],
      filename: 'F:\\zw\\project\\react-typescript\\module\\commonJs\\demo\\demo.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [...]
} */
//parent: null, 这证明当前这个模块是一个入口脚本。

// exports 和 module.exports 
// module.exports 属性表示当前模块对外输出的接口。 其他文件加载该模块，其实就是读取module.exports变量
// 实际上是nodeJS为了方便，为每个模块提供一个exports变量，指向module.exports
//所有exports也不能被赋值
//模块导出就是return这个变量的其实跟a = b赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址


// require 读取并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有指定模块，会报错
/**
require(): 加载外部模块
require.resolve()：将模块名解析到一个绝对路径
require.main：指向主模块
require.cache：指向所有缓存的模块
require.extensions：根据文件的后缀名，调用不同的执行函数
var foo = require('foo');
//  等同于
var foo = require('foo.js');
而这种方式的引入（不是绝对路径，且不是相对路径），将会以如下规则进行搜索加载；
/usr/local/lib/node/foo.js
/home/user/projects/node_modules/foo.js
/home/user/node_modules/foo.js
/home/node_modules/foo.js
/node_modules/foo.js

//相对路径开头，且不指定后缀名
var foo = require('./foo');
先去寻找同级目录同级目录：src/app/

src/app/moduleA 无后缀名文件 按照javascript解析
src/app/moduleA.js js文件 按照javascript解析
src/app/moduleA.json json文件 按照json解析
src/app/moduleA.node node文件 按照加载的编译插件模块dlopen
同级目录没有 moduleA 文件会去找同级的 moduleA目录：src/app/moduleA

src/app/moduleA/package.json 判断该目录是否有package.json文件， 如果有 找到main字段定义的文件返回， 如果 main 字段指向文件不存在 或 main字段不存在 或 package.json文件不存在向下执行
src/app/moduleA/index.js
src/app/moduleA/index.json
src/app/moduleA/index.node

/module/moduleA 绝对路径开头 ??

 */
// 循环引用
var a = require('./a')
console.log(a)
// 模块只执行一次 之后调用获取的 module.exports 都是缓存哪怕这个 js 还没执行完毕（因为先加入缓存后执行模块）
