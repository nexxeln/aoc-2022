export {};

const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n\n");

const stackCount = parseInt(lines[0].split("\n").reverse()[0].at(-2)!);
const crates = lines[0].split("\n").reverse().slice(1);
const instructions = lines[1].split("\n").map((x) => x.split(" ").map(Number));

const stacks: string[][] = [];

let result = "";

for (let i = 1; i <= stackCount; i++) stacks[i] = [];

crates.forEach((c) => {
  let pos = 0;

  for (let i = 1; i <= stackCount; i++) {
    pos = i == 1 ? pos + 1 : pos + 3;
    if (c.charAt(pos) != " ") stacks[i].push(c.charAt(pos));
    pos++;
  }
});

instructions.forEach((i) => {
  const amount = i[1];
  const from = i[3];
  const to = i[5];
  const b = [];

  for (let x = 0; x < amount; x++) b.push(stacks[from].pop()!);
  b.reverse().forEach((x) => stacks[to].push(x));
});

for (let i = 1; i <= stackCount; i++)
  if (stacks[i].length > 0) result += stacks[i].at(-1);

console.log(result);
