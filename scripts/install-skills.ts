#!/usr/bin/env tsx
/**
 * Sync skills from the canonical `vendor/skills/` into every popular coding
 * agent's expected location, so whichever tool you open (Claude Code,
 * opencode, …) auto-discovers them on the first prompt.
 *
 * Runs on `pnpm install` (postinstall) and on demand via `pnpm skills:sync`.
 *
 * Targets:
 *   - .claude/skills/   → Claude Code
 *   - .opencode/skills/ → opencode
 *
 * Canonical source: `vendor/skills/`. NEVER edit the copies directly — they
 * are overwritten on every sync. Drift detection warns if a copy is newer.
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, "..")
const VENDOR = join(ROOT, "vendor", "skills")
const TARGETS = [
  join(ROOT, ".claude", "skills"),
  join(ROOT, ".opencode", "skills"),
]

function checkDrift(target: string): void {
  if (!existsSync(target)) return
  for (const skill of readdirSync(target)) {
    const t = join(target, skill, "SKILL.md")
    const v = join(VENDOR, skill, "SKILL.md")
    if (!existsSync(t) || !existsSync(v)) continue
    if (statSync(t).mtimeMs > statSync(v).mtimeMs + 2000) {
      console.warn(
        `[f0] ⚠️  ${relative(ROOT, t)} is NEWER than vendor — overwriting will lose those edits.\n` +
          `     Copy your changes to vendor/skills/${skill}/ first, then re-run \`pnpm skills:sync\`.`
      )
    }
  }
}

function sync(target: string): void {
  if (!existsSync(VENDOR)) {
    console.warn(`[f0] vendor/skills missing at ${VENDOR} — skipping.`)
    return
  }
  if (!process.env.SKILLS_SYNC_FORCE) checkDrift(target)
  if (existsSync(target)) rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  let count = 0
  for (const skill of readdirSync(VENDOR)) {
    const src = join(VENDOR, skill)
    if (!statSync(src).isDirectory()) continue
    cpSync(src, join(target, skill), {
      recursive: true,
      preserveTimestamps: true,
    })
    count++
  }
  console.log(`[f0] installed ${count} skill(s) into ${relative(ROOT, target)}`)
}

for (const target of TARGETS) sync(target)
