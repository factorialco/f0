import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { FormActionBar } from "./ActionBar"

const defaultProps = {
  isActionBar: true,
  isDirty: true,
  actionBarStatus: "idle" as const,
  hasErrors: false,
  errorCount: 0,
  resolvedActionBarLabel: "You have changes pending to be saved",
  submitLabel: "Save",
  submitIcon: undefined,
  discardableChanges: false,
  discardLabel: "Discard",
  discardIcon: undefined,
  issuesOneLabel: "{{count}} issue",
  issuesOtherLabel: "{{count}} issues",
  onSubmit: vi.fn(),
  onDiscard: vi.fn(),
  goToPreviousError: vi.fn(),
  goToNextError: vi.fn(),
}

describe("FormActionBar", () => {
  describe("action-bar mode", () => {
    it("is open when form is dirty", () => {
      render(<FormActionBar {...defaultProps} />)

      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    })

    it("is open during loading status even when not dirty", () => {
      render(
        <FormActionBar
          {...defaultProps}
          isDirty={false}
          actionBarStatus="loading"
          resolvedActionBarLabel="Saving..."
        />
      )

      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    it("is open during success status even when not dirty", () => {
      render(
        <FormActionBar
          {...defaultProps}
          isDirty={false}
          actionBarStatus="success"
          resolvedActionBarLabel="Your changes have been saved"
        />
      )

      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    it("is closed when idle and not dirty", () => {
      render(
        <FormActionBar
          {...defaultProps}
          isDirty={false}
          actionBarStatus="idle"
        />
      )

      expect(
        screen.queryByText("You have changes pending to be saved")
      ).not.toBeInTheDocument()
    })

    it("suppresses status when there are errors", () => {
      const { container } = render(
        <FormActionBar
          {...defaultProps}
          hasErrors={true}
          errorCount={1}
          actionBarStatus="loading"
        />
      )

      expect(screen.getByText("1 issue")).toBeInTheDocument()
      expect(
        container.querySelector('[aria-busy="true"][aria-live="polite"]')
      ).not.toBeInTheDocument()
    })

    it("shows singular issue label for 1 error", () => {
      render(
        <FormActionBar {...defaultProps} hasErrors={true} errorCount={1} />
      )

      expect(screen.getByText("1 issue")).toBeInTheDocument()
    })

    it("shows plural issues label for multiple errors", () => {
      render(
        <FormActionBar {...defaultProps} hasErrors={true} errorCount={3} />
      )

      expect(screen.getByText("3 issues")).toBeInTheDocument()
    })

    it("shows error navigation buttons for multiple errors", () => {
      render(
        <FormActionBar {...defaultProps} hasErrors={true} errorCount={3} />
      )

      expect(
        screen.getByRole("button", { name: "Go to previous error" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Go to next error" })
      ).toBeInTheDocument()
    })

    it("does not show error navigation for a single error", () => {
      render(
        <FormActionBar {...defaultProps} hasErrors={true} errorCount={1} />
      )

      expect(
        screen.queryByRole("button", { name: "Go to previous error" })
      ).not.toBeInTheDocument()
    })

    it("calls goToPreviousError when clicking navigation", async () => {
      const goToPreviousError = vi.fn()
      render(
        <FormActionBar
          {...defaultProps}
          hasErrors={true}
          errorCount={3}
          goToPreviousError={goToPreviousError}
        />
      )

      screen.getByRole("button", { name: "Go to previous error" }).click()
      expect(goToPreviousError).toHaveBeenCalledOnce()
    })

    it("calls goToNextError when clicking navigation", async () => {
      const goToNextError = vi.fn()
      render(
        <FormActionBar
          {...defaultProps}
          hasErrors={true}
          errorCount={3}
          goToNextError={goToNextError}
        />
      )

      screen.getByRole("button", { name: "Go to next error" }).click()
      expect(goToNextError).toHaveBeenCalledOnce()
    })

    it("disables submit button when there are errors", () => {
      render(
        <FormActionBar {...defaultProps} hasErrors={true} errorCount={1} />
      )

      const saveButtons = screen.getAllByRole("button", { name: /save/i })
      saveButtons.forEach((btn) => expect(btn).toBeDisabled())
    })

    it("shows discard button when discardable", () => {
      render(<FormActionBar {...defaultProps} discardableChanges={true} />)

      expect(
        screen.getAllByRole("button", { name: /discard/i }).length
      ).toBeGreaterThan(0)
    })

    it("does not show discard button when not discardable", () => {
      render(<FormActionBar {...defaultProps} discardableChanges={false} />)

      expect(
        screen.queryByRole("button", { name: /discard/i })
      ).not.toBeInTheDocument()
    })

    it("calls onDiscard when clicking discard", () => {
      const onDiscard = vi.fn()
      render(
        <FormActionBar
          {...defaultProps}
          discardableChanges={true}
          onDiscard={onDiscard}
        />
      )

      const discardButtons = screen.getAllByRole("button", {
        name: /discard/i,
      })
      discardButtons[0].click()
      expect(onDiscard).toHaveBeenCalledOnce()
    })
  })

  describe("default submit mode", () => {
    const defaultModeProps = {
      ...defaultProps,
      isActionBar: false,
    }

    it("is closed when idle", () => {
      render(
        <FormActionBar
          {...defaultModeProps}
          actionBarStatus="idle"
          resolvedActionBarLabel="You have changes pending to be saved"
        />
      )

      expect(
        screen.queryByText("You have changes pending to be saved")
      ).not.toBeInTheDocument()
    })

    it("is open during loading status", () => {
      render(
        <FormActionBar
          {...defaultModeProps}
          actionBarStatus="loading"
          resolvedActionBarLabel="Saving..."
        />
      )

      expect(screen.getByText("Saving...")).toBeInTheDocument()
    })

    it("is open during success status", () => {
      render(
        <FormActionBar
          {...defaultModeProps}
          actionBarStatus="success"
          resolvedActionBarLabel="Your changes have been saved"
        />
      )

      expect(
        screen.getByText("Your changes have been saved")
      ).toBeInTheDocument()
    })

    it("does not render submit or discard buttons", () => {
      render(
        <FormActionBar
          {...defaultModeProps}
          actionBarStatus="loading"
          resolvedActionBarLabel="Saving..."
        />
      )

      expect(
        screen.queryByRole("button", { name: /save/i })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /discard/i })
      ).not.toBeInTheDocument()
    })

    it("does not render error content", () => {
      render(
        <FormActionBar
          {...defaultModeProps}
          hasErrors={true}
          errorCount={2}
          actionBarStatus="loading"
          resolvedActionBarLabel="Saving..."
        />
      )

      expect(screen.queryByText("2 issues")).not.toBeInTheDocument()
    })
  })
})
