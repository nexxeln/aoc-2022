export {};

const input = await Deno.readTextFile("./input.txt");

const elves = input.split("\n\n").map((elf) => {
  return elf.split("\n").map((elf) => parseInt(elf));
});

const elvesList: number[] = [];

for (let i = 0; i < elves.length; i++) {
  const total = elves[i].reduce((a, b) => a + b, 0);

  elvesList.push(total);
}

// find sum of top 3 in elvesList
const highest = elvesList
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);

console.log(highest);
