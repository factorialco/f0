import { beforeEach, describe, expect, it, vi } from "vitest"
import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"

import { DashboardItem } from "../components/DashboardItem/DashboardItem"

describe("DashboardItem", () => {
  it("renders title and children", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Chart content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Revenue")).toBeInTheDocument()
    expect(screen.getByText("Chart content")).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        description="Monthly revenue"
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Monthly revenue")).toBeInTheDocument()
  })

  it("shows skeleton instead of children when loading", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={true}
        skeleton={<div>Loading skeleton</div>}
      >
        <div>Real content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Loading skeleton")).toBeInTheDocument()
    expect(screen.queryByText("Real content")).not.toBeInTheDocument()
  })

  it("renders error state with retry button", () => {
    const onRetry = vi.fn()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        error={new Error("Failed to load")}
        onRetry={onRetry}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Error loading data")).toBeInTheDocument()
    expect(screen.getByText("Failed to load")).toBeInTheDocument()
  })

  it("renders actions dropdown when actions are provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        actions={[{ label: "Delete", onClick: vi.fn() }]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByLabelText("Other actions")).toBeInTheDocument()
  })

  it("does not render actions dropdown when no actions", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.queryByLabelText("Other actions")).not.toBeInTheDocument()
  })

  it("renders the maximize button when onFullscreenChange is provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        onFullscreenChange={vi.fn()}
      >
        <div>Content</div>
      </DashboardItem>
    )

    // DashboardGrid uses `onFullscreenChange` as the opt-in for the
    // maximize affordance; when a single-item dashboard locks fullscreen
    // it omits the prop so the button goes away.
    expect(screen.getByLabelText("Expand")).toBeInTheDocument()
  })

  it("hides the maximize button when onFullscreenChange is omitted (single-item lock)", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false} isFullscreen>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.queryByLabelText("Expand")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Collapse")).not.toBeInTheDocument()
  })
})

