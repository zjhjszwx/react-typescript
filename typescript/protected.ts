enum Type { Strong, Week }
class Java {
  helloJava() {
    console.log('hello java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('hello javaScript')
  }
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  console.log(lang)
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } 
  // if ('java' in lang) {
  //   lang.helloJava()
  // } 
  // if(typeof x === 'string'){
  //   x.length
  // }
  if (isJava(lang)) {
    lang.helloJava()
  }

  return lang

}
getLanguage(Type.Strong, 'aa')

// 类型保护
// ts可以在特定的区块中保证变量属于某种确定的类型, 可以放心的调用属性或者方法

//4种方法
// 1.instanceof
// 2.in
// 3.typeof
// 4.创建一个类型保护的函数

function isJava(lang: JavaScript | Java): lang is Java { //is 操作符用于TS的类型谓词中
  return (lang as Java).helloJava !== undefined
}
