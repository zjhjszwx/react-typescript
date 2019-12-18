// import { fn } from "test2";
// 类型推导 就是根据已经存在的条件，自动推导出来数据的数据类型是什么。因为有自动推导，我们可以在很多地方不用写数据类型声明。
// 类型兼容性 就是什么样的类型能够赋值给什么样的类型。
interface Named {
  name: string;
}

let x2: Named;
let y = { name: "alice", location: "seattle" };
x2 = y;

// let obj: test.Person;
