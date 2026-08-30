#!/usr/bin/env tsx
import { existsSync } from "node:fs"
import { resolve } from "node:path"

const packageRoot = resolve(import.meta.dirname, "..")
const requiredArtifacts = [
  "dist/f0.js",
  "dist/experimental.js",
  "dist/ai.js",
  "dist/F0Alert.js",
  "dist/F0Box.js",
  "dist/F0Button.js",
  "dist/F0Card.js",
  "dist/F0DatePicker.js",
  "dist/F0Dialog.js",
  "dist/F0Form.js",
  "dist/F0Heading.js",
  "dist/F0NumberInput.js",
  "dist/F0Select.js",
  "dist/F0Text.js",
  "dist/F0TextInput.js",
  "dist/OneDataCollection.js",
  "dist/f0.d.ts",
  "dist/experimental.d.ts",
  "dist/ai.d.ts",
  "dist/global.d.ts",
  "dist/components/F0Alert/index.d.ts",
  "dist/components/F0Button/index.d.ts",
  "dist/components/F0Card/index.d.ts",
  "dist/components/F0DatePicker/index.d.ts",
  "dist/components/F0Heading/index.d.ts",
  "dist/components/F0NumberInput/index.d.ts",
  "dist/components/F0Select/index.d.ts",
  "dist/components/F0Text/index.d.ts",
  "dist/components/F0TextInput/index.d.ts",
  "dist/lib/F0Box/index.d.ts",
  "dist/patterns/F0Dialog/index.d.ts",
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
