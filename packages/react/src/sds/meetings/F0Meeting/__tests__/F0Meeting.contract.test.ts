import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"

const ROOT = join(__dirname, "..")

const TRANSPORT_IMPORTS = [
  "livekit-client",
  "@livekit/components-react",
  "@livekit/components-core",
  "@livekit/track-processors",
]

const walk = (directory: string): string[] =>
  readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry)
    return statSync(path).isDirectory()
      ? walk(path)
      : /\.(ts|tsx)$/.test(entry)
        ? [path]
        : []
  })

/**
 * F0 is headless: the room must never learn what transport is behind it.
 *
 * Without this guard the coupling creeps back in as soon as somebody needs one
 * LiveKit type "just for a moment", and by then every consumer inherits the
 * dependency. Tracks reach F0 as `bindingKey` + `binding` precisely so this
 * boundary can hold.
 */
describe("F0Meeting transport independence", () => {
  it("never imports a transport SDK", () => {
    const offenders = walk(ROOT)
      .filter((path) => !path.includes("__tests__"))
      .filter((path) => {
        const source = readFileSync(path, "utf8")
        return TRANSPORT_IMPORTS.some((module) =>
          new RegExp(`from\\s+["']${module.replace("/", "\\/")}`).test(source)
        )
      })

    expect(offenders).toEqual([])
  })
})
