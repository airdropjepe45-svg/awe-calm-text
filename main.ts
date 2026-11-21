// A short text written to relax the reader, for make.fun's
// "Make the AI judge feel awe" bounty (Node 22, standard library only).
// Writes one fixed text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `The river goes on under the stars,
too slow to argue with the banks.
The field is empty.
The sky is full.
Nothing here asks for anything.
The night is wider than the day was long.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');
