import { createRef, forwardRef, type SVGProps } from "react"
import { describe, expect, it, vi } from "vitest"

import * as AppIcons from "@/icons/app"
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
    ["critical", "text-f1-icon-critical", true],
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

  describe("icon names", () => {
    it("renders an icon passed as a name", () => {
      const { container } = render(<F0Icon icon="pencil" size="lg" />)
      const bySymbol = render(<F0Icon icon={AppIcons.Pencil} size="lg" />)

      expect(container.innerHTML).toBe(bySymbol.container.innerHTML)
    })

    it("applies size and color to a named icon just like a component", () => {
      render(
        <F0Icon icon="pencil" size="xs" color="critical" aria-label="Edit" />
      )

      const icon = screen.getByLabelText("Edit")
      expect(icon).toHaveClass("w-3", "text-f1-icon-critical")
      expect(icon).toHaveAttribute("data-has-color", "true")
    })

    it("resolves names from the prefixed namespaces", () => {
      const { container } = render(<F0Icon icon="modules:payroll" />)

      expect(container.querySelector("svg")).toBeInTheDocument()
    })

    it("warns and renders nothing for an unknown name", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      // Only reachable from untyped data — TypeScript rejects the literal.
      const { container } = render(<F0Icon icon={"nope" as IconType} />)

      expect(container.querySelector("svg")).not.toBeInTheDocument()
      expect(warn).toHaveBeenCalledWith(
        'F0Icon: the icon "nope" is not supported.'
      )

      warn.mockRestore()
    })

    it("does not treat an inherited Object property as an icon", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      const { container } = render(<F0Icon icon={"toString" as IconType} />)

      expect(container.querySelector("svg")).not.toBeInTheDocument()

      warn.mockRestore()
    })
  })

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
