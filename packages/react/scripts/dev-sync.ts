#!/usr/bin/env tsx
import { spawn } from "node:child_process"

const syncPath = process.argv[2]

if (!syncPath) {
  console.error("Error: Please provide a sync path")
  console.error("Usage: pnpm dev:sync <path>")
  process.exit(1)
}

// Run vite build directly in watch mode with buildSync flag
const args = ["vite", "build", "--watch", "--", `--buildSync=${syncPath}`]

const proc = spawn("pnpm", args, {
  stdio: "inherit",
  shell: true,
})

proc.on("exit", (code) => {
  process.exit(code || 0)
})
