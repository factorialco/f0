import { ComponentProps } from "react"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarEmoji } from "../F0AvatarEmoji"

type Props = ComponentProps<typeof F0AvatarEmoji>

describe("F0AvatarEmoji", () => {
  it("renders the emoji as an image named after the emoji itself", () => {
    zeroRender(<F0AvatarEmoji emoji="🍑" />)

    // EmojiImage falls back to the emoji character for `alt`, so the accessible
    // name is the glyph, not a human-readable description.
    expect(screen.getByRole("img", { name: "🍑" })).toBeInTheDocument()
  })

  it("forwards aria-label to the wrapper, which is not a reliable accessible name", () => {
    const { container } = zeroRender(
      <F0AvatarEmoji emoji="🍑" aria-label="Peach" />
    )

    // The attribute really is forwarded, but it lands on a roleless <div>
    // (role=generic), where ARIA prohibits aria-label. Asserting the attribute
    // is the honest claim; asserting an accessible name would be a lie.
    expect(container.firstChild).toHaveAttribute("aria-label", "Peach")
    expect(screen.getByRole("img", { name: "🍑" })).toBeInTheDocument()
  })

  it("falls back to a neutral emoji for an invalid value", () => {
    zeroRender(<F0AvatarEmoji emoji="not-an-emoji" />)

    // getByRole is unique-or-throw, so this pins the whole outcome: exactly one
    // image, and its alt is the fallback rather than the value passed in.
    expect(screen.getByRole("img")).toHaveAttribute("alt", "🤔")
  })

  it("falls back for multi-code-point emoji, which the regex rejects", () => {
    zeroRender(<F0AvatarEmoji emoji="👍🏽" />)

    // A skin-tone modifier or a regional-indicator flag is more than one code
    // point, so a real emoji is discarded exactly like junk input.
    expect(screen.getByRole("img")).toHaveAttribute("alt", "🤔")
  })

  it("renders raw text when the value passes the regex but has no twemoji asset", () => {
    zeroRender(<F0AvatarEmoji emoji="#" />)

    // "#" matches \p{Emoji} so it survives the regex, but twemoji-parser finds
    // no entity for it, so EmojiImage renders a bare <span> instead of an image.
    expect(screen.getByText("#")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("maps a deprecated size onto its current equivalent and warns", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    try {
      const { container: legacy } = zeroRender(
        <F0AvatarEmoji {...({ emoji: "🍑", size: "large" } as Props)} />
      )
      const { container: current } = zeroRender(
        <F0AvatarEmoji emoji="🍑" size="lg" />
      )

      expect(warn).toHaveBeenCalledWith(
        "The emoji size: large is deprecated. Use lg instead."
      )
      // Compare against the `lg` render rather than hardcoding utility classes,
      // so the assertion survives a styling refactor.
      expect((legacy.firstChild as HTMLElement).className).toBe(
        (current.firstChild as HTMLElement).className
      )
    } finally {
      // This repo's vitest config has no clearMocks; restore explicitly so the
      // spy cannot leak into the next test.
      warn.mockRestore()
    }
  })

  it("applies no box size to the root for a size outside the emoji scale", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    try {
      // `xs` and `2xl` are valid on the shared avatar scale
      // (internal/BaseAvatar/types.ts) but not here, and there is no legacy
      // alias to map them onto, so `sizes[size]` is undefined and the element
      // ends up with no dimension class. This asserts on class names — normally
      // a smell — because the defect being pinned *is* the absent class, and the
      // docs page states it. Current behaviour, not intended design.
      const { container } = zeroRender(
        <F0AvatarEmoji {...({ emoji: "🍑", size: "xs" } as Props)} />
      )
      const className = (container.firstChild as HTMLElement).className

      expect(warn).toHaveBeenCalledWith(
        "The emoji size: xs is deprecated. Use undefined instead."
      )
      expect(className).toContain("aspect-square")
      expect(className).not.toMatch(/(^|\s)(w-|h-|size-|rounded)/)
    } finally {
      warn.mockRestore()
    }
  })

  it("does not warn for a supported size", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    try {
      zeroRender(<F0AvatarEmoji emoji="🍑" size="xl" />)

      expect(warn).not.toHaveBeenCalled()
    } finally {
      warn.mockRestore()
    }
  })
})
