#!/usr/bin/env tsx
/**
 * Pre-dev freshness check for `@factorialco/f0-react`.
 *
 * f0compose imports the f0 design system from `dist/f0.js` (per
 * `packages/react/package.json` "main"). The `workspace:*` symlink
 * points at `packages/react`, but pnpm does NOT auto-rebuild dist when
 * src changes — so a stale dist silently makes f0compose feel like it
 * "doesn't have the latest f0".
 *
 * This script compares the newest mtime in `packages/react/src/**`
 * against `packages/react/dist/f0.js`. If src is newer (or dist is
 * missing), it rebuilds f0-react synchronously before vite starts.
 * `predev` runs this; the parallel watch in `dev` keeps it fresh after.
 */
import { execSync } from "node:child_process"
import { readdirSync, statSync } from "node:fs"
import { join, resolve } from "node:path"

const composeDir = resolve(import.meta.dirname, "..")
const reactSrc = resolve(composeDir, "../react/src")
const reactDist = resolve(composeDir, "../react/dist/f0.js")

function getNewestMtimeMs(dir: string): number {
  let newest = 0
  const stack: string[] = [dir]
  while (stack.length > 0) {
    const current = stack.pop()!
    let entries: import("node:fs").Dirent[]
    try {
      entries = readdirSync(current, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue
      const full = join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(full)
      } else if (entry.isFile()) {
        try {
          const m = statSync(full).mtimeMs
          if (m > newest) newest = m
        } catch {}
      }
    }
  }
  return newest
}

function getMtimeMs(path: string): number | null {
  try {
    return statSync(path).mtimeMs
  } catch {
    return null
  }
}

const distMtime = getMtimeMs(reactDist)
const srcMtime = getNewestMtimeMs(reactSrc)

if (distMtime === null) {
  console.log("[f0compose] f0-react dist missing — building…")
  execSync("pnpm --filter @factorialco/f0-react build", {
    stdio: "inherit",
    cwd: composeDir,
  })
} else if (srcMtime > distMtime) {
  const ageSec = Math.round((srcMtime - distMtime) / 1000)
  console.log(
    `[f0compose] f0-react dist is ${ageSec}s behind src — rebuilding…`
  )
  execSync("pnpm --filter @factorialco/f0-react build", {
    stdio: "inherit",
    cwd: composeDir,
  })
} else {
  console.log("[f0compose] f0-react dist is up to date.")
}
