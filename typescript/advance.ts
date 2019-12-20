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
  return ajax({
    url,
    method: "post",
    body: parms
  });
}
fetchApi("GetList", { id: 2 });
fetchApi("GetList", { id: "33" }); // 报错, id 应该是 number 类型

// 索引类型
// 索引类型查询操作符: keyof , 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合. 看着话有点绕, 直接看例子吧
interface Person {
  name: string;
  age: number;
}
let person1: keyof Person; // name | age
