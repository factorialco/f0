#!/usr/bin/env tsx
import { existsSync } from "node:fs"
import { resolve } from "node:path"

const packageRoot = resolve(import.meta.dirname, "..")
const requiredArtifacts = [
  "dist/f0.js",
  "dist/experimental.js",
  "dist/ai.js",
  "dist/F0Button.js",
  "dist/F0Form.js",
  "dist/OneDataCollection.js",
  "dist/f0.d.ts",
  "dist/experimental.d.ts",
  "dist/ai.d.ts",
  "dist/global.d.ts",
]

const missingArtifacts = requiredArtifacts.filter(
  (artifact) => !existsSync(resolve(packageRoot, artifact))
)

if (missingArtifacts.length > 0) {
  throw new Error(
    `Build completed without required artifacts:\n${missingArtifacts.join("\n")}`
  )
}

process.stdout.write("Required runtime and declaration artifacts exist\n")
