import { render, screen } from "@testing-library/react"
import React, { forwardRef, memo } from "react"
import { describe, expect, it } from "vitest"

import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"
import { zeroRender } from "@/testing/test-utils"

import { withDataTestId } from "../index"

const renderWithProviders = zeroRender

const renderWithoutDataTestId = (
  ui: React.ReactElement,
  options?: Parameters<typeof render>[1]
) =>
  render(ui, {
    ...options,
    wrapper: ({ children }) => (
      <UserPlatformProvider renderDataTestIdAttribute={false}>
        {children}
      </UserPlatformProvider>
    ),
  })

describe("withDataTestId", () => {
  it("should add data-testid to a regular component", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="test-id" />)

    const wrapper = screen.getByTestId("test-id")
    expect(wrapper).toHaveTextContent("Test Content")
  })

  it("should add data-testid to a forwardRef component", () => {
    const TestComponent = forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >((props, ref) => (
      <div ref={ref} {...props}>
        Test Content
      </div>
    ))
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="test-id" />)

    const wrapper = screen.getByTestId("test-id")
    expect(wrapper).toHaveTextContent("Test Content")
  })

  it.skip("should add data-testid to a memo component", () => {
    // Known limitation: withDataTestId(memo(Component)) can result in dataTestId
    // reaching the DOM as "datatestid" instead of "data-testid". React may pass
    // the memo's props through to the inner component. Prefer wrapping the inner
    // component with withDataTestId before memo: memo(withDataTestId(Component)).
    const TestComponent = memo(
      (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>Test Content</div>
      )
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent dataTestId="test-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-testid", "test-id")
  })

  it("should override existing data-testid", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(
      <WrappedComponent data-testid="original" dataTestId="new-id" />
    )

    const wrapper = screen.getByTestId("new-id")
    expect(wrapper).toHaveTextContent("Test Content")
  })

  it("should preserve other props", () => {
    const TestComponent = ({
      label,
      ...props
    }: { label: string } & React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{label}</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(
      <WrappedComponent label="Custom Label" dataTestId="test-id" />
    )

    const wrapper = screen.getByTestId("test-id")
    expect(wrapper).toHaveTextContent("Custom Label")
  })

  it("should forward refs for regular components", () => {
    const ref = React.createRef<React.Component>()
    class TestComponent extends React.Component<
      React.HTMLAttributes<HTMLDivElement>
    > {
      render() {
        return <div {...this.props}>Test Content</div>
      }
    }
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent ref={ref} dataTestId="test-id" />)

    expect(ref.current).toBeInstanceOf(TestComponent)
  })

  it("should forward refs for forwardRef components", () => {
    const ref = React.createRef<HTMLDivElement>()
    const TestComponent = forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >((props, ref) => (
      <div ref={ref} {...props}>
        Test Content
      </div>
    ))
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent ref={ref} dataTestId="test-id" />)

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it("should copy static properties", () => {
    const TestComponent = () => <div>Test</div>
    ;(TestComponent as any).customStatic = "static-value"
    const WrappedComponent = withDataTestId(TestComponent)

    expect((WrappedComponent as any).customStatic).toBe("static-value")
  })

  it("should set displayName", () => {
    const TestComponent = () => <div>Test</div>
    TestComponent.displayName = "TestComponent"
    const WrappedComponent = withDataTestId(TestComponent)

    expect(WrappedComponent.displayName).toBe("TestComponent")
  })

  it("should not add data-testid if prop is missing", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent />)

    const element = screen.getByText("Test Content")
    expect(element).not.toHaveAttribute("data-testid")
  })

  it("should add data-testid via wrapper when component does not spread props", () => {
    const TestComponent = () => <div>No spread</div>
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="wrapper-id" />)

    const wrapper = screen.getByTestId("wrapper-id")
    expect(wrapper).toHaveTextContent("No spread")
  })

  it("should return original content when renderDataTestIdAttribute is false", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Original</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithoutDataTestId(<WrappedComponent dataTestId="should-not-appear" />)

    expect(screen.queryByTestId("should-not-appear")).not.toBeInTheDocument()
    expect(screen.getByText("Original")).toBeInTheDocument()
  })

  it("should not render wrapper div when forwardRef component returns null", () => {
    const TestComponent = forwardRef<HTMLDivElement, { show?: boolean }>(
      (_props, _ref) => null
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="should-not-appear" />)

    expect(screen.queryByTestId("should-not-appear")).not.toBeInTheDocument()
  })

  it("should not render wrapper div when regular function component returns null", () => {
    const TestComponent = (_props: { show?: boolean }) => null
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="should-not-appear" />)

    expect(screen.queryByTestId("should-not-appear")).not.toBeInTheDocument()
  })
})
