#!/usr/bin/env tsx
/**
 * scripts/scaffold-prototype.ts — minimum-viable prototype folder.
 * Idempotent: existing prototypes are skipped.
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
  console.error(`✗ Slug invalid: '${slug}'`)
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
  process.exit(0)
}

mkdirSync(folder, { recursive: true })
const today = new Date().toISOString().slice(0, 10)

const componentSource = `import { F0Box, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

import type { PrototypeMeta } from "../types"

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
            content="This prototype was scaffolded for you. Describe the screen you want and I'll build it."
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
`

writeFileSync(componentPath, componentSource, "utf8")
console.log(`✓ Scaffolded src/prototypes/${slug}/${pascal}.tsx`)
