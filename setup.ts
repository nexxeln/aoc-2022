import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const day = format(new Date(), "dd");
console.log(day);

const dir = `day-${day}`;

const encoder = new TextEncoder();
const data = encoder.encode("export {}");

await Deno.mkdir(dir);
await Deno.create(`./${dir}/input.txt`);
await Deno.writeFile(`./${dir}/1.ts`, data);
await Deno.writeFile(`./${dir}/2.ts`, data);
