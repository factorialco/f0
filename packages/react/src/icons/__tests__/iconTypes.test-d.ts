import { assertType, describe, expectTypeOf, it } from "vitest"

import * as AppIcons from "../app"
import type { AppIconName, IconName, IconNamespace } from "../registry"
import type { IconType } from "../resolve"

describe("IconType", () => {
  it("accepts a component, which is what keeps existing props working", () => {
    assertType<IconType>(AppIcons.Pencil)
  })

  it("accepts any name when unparameterised", () => {
    assertType<IconType>("pencil")
    assertType<IconType>("modules:payroll")
    assertType<IconType>("ai:summary")
  })

  it("rejects a name that does not exist", () => {
    // @ts-expect-error -- not an icon
    assertType<IconType>("definitely-not-an-icon")
    // @ts-expect-error -- names are kebab-case, not the PascalCase export name
    assertType<IconType>("Pencil")
    // @ts-expect-error -- module icons must carry their namespace
    assertType<IconType>("payroll")
  })
})

describe("IconType<Namespace>", () => {
  it("narrows to a single set", () => {
    assertType<IconType<"modules">>("modules:payroll")
    // @ts-expect-error -- app names are outside the `modules` set
    assertType<IconType<"modules">>("pencil")
    // @ts-expect-error -- ai names are outside the `modules` set
    assertType<IconType<"modules">>("ai:summary")
  })

  it("narrows to a union of sets", () => {
    assertType<IconType<"modules" | "ai">>("modules:payroll")
    assertType<IconType<"modules" | "ai">>("ai:summary")
    // @ts-expect-error -- app names are outside both sets
    assertType<IconType<"modules" | "ai">>("pencil")
  })

  it("still accepts a component when narrowed, so the escape hatch survives", () => {
    assertType<IconType<"modules">>(AppIcons.Pencil)
  })
})

describe("IconName", () => {
  it("excludes components, for props that must be serialisable", () => {
    assertType<IconName>("pencil")
    // @ts-expect-error -- name-only
    assertType<IconName>(AppIcons.Pencil)
  })

  it("narrows the same way as IconType", () => {
    assertType<IconName<"ai">>("ai:summary")
    // @ts-expect-error -- outside the `ai` set
    assertType<IconName<"ai">>("pencil")
  })

  it("defaults to the union of every set", () => {
    expectTypeOf<IconName>().toEqualTypeOf<IconName<IconNamespace>>()
    expectTypeOf<AppIconName>().extract<IconName>().not.toBeNever()
  })
})
