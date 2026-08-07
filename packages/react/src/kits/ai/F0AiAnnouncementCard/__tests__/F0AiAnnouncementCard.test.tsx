import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0AiAnnouncementCard } from "../F0AiAnnouncementCard"

const baseProps = {
  title: "Submit expenses in seconds",
  description: "Upload a receipt and One fills in the rest for you.",
}

describe("F0AiAnnouncementCard", () => {
  it("renders the title and description", () => {
    render(<F0AiAnnouncementCard {...baseProps} />)

    expect(screen.getByText(baseProps.title)).toBeVisible()
    expect(screen.getByText(baseProps.description)).toBeVisible()
  })

  it("names the card after its title so it can be found", () => {
    render(<F0AiAnnouncementCard {...baseProps} />)

    expect(
      screen.getByRole("region", { name: baseProps.title })
    ).toBeInTheDocument()
  })

  it("calls both action handlers", async () => {
    const onPrimary = vi.fn()
    const onSecondary = vi.fn()
    const user = userEvent.setup()

    render(
      <F0AiAnnouncementCard
        {...baseProps}
        primaryAction={{ label: "Try it out", onClick: onPrimary }}
        secondaryAction={{ label: "Not now", onClick: onSecondary }}
      />
    )

    await user.click(screen.getByRole("button", { name: "Try it out" }))
    await user.click(screen.getByRole("button", { name: "Not now" }))

    expect(onPrimary).toHaveBeenCalledOnce()
    expect(onSecondary).toHaveBeenCalledOnce()
  })

  describe("primary action", () => {
    // The designed default. The AI treatment is opt-in, not the baseline —
    // plenty of announcements open a screen rather than handing over to One.
    it("renders a bordered button by default", () => {
      render(
        <F0AiAnnouncementCard
          {...baseProps}
          primaryAction={{ label: "Try it out", onClick: vi.fn() }}
        />
      )

      const button = screen.getByRole("button", { name: "Try it out" })
      expect(button.className).toMatch(/border/)
      expect(button.querySelector("svg")).toBeNull()
    })

    it("renders the AI button with the One mark on variant ai", () => {
      render(
        <F0AiAnnouncementCard
          {...baseProps}
          primaryAction={{
            label: "Try it out",
            onClick: vi.fn(),
            variant: "ai",
          }}
        />
      )

      const button = screen.getByRole("button", { name: "Try it out" })
      expect(button.querySelector("svg")).not.toBeNull()
    })
  })

  it("calls onClose and removes itself when dismissed", async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()

    render(<F0AiAnnouncementCard {...baseProps} onClose={onClose} />)
    await user.click(screen.getByRole("button", { name: "Close" }))

    expect(onClose).toHaveBeenCalledOnce()
    expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument()
  })

  it("renders no dismiss control when onClose is omitted", () => {
    render(<F0AiAnnouncementCard {...baseProps} />)

    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument()
  })

  it("renders children into the actions row", () => {
    render(
      <F0AiAnnouncementCard {...baseProps}>
        <button type="button">Consumer button</button>
      </F0AiAnnouncementCard>
    )

    expect(
      screen.getByRole("button", { name: "Consumer button" })
    ).toBeVisible()
  })

  describe("media", () => {
    it("renders nothing when no mediaUrl is given", () => {
      render(<F0AiAnnouncementCard {...baseProps} />)

      expect(
        screen.queryByRole("presentation", { hidden: true })
      ).not.toBeInTheDocument()
    })

    it("renders an image for an image url", () => {
      render(<F0AiAnnouncementCard {...baseProps} mediaUrl="https://x/a.png" />)

      expect(
        screen.getByRole("presentation", { hidden: true })
      ).toBeInTheDocument()
    })

    // Announcement media is often a short screen capture, so an `.mp4` has to
    // autoplay silently rather than render as a broken image.
    it("renders a muted looping video for an mp4 url", () => {
      const { container } = render(
        <F0AiAnnouncementCard {...baseProps} mediaUrl="https://x/a.mp4" />
      )

      const video = container.querySelector("video")
      expect(video).toBeInTheDocument()
      expect(video).toHaveAttribute("autoplay")
      expect(video).toHaveAttribute("loop")
      expect(video?.muted).toBe(true)
    })
  })

  it("renders the skeleton in the card's own shape while loading", () => {
    render(<F0AiAnnouncementCard {...baseProps} isLoading />)

    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
    expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument()
  })

  // The description is clamped rather than truncated in JS, so a long string
  // stays fully available to assistive tech while the card keeps its height.
  it("clamps the description to two lines", () => {
    render(<F0AiAnnouncementCard {...baseProps} />)

    expect(screen.getByText(baseProps.description).className).toMatch(
      /line-clamp-2/
    )
  })
})
