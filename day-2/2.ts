export {};

const input = await Deno.readTextFile("./input.txt")
  .then((input) => input.split("\n"))
  .then((input) => input.map((line) => line.split(" ")));

const moves = {
  A: { X: 3, Y: 1, Z: 2 },
  B: { X: 1, Y: 2, Z: 3 },
  C: { X: 2, Y: 3, Z: 1 },
};

const scores = {
  X: 0,
  Y: 3,
  Z: 6,
};

let totalScore = 0;

input.forEach((line) => {
  // @ts-ignore - whatever
  totalScore += moves[line[0]][line[1]] + scores[line[1]];
});

console.log(totalScore);
