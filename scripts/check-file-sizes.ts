#!/usr/bin/env tsx
/**
 * check-file-sizes.ts
 *
 * Fails when a tracked file is larger than MAX_BYTES.
 *
 * Why this exists: `packages/react/public` and `.storybook/static` are Storybook
 * `staticDirs` entries, so every Storybook build copies them wholesale. A single
 * 45MB sample video (`Big_Buck_Bunny_alt.webm`, since re-encoded) was costing
 * 33–71s of copy time in *every* build — on all 8 Storybook Tests shards, plus
 * Chromatic and the deploy. Large files are also paid on every clone and every
 * CI checkout, forever, because git history keeps them even after deletion.
 *
 * Usage:
 *   tsx scripts/check-file-sizes.ts            # all tracked files (CI)
 *   tsx scripts/check-file-sizes.ts --staged   # staged files only (pre-commit)
 */
import { execFileSync } from "node:child_process"
import { statSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")

/**
 * The ceiling. Set just above the largest asset the repo legitimately carries
 * (the `.storybook/static` landscape JPEGs, ~2.5MB) so it catches a new order of
 * magnitude rather than relitigating what is already here.
 */
const MAX_BYTES = 3 * 1024 * 1024

/**
 * Deliberate exceptions: path → reason. Keep this empty if you can. Adding an
 * entry means every clone and every CI checkout of this repo pays for that file
 * from now on, so it needs a reason better than "the asset I had was big".
 *
 * Generated text files that grow monotonically (pnpm-lock.yaml, CHANGELOGs) are
 * the likeliest first entries — they are well under the limit today, so they are
 * intentionally NOT pre-listed.
 */
const ALLOWLIST: Record<string, string> = {}

const mb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(2)}MB`

function trackedFiles(stagedOnly: boolean): string[] {
  const args = stagedOnly
    ? ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"]
    : ["ls-files", "-z"]
  return execFileSync("git", args, { cwd: REPO_ROOT, maxBuffer: 64 * 1024 * 1024 })
    .toString("utf-8")
    .split("\0")
    .filter(Boolean)
}

const stagedOnly = process.argv.includes("--staged")

const oversized: { file: string; size: number }[] = []
for (const file of trackedFiles(stagedOnly)) {
  if (file in ALLOWLIST) continue
  let size: number
  try {
    size = statSync(join(REPO_ROOT, file)).size
  } catch {
    // Deleted or renamed away between listing and stat — nothing to weigh.
    continue
  }
  if (size > MAX_BYTES) oversized.push({ file, size })
}

// Flag allowlist entries that no longer need to be there, so the list shrinks on
// its own instead of quietly outliving the problem it documented.
const stale = Object.keys(ALLOWLIST).filter((file) => {
  try {
    return statSync(join(REPO_ROOT, file)).size <= MAX_BYTES
  } catch {
    return true // gone entirely
  }
})

if (oversized.length === 0 && stale.length === 0) {
  const scope = stagedOnly ? "staged" : "tracked"
  console.log(`✓ No ${scope} file exceeds ${mb(MAX_BYTES)}.`)
  process.exit(0)
}

if (oversized.length > 0) {
  console.error(
    `\n✖ ${oversized.length} file(s) exceed the ${mb(MAX_BYTES)} limit:\n`
  )
  for (const { file, size } of oversized.sort((a, b) => b.size - a.size)) {
    console.error(`    ${mb(size).padStart(9)}  ${file}`)
  }
  console.error(
    `\n  Files this size are copied on every Storybook build (public/ and\n` +
      `  .storybook/static are staticDirs) and live in git history forever, so\n` +
      `  deleting one later does not give the space back.\n\n` +
      `  Options, best first:\n` +
      `    • Compress it. Images → WebP/AVIF. Video → scale to the size it is\n` +
      `      actually displayed at and trim to the length the story needs;\n` +
      `      \`ffmpeg -i in.webm -t 60 -vf scale=640:360 -c:v libvpx-vp9 -crf 36\n` +
      `      -b:v 0 -c:a libopus -b:a 48k out.webm\` took one 45MB sample to 2.5MB.\n` +
      `    • Do you need a real asset? A fixture only has to be plausible.\n` +
      `    • If it genuinely must ship at this size, add it to ALLOWLIST in\n` +
      `      scripts/check-file-sizes.ts with the reason.\n`
  )
}

if (stale.length > 0) {
  console.error(
    `\n✖ ${stale.length} stale ALLOWLIST entry/entries in ` +
      `scripts/check-file-sizes.ts — these are now under the limit or gone, so ` +
      `delete them:\n`
  )
  for (const file of stale) console.error(`    ${file}`)
  console.error("")
}

process.exit(1)
