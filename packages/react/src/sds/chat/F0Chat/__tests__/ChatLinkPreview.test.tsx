import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ChatBubble } from "../components/ChatBubble"
import { ChatLinkPreview } from "../components/ChatLinkPreview"
import { type F0ChatMessage } from "../types"

const PREVIEW = {
  url: "https://www.example.com/some/article",
  title: "An interesting article",
  description: "A longer description of the linked page.",
  imageUrl: "https://cdn.example.com/og.png",
}

const OTHER_PREVIEW = {
  url: "https://status.example.com/incidents",
  title: "Status page",
  description: "Incident history.",
  imageUrl: "https://cdn.example.com/og2.png",
}

const makeMessage = (body: string): F0ChatMessage => ({
  id: "m1",
  author: { id: "other", name: "María José" },
  body,
  createdAt: new Date().toISOString(),
  isMine: false,
})

describe("ChatLinkPreview", () => {
  it("renders title, description and the www-less host as a new-tab link", () => {
    render(<ChatLinkPreview previews={[PREVIEW]} />)

    expect(screen.getByText("An interesting article")).toBeInTheDocument()
    expect(
      screen.getByText("A longer description of the linked page.")
    ).toBeInTheDocument()
    expect(screen.getByText("example.com")).toBeInTheDocument()

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", PREVIEW.url)
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("renders the preview image for a single preview", () => {
    render(<ChatLinkPreview previews={[PREVIEW]} />)
    expect(screen.getByRole("presentation")).toHaveAttribute(
      "src",
      PREVIEW.imageUrl
    )
  })

  it("stacks several previews as compact rows without images (Slack-style)", () => {
    render(<ChatLinkPreview previews={[PREVIEW, OTHER_PREVIEW]} />)

    const links = screen.getAllByRole("link")
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      PREVIEW.url,
      OTHER_PREVIEW.url,
    ])
    expect(screen.getByText("An interesting article")).toBeInTheDocument()
    expect(screen.getByText("Status page")).toBeInTheDocument()
    // Compact unfurls: no preview images, titles/hosts only.
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  it("omits image, title and description when the scrape only found the url", () => {
    render(<ChatLinkPreview previews={[{ url: "https://example.com" }]} />)
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
    expect(screen.getByText("example.com")).toBeInTheDocument()
  })

  it("falls back to the raw value as host when the url cannot be parsed", () => {
    render(<ChatLinkPreview previews={[{ url: "not-a-url" }]} />)
    expect(screen.getByText("not-a-url")).toBeInTheDocument()
  })

  it("renders nothing for an empty list", () => {
    const { container } = render(<ChatLinkPreview previews={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})

describe("ChatBubble link previews", () => {
  it("renders the card above the body when the message has linkPreviews", () => {
    render(
      <ChatBubble
        message={{
          ...makeMessage("check this out https://www.example.com/some/article"),
          linkPreviews: [PREVIEW],
        }}
        isMine={false}
      />
    )
    // Two links: the inline body URL (F0Link) and the preview card itself.
    const links = screen.getAllByRole("link")
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      PREVIEW.url,
      PREVIEW.url,
    ])
    expect(screen.getByText("An interesting article")).toBeInTheDocument()
  })

  it("shows no card when the message has no linkPreviews", () => {
    render(<ChatBubble message={makeMessage("plain text")} isMine={false} />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })
})
