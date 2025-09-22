import { AlertCircle, CheckCircle, InfoCircle, Warning } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import { F0AvatarAlert } from "../F0AvatarAlert"

// Mock F0Icon component to capture the icon prop
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MockF0Icon = vi.fn(({ icon, size }: { icon: any; size: any }) => {
  return (
    <div
      data-testid="mocked-icon"
      data-icon={icon?.name || "unknown"}
      data-size={size}
    />
  )
})

vi.mock("@/icons/app", () => ({
  AlertCircle: { name: "AlertCircle" },
  CheckCircle: { name: "CheckCircle" },
  InfoCircle: { name: "InfoCircle" },
  Warning: { name: "Warning" },
}))

vi.mock("@/components/F0Icon", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  F0Icon: (props: any) => MockF0Icon(props),
}))

describe("F0AvatarAlert", () => {
  describe("Icon rendering based on type prop", () => {
    const typeTests = [
      { type: "critical", expectedIcon: AlertCircle },
      { type: "warning", expectedIcon: Warning },
      { type: "info", expectedIcon: InfoCircle },
      { type: "positive", expectedIcon: CheckCircle },
    ] as const

    typeTests.forEach(({ type, expectedIcon }) => {
      it(`should render ${expectedIcon.name} icon when type is ${type}`, () => {
        zeroRender(<F0AvatarAlert type={type} size="md" />)

        // Check that F0Icon was called with the correct icon
        expect(MockF0Icon).toHaveBeenCalledWith({
          icon: expectedIcon,
          size: "md",
        })
      })
    })

    it("should use info as default type when not specified", () => {
      zeroRender(<F0AvatarAlert size="md" />)

      // Check that F0Icon was called with the default info icon
      expect(MockF0Icon).toHaveBeenCalledWith({
        icon: InfoCircle,
        size: "md",
      })
    })
  })

  describe("CSS classes based on size prop", () => {
    const sizeTests = {
      sm: ["h-6", "w-6", "rounded-sm"],
      md: ["h-8", "w-8", "rounded"],
      lg: ["h-10", "w-10", "rounded-md"],
    } as const

    Object.entries(sizeTests).forEach(([size, expectedClasses]) => {
      it(`should apply correct classes for ${size} size`, () => {
        const { container } = zeroRender(
          <F0AvatarAlert type="info" size={size} />
        )

        const avatarElement = container.firstChild as HTMLElement

        expectedClasses.forEach((className) => {
          expect(avatarElement).toHaveClass(className)
        })
      })
    })
  })

  describe("Icon size mapping", () => {
    const iconSizeTests = [
      { size: "sm", expectedIconClass: "w-6" },
      { size: "md", expectedIconClass: "w-8" },
      { size: "lg", expectedIconClass: "w-10" },
    ] as const

    iconSizeTests.forEach(({ size, expectedIconClass }) => {
      it(`should pass correct size to F0Icon for ${size} size`, () => {
        zeroRender(<F0AvatarAlert type="info" size={size} />)

        const iconElement = screen.getByRole("alert", { hidden: true })

        expect(iconElement).toHaveClass(expectedIconClass)
      })
    })
  })
})
