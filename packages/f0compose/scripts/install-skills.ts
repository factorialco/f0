#!/usr/bin/env tsx
/**
 * Sync hook: copies vendor/skills/* into .opencode/skills/* and
 * .claude/skills/* so the skills are auto-discovered when the user opens
 * opencode or Claude Code from `packages/f0compose/`.
 *
 * Runs on:
 *   - `pnpm install` (postinstall)
 *   - `pnpm dev` / `pnpm start` / `pnpm build` (predev/prestart/prebuild)
 *   - `pnpm skills:sync` (manual)
 *
 * Why both `.opencode/skills/` AND `.claude/skills/`:
 *   - Claude Code reads from `.claude/skills/`.
 *   - OpenCode reads from `.opencode/skills/` first and falls back to
 *     `.claude/skills/`. If `.opencode/skills/` is stale, OpenCode will
 *     pick up the OLD content — that's the "doesn't work on first try"
 *     failure mode. Keeping both fresh avoids it.
 *
 * Canonical source: `vendor/skills/`. NEVER edit `.opencode/skills/` or
 * `.claude/skills/` directly — they're overwritten on every dev start.
 *
 * Drift detection: if a target file is newer than its vendor source,
 * we print a loud warning before overwriting. Set `SKILLS_SYNC_FORCE=1`
 * to silence the warning in CI.
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
const PKG_ROOT = resolve(__dirname, "..")
const VENDOR_SKILLS = join(PKG_ROOT, "vendor", "skills")
const TARGETS = [
  join(PKG_ROOT, ".opencode", "skills"),
  join(PKG_ROOT, ".claude", "skills"),
]

function checkDrift(target: string): void {
  if (!existsSync(target)) return
  const skills = readdirSync(target)
  for (const skill of skills) {
    const targetSkill = join(target, skill, "SKILL.md")
    const vendorSkill = join(VENDOR_SKILLS, skill, "SKILL.md")
    if (!existsSync(targetSkill) || !existsSync(vendorSkill)) continue
    const targetMtime = statSync(targetSkill).mtimeMs
    const vendorMtime = statSync(vendorSkill).mtimeMs
    // Allow 2s of mtime slop — copies preserve mtime imperfectly.
    if (targetMtime > vendorMtime + 2000) {
      const rel = relative(PKG_ROOT, targetSkill)
      console.warn(
        `[f0compose] ⚠️  ${rel} is NEWER than vendor — overwriting will lose those edits.\n` +
          `             If you meant to edit the skill, copy your changes to vendor/skills/${skill}/ first,\n` +
          `             then re-run \`pnpm skills:sync\`. Set SKILLS_SYNC_FORCE=1 to silence this warning.`
      )
    }
  }
}

function syncSkills(target: string): void {
  if (!existsSync(VENDOR_SKILLS)) {
    console.warn(
      `[f0compose] vendor/skills missing at ${VENDOR_SKILLS} — skipping skill install.`
    )
    return
  }
  if (!process.env.SKILLS_SYNC_FORCE) {
    checkDrift(target)
  }
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true })
  }
  mkdirSync(target, { recursive: true })

  const skills = readdirSync(VENDOR_SKILLS)
  for (const skill of skills) {
    const src = join(VENDOR_SKILLS, skill)
    const stat = statSync(src)
    if (!stat.isDirectory()) continue
    cpSync(src, join(target, skill), {
      recursive: true,
      preserveTimestamps: true,
    })
  }
  console.log(
    `[f0compose] installed ${skills.length} skill(s) into ${target.replace(PKG_ROOT, ".")}`
  )
}

function main(): void {
  for (const target of TARGETS) {
    syncSkills(target)
  }
}

main()
