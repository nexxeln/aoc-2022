export {};

const input = await Deno.readTextFile("./input.txt").then((input) =>
  input.split("\n")
);

console.log(
  input
    .map((pair) => pair.split(","))
    .map((pair) => pair.map((range) => range.split("-")))
    .map((pair) => pair.map((range) => [+range[0], +range[1]]))
    .map((pair) =>
      pair.map((range) => [Math.min(...range), Math.max(...range)])
    )
    .map((pair) => pair[0][0] <= pair[1][1] && pair[0][1] >= pair[1][0])
    .filter(Boolean).length
);
