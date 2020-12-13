// ts的作用

import { reject, resolve } from 'promise';

// 1.约束变量的类型
let foo = 20;
foo = 123;

// 2.描述函数的规则
function add(a: number, b: number) {
  return a + b;
}
// 3.使用interface描述复杂数据
interface IParamA {
  id: number;
  name: string;
}

function fetchList(params: IParamA): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

fetchList({ id: 1, name: 'age' });

// 当然在实践中数据的复杂度远不止如此, 需要多的知识点来描述不同的参数类型.
// 如枚举类型
enum Direction {
  up = 1,
  down,
  left,
  right
}

type MoveType = 'liner' | 'ease' | 'bounce';
