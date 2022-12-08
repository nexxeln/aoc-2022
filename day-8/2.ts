export {};

const input = await Deno.readTextFile("./input.txt");
const grid = input
  .trimEnd()
  .split("\n")
  .map((line) => line.split("").map((n) => parseInt(n)));

// console.log(grid);

// let visible = 0;

let total = 0;
for (let x = 0; x < grid.length; x++) {
  for (let y = 0; y < grid[x].length; y++) {
    const hi = grid[x][y];

    let l = 0;
    for (let i = y - 1; i >= 0; i--) {
      l++;
      if (!(hi > grid[x][i])) break;
    }

    let r = 0;
    for (let i = y + 1; i < grid[x].length; i++) {
      r++;
      if (!(hi > grid[x][i])) break;
    }

    let t = 0;
    for (let i = x - 1; i >= 0; i--) {
      t++;
      if (!(hi > grid[i][y])) break;
    }

    let b = 0;
    for (let i = x + 1; i < grid.length; i++) {
      b++;
      if (!(hi > grid[i][y])) break;
    }

    total = Math.max(total, t * b * l * r);
  }
}

console.log(total);
