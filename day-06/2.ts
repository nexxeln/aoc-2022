export {};

const input = await Deno.readTextFile("./input.txt");

for (let i = 14; i < input.length; ++i) {
  const s = input.substring(i - 14, i);
  if (new Set([...s]).size === s.length) {
    console.log(i);
    break;
  }
}
