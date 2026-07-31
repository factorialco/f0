import { ReactElement } from "react"
import { describe, expect, it } from "vitest"

import { Placeholder } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"

import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarDate } from "../F0AvatarDate"
import { F0AvatarEmoji } from "../F0AvatarEmoji"
import { F0AvatarFile } from "../F0AvatarFile"
import { F0AvatarFlag } from "../F0AvatarFlag"
import { F0AvatarIcon } from "../F0AvatarIcon"
import { F0AvatarTeam } from "../F0AvatarTeam"
import { AvatarSize, avatarSizes } from "../internal/BaseAvatar"

/**
 * Canonical `size -> border-radius` token for square avatars. This is the scale
 * defined once in `ui/Avatar` (`avatarVariants`, src/ui/Avatar/Avatar.tsx) and
 * shared by every BaseAvatar-based type. The standalone avatars (Icon, Emoji,
 * Date) hardcode their own size maps, so they can silently drift out of sync —
 * this test is the guard that keeps every type rounding its box identically at a
 * given size, so they look the same when swapped into a shared slot (e.g. F0Card).
 */
const CANONICAL_RADIUS = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded",
  lg: "rounded-md",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const satisfies Record<AvatarSize, string>

/**
 * The avatar's outermost box carries the radius class. Icon/Emoji/Date render an
 * outer <div> with `border-f1-border-secondary`; the ui/Avatar-based types (File,
 * Flag, Company, Team) render a Radix root tagged `data-a11y-color-contrast-ignore`.
 * jsdom does not evaluate Tailwind, so we assert on the class token, not a pixel.
 */
const getAvatarBox = (container: HTMLElement): HTMLElement => {
  const box = container.querySelector<HTMLElement>(
    "[class*='border-f1-border-secondary'], [data-a11y-color-contrast-ignore]"
  )
  if (!box) throw new Error("Could not locate the avatar box element")
  return box
}

type AvatarCase = {
  name: string
  sizes: AvatarSize[]
  render: (size: AvatarSize) => ReactElement
}

const makeCase = <S extends AvatarSize>(
  name: string,
  sizes: readonly S[],
  render: (size: S) => ReactElement
): AvatarCase => ({
  name,
  sizes: [...sizes],
  render: (size) => render(size as S),
})

const cases: AvatarCase[] = [
  makeCase("F0AvatarIcon", ["sm", "md", "lg"] as const, (size) => (
    <F0AvatarIcon icon={Placeholder} size={size} aria-label="icon" />
  )),
  makeCase("F0AvatarEmoji", ["sm", "md", "lg", "xl"] as const, (size) => (
    <F0AvatarEmoji emoji="😀" size={size} aria-label="emoji" />
  )),
  makeCase("F0AvatarFile", ["xs", "sm", "md", "lg"] as const, (size) => (
    <F0AvatarFile
      file={{ name: "document.pdf", type: "application/pdf" }}
      size={size}
    />
  )),
  makeCase("F0AvatarFlag", avatarSizes, (size) => (
    <F0AvatarFlag flag="ES" size={size} />
  )),
  makeCase("F0AvatarCompany", avatarSizes, (size) => (
    <F0AvatarCompany name="Acme Inc" size={size} />
  )),
  makeCase("F0AvatarTeam", avatarSizes, (size) => (
    <F0AvatarTeam name="Platform Team" size={size} />
  )),
]

describe("avatar corner radius is in sync across avatar types", () => {
  describe.each(cases)("$name", ({ sizes, render }) => {
    it.each(sizes)("uses the canonical radius at size '%s'", (size) => {
      const { container } = zeroRender(render(size))

      const box = getAvatarBox(container)

      expect(box.classList.contains(CANONICAL_RADIUS[size])).toBe(true)
    })
  })

  // F0AvatarDate has no size prop: it renders at a fixed 40px box, which is the
  // `lg` step of the scale, so it must use the same radius as every other `lg`.
  it("F0AvatarDate (fixed 40px) matches the 'lg' radius", () => {
    const { container } = zeroRender(
      <F0AvatarDate date={new Date("2026-07-30T00:00:00Z")} />
    )

    const box = getAvatarBox(container)

    expect(box.classList.contains(CANONICAL_RADIUS.lg)).toBe(true)
  })
})
