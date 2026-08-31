import { createRef, forwardRef, type SVGProps } from "react"
import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Icon, type IconType } from "../index"

interface TestIconProps extends SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const StaticIcon: IconType = forwardRef<SVGSVGElement, TestIconProps>(
  function StaticIcon(props, ref) {
    return (
      <svg ref={ref} role="img" {...props}>
        <path d="M0 0h10v10H0z" />
      </svg>
    )
  }
)

const AnimatedIcon: IconType = forwardRef<SVGSVGElement, TestIconProps>(
  function TestAnimatedIcon({ animate, ...props }, ref) {
    return (
      <svg ref={ref} role="img" data-animation-state={animate} {...props}>
        <path d="M0 0h10v10H0z" />
      </svg>
    )
  }
)
AnimatedIcon.displayName = "TestAnimatedIcon"

describe("F0Icon", () => {
  it("uses the medium size and current text color by default", () => {
    render(<F0Icon icon={StaticIcon} aria-label="Default icon" />)

    const icon = screen.getByLabelText("Default icon")
    expect(icon).toHaveClass("aspect-square", "inline-block", "shrink-0", "w-5")
    expect(icon).toHaveClass("text-current")
    expect(icon).not.toHaveAttribute("data-has-color")
  })

  it.each([
    ["xs", "w-3", "[&_path]:stroke-xs"],
    ["sm", "w-4", "[&_path]:stroke-sm"],
    ["md", "w-5", "[&_path]:stroke-md"],
    ["lg", "w-6", "[&_path]:stroke-lg"],
  ] as const)(
    "applies the %s size classes",
    (size, widthClass, strokeClass) => {
      render(
        <F0Icon icon={StaticIcon} size={size} aria-label={`${size} icon`} />
      )

      expect(screen.getByLabelText(`${size} icon`)).toHaveClass(
        widthClass,
        strokeClass
      )
    }
  )

  it.each([
    ["currentColor", "text-current", false],
    ["default", "text-f1-icon", true],
    ["secondary", "text-f1-icon-secondary", true],
    ["inverse", "text-f1-icon-inverse", true],
    ["bold", "text-f1-icon-bold", true],
    ["critical", "text-f1-icon-critical", true],
    ["critical-bold", "text-f1-icon-critical-bold", true],
    ["accent", "text-f1-icon-accent", true],
    ["info", "text-f1-icon-info", true],
    ["warning", "text-f1-icon-warning", true],
    ["positive", "text-f1-icon-positive", true],
    ["promote", "text-f1-icon-promote", true],
    ["selected", "text-f1-icon-selected", true],
    ["selected-hover", "text-f1-icon-selected-hover", true],
    ["mood-super-negative", "text-f1-icon-mood-super-negative", true],
    ["mood-negative", "text-f1-icon-mood-negative", true],
    ["mood-neutral", "text-f1-icon-mood-neutral", true],
    ["mood-positive", "text-f1-icon-mood-positive", true],
    ["mood-super-positive", "text-f1-icon-mood-super-positive", true],
  ] as const)(
    "maps the %s color to its token class",
    (color, colorClass, hasColor) => {
      render(
        <F0Icon icon={StaticIcon} color={color} aria-label={`${color} icon`} />
      )

      const icon = screen.getByLabelText(`${color} icon`)
      expect(icon).toHaveClass(colorClass)
      if (hasColor) {
        expect(icon).toHaveAttribute("data-has-color", "true")
      } else {
        expect(icon).not.toHaveAttribute("data-has-color")
      }
    }
  )

  it("applies a hex color directly to the SVG", () => {
    render(
      <F0Icon
        icon={StaticIcon}
        color="#123456"
        aria-label="Custom color icon"
      />
    )

    const icon = screen.getByLabelText("Custom color icon")
    expect(icon).toHaveStyle({ color: "#123456" })
    expect(icon).toHaveAttribute("data-has-color", "true")
  })

  it("uses the static icon path without forwarding animation state", () => {
    render(
      <F0Icon icon={StaticIcon} state="animate" aria-label="Static icon" />
    )

    const icon = screen.getByLabelText("Static icon")
    expect(icon).toHaveClass("aspect-square")
    expect(icon).not.toHaveClass("select-none")
    expect(icon).not.toHaveAttribute("animate")
    expect(icon).not.toHaveAttribute("data-animation-state")
  })

  it.each([
    ["default", undefined, "normal"],
    ["animate", "animate", "animate"],
  ] as const)(
    "forwards the %s state to animated icons",
    (name, state, expectedState) => {
      render(
        <F0Icon
          icon={AnimatedIcon}
          state={state}
          aria-label={`${name} animated icon`}
        />
      )

      const icon = screen.getByLabelText(`${name} animated icon`)
      expect(icon).toHaveAttribute("data-animation-state", expectedState)
      expect(icon).toHaveClass("select-none")
      expect(icon).not.toHaveClass("aspect-square")
    }
  )

  it("forwards SVG attributes, refs, and the public data test id", () => {
    const ref = createRef<SVGSVGElement>()

    render(
      <F0Icon
        ref={ref}
        icon={StaticIcon}
        aria-label="Referenced icon"
        focusable="false"
        dataTestId="interactive-icon"
      />
    )

    const icon = screen.getByLabelText("Referenced icon")
    expect(icon).toHaveAttribute("focusable", "false")
    expect(ref.current).toBe(icon)
    expect(screen.getByTestId("interactive-icon")).toContainElement(icon)
  })
})
