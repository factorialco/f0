import { describe, expect, test } from "vitest"

import { SPACE_FOR_WIDGET_SHADOW } from "@/experimental/Navigation/Carousel/DynamicCarousel"

import { CAROUSEL_SHADOW_BLEED } from "./carousel"

/**
 * THE DRIFT GUARD for the carousel's shadow bleed.
 *
 * The bleed used to be an inline style computed from `SPACE_FOR_WIDGET_SHADOW`,
 * so it could not disagree with it. As Tailwind classes the numbers have to be
 * written out — a class built from a variable is never emitted by the scanner —
 * and the link between the two is this file.
 *
 * It asserts the RENDERED numbers rather than the class strings, so retuning the
 * constant fails here with the value it now wants instead of failing silently in
 * the browser.
 */
describe("the carousel's shadow bleed", () => {
  const bleed = SPACE_FOR_WIDGET_SHADOW

  test("grows the viewport by the shadow's space and pulls it back", () => {
    // 28px each side: `-m-7` / `p-7` off F0's spacing scale, where 7 is 28px.
    expect(bleed).toBe(28)
    expect(CAROUSEL_SHADOW_BLEED).toContain("-m-7")
    expect(CAROUSEL_SHADOW_BLEED).toContain("p-7")
  })

  test("takes back the two sides it borrowed, in both axes", () => {
    const pair = `calc(100%_+_${bleed * 2}px)`
    expect(CAROUSEL_SHADOW_BLEED).toContain(`h-[${pair}]`)
    expect(CAROUSEL_SHADOW_BLEED).toContain(`w-[${pair}]`)
  })

  test("fades that borrowed margin out, at the full stop and the half", () => {
    // The gradient is opaque from `bleed` in, and starts fading at its half —
    // so a slide's shadow disappears at the edge instead of being cut square.
    for (const prefix of ["mask-image", "-webkit-mask-image"]) {
      const rule = CAROUSEL_SHADOW_BLEED.split(" ").find((c) =>
        c.startsWith(`[${prefix}:`)
      )
      expect(rule).toBeDefined()
      expect(rule).toContain(`transparent_${bleed / 2}px`)
      expect(rule).toContain(`black_${bleed}px`)
      expect(rule).toContain(`black_calc(100%_-_${bleed}px)`)
      expect(rule).toContain(`transparent_calc(100%_-_${bleed / 2}px)`)
    }
  })
})
