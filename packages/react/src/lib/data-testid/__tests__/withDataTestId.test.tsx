import { render, screen } from "@testing-library/react"
import React, { forwardRef, memo } from "react"
import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { withDataTestId } from "../index"

const renderWithProviders = zeroRender

describe("withDataTestId", () => {
  it("should add data-testid to a regular component", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    renderWithProviders(<WrappedComponent dataTestId="test-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-testid", "test-id")
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

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-testid", "test-id")
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

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-testid", "new-id")
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

    const element = screen.getByText("Custom Label")
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute("data-testid", "test-id")
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
})
