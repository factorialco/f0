import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

import { describe, expect, it } from "vitest"

/**
 * The lint scripts wrap oxlint in `sh -c '… "${@:-<default>}"' --` so that
 * lefthook can pass staged paths. Because the parameter expansion is quoted,
 * the shell never globs the default — oxlint receives it as a single literal
 * word and resolves it as a path. A glob such as `src/**` + `/*` therefore
 * matches nothing, oxlint reports "0 files", exits 0, and the CI lint job
 * passes without reading any code. That is what happened between 2026-01-12
 * and this test being added.
 *
 * So the default has to be a real path on disk, not a pattern.
 */
const PACKAGES = ["react", "react-native"] as const
const SCRIPTS = ["lint", "lint:fix"] as const

const DEFAULT_IN_SH_WRAPPER = /\$\{@:-([^}]*)\}/

const packageDir = (pkg: string) =>
  path.resolve(__dirname, "..", "..", "..", pkg)

const readScripts = (pkg: string): Record<string, string> =>
  JSON.parse(readFileSync(path.join(packageDir(pkg), "package.json"), "utf8"))
    .scripts

describe.each(PACKAGES)("@factorialco/f0-%s lint scripts", (pkg) => {
  it.each(SCRIPTS)(
    "`%s` defaults to a path that exists, not an unexpanded glob",
    (scriptName) => {
      const script = readScripts(pkg)[scriptName]
      expect(script).toBeDefined()

      const match = script.match(DEFAULT_IN_SH_WRAPPER)
      expect(
        match,
        `${scriptName} no longer uses the "\${@:-default}" wrapper; update this test`
      ).not.toBeNull()

      const fallback = match![1]
      expect(
        existsSync(path.join(packageDir(pkg), fallback)),
        `"${fallback}" does not exist inside packages/${pkg}. Quoted, the shell passes it to oxlint verbatim, so oxlint will lint 0 files and the gate will pass over everything.`
      ).toBe(true)
    }
  )
})
