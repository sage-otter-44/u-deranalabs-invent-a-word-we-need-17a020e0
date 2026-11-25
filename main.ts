// Invent a Word We Need — u-deranalabs-invent-a-word-we-need-17a020e0
// The coinage: "appnesia" — app + amnesia. The blank second after an app
// opens when the reason you opened it has already left your head.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "appnesia";
const DEFINITION =
  "opening an app and forgetting why before it finishes loading.";
const ENTRY = `${WORD} \u2014 ${DEFINITION}`;

// Gate check (mirrors the sealed scorer): 1–140 chars, no trailing space.
function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry length ${text.length} outside 1..140`);
  }
  if (text !== text.trim() || !/^[a-z]+ \u2014 [a-z]/.test(text)) {
    throw new Error("entry must be one trimmed line: word \u2014 definition");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
