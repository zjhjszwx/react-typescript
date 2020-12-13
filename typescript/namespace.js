/* eslint-disable no-var */
let Shape;
(function (Shape) {
  let p1 = Math.PI;
  function square(x) {
    return x * x;
  }
  Shape.square = square;
})(Shape || (Shape = {}));
// 命名空间和模块不要混用
