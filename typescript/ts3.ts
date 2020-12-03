// 泛型
interface Person {
  name: string,
  age: number
}

const demo1: number[] = [1, 2, 3]
const demo2: string[] = ['a', 'b', 'c'];
const demo3: Person[] = [{ name: 'alex', age: 20 }, { name: 'john', age: 10 }, { name: 'hx', age: 21 }];

demo1.map((item) => item);
demo2.map((item) => item);
demo3.map((item) => item);

//在声明数组类型时，定义了一个泛型变量T。T作为泛型变量的含义为：我们在定义约束条件时，暂时还不知道数组的每一项数据类型到底是什么，因此我们只能放一个占位标识在这里，待具体使用时再来明确每一项的具体类型。
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
}
//重新定义一个新的泛型变量来表达这个新数组，即为U。

//描述返回结果
interface Result<T> {
  success: true,
  code: number,
  descript: string,
  result: T
}
// 结合Promise，当数据返回结果为number时
function fetchData(): Promise<Result<number>> {
  return http.get('/api/demo/number');
}

//当数据返回结果为普通JSON数据时
function fetchData(): Promise<Result<Person>> {
  return http.get('/api/demo/person');
}
//当数据返回为数组时
interface Person {
  name: string,
  age: number
}

function fetchData(): Promise<Result<Person[]>> {
  return http.get('/api/demo/persons');
}

// 当返回结果为分页对象时
interface Person {
  name: string,
  age: number
}

interface Page<T> {
  current: number,
  pageSize: number,
  total: number,
  data: T[]
}

function fetchData(): Promise<Result<Page<Person>>> {
  return http.get('/api/demo/page/person');
}