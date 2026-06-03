#!/usr/bin/env tsx
/**
 * scripts/scaffold-prototype.ts
 *
 * Creates the minimum-viable prototype folder so the kickstart flow
 * has something to deploy and the designer has a real file to talk
 * to opencode about ("change this heading", "add a table", …).
 *
 * Usage:
 *   tsx scripts/scaffold-prototype.ts <slug> "<Human Title>"
 *
 * Idempotent: if `src/prototypes/<slug>/<Pascal>.tsx` already exists,
 * the script logs a notice and exits 0 (so the kickstart wrapper
 * doesn't blow up on re-runs).
 *
 * Intentionally tiny: we don't try to scaffold tabs / sub-views /
 * fixtures / forms here. The first thing the designer will do with
 * opencode is replace the body anyway. The scaffold only needs to be
 * syntactically valid, route-able, and recognisable on the catalog.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "..")

const [, , rawSlug, ...titleParts] = process.argv
const slug = (rawSlug ?? "").trim()
const title = titleParts.join(" ").trim()

if (!slug || !title) {
  console.error('Usage: tsx scripts/scaffold-prototype.ts <slug> "<Title>"')
  process.exit(1)
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error(
    `✗ Slug must be lowercase letters, digits and hyphens only: '${slug}'`
  )
  process.exit(1)
}

const pascal = slug
  .split("-")
  .filter(Boolean)
  .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
  .join("")

const folder = resolve(repoRoot, "src", "prototypes", slug)
const componentPath = resolve(folder, `${pascal}.tsx`)

if (existsSync(componentPath)) {
  console.log(`• Prototype already exists at src/prototypes/${slug}/`)
  console.log("  Skipping scaffold. Open opencode and start iterating.")
  process.exit(0)
}

mkdirSync(folder, { recursive: true })

const today = new Date().toISOString().slice(0, 10)

const componentSource = `import { F0Box, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

import type { PrototypeMeta } from "../types"

/**
 * Starter prototype scaffolded by \`pnpm kickstart\`.
 *
 * This file is intentionally minimal — just enough to render a real
 * Factorial page so the live Vercel share has content. Open opencode
 * at packages/f0compose/ and ask it to build out the actual screen.
 */

export const meta: PrototypeMeta = {
  slug: "${slug}",
  title: "${title.replace(/"/g, '\\"')}",
  description:
    "Starter prototype — replace this description and the body via opencode.",
  category: "Other",
  module: "documents",
  audience: ["admin"],
  tags: ["wip"],
  createdAt: "${today}",
}

export default function ${pascal}() {
  return (
    <Page
      header={
        <PageHeader
          module={{
            id: "documents",
            name: meta.title,
            href: \`/p/\${meta.slug}\`,
          }}
        />
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Heading content={meta.title} variant="heading-large" as="h1" />
          <F0Text
            variant="body"
            content="This prototype was scaffolded for you. Open opencode at packages/f0compose/ and describe the screen you want to build — it'll edit this file in place and the live URL will update automatically."
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
`

writeFileSync(componentPath, componentSource, "utf8")
console.log(`✓ Scaffolded src/prototypes/${slug}/${pascal}.tsx`)
