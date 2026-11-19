// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the meme was made by the agent, posted on X
// from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and the entrant's play code in its text. This program only copies
// POST.json (which names the post's address) from the repository root to
// /output/POST.json, where the gate reads it. Nothing written here is judged.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