describe("DashboardItem — description action", () => {
  it("renders the action as a button beside the description and calls it", async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Salary by workplace"
        description="Showing 6 of 29 categories"
        descriptionAction={{ label: "Show all", onClick }}
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Showing 6 of 29 categories")).toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Show all" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("hides the separator from the accessibility tree", () => {
    render(
      <DashboardItem
        title="Salary by workplace"
        description="Showing 6 of 29 categories"
        descriptionAction={{ label: "Show all", onClick: vi.fn() }}
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    // The dot joins two independent things; it must not read as part of either.
    const separator = screen.getByText("·")
    expect(separator).toHaveAttribute("aria-hidden", "true")
  })

  it("renders the action alone when there is no description", () => {
    render(
      <DashboardItem
        title="Salary by workplace"
        descriptionAction={{ label: "Show less", onClick: vi.fn() }}
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(
      screen.getByRole("button", { name: "Show less" })
    ).toBeInTheDocument()
    expect(screen.queryByText("·")).not.toBeInTheDocument()
  })

  describe("Ask One", () => {
    // The chat's open state is persisted, so without this a test inherits
    // whatever the previous one left behind — and "did the click open it?"
    // stops meaning anything.
    beforeEach(() => localStorage.clear())

    const QuoteProbe = () => {
      const { pendingQuote, open } = useAiChat()
      return (
        <span
          data-testid="probe"
          data-quote={pendingQuote?.text ?? ""}
          data-open={String(open)}
        />
      )
    }

    const openMenu = async () =>
      userEvent.click(screen.getByLabelText("Other actions"))

    it("offers the action and hands the widget to the chat", async () => {
      const onFullscreenChange = vi.fn()
      render(
        <AiChatStateProvider enabled>
          <QuoteProbe />
          <DashboardItem
            title="Headcount by workplace"
            isLoading={false}
            isFullscreen
            onFullscreenChange={onFullscreenChange}
          >
            <div>Content</div>
          </DashboardItem>
        </AiChatStateProvider>
      )

      await openMenu()
      await userEvent.click(screen.getByText("Ask One"))

      const probe = screen.getByTestId("probe")
      expect(probe).toHaveAttribute("data-quote", "Headcount by workplace")
      // Opens the chat too — otherwise the quote lands somewhere unseen.
      expect(probe).toHaveAttribute("data-open", "true")
      expect(onFullscreenChange).toHaveBeenCalledWith(false)
    })

    it("is absent without a chat provider, where the setters are inert", async () => {
      render(
        <DashboardItem
          title="Headcount by workplace"
          isLoading={false}
          actions={[{ label: "CSV", onClick: vi.fn() }]}
        >
          <div>Content</div>
        </DashboardItem>
      )

      await openMenu()

      expect(screen.queryByText("Ask One")).not.toBeInTheDocument()
      // The rest of the menu is untouched.
      expect(screen.getByText("Download")).toBeInTheDocument()
    })

    it("hands the widget to the host instead, when it takes the action", async () => {
      const onAskAi = vi.fn()
      const onFullscreenChange = vi.fn()
      render(
        <AiChatStateProvider enabled>
          <QuoteProbe />
          <DashboardItem
            title="Headcount by workplace"
            itemId="headcount"
            isLoading={false}
            isFullscreen
            onAskAi={onAskAi}
            onFullscreenChange={onFullscreenChange}
          >
            <div>Content</div>
          </DashboardItem>
        </AiChatStateProvider>
      )

      await openMenu()
      await userEvent.click(screen.getByText("Ask One"))

      expect(onAskAi).toHaveBeenCalledWith({
        id: "headcount",
        title: "Headcount by workplace",
      })
      // The chat is left alone entirely — the host may not even be sending the
      // widget there, so quoting into it would be a second, unasked-for action.
      const probe = screen.getByTestId("probe")
      expect(probe).toHaveAttribute("data-quote", "")
      expect(probe).toHaveAttribute("data-open", "false")
      expect(onFullscreenChange).not.toHaveBeenCalled()
    })

    it("offers the action with no chat mounted, once the host answers it", async () => {
      const onAskAi = vi.fn()
      render(
        <DashboardItem
          title="Headcount by workplace"
          itemId="headcount"
          isLoading={false}
          onAskAi={onAskAi}
        >
          <div>Content</div>
        </DashboardItem>
      )

      await openMenu()
      await userEvent.click(screen.getByText("Ask One"))

      expect(onAskAi).toHaveBeenCalledTimes(1)
    })

    it("hides the action when the title cannot produce a quote", async () => {
      render(
        <AiChatStateProvider enabled>
          <DashboardItem
            title="   "
            isLoading={false}
            actions={[{ label: "CSV", onClick: vi.fn() }]}
          >
            <div>Content</div>
          </DashboardItem>
        </AiChatStateProvider>
      )

      await openMenu()

      expect(screen.queryByText("Ask One")).not.toBeInTheDocument()
      expect(screen.getByText("Download")).toBeInTheDocument()
    })
  })
})

describe("DashboardItem — header info", () => {
  const info = {
    title: "Active headcount",
    description: "Distinct active employees in the selected snapshot.",
  }

  it("renders no info trigger when info is omitted", () => {
    render(
      <DashboardItem title="Headcount by team" isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(
      screen.queryByRole("button", { name: "More information" })
    ).not.toBeInTheDocument()
  })

  // Not the widget title: a trigger named "Headcount by team" sitting beside
  // an <h3> that already says "Headcount by team" announces a duplicate and
  // never says what the control actually does.
  it("names the info trigger for what it does, not what it describes", () => {
    render(
      <DashboardItem title="Headcount by team" info={info} isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(
      screen.getByRole("button", { name: "More information" })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Headcount by team" })
    ).not.toBeInTheDocument()
  })

  it("reveals the member title and description on hover", async () => {
    const user = userEvent.setup()
    render(
      <DashboardItem title="Headcount by team" info={info} isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    await user.hover(screen.getByRole("button", { name: "More information" }))

    expect(
      await screen.findByText("Active headcount", {}, { timeout: 2000 })
    ).toBeInTheDocument()
    expect(
      await screen.findByText(info.description, {}, { timeout: 2000 })
    ).toBeInTheDocument()
  })

  it("calls the link action from the hover card", async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Headcount by team"
        info={{ ...info, link: { label: "Learn more", onClick } }}
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.hover(screen.getByRole("button", { name: "More information" }))
    await user.click(
      await screen.findByRole(
        "button",
        { name: "Learn more" },
        { timeout: 2000 }
      )
    )

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("keeps the info trigger in the error state", () => {
    render(
      <DashboardItem
        title="Headcount by team"
        info={info}
        error={new Error("Failed to load")}
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    // The data failed, but what the widget was meant to measure did not change.
    expect(
      screen.getByRole("button", { name: "More information" })
    ).toBeInTheDocument()
  })
})
