import { screen } from "@testing-library/react"
import React, { forwardRef, memo } from "react"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { withDataTestId } from "../index"

describe("withDataTestId", () => {
  it("should add data-test-id to a regular component", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent dataTestId="test-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-test-id", "test-id")
  })

  it("should add data-test-id to a forwardRef component", () => {
    const TestComponent = forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >((props, ref) => (
      <div ref={ref} {...props}>
        Test Content
      </div>
    ))
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent dataTestId="test-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-test-id", "test-id")
  })

  it("should add data-test-id to a memo component", () => {
    const TestComponent = memo(
      (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>Test Content</div>
      )
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent dataTestId="test-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-test-id", "test-id")
  })

  it("should override existing data-test-id", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent data-test-id="original" dataTestId="new-id" />)

    const element = screen.getByText("Test Content")
    expect(element).toHaveAttribute("data-test-id", "new-id")
  })

  it("should preserve other props", () => {
    const TestComponent = ({
      label,
      ...props
    }: { label: string } & React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{label}</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent label="Custom Label" dataTestId="test-id" />)

    const element = screen.getByText("Custom Label")
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute("data-test-id", "test-id")
  })

  it("should forward refs for regular components", () => {
    const ref = React.createRef<HTMLDivElement>()
    class TestComponent extends React.Component<
      React.HTMLAttributes<HTMLDivElement>
    > {
      render() {
        return <div {...this.props}>Test Content</div>
      }
    }
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent ref={ref} dataTestId="test-id" />)

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
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

    render(<WrappedComponent ref={ref} dataTestId="test-id" />)

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

    expect(WrappedComponent.displayName).toBe("withDataTestId(TestComponent)")
  })

  it("should not add data-test-id if prop is missing", () => {
    const TestComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>Test Content</div>
    )
    const WrappedComponent = withDataTestId(TestComponent)

    render(<WrappedComponent />)

    const element = screen.getByText("Test Content")
    expect(element).not.toHaveAttribute("data-test-id")
  })
})
