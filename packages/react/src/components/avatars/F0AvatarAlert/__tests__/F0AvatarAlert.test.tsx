import { beforeEach, describe, expect, it, vi } from "vitest"

import { AlertCircle, CheckCircle, InfoCircle, Warning } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

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
  // Without this, `toHaveBeenCalledWith` can match a call left behind by an
  // earlier test in the file and assert a behaviour the component never had.
  beforeEach(() => {
    vi.clearAllMocks()
  })

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
  })

  describe("Semantic color based on type prop", () => {
    const colorTests = {
      critical: "border-f1-border-critical",
      warning: "border-f1-border-warning",
      info: "border-f1-border-info",
      positive: "border-f1-border-positive",
    } as const

    Object.entries(colorTests).forEach(([type, expectedClass]) => {
      it(`should apply the ${type} semantic color`, () => {
        const { container } = zeroRender(
          <F0AvatarAlert type={type as keyof typeof colorTests} size="md" />
        )

        expect(container.firstChild).toHaveClass(expectedClass)
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
    const iconSizes = ["sm", "md", "lg"] as const

    iconSizes.forEach((size) => {
      it(`should pass correct size to F0Icon for ${size} size`, () => {
        zeroRender(<F0AvatarAlert type="info" size={size} />)

        // Read the mocked icon, not the wrapper: the wrapper's own size classes
        // would keep this green even if `size` were never forwarded to F0Icon.
        expect(screen.getByTestId("mocked-icon")).toHaveAttribute(
          "data-size",
          size
        )
      })
    })
  })
})
