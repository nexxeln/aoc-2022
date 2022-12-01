export {};

const input = await Deno.readTextFile("./input.txt");

const elves = input.split("\n\n").map((elf) => {
  return elf.split("\n").map((elf) => parseInt(elf));
});

let highest = 0;

for (let i = 0; i < elves.length; i++) {
  const total = elves[i].reduce((a, b) => a + b, 0);

  if (total > highest) {
    highest = total;
  }
}

console.log(highest);
