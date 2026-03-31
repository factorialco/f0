import { zeroRender as render, screen } from "@/testing/test-utils"
import { createRef } from "react"
import { act } from "react"
import { describe, expect, it, vi } from "vitest"

import { F0ActionBar, F0ActionBarRef } from "."

describe("F0ActionBar status prop", () => {
  const defaultProps = {
    isOpen: true,
    variant: "light" as const,
    primaryActions: [{ label: "Save", onClick: vi.fn() }],
    secondaryActions: [{ label: "Discard", onClick: vi.fn() }],
    label: "Unsaved changes",
  }

  describe("idle status", () => {
    it("renders the label text", () => {
      render(<F0ActionBar {...defaultProps} status="idle" />)

      expect(screen.getByText("Unsaved changes")).toBeInTheDocument()
    })

    it("does not render a status icon", () => {
      const { container } = render(
        <F0ActionBar {...defaultProps} status="idle" />
      )

      expect(
        container.querySelector('[aria-busy="true"][aria-live="polite"]')
      ).not.toBeInTheDocument()
    })

    it("keeps buttons enabled", () => {
      render(<F0ActionBar {...defaultProps} status="idle" />)

      const saveButtons = screen.getAllByRole("button", { name: /save/i })
      saveButtons.forEach((btn) => expect(btn).not.toBeDisabled())
    })
  })

  describe("loading status", () => {
    it("renders the label text", () => {
      render(
        <F0ActionBar {...defaultProps} status="loading" label="Saving..." />
      )

      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    it("disables all primary action buttons", () => {
      render(<F0ActionBar {...defaultProps} status="loading" />)

      const saveButtons = screen.getAllByRole("button", { name: /save/i })
      saveButtons.forEach((btn) => expect(btn).toBeDisabled())
    })

    it("disables secondary action buttons", () => {
      render(<F0ActionBar {...defaultProps} status="loading" />)

      const discardButtons = screen.getAllByRole("button", {
        name: /discard/i,
      })
      discardButtons.forEach((btn) => expect(btn).toBeDisabled())
    })

    it("shows a spinner", () => {
      const { container } = render(
        <F0ActionBar {...defaultProps} status="loading" />
      )

      expect(
        container.querySelector('[aria-busy="true"][aria-live="polite"]')
      ).toBeInTheDocument()
    })
  })

  describe("success status", () => {
    it("renders the label text", () => {
      render(
        <F0ActionBar
          {...defaultProps}
          status="success"
          label="Your changes have been saved"
        />
      )

      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    it("disables all primary action buttons", () => {
      render(<F0ActionBar {...defaultProps} status="success" />)

      const saveButtons = screen.getAllByRole("button", { name: /save/i })
      saveButtons.forEach((btn) => expect(btn).toBeDisabled())
    })

    it("disables secondary action buttons", () => {
      render(<F0ActionBar {...defaultProps} status="success" />)

      const discardButtons = screen.getAllByRole("button", {
        name: /discard/i,
      })
      discardButtons.forEach((btn) => expect(btn).toBeDisabled())
    })
  })

  describe("without status prop", () => {
    it("defaults to idle and keeps buttons enabled", () => {
      render(<F0ActionBar {...defaultProps} />)

      const saveButtons = screen.getAllByRole("button", { name: /save/i })
      saveButtons.forEach((btn) => expect(btn).not.toBeDisabled())
    })
  })

  describe("when isOpen is false", () => {
    it("does not render the action bar content", () => {
      render(<F0ActionBar {...defaultProps} isOpen={false} />)

      expect(screen.queryByText("Unsaved changes")).not.toBeInTheDocument()
    })
  })
})

describe("F0ActionBar wiggle ref", () => {
  const defaultProps = {
    isOpen: true,
    variant: "light" as const,
    primaryActions: [{ label: "Save", onClick: vi.fn() }],
    label: "Unsaved changes",
  }

  it("applies f0-action-bar-error-navigate class when wiggle is called with errorHighlight", () => {
    const ref = createRef<F0ActionBarRef>()
    render(<F0ActionBar {...defaultProps} ref={ref} />)

    act(() => {
      ref.current?.wiggle({ errorHighlight: true })
    })

    const bar = screen.getByText("Unsaved changes").closest("[class*='fixed']")
    expect(bar).toHaveClass("f0-action-bar-error-navigate")
  })

  it("removes f0-action-bar-error-navigate class after 600ms", () => {
    vi.useFakeTimers()
    const ref = createRef<F0ActionBarRef>()
    render(<F0ActionBar {...defaultProps} ref={ref} />)

    act(() => {
      ref.current?.wiggle({ errorHighlight: true })
    })

    const bar = screen.getByText("Unsaved changes").closest("[class*='fixed']")
    expect(bar).toHaveClass("f0-action-bar-error-navigate")

    act(() => {
      vi.advanceTimersByTime(600)
    })

    expect(bar).not.toHaveClass("f0-action-bar-error-navigate")
    vi.useRealTimers()
  })

  it("does nothing when wiggle is called without errorHighlight", () => {
    const ref = createRef<F0ActionBarRef>()
    render(<F0ActionBar {...defaultProps} ref={ref} />)

    act(() => {
      ref.current?.wiggle()
    })

    const bar = screen.getByText("Unsaved changes").closest("[class*='fixed']")
    expect(bar).not.toHaveClass("f0-action-bar-error-navigate")
  })
})
