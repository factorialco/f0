import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"

import { afterAll, beforeAll, describe, expect, test } from "vitest"

import {
  parseF0Imports,
  resolveComposerRepoRoot,
  resolveProductRepoRoot,
  scanComposerUsage,
  scanInternalUsage,
  scanProductUsage,
} from "./product-usage-scan.mjs"

describe("parseF0Imports", () => {
  test("reads single-line and multi-line named imports", () => {
    expect(
      parseF0Imports(`import { F0Button } from '@factorialco/f0-react'`)
    ).toEqual(["F0Button"])

    expect(
      parseF0Imports(`import {
        F0Box,
        F0Text,
      } from "@factorialco/f0-react"`)
    ).toEqual(["F0Box", "F0Text"])
  })

  test("keeps the exported name for aliased and type imports", () => {
    expect(
      parseF0Imports(
        `import { F0Button as Button, type F0ButtonProps } from '@factorialco/f0-react'`
      )
    ).toEqual(["F0Button", "F0ButtonProps"])
  })

  test("covers the experimental entry and re-exports", () => {
    expect(
      parseF0Imports(
        `import { OneDataCollection } from '@factorialco/f0-react/dist/experimental'
         export { F0Alert } from '@factorialco/f0-react'`
      )
    ).toEqual(["OneDataCollection", "F0Alert"])
  })

  test("ignores other entry points and non-import references", () => {
    expect(
      parseF0Imports(
        `import { Add } from '@factorialco/f0-react/icons/app'
         jest.mock('@factorialco/f0-react', () => ({}))
         const pkg = '@factorialco/f0-react'`
      )
    ).toEqual([])
  })

  test("does not swallow a preceding import statement", () => {
    // A lazy `[\s\S]*?` clause would match from the first `import` all the way
    // to the f0 specifier, picking up `useState` as an f0 export.
    expect(
      parseF0Imports(
        `import { useState } from 'react'
         import { F0Card } from '@factorialco/f0-react'`
      )
    ).toEqual(["F0Card"])
  })
})

describe("scanProductUsage", () => {
  let repoRoot: string

  const write = (relativePath: string, contents: string) => {
    const path = join(repoRoot, "frontend", "src", "modules", relativePath)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, contents)
  }

  beforeAll(() => {
    repoRoot = mkdtempSync(join(tmpdir(), "f0-product-usage-"))

    const importsButton = `import { F0Button } from '@factorialco/f0-react'`

    write("ats/Candidate.tsx", importsButton)
    write(
      "ats/nested/List.tsx",
      `import { F0Button, F0Box } from "@factorialco/f0-react"`
    )
    write("payroll/Payslip.tsx", importsButton)
    write("payroll/Untouched.tsx", `export const x = 1`)

    // Not product code — must not count.
    write("ats/Candidate.test.tsx", importsButton)
    write("ats/Candidate.stories.tsx", importsButton)
    write("ats/__tests__/helpers.tsx", importsButton)
    write("ats/node_modules/pkg/index.tsx", importsButton)

    writeFileSync(
      join(repoRoot, "frontend", "package.json"),
      JSON.stringify({ dependencies: { "@factorialco/f0-react": "4.72.0" } })
    )
  })

  afterAll(() => rmSync(repoRoot, { recursive: true, force: true }))

  test("counts importing product files per component and module", () => {
    const result = scanProductUsage({ repoRoot, itRepoRoot: null })
    if (!result.available) throw new Error(result.reason)

    expect(result.components.F0Button).toEqual({
      files: 3,
      modules: { ats: 2, payroll: 1 },
    })
    expect(result.components.F0Box).toEqual({
      files: 1,
      modules: { ats: 1 },
    })
  })

  test("excludes tests, stories and vendored code", () => {
    const result = scanProductUsage({ repoRoot, itRepoRoot: null })
    if (!result.available) throw new Error(result.reason)

    // 4 product files walked (the 4 test/story/vendor ones are skipped), 3 of
    // which import from the package.
    expect(result.totals.scannedFiles).toBe(4)
    expect(result.totals.importingFiles).toBe(3)
    expect(result.totals.modules).toBe(2)
  })

  test("reports the product's f0-react version", () => {
    const result = scanProductUsage({ repoRoot, itRepoRoot: null })
    if (!result.available) throw new Error(result.reason)

    expect(result.repo.f0Version).toBe("4.72.0")
  })

  test("degrades gracefully without a product checkout", () => {
    const result = scanProductUsage({ repoRoot: null })

    expect(result.available).toBe(false)
    if (result.available) throw new Error("expected an unavailable result")
    expect(result.reason).toMatch(/factorial/i)
  })

  test("resolves the repo root from $F0_PRODUCT_REPO", () => {
    expect(resolveProductRepoRoot({ F0_PRODUCT_REPO: repoRoot })).toBe(repoRoot)
  })

  test("`full` widens the monorepo beyond frontend/src/modules", () => {
    // `backstage/` is invisible to the default scope and shows up as its own
    // group once the whole monorepo is in play.
    mkdirSync(join(repoRoot, "backstage"), { recursive: true })
    writeFileSync(
      join(repoRoot, "backstage", "Admin.tsx"),
      `import { F0Table } from '@factorialco/f0-react'`
    )

    const scoped = scanProductUsage({ repoRoot, itRepoRoot: null })
    expect(scoped.available && scoped.components.F0Table).toBeUndefined()

    const full = scanProductUsage({ repoRoot, itRepoRoot: null, full: true })
    if (!full.available) throw new Error(full.reason)
    expect(full.components.F0Table).toEqual({
      files: 1,
      modules: { backstage: 1 },
    })
  })
})

