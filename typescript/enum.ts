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
console.log(Direction2.down); //0
