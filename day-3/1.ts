export {};

const input = await Deno.readTextFile("./input.txt").then((input) =>
  input.split("\n")
);

let total = 0;

input.map((line) => {
  const first = line.slice(0, line.length / 2).split("");
  const second = line.slice(line.length / 2).split("");

  const secondSet = new Set(second);

  const common = first.find((char) => secondSet.has(char));

  if (common?.toUpperCase() === common) {
    // @ts-ignore - shut up
    total += common.charCodeAt(0) - 38;
  } else {
    // @ts-ignore - shut up
    total += common.charCodeAt(0) - 96;
  }
});

console.log(total);
