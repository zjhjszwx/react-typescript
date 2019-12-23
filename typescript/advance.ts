interface IApiSourceParams {
  GetList: IGetList;
}
interface IGetList {
  id: Number;
}

function fetchApi<T extends keyof IApiSourceParams>(
  url: T,
  parms: IApiSourceParams[T]
) {
  return {
    url,
    method: "post",
    body: parms
  };
}
fetchApi("GetList", { id: 2 });
// fetchApi("GetList", { id: "33" }); // 报错, id 应该是 number 类型

// 索引类型
// 索引类型查询操作符: keyof , 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合. 看着话有点绕, 直接看例子吧
interface Person {
  name: string;
  age: number;
}
let person1: keyof Person; // name | age

// 联合类型
interface IPerson {
  name: string;
  age: number;
}
interface IMan {
  love: string;
  age: number;
}
let me: IPerson | IMan;
me.age = 1;
// me.name = 'ss';//只能访问公共部分

// 如何访问非公共部分?
//1.使用类型断言
console.log((me as IPerson).name);
console.log((me as IMan).love);
//2.使用类型保护
function isIPerson(obj: IPerson | IMan): obj is IPerson {
  return (obj as IPerson).name !== undefined;
}
