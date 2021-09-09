// 接口用来约束对象, 函数, 以及类的结构和类型
interface List {
  id: number;
  value: number;
  age?: number;
}
interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach(i => {
    console.log(i.id, i.value);
    if (i.age) {
      console.log(i.age);
    }
  });
}
let result = {
  data: [{ id: 1, value: 11, sex: 'male' }]
};
// render(result);

// render({
//   data: [{ id: 1, value: 11, sex: 'male' }] //如果直接传入对象自变量, ts会对额外的字段进行检查
// })

// 有三种方法可以解决
// 1.定义一个变量
// 2.类型断言

render({
  data: [{ id: 1, value: 11, sex: 'male' }]
} as unknown as Result); //只有一条数据报错

// render(<Result>{
//   data: [
//     { id: 1, value: 11, sex: 'male' },
//     { id: 1, value: 22 }
//   ]
// });

// 3.类型索引签名
interface List {
  id: number;
  value: number;
  [x: string]: any;
}

// 如果不确定接口的数据可以用 索引接口
// 数字索引
interface StringArray {
  [x: number]: string;
}
let charts: StringArray = ['a', 'b'];
//字符串索引
interface Names {
  [x: string]: string;
  // [y: number]: number //数字索引的属性对应值的类型必须是字符串索引签名的子集
}
let name1: Names = { name: 'a' };
