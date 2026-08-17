import { spawnSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

/**
 * `src/icons/registry.ts` is generated from the icon barrels, and it is what
 * makes `<F0Icon icon="pencil" />` type-check and resolve. Adding an icon
 * without regenerating it leaves the new icon unaddressable by name, which
 * nothing else in the build would catch.
 */
const TEST_DIR = path.dirname(fileURLToPath(import.meta.url))
const PACKAGE_DIR = path.resolve(TEST_DIR, "..", "..", "..")

describe("icon registry", () => {
  it("is up to date with the icon barrels", () => {
    const result = spawnSync(
      "node",
      ["scripts/generate-icon-registry.mjs", "--check"],
      { cwd: PACKAGE_DIR, encoding: "utf8" }
    )

    expect(
      `${result.stdout}${result.stderr}`.trim(),
      "Run `pnpm generate-icon-registry` to update src/icons/registry.ts"
    ).toContain("up to date")
    expect(result.status).toBe(0)
  })
})
