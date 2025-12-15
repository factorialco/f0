import { UserPlatformProvider } from "@/lib/providers/user-platafform"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { OneRestrictComponent } from "."

// Mock window.location
const mockLocation = (pathname: string) => {
  Object.defineProperty(window, "location", {
    value: { pathname },
    writable: true,
  })
}

describe("RestrictComponent", () => {
  const TestContent = () => <div>Test Content</div>

  beforeEach(() => {
    // Reset window.location before each test
    mockLocation("/")
  })

  it("renders children when no restrictions are provided", () => {
    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component">
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("renders children when current path is in allowedRoutes", () => {
    mockLocation("/allowed-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component" allowedRoutes={["/allowed-path"]}>
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("does not render children when current path is not in allowedRoutes", () => {
    mockLocation("/not-allowed-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component" allowedRoutes={["/allowed-path"]}>
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument()
  })

  it("renders children when current path is not in disallowedRoutes", () => {
    mockLocation("/allowed-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component" disallowedRoutes={["/disallowed-path"]}>
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("does not render children when current path is in disallowedRoutes", () => {
    mockLocation("/disallowed-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component" disallowedRoutes={["/disallowed-path"]}>
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument()
  })

  it("prioritizes allowedRoutes over disallowedRoutes", () => {
    mockLocation("/test-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent
          identifier="test-component"
          allowedRoutes={["/test-path"]}
          disallowedRoutes={["/test-path"]}
        >
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("handles empty arrays for both allowedRoutes and disallowedRoutes", () => {
    mockLocation("/any-path")

    render(
      <UserPlatformProvider isDev>
        <OneRestrictComponent identifier="test-component" allowedRoutes={[]} disallowedRoutes={[]}>
          <TestContent />
        </OneRestrictComponent>
      </UserPlatformProvider>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })
})
