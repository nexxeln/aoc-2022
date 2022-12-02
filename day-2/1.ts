export {};

const input = await Deno.readTextFile("./input.txt")
  .then((input) => input.split("\n"))
  .then((input) => input.map((line) => line.split(" ")));

const moves = {
  X: { value: 1, A: 3, B: 0, C: 6 },
  Y: { value: 2, A: 6, B: 3, C: 0 },
  Z: { value: 3, A: 0, B: 6, C: 3 },
};

let totalScore = 0;

input.forEach((line) => {
  // @ts-ignore - whatever
  totalScore += moves[line[1]].value + moves[line[1]][line[0]];
});

console.log(totalScore);
