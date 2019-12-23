// 直接声明函数参数
function add2({ x, y }: { x: number; y: number }) {
  return x + y;
}
// 声明函数类型
type add = (x: number, y: number) => number;
// 必选参数不能在可选参数后面
function add1(x?: number, y: number) {
  return x + y;
}
// 函数重载
function add(x: string, y: string): string;
function add(x: number, y: number): number;
// function add(x: any, y: any): any;
function add(x: any, y: any): any {
  if (typeof x === "string") {
    return "string";
  } else if (typeof x === "number") {
    return x + y;
  }
}

add(1, 1);
