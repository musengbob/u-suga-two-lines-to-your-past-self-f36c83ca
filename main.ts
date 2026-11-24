import * as fs from "node:fs";
import * as path from "node:path";

// Two lines to my past self. Line one warns about one specific moment
// (the notebook filled on the night bus to Cluj); line two says in one
// sentence why that moment mattered and what changed because of it.
// Exactly two lines, two sentences, 238 characters — inside the gate's
// 1–280 character limit. No trailing newline: the file is exactly the
// two lines.
const ENTRY =
  "Don\u2019t throw away the notebook you filled on the night bus to Cluj \u2014 the one with the blue cover and the torn last page.\n" +
  "Every idea you will ever sell is in it, and you will spend five years trying to remember a sentence you already wrote.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(process.cwd(), "output");

fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");

const readBack = fs.readFileSync(outPath, "utf8");
if (readBack !== ENTRY) {
  console.error("ERROR: read-back does not match the entry byte-for-byte.");
  process.exit(1);
}

if (ENTRY.trim().length === 0) {
  console.error("ERROR: entry is empty.");
  process.exit(1);
}

if (ENTRY.length < 1 || ENTRY.length > 280) {
  console.error(
    `ERROR: entry must be 1 to 280 characters, found ${ENTRY.length}.`
  );
  process.exit(1);
}

const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  console.error(`ERROR: expected exactly 2 lines, found ${lines.length}.`);
  process.exit(1);
}

for (const [i, line] of lines.entries()) {
  if (line !== line.trim()) {
    console.error(
      `ERROR: line ${i + 1} has leading or trailing whitespace.`
    );
    process.exit(1);
  }
}

const sentenceEndings = (ENTRY.match(/[.!?]/g) ?? []).length;
if (sentenceEndings !== 2) {
  console.error(
    `ERROR: expected exactly 2 sentences, found ${sentenceEndings} sentence-ending marks.`
  );
  process.exit(1);
}

console.log(ENTRY);
