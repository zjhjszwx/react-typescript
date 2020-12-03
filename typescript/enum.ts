enum Direction {
  up = 1,
  down,
  left,
  right
}
// console.log(Direction.down); //2
enum Direction2 {
  down,
  left,
  right,
  up = "UP"
}
enum Direction3 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

console.log(Direction2.down); //0
console.log(Direction3.Up); // ?? 反向映射访问

