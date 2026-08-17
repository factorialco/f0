import { forwardRef } from "react"
import { describe, expect, it } from "vitest"

import * as AiIcons from "../ai"
import * as AppIcons from "../app"
import * as ModuleIcons from "../modules"
import { iconRegistry } from "../registry"
import { isIconName, resolveIcon, resolveIconName } from "../resolve"
import type { IconComponent } from "../types"

describe("resolveIcon", () => {
  it("returns a component unchanged, so component props stay supported", () => {
    const custom = forwardRef<SVGSVGElement>(function Custom(_, ref) {
      return <svg ref={ref} />
    }) as IconComponent

    expect(resolveIcon(custom)).toBe(custom)
    expect(resolveIcon(AppIcons.Pencil)).toBe(AppIcons.Pencil)
  })

  it("resolves an unprefixed name from the app namespace", () => {
    expect(resolveIcon("pencil")).toBe(AppIcons.Pencil)
    expect(resolveIcon("alert-circle-line")).toBe(AppIcons.AlertCircleLine)
  })

  it("separates digits from words", () => {
    expect(resolveIcon("heading-1")).toBe(AppIcons.Heading1)
  })

  it("resolves prefixed names from the other namespaces", () => {
    expect(resolveIcon("modules:payroll")).toBe(ModuleIcons.Payroll)
    expect(resolveIcon("modules:lms")).toBe(ModuleIcons.LMS)
    expect(resolveIcon("ai:summary")).toBe(AiIcons.Summary)
  })

  it("keeps names that exist in several namespaces distinct", () => {
    // `Calendar` ships in app, modules and ai — the prefix is what disambiguates.
    expect(resolveIcon("calendar")).toBe(AppIcons.Calendar)
    expect(resolveIcon("modules:calendar")).toBe(ModuleIcons.Calendar)
    expect(resolveIcon("ai:calendar")).toBe(AiIcons.Calendar)
    expect(resolveIcon("calendar")).not.toBe(ModuleIcons.Calendar)
  })
})

describe("resolveIconName", () => {
  it("returns undefined for a name outside the registry", () => {
    expect(resolveIconName("not-a-real-icon")).toBeUndefined()
  })

  it("does not resolve the PascalCase export names", () => {
    expect(resolveIconName("Pencil")).toBeUndefined()
  })

  it("does not resolve unprefixed names from prefixed namespaces", () => {
    expect(resolveIconName("payroll")).toBeUndefined()
  })

  it("does not leak Object.prototype members", () => {
    // A bare `iconRegistry[name]` would hand back a function here, which React
    // would then try to render.
    for (const inherited of [
      "toString",
      "constructor",
      "valueOf",
      "__proto__",
    ]) {
      expect(resolveIconName(inherited)).toBeUndefined()
    }
  })
})

describe("isIconName", () => {
  it("narrows only registry names", () => {
    expect(isIconName("pencil")).toBe(true)
    expect(isIconName("modules:payroll")).toBe(true)
    expect(isIconName("Pencil")).toBe(false)
    expect(isIconName("toString")).toBe(false)
  })
})

describe("iconRegistry", () => {
  it("is all-lowercase kebab-case, optionally namespace-prefixed", () => {
    const invalid = Object.keys(iconRegistry).filter(
      (name) => !/^(?:[a-z]+:)?[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)
    )

    expect(invalid).toEqual([])
  })

  it("covers every app, modules and ai icon exactly once", () => {
    const expected =
      Object.keys(AppIcons).length +
      Object.keys(ModuleIcons).length +
      Object.keys(AiIcons).length

    expect(Object.keys(iconRegistry)).toHaveLength(expected)
    expect(new Set(Object.values(iconRegistry)).size).toBeLessThanOrEqual(
      expected
    )
  })

  it("excludes animated icons, which would pull motion into every bundle", () => {
    const animatedNames = Object.keys(iconRegistry).filter((name) =>
      name.startsWith("animated:")
    )

    expect(animatedNames).toEqual([])
  })

  it("maps every name to a renderable component", () => {
    const broken = Object.entries(iconRegistry).filter(
      ([, component]) => component == null
    )

    expect(broken).toEqual([])
  })
})
