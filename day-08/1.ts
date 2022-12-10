export {};

const input = await Deno.readTextFile("./input.txt");
const grid = input
  .trimEnd()
  .split("\n")
  .map((line) => line.split("").map((n) => parseInt(n)));

// console.log(grid);

// let visible = 0;

const visible = new Set();

for (let x = 0; x < grid.length; x++) {
  let h = -1;

  for (let y = 0; y < grid[x].length; y++) {
    if (grid[x][y] > h) {
      visible.add(`${y},${x}`);
      h = grid[x][y];
    }
  }

  h = -1;

  for (let y = grid[x].length - 1; y >= 0; y--) {
    if (grid[x][y] > h) {
      visible.add(`${y},${x}`);
      h = grid[x][y];
    }
  }
}

for (let y = 0; y < grid[0].length; y++) {
  let h = -1;
  for (let x = 0; x < grid.length; x++) {
    if (grid[x][y] > h) {
      visible.add(`${y},${x}`);
      h = grid[x][y];
    }
  }

  h = -1;
  for (let x = grid.length - 1; x >= 0; x--) {
    if (grid[x][y] > h) {
      visible.add(`${y},${x}`);
      h = grid[x][y];
    }
  }
}
console.log(visible.size);
