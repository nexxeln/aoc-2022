export {};

const input = await Deno.readTextFile("./input.txt").then((input) =>
  input.split("\n")
);

let cont = 0;

input.map((line) => {
  const [left, right] = line.split(",");
  const [left1, left2] = left.split("-").map((n) => parseInt(n));
  const [right1, right2] = right.split("-").map((n) => parseInt(n));

  if (left1 >= right1 && left1 <= right2) {
    cont++;
  } else if (left1 <= right1 && right1 <= left2) {
    cont++;
  } else if (left2 >= right1 && left2 <= right2) {
    cont++;
  } else if (right2 >= left1 && right2 <= left2) {
    cont++;
  }
});

console.log(cont);
