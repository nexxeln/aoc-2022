import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const day = format(new Date(), "dd");
console.log(day);

const dir = `day-${day}`;

const encoder = new TextEncoder();

await Deno.mkdir(dir);
await Deno.create(`./${dir}/input.txt`);
await Deno.create(`./${dir}/test.txt`);
await Deno.create(`./${dir}/1.py`);
await Deno.create(`./${dir}/2.py`);
