#!/usr/bin/env tsx
/**
 * Postinstall hook: copies vendor/skills/* into .opencode/skills/* and
 * .claude/skills/* so the skills are auto-discovered when the user opens
 * opencode or Claude Code from `packages/f0compose/`.
 *
 * Idempotent: re-running is safe and overwrites with the latest vendor
 * copies. We always overwrite to keep .opencode / .claude in sync with
 * vendor — designers should never edit the installed copies.
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = resolve(__dirname, "..")
const VENDOR_SKILLS = join(PKG_ROOT, "vendor", "skills")
const TARGETS = [
  join(PKG_ROOT, ".opencode", "skills"),
  join(PKG_ROOT, ".claude", "skills"),
]

function syncSkills(target: string): void {
  if (!existsSync(VENDOR_SKILLS)) {
    console.warn(
      `[f0compose] vendor/skills missing at ${VENDOR_SKILLS} — skipping skill install.`
    )
    return
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
    cpSync(src, join(target, skill), { recursive: true })
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
