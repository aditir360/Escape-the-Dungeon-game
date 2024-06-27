/*
@title: Escape the Dungeon
@author: Aditi Ranjan
*/

const player = "p";
const wall = "w";
const key = "k";
const door = "d";
const trap = "t";
const exit = "e";

setLegend(
  [player, bitmap`
................
.......HHH......
.....HHHHHHH....
.....HHHHHHH....
......00000.....
......0...0.00..
....0003.30.0...
....0.0...000...
...00.05550.....
.....00...0.....
.....0....0.....
.....0...00.....
.....00000......
......0.0.......
.....00.00......
................`],
  [wall, bitmap`
................
................
....666666......
...66666666.....
..6666666666....
.666666666666...
66666666666666..
66666666666666..
66666666666666..
66666666666666..
66666666666666..
66666666666666..
66666666666666..
66666666666666..
................
................`],
  [key, bitmap`
................
................
.......00.......
......0000......
......0330......
......0330......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
......0000......
.....000000.....
................
................`],
  [door, bitmap`
................
................
......4444......
......4444......
.....444444.....
.....444444.....
....44444444....
....44444444....
....44444444....
....44444444....
....44444444....
....44444444....
....44444444....
.....444444.....
................
................`],
  [trap, bitmap`
................
................
......333.......
.....33333......
....3333333.....
...333333333....
..33333333333...
..33333333333...
..33333333333...
..33333333333...
..33333333333...
...333333333....
....3333333.....
.....33333......
......333.......
................`],
  [exit, bitmap`
................
................
......0000......
....00000000....
...0000000000...
...0000000000...
...0000000000...
...0000000000...
...0000000000...
...0000000000...
...0000000000...
...0000000000...
...0000000000...
....00000000....
......0000......
................`]
);

setSolids([player, wall, door]);

let level = 0;
const levels = [
  map`
p.w.w.w.w.w.w.w.w.
..w...w.....w...w.
.......w.w.....w.w
..w.w...w...w.w..w
.w...w.....w.....w
..w.w.w.w...w.w..w
.w.....w.......w.w
..w.w.....w.....w.
.w...w.w...w.w....
..w...w.....w...w.
.w.w.w.w.w.w.w...e`,
];

setMap(levels[level]);

setPushables({
  [player]: []
});

onInput("w", () => {
  getFirst(player).y -= 1;
});
onInput("a", () => {
  getFirst(player).x -= 1;
});
onInput("s", () => {
  getFirst(player).y += 1;
});
onInput("d", () => {
  getFirst(player).x += 1;
});

afterInput(() => {
  let playerPosition = getFirst(player);
  let exitPosition = getFirst(exit);

  // Check for reaching the exit
  if (playerPosition.x === exitPosition.x && playerPosition.y === exitPosition.y) {
    addText("You Escaped!", { x: 8, y: 4, color: color`0` });
  }
});
