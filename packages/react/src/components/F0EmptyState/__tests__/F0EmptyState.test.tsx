import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { F0EmptyState } from "../F0EmptyState"

describe("F0EmptyState", () => {
  it("renders the title, and the description only when passed", () => {
    const { rerender } = zeroRender(<F0EmptyState title="No items yet" />)

    expect(screen.getByText("No items yet")).toBeInTheDocument()

    rerender(
      <F0EmptyState title="No items yet" description="Add your first item." />
    )
    expect(screen.getByText("Add your first item.")).toBeInTheDocument()
  })

  it("renders the emoji avatar for the default variant", () => {
    zeroRender(<F0EmptyState title="No items yet" emoji="📄" />)

    expect(screen.getByAltText("📄")).toBeInTheDocument()
  })

  it("falls back to a neutral emoji when the default variant gets none", () => {
    zeroRender(<F0EmptyState title="No items yet" />)

    expect(screen.getByAltText("🤔")).toBeInTheDocument()
  })

  it("renders the alert avatar instead of the emoji for alert variants", () => {
    const { container } = zeroRender(
      <F0EmptyState variant="warning" title="We couldn't load the data" />
    )

    expect(container.querySelector("img")).not.toBeInTheDocument()
    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  it("renders one button per action and fires that entry's onClick", async () => {
    const onRetry = vi.fn()
    const onBack = vi.fn()
    zeroRender(
      <F0EmptyState
        title="No items yet"
        actions={[
          { label: "Retry", onClick: onRetry },
          { label: "Go back", onClick: onBack, variant: "outline" },
        ]}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: "Retry" }))

    expect(onRetry).toHaveBeenCalledOnce()
    expect(onBack).not.toHaveBeenCalled()
    expect(screen.getAllByRole("button")).toHaveLength(2)
  })

  it("renders an upsell action as an upselling button and calls its handler", async () => {
    const onUpsell = vi.fn()
    zeroRender(
      <F0EmptyState
        title="Upgrade to unlock"
        actions={[
          {
            label: "Request information",
            onClick: onUpsell,
            type: "upsell",
            errorMessage: { title: "Error", description: "Went wrong" },
            successMessage: {
              title: "Success",
              description: "Went right",
              buttonLabel: "Close",
              buttonOnClick: vi.fn(),
            },
            loadingState: { label: "Loading..." },
            nextSteps: { title: "Next steps", items: [{ text: "Step 1" }] },
            closeLabel: "Close",
          },
        ]}
      />
    )

    await userEvent.click(
      screen.getByRole("button", { name: "Request information" })
    )

    expect(onUpsell).toHaveBeenCalledOnce()
  })

  it("forwards dataTestId", () => {
    zeroRender(<F0EmptyState title="No items yet" dataTestId="empty-state" />)

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
  })

  it("keeps the deprecated OneEmptyState alias pointing at F0EmptyState", async () => {
    // Dynamic import: this suite exists specifically to verify the deprecated
    // re-export, which consumers still rely on after the rename.
    const barrel = await import("../index")

    expect(barrel.OneEmptyState).toBe(F0EmptyState)
  })
})
