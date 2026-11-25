// six-words-to-a-payday — first purchase dies on arrival.
// The agent's first paycheck buys a living thing; the last word buries it.
// Telegraphic, article-dropped, winner-style: two beats, concrete object, death reframes the buy.
// 6 words, 37 chars, no trailing newline: the byte count itself is a weapon in this format.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const story = "First paycheck bought plant. It died.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, story, "utf8");
chmodSync(target, 0o644);
