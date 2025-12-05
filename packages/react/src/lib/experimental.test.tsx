import { render, screen } from "@testing-library/react"
import { forwardRef } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { experimentalComponent } from "./experimental"
import { UserPlatformProvider } from "./providers/user-platafform/UserPlatformProvider"

describe("experimentalComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("static property preservation", () => {
    it("should preserve __isPageLayoutBlock marker for forwardRef components", () => {
      const TestBlock = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)
      TestBlock.displayName = "TestBlock"
      // Mark as a valid PageLayoutBlock component
      ;(
        TestBlock as unknown as { __isPageLayoutBlock: boolean }
      ).__isPageLayoutBlock = true

      const WrappedBlock = experimentalComponent("TestBlock", TestBlock)

      expect(
        (WrappedBlock as unknown as { __isPageLayoutBlock: boolean })
          .__isPageLayoutBlock
      ).toBe(true)
    })

    it("should preserve __isPageLayoutGroup marker for forwardRef components", () => {
      const TestGroup = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)
      TestGroup.displayName = "TestGroup"
      // Mark as a valid PageLayoutGroup component
      ;(
        TestGroup as unknown as { __isPageLayoutGroup: boolean }
      ).__isPageLayoutGroup = true

      const WrappedGroup = experimentalComponent("TestGroup", TestGroup)

      expect(
        (WrappedGroup as unknown as { __isPageLayoutGroup: boolean })
          .__isPageLayoutGroup
      ).toBe(true)
    })

    it("should preserve __isPageLayoutGroup marker for regular components", () => {
      const TestGroup = ({ children }: { children?: React.ReactNode }) => (
        <div>{children}</div>
      )
      TestGroup.displayName = "TestGroup"
      // Mark as a valid PageLayoutGroup component
      ;(
        TestGroup as unknown as { __isPageLayoutGroup: boolean }
      ).__isPageLayoutGroup = true

      const WrappedGroup = experimentalComponent("TestGroup", TestGroup)

      expect(
        (WrappedGroup as unknown as { __isPageLayoutGroup: boolean })
          .__isPageLayoutGroup
      ).toBe(true)
    })

    it("should preserve multiple static properties", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)
      TestComponent.displayName = "TestComponent"
      ;(
        TestComponent as unknown as { __isPageLayoutBlock: boolean }
      ).__isPageLayoutBlock = true
      ;(TestComponent as unknown as { customProp: string }).customProp =
        "test-value"

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      expect(
        (WrappedComponent as unknown as { __isPageLayoutBlock: boolean })
          .__isPageLayoutBlock
      ).toBe(true)
      expect(
        (WrappedComponent as unknown as { customProp: string }).customProp
      ).toBe("test-value")
    })

    it("should preserve displayName from original component", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)
      TestComponent.displayName = "OriginalDisplayName"

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      expect(WrappedComponent.displayName).toBe("OriginalDisplayName")
    })

    it("should set displayName to Experimental(name) when original has no displayName", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)
      // No displayName set

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      expect(WrappedComponent.displayName).toBe("Experimental(TestComponent)")
    })

    it("should preserve non-enumerable properties", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)

      // Add a non-enumerable property
      Object.defineProperty(TestComponent, "__isPageLayoutBlock", {
        value: true,
        enumerable: false,
        writable: true,
        configurable: true,
      })

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      expect(
        (WrappedComponent as unknown as { __isPageLayoutBlock: boolean })
          .__isPageLayoutBlock
      ).toBe(true)
    })
  })

  describe("component functionality", () => {
    it("should render forwardRef components correctly", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      render(
        <UserPlatformProvider showExperimentalWarnings={false}>
          <WrappedComponent>Test Content</WrappedComponent>
        </UserPlatformProvider>
      )

      expect(screen.getByText("Test Content")).toBeInTheDocument()
    })

    it("should render regular components correctly", () => {
      const TestComponent = ({ children }: { children?: React.ReactNode }) => (
        <div>{children}</div>
      )

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      render(
        <UserPlatformProvider showExperimentalWarnings={false}>
          <WrappedComponent>Test Content</WrappedComponent>
        </UserPlatformProvider>
      )

      expect(screen.getByText("Test Content")).toBeInTheDocument()
    })

    it("should pass props correctly to wrapped components", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { title: string; children?: React.ReactNode }
      >((props, ref) => (
        <div ref={ref} title={props.title}>
          {props.children}
        </div>
      ))

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      render(
        <UserPlatformProvider showExperimentalWarnings={false}>
          <WrappedComponent title="Test Title">Test Content</WrappedComponent>
        </UserPlatformProvider>
      )

      const element = screen.getByText("Test Content")
      expect(element).toBeInTheDocument()
      expect(element).toHaveAttribute("title", "Test Title")
    })
  })

  describe("experimental warnings", () => {
    it("should track usage when showExperimentalWarnings is true", () => {
      const consoleWarnSpy = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {})
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      render(
        <UserPlatformProvider showExperimentalWarnings={true}>
          <WrappedComponent>Test Content</WrappedComponent>
        </UserPlatformProvider>
      )

      // Fast-forward time to trigger the warning
      vi.advanceTimersByTime(5000)

      expect(consoleWarnSpy).toHaveBeenCalled()
      const warnCall = consoleWarnSpy.mock.calls[0]
      expect(warnCall[0]).toContain("🚧 The")
      expect(warnCall[0]).toContain("TestComponent")
      expect(warnCall[0]).toContain("experimental")

      consoleWarnSpy.mockRestore()
    })

    it("should not track usage when showExperimentalWarnings is false", () => {
      const consoleWarnSpy = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {})
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      render(
        <UserPlatformProvider showExperimentalWarnings={false}>
          <WrappedComponent>Test Content</WrappedComponent>
        </UserPlatformProvider>
      )

      // Fast-forward time
      vi.advanceTimersByTime(5000)

      expect(consoleWarnSpy).not.toHaveBeenCalled()

      consoleWarnSpy.mockRestore()
    })
  })

  describe("property filtering", () => {
    it("should not copy prototype property", () => {
      // Use a function declaration component that has a prototype
      function TestComponent({ children }: { children?: React.ReactNode }) {
        return <div>{children}</div>
      }

      // Add a custom property to verify other properties are copied
      ;(TestComponent as unknown as { customProp: string }).customProp = "test"

      // Store the original prototype to verify it's not copied
      const originalPrototype = TestComponent.prototype

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      // Verify that custom properties are copied
      expect(
        (WrappedComponent as unknown as { customProp: string }).customProp
      ).toBe("test")

      // Verify that prototype is not copied - the wrapper function (arrow function)
      // doesn't have a prototype property, confirming that prototype wasn't copied
      // from the original function component
      expect("prototype" in WrappedComponent).toBe(false)
      // The original component should still have its prototype
      expect(TestComponent.prototype).toBe(originalPrototype)
    })

    it("should not copy render property for forwardRef components", () => {
      const TestComponent = forwardRef<
        HTMLDivElement,
        { children?: React.ReactNode }
      >((props, ref) => <div ref={ref}>{props.children}</div>)

      const WrappedComponent = experimentalComponent(
        "TestComponent",
        TestComponent
      )

      // The wrapped component should have its own render function
      expect((WrappedComponent as any).render).not.toBe(
        (TestComponent as any).render
      )
    })
  })
})
