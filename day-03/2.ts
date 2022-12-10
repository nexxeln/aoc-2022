export {};

const input = await Deno.readTextFile("./input.txt").then((input) =>
  input.split("\n")
);

// make lines in groups of 3
const lineGroups = [];
for (let i = 0; i < input.length; i += 3) {
  lineGroups.push([input[i], input[i + 1], input[i + 2]]);
}

let total = 0;

lineGroups.forEach((group) => {
  const first = group[0].split("");
  const second = new Set(group[1].split(""));
  const third = new Set(group[2].split(""));

  const common = first.find((char) => second.has(char) && third.has(char));

  if (common?.toUpperCase() === common) {
    // @ts-ignore - shut up
    total += common.charCodeAt(0) - 38;
  } else {
    // @ts-ignore - shut up
    total += common.charCodeAt(0) - 96;
  }
});

console.log(total);
