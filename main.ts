// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the meme was made by the agent, posted on X
// from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and the entrant's play code in its text. This program reads
// POST.json (which names the post's address), validates it, and copies it to
// /output/POST.json, where the gate reads it. Nothing written here is judged.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate reads the post from X, so a bad POST.json would fail the whole
// entry silently. Validate it here and fail fast with a clear message.
const src = join(BOT_DIR, 'POST.json');
let post: unknown;
try {
  post = JSON.parse(readFileSync(src, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be parsed from ${src}: ${(err as Error).message}`);
  process.exit(1);
}
const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+$/.test(url)) {
  console.error(`POST.json must name an X post address, got: ${JSON.stringify(url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(src, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
