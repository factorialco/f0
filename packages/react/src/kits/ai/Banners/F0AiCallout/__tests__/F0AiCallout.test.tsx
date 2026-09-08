import { afterEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { Summary } from "@/icons/ai"

import { F0AiCallout } from ".."
import { aiCalloutStatuses } from "../types"

const defaultProps = {
  status: "critical" as const,
  title: "Not reimbursable",
  children: "Gift cards are explicitly listed as never allowed.",
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("F0AiCallout", () => {
  it("renders the title, the body and the byline", () => {
    render(<F0AiCallout {...defaultProps} />)

    expect(screen.getByText("Not reimbursable")).toBeInTheDocument()
    expect(
      screen.getByText("Gift cards are explicitly listed as never allowed.")
    ).toBeInTheDocument()
    expect(screen.getByText("Suggested by One")).toBeInTheDocument()
  })

  it("always renders the byline, and it is not configurable", () => {
    render(<F0AiCallout {...defaultProps} />)

    expect(screen.getByText("Suggested by One")).toBeVisible()
  })

  describe("status", () => {
    it("colours the title with the status token", () => {
      render(<F0AiCallout {...defaultProps} status="warning" />)

      expect(screen.getByText("Not reimbursable")).toHaveClass(
        "text-f1-foreground-warning"
      )
    })

    it("never leaves the title uncoloured for critical", () => {
      // The bug that F0Callout shipped: `critical` fell through the variant
      // maps, so the strongest status was the only one with no colour and no
      // glyph. Assert the fallthrough cannot come back.
      const { container } = render(
        <F0AiCallout {...defaultProps} status="critical" />
      )

      expect(screen.getByText("Not reimbursable")).toHaveClass(
        "text-f1-foreground-critical"
      )
      expect(
        container.querySelector("[aria-hidden='true']")
      ).toBeInTheDocument()
    })

    it("gives every status except neutral a glyph of its own", () => {
      for (const status of aiCalloutStatuses) {
        const { container, unmount } = render(
          <F0AiCallout {...defaultProps} status={status} />
        )

        const glyphs = container.querySelectorAll("[aria-hidden='true']")
        // The byline logo is always one of them; a semantic glyph makes two.
        expect(glyphs.length).toBe(status === "neutral" ? 1 : 2)
        unmount()
      }
    })

    it("warns when neutral carries an action", () => {
      // The rule that keeps `neutral` and `info` apart: if there is something
      // to do, the callout is not neutral. Enforced here because otherwise the
      // two rungs collapse into "grey or blue" and whichever feels calmer wins.
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      render(
        <F0AiCallout
          {...defaultProps}
          status="neutral"
          icon={Summary}
          action={{ label: "Go and look", onClick: vi.fn() }}
        />
      )

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("`neutral` means there is nothing to do")
      )
    })

    it("does not warn when neutral only reports", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      render(<F0AiCallout {...defaultProps} status="neutral" icon={Summary} />)

      expect(warn).not.toHaveBeenCalled()
    })

    it("warns when neutral is used without a content icon", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      render(<F0AiCallout {...defaultProps} status="neutral" />)

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("F0AiCallout: `neutral` carries no semantic")
      )
    })

    it("takes a content icon for neutral without warning", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      const { container } = render(
        <F0AiCallout {...defaultProps} status="neutral" icon={Summary} />
      )

      expect(warn).not.toHaveBeenCalled()
      expect(container.querySelectorAll("[aria-hidden='true']").length).toBe(2)
    })
  })

  describe("action", () => {
    it("renders the action and fires it", async () => {
      const onClick = vi.fn()
      render(
        <F0AiCallout
          {...defaultProps}
          action={{ label: "Request repayment", onClick }}
        />
      )

      const buttons = screen.getAllByRole("button")
      expect(buttons).toHaveLength(1)

      await userEvent.click(
        screen.getByRole("button", { name: "Request repayment" })
      )
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("puts the override before the recommended move, and ghosts it", async () => {
      const reject = vi.fn()
      const approve = vi.fn()
      render(
        <F0AiCallout
          {...defaultProps}
          action={{ label: "Reject", onClick: reject }}
          secondaryAction={{ label: "Approve anyway", onClick: approve }}
        />
      )

      const override = screen.getByRole("button", { name: "Approve anyway" })
      const recommended = screen.getByRole("button", { name: "Reject" })

      // The recommended move comes last, so it reads as the end of the
      // sentence rather than competing with its own way out.
      expect(
        override.compareDocumentPosition(recommended) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
      // Ghost against outline: the pair has to read as a hierarchy.
      expect(override.className).toContain("bg-transparent")
      expect(recommended.className).not.toContain("bg-transparent")

      await userEvent.click(override)
      expect(approve).toHaveBeenCalledTimes(1)
      expect(reject).not.toHaveBeenCalled()
    })

    it("keeps the byline row when there is no action", () => {
      render(<F0AiCallout {...defaultProps} />)

      expect(screen.getByText("Suggested by One")).toBeInTheDocument()
      expect(screen.queryAllByRole("button")).toHaveLength(0)
    })

    it("honours a disabled action", () => {
      render(
        <F0AiCallout
          {...defaultProps}
          action={{ label: "Review", onClick: vi.fn(), disabled: true }}
        />
      )

      expect(screen.getByRole("button", { name: "Review" })).toBeDisabled()
    })
  })

  describe("dismissing", () => {
    it("renders the close button only when onClose is given", async () => {
      const onClose = vi.fn()
      const { rerender } = render(<F0AiCallout {...defaultProps} />)
      expect(screen.queryByRole("button", { name: "Close" })).toBeNull()

      rerender(<F0AiCallout {...defaultProps} onClose={onClose} />)
      await userEvent.click(screen.getByRole("button", { name: "Close" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe("accessibility", () => {
    it("announces politely and never as an alert, even when critical", () => {
      // An assessment by a machine is not a system emergency. Because
      // the byline is always rendered, this holds for every possible callout.
      render(<F0AiCallout {...defaultProps} status="critical" />)

      const region = screen.getByRole("status")
      expect(region).toHaveAttribute("aria-live", "polite")
      expect(screen.queryByRole("alert")).toBeNull()
    })
  })

  describe("stacked", () => {
    const findings = [
      {
        id: "duplicate",
        title: "Possible duplicate",
        description: "A similar invoice already exists for this vendor.",
        action: { label: "Review duplicate", onClick: vi.fn() },
      },
      {
        id: "tax",
        title: "Tax mismatch",
        description: "The VAT does not match the expected rate.",
        action: { label: "Review tax", onClick: vi.fn() },
      },
    ]

    const stackedProps = {
      status: "critical" as const,
      title: "Issues to resolve",
    }

    it("renders every finding with its own action", () => {
      render(<F0AiCallout {...stackedProps} findings={findings} />)

      expect(screen.getByText("Possible duplicate")).toBeInTheDocument()
      expect(screen.getByText("Tax mismatch")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Review duplicate" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Review tax" })
      ).toBeInTheDocument()
    })

    it("fires the action of the finding it belongs to, not the first one", async () => {
      const onDuplicate = vi.fn()
      const onTax = vi.fn()
      render(
        <F0AiCallout
          {...stackedProps}
          findings={[
            { ...findings[0]!, action: { label: "A", onClick: onDuplicate } },
            { ...findings[1]!, action: { label: "B", onClick: onTax } },
          ]}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: "B" }))

      expect(onTax).toHaveBeenCalledTimes(1)
      expect(onDuplicate).not.toHaveBeenCalled()
    })

    it("shows the byline once, in the header, not per finding", () => {
      render(<F0AiCallout {...stackedProps} findings={findings} />)

      expect(screen.getAllByText("Suggested by One")).toHaveLength(1)
    })

    it("keeps one tint for the whole evaluation, not one per finding", () => {
      // One callout is one evaluation with one severity, however many findings
      // hang off it. Mixed severity is two callouts, not one with two colours.
      const { container } = render(
        <F0AiCallout {...stackedProps} findings={findings} />
      )

      expect(
        container.querySelectorAll(".bg-f1-background-critical")
      ).toHaveLength(1)
    })

    it("never folds the headline finding away, and shows a deck edge instead", async () => {
      // Asserting on presence rather than visibility on purpose: jsdom's
      // `toBeVisible` does not resolve inline `visibility`, so a hidden-but-
      // mounted implementation would pass a visibility assertion.
      const { container } = render(
        <F0AiCallout {...stackedProps} findings={findings} />
      )
      expect(container.querySelector("div[aria-hidden='true']")).toBeNull()

      await userEvent.click(
        screen.getByRole("button", { name: "Collapse Issues to resolve" })
      )

      expect(screen.getByText("Possible duplicate")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Review duplicate" })
      ).toBeInTheDocument()
      expect(screen.queryByText("Tax mismatch")).not.toBeInTheDocument()
      // The deck edge is what makes folded read as "there are more of these"
      // rather than "this is the only one". Selected structurally: it is the only
      // aria-hidden *div* (the glyphs are svgs, the separator a span), because
      // the first version of this test matched on `.mx-3` and broke the moment
      // the inset changed.
      expect(
        container.querySelector("div[aria-hidden='true']")
      ).toBeInTheDocument()
    })

    it("piles up an edge per hidden finding, capped at two", () => {
      // Folded, the findings should read as a pile of individual cards rather
      // than as one card with something vague behind it. Past two edges the
      // illusion stops paying for itself, so the cap is deliberate and the
      // count is not its job.
      const edges = (root: HTMLElement) =>
        root.querySelectorAll("div[aria-hidden='true']").length

      const one = render(
        <F0AiCallout
          {...stackedProps}
          defaultOpen={false}
          findings={findings}
        />
      )
      expect(edges(one.container)).toBe(1)
      one.unmount()

      const many = render(
        <F0AiCallout
          {...stackedProps}
          defaultOpen={false}
          findings={[
            ...findings,
            { ...findings[0]!, id: "third", title: "Third" },
            { ...findings[0]!, id: "fourth", title: "Fourth" },
          ]}
        />
      )
      expect(edges(many.container)).toBe(2)
    })

    it("starts folded when asked, and the toggle label follows the state", async () => {
      render(
        <F0AiCallout
          {...stackedProps}
          defaultOpen={false}
          findings={findings}
        />
      )

      const toggle = screen.getByRole("button", {
        name: "Expand Issues to resolve",
      })
      expect(screen.queryByText("Tax mismatch")).not.toBeInTheDocument()

      await userEvent.click(toggle)

      expect(screen.getByText("Tax mismatch")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Collapse Issues to resolve" })
      ).toHaveAttribute("aria-expanded", "true")
    })

    it("keeps the stacked shell for a single finding but drops the toggle and the deck", () => {
      const { container } = render(
        <F0AiCallout {...stackedProps} findings={[findings[0]!]} />
      )

      // An evaluation that has had all but one finding resolved should not
      // change shape — the header byline survives. But there is nothing left to
      // fold, so a toggle would promise a change it cannot deliver and a deck
      // edge would claim cards that are not there.
      expect(screen.getByText("Suggested by One")).toBeInTheDocument()
      expect(screen.getByText("Possible duplicate")).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /Collapse|Expand/ })
      ).toBeNull()
      expect(container.querySelector("div[aria-hidden='true']")).toBeNull()
      expect(screen.getAllByRole("button")).toHaveLength(1)
    })

    it("offers no close button while stacked", () => {
      render(<F0AiCallout {...stackedProps} findings={findings} />)

      expect(screen.queryByRole("button", { name: "Close" })).toBeNull()
    })

    it("warns and renders nothing at all when findings is empty", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      const { container } = render(
        <F0AiCallout {...stackedProps} findings={[]} />
      )

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("F0AiCallout: `findings` is empty")
      )
      // Not just "no buttons": the shell must not render either, or a critical
      // pill reading like a verdict lands on the page with nothing under it —
      // and a live region announces it.
      expect(container).toBeEmptyDOMElement()
      expect(screen.queryByRole("status")).toBeNull()
    })

    it("warns when evidence has no items", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      render(
        <F0AiCallout
          {...defaultProps}
          evidence={{ name: "the 5 checks", items: [] }}
        />
      )

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("F0AiCallout: `evidence` has no items")
      )
      // Still a complete verdict, so unlike empty `findings` it renders — it
      // just has no toggle.
      expect(screen.getByText("Not reimbursable")).toBeVisible()
      expect(screen.queryByRole("button", { name: /the 5 checks/ })).toBeNull()
    })

    it("says nothing in a production build", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
      vi.stubEnv("NODE_ENV", "production")

      try {
        // Two violations at once: `neutral` with an action and no icon.
        render(
          <F0AiCallout
            status="neutral"
            title="Summary"
            action={{ label: "Review", onClick: () => {} }}
          >
            A device history.
          </F0AiCallout>
        )

        expect(warn).not.toHaveBeenCalled()
      } finally {
        vi.unstubAllEnvs()
      }
    })

    it("warns once per violation, not once per render", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      const { rerender } = render(
        <F0AiCallout status="neutral" title="Summary">
          A device history.
        </F0AiCallout>
      )

      const afterMount = warn.mock.calls.length

      for (let i = 0; i < 5; i++) {
        rerender(
          <F0AiCallout status="neutral" title="Summary">
            A device history.
          </F0AiCallout>
        )
      }

      expect(warn.mock.calls.length).toBe(afterMount)
    })

    it("lets the caller drive the state", async () => {
      const onOpenChange = vi.fn()
      render(
        <F0AiCallout
          {...stackedProps}
          open={false}
          onOpenChange={onOpenChange}
          findings={findings}
        />
      )

      expect(screen.queryByText("Tax mismatch")).not.toBeInTheDocument()

      await userEvent.click(
        screen.getByRole("button", { name: "Expand Issues to resolve" })
      )

      expect(onOpenChange).toHaveBeenCalledWith(true)
      // Still folded: the caller owns the state and has not changed it.
      expect(screen.queryByText("Tax mismatch")).not.toBeInTheDocument()
    })
  })

  it("forwards data attributes", () => {
    const { container } = render(
      <F0AiCallout {...defaultProps} data-foo="bar" />
    )

    expect(container.querySelector("[data-foo='bar']")).toBeInTheDocument()
  })

  it("exposes a skeleton that announces itself as busy", () => {
    const { container } = render(<F0AiCallout.Skeleton />)

    expect(container.querySelector("[aria-busy='true']")).toBeInTheDocument()
  })

  it("numbers the evidence when it is a plan", async () => {
    const { container } = render(
      <F0AiCallout
        status="info"
        title="One drafted a resolution plan"
        defaultOpen
        evidence={{
          name: "the 6 steps",
          kind: "steps",
          items: [<span key="a">Order a laptop</span>],
        }}
      >
        Six steps.
      </F0AiCallout>
    )

    const list = container.querySelector("ol")
    expect(list).toHaveClass("list-decimal")
    expect(container.querySelector("ul")).toBeNull()
  })

  it("keeps the bullets for a rationale", async () => {
    const { container } = render(
      <F0AiCallout
        status="warning"
        title="Requires review"
        defaultOpen
        evidence={{
          name: "the 3 policy checks",
          items: [<span key="a">Receipt verified</span>],
        }}
      >
        Three checks failed.
      </F0AiCallout>
    )

    const list = container.querySelector("ul")
    expect(list).toHaveClass("list-disc")
    expect(list).not.toHaveClass("list-none")
  })

  it("starts a rationale folded", async () => {
    render(
      <F0AiCallout
        status="warning"
        title="Requires review"
        evidence={{
          name: "the 3 checks",
          items: [<span key="a">Receipt verified</span>],
        }}
      >
        Three checks failed.
      </F0AiCallout>
    )

    expect(
      screen.getByRole("button", { name: "See the 3 checks" })
    ).toBeVisible()
    expect(screen.queryByText("Receipt verified")).not.toBeInTheDocument()
  })

  it("starts a stack open", async () => {
    render(
      <F0AiCallout
        status="warning"
        title="3 issues found"
        findings={[
          { id: "a", title: "First", description: "One" },
          { id: "b", title: "Second", description: "Two" },
        ]}
      />
    )

    expect(screen.getByText("Second")).toBeVisible()
  })

  it("changes only the verb of the disclosure when it opens", async () => {
    render(
      <F0AiCallout
        status="warning"
        title="Rejection recommended"
        evidence={{
          name: "the 5 checks",
          items: [<span key="a">Receipt verified</span>],
        }}
      >
        Two checks failed.
      </F0AiCallout>
    )

    const trigger = screen.getByRole("button", { name: "See the 5 checks" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")

    await userEvent.click(trigger)

    const open = screen.getByRole("button", { name: "Hide the 5 checks" })
    expect(open).toHaveAttribute("aria-expanded", "true")
    expect(
      screen.queryByRole("button", { name: "See the 5 checks" })
    ).not.toBeInTheDocument()
  })
})
