export {};

const input = await Deno.readTextFile("./input.txt");

for (let i = 4; i < input.length; ++i) {
  const s = input.substring(i - 4, i);
  if (new Set([...s]).size === s.length) {
    console.log(i);
    break;
  }
}