describe("scanProductUsage across repos", () => {
  let repoRoot: string
  let itRepoRoot: string

  beforeAll(() => {
    repoRoot = mkdtempSync(join(tmpdir(), "f0-product-"))
    const modules = join(repoRoot, "frontend", "src", "modules", "ats")
    mkdirSync(modules, { recursive: true })
    writeFileSync(
      join(modules, "Candidate.tsx"),
      `import { F0Button } from '@factorialco/f0-react'`
    )

    itRepoRoot = mkdtempSync(join(tmpdir(), "f0-it-"))
    const itFrontend = join(itRepoRoot, "frontend", "devices")
    mkdirSync(itFrontend, { recursive: true })
    writeFileSync(
      join(itFrontend, "DeviceList.tsx"),
      `import { F0Button } from '@factorialco/f0-react'`
    )
  })

  afterAll(() => {
    rmSync(repoRoot, { recursive: true, force: true })
    rmSync(itRepoRoot, { recursive: true, force: true })
  })

  test("counts factorial-it alongside factorial, namespacing its groups", () => {
    const result = scanProductUsage({ repoRoot, itRepoRoot })
    if (!result.available) throw new Error(result.reason)

    // The `factorial-it/` prefix keeps its top-level dirs from colliding with
    // factorial feature module names.
    expect(result.components.F0Button).toEqual({
      files: 2,
      modules: { ats: 1, "factorial-it/frontend": 1 },
    })
    expect(result.repos.map((repo) => repo.id)).toEqual([
      "factorial",
      "factorial-it",
    ])
    expect(result.missing).toEqual([])
  })

  test("reports a repo that wasn't checked out", () => {
    const result = scanProductUsage({ repoRoot, itRepoRoot: null })
    if (!result.available) throw new Error(result.reason)

    // The docs tag turns this into "Not checked: factorial-it", so a partial
    // count never reads as the whole picture.
    expect(result.missing).toEqual([{ id: "factorial-it", env: "F0_IT_REPO" }])
  })
})

describe("scanComposerUsage", () => {
  let repoRoot: string

  const write = (relativePath: string, contents: string) => {
    const path = join(repoRoot, "src", "projects", relativePath)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, contents)
  }

  const prototypeIndex = (slug: string, title: string) =>
    `import type { PrototypeMeta } from "@/prototypes/types"

export const meta: PrototypeMeta = {
  slug: "${slug}",
  title: "${title}",
  domain: "talent",
  status: "published",
}`

  beforeAll(() => {
    repoRoot = mkdtempSync(join(tmpdir(), "f0-composer-usage-"))

    write(
      "training/ai-mentor/index.ts",
      prototypeIndex("ai-mentor", "AI Mentor")
    )
    write(
      "training/ai-mentor/v1/Page.tsx",
      `import { F0Button, F0Box } from "@factorialco/f0-react"`
    )
    // A second file in the same prototype must not list it twice.
    write(
      "training/ai-mentor/v2/Page.tsx",
      `import { F0Button } from "@factorialco/f0-react"`
    )

    write(
      "expense-management/expenses/index.ts",
      prototypeIndex("expenses", "Expenses")
    )
    write(
      "expense-management/expenses/v1/Page.tsx",
      `import { F0Button } from "@factorialco/f0-react/dist/experimental"`
    )

    // A prototype with no meta file falls back to its folder name.
    write(
      "retake-flow/untitled/v1/Page.tsx",
      `import { F0Box } from "@factorialco/f0-react"`
    )
  })

  afterAll(() => rmSync(repoRoot, { recursive: true, force: true }))

  test("lists each prototype using a component, once, sorted by title", () => {
    const result = scanComposerUsage({ repoRoot })
    if (!result.available) throw new Error(result.reason)

    expect(result.prototypes.F0Button).toEqual([
      {
        project: "training",
        slug: "ai-mentor",
        title: "AI Mentor",
        status: "published",
      },
      {
        project: "expense-management",
        slug: "expenses",
        title: "Expenses",
        status: "published",
      },
    ])
  })

  test("never reports prototype file counts", () => {
    const result = scanComposerUsage({ repoRoot })
    if (!result.available) throw new Error(result.reason)

    // Prototypes are explorations: the payload names them, and nothing about
    // it can be summed into the product usage numbers.
    expect(result.totals).toEqual({ prototypes: 3 })
    for (const prototypes of Object.values(result.prototypes)) {
      for (const prototype of prototypes) {
        expect(prototype).not.toHaveProperty("files")
      }
    }
  })

  test("falls back to the folder name when a prototype has no meta", () => {
    const result = scanComposerUsage({ repoRoot })
    if (!result.available) throw new Error(result.reason)

    expect(result.prototypes.F0Box).toContainEqual({
      project: "retake-flow",
      slug: "untitled",
      title: "untitled",
      status: null,
    })
  })

  test("degrades gracefully without a Composer checkout", () => {
    const result = scanComposerUsage({ repoRoot: null })

    expect(result.available).toBe(false)
    if (result.available) throw new Error("expected an unavailable result")
    expect(result.reason).toMatch(/composer/i)
  })

  test("resolves the repo root from $F0_COMPOSER_REPO", () => {
    expect(resolveComposerRepoRoot({ F0_COMPOSER_REPO: repoRoot })).toBe(
      repoRoot
    )
  })
})

describe("scanInternalUsage", () => {
  let srcDir: string

  const write = (relativePath: string, contents: string) => {
    const path = join(srcDir, relativePath)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, contents)
  }

  beforeAll(() => {
    srcDir = join(mkdtempSync(join(tmpdir(), "f0-internal-usage-")), "src")

    write(
      "components/F0Dialog/F0Dialog.tsx",
      `import { F0Button } from "@/components/F0Button"
       import { useState } from "react"`
    )
    // Nested folders resolve to the deepest capitalised directory.
    write(
      "experimental/Forms/F0PhoneInput/components/CountrySelect.tsx",
      `import { F0Button as Button, type F0IconProps } from "../../../../components/F0Button"`
    )
    // A component's own internals don't count as a user of it.
    write(
      "components/F0Button/internal/Label.tsx",
      `import { F0Button } from "@/components/F0Button"`
    )
    // Files outside any component folder (barrels) are ignored.
    write("components/exports.ts", `export * from "./F0Button"`)
  })

  afterAll(() => rmSync(dirname(srcDir), { recursive: true, force: true }))

  test("lists the f0 components importing a component", () => {
    const result = scanInternalUsage({ srcDir })
    if (!result.available) throw new Error(result.reason)

    expect(result.components.F0Button).toEqual(["F0Dialog", "F0PhoneInput"])
  })

  test("ignores package imports", () => {
    const result = scanInternalUsage({ srcDir })
    if (!result.available) throw new Error(result.reason)

    expect(result.components.useState).toBeUndefined()
  })

  test("records type-only imports under their exported name", () => {
    const result = scanInternalUsage({ srcDir })
    if (!result.available) throw new Error(result.reason)

    expect(result.components.F0IconProps).toEqual(["F0PhoneInput"])
  })
})
