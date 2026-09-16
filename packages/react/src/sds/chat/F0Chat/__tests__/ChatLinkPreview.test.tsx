import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { act, zeroRender as render, screen, within } from "@/testing/test-utils"
import { ChatBubble } from "../components/ChatBubble"
import { ChatLinkPreview } from "../components/ChatLinkPreview"
import { type F0ChatMessage } from "../types"
import { messageSurfaceColorClass } from "../utils/sender-color"

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

  it("stacks several previews as compact rows with a thumbnail each", () => {
    render(<ChatLinkPreview previews={[PREVIEW, OTHER_PREVIEW]} />)

    const links = screen.getAllByRole("link")
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      PREVIEW.url,
      OTHER_PREVIEW.url,
    ])
    expect(screen.getByText("An interesting article")).toBeInTheDocument()
    expect(screen.getByText("Status page")).toBeInTheDocument()
    // Slack-style unfurls: a thumbnail each, never a wall of banners.
    expect(screen.getAllByTestId("chat-link-preview-thumb")).toHaveLength(2)
    expect(
      screen.queryByTestId("chat-link-preview-banner")
    ).not.toBeInTheDocument()
  })

  it("omits image, title and description when the scrape only found the url", () => {
    render(<ChatLinkPreview previews={[{ url: "https://example.com" }]} />)
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
    expect(screen.getByText("example.com")).toBeInTheDocument()
  })

  // The url is scraped metadata from the host and it goes straight into an
  // href the reader clicks, so anything we can't read as http(s) is not a card.
  it("drops a preview whose url is not a readable http(s) address", () => {
    const { container } = render(
      <ChatLinkPreview previews={[{ url: "not-a-url" }]} />
    )
    expect(container).toBeEmptyDOMElement()
  })

  it("drops a javascript: url instead of rendering it as a link", () => {
    const { container } = render(
      // eslint-disable-next-line no-script-url
      <ChatLinkPreview
        previews={[{ url: "javascript:alert(1)", title: "Hi" }]}
      />
    )
    expect(container).toBeEmptyDOMElement()
    expect(screen.queryByText("Hi")).not.toBeInTheDocument()
  })

  it("renders nothing for an empty list", () => {
    const { container } = render(<ChatLinkPreview previews={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("tucks the edges where stacked cards meet, bubble-style", () => {
    const THIRD_PREVIEW = { url: "https://docs.example.com/guide" }
    render(
      <ChatLinkPreview previews={[PREVIEW, OTHER_PREVIEW, THIRD_PREVIEW]} />
    )
    const [first, middle, last] = screen.getAllByRole("link")

    expect(first.className).toContain("rounded-b-sm")
    expect(first.className).not.toContain("rounded-t-sm")
    expect(middle.className).toContain("rounded-t-sm")
    expect(middle.className).toContain("rounded-b-sm")
    expect(last.className).toContain("rounded-t-sm")
    expect(last.className).not.toContain("rounded-b-sm")
  })

  it("keeps the bubble-hugging top tuck on the first card only", () => {
    render(
      <ChatLinkPreview
        previews={[PREVIEW, OTHER_PREVIEW]}
        isMine
        isFirstOfRun={false}
      />
    )
    const [first, second] = screen.getAllByRole("link")
    expect(first.className).toContain("rounded-tr-xs")
    expect(second.className).not.toContain("rounded-tr-xs")
  })
})

describe("ChatLinkPreview image shape", () => {
  type FakeImage = {
    naturalWidth: number
    naturalHeight: number
    onload: (() => void) | null
    onerror: (() => void) | null
  }
  let measuring: FakeImage[]

  beforeEach(() => {
    measuring = []
    vi.stubGlobal(
      "Image",
      class {
        naturalWidth = 0
        naturalHeight = 0
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        set src(_value: string) {
          measuring.push(this as unknown as FakeImage)
        }
      }
    )
  })

  afterEach(() => vi.unstubAllGlobals())

  /** Each case needs its own URL: the measurement cache is module-level. */
  const renderMeasured = async (
    id: string,
    width: number,
    height: number
  ): Promise<void> => {
    render(
      <ChatLinkPreview
        previews={[
          {
            url: `https://${id}.example.com/page`,
            title: "An interesting article",
            imageUrl: `https://cdn.example.com/${id}.png`,
          },
        ]}
      />
    )
    const image = measuring.at(-1)
    await act(async () => {
      if (image) {
        image.naturalWidth = width
        image.naturalHeight = height
        image.onload?.()
      }
    })
  }

  it("reserves the Open Graph ratio before the image has been measured", () => {
    render(<ChatLinkPreview previews={[PREVIEW]} />)
    // 1.91:1 — what nearly every og:image is, so the common card never reflows.
    expect(screen.getByTestId("chat-link-preview-banner")).toHaveStyle({
      aspectRatio: "1.91",
    })
  })

  it("spans a landscape image across the card at its own ratio", async () => {
    await renderMeasured("wide", 1200, 630)
    const banner = screen.getByTestId("chat-link-preview-banner")
    expect(banner).toHaveStyle({ aspectRatio: String(1200 / 630) })
    // Contain, not cover: the ratio is the image's, so it shows edge to edge —
    // and on a bubble wide enough to hit the height cap it letterboxes over the
    // blurred copy instead of cropping. `presentation` skips that aria-hidden
    // blur layer.
    expect(within(banner).getByRole("presentation")).toHaveClass(
      "object-contain"
    )
    expect(
      screen.queryByTestId("chat-link-preview-thumb")
    ).not.toBeInTheDocument()
  })

  it("turns a vertical image into a thumbnail beside the text", async () => {
    await renderMeasured("tall", 600, 1400)
    expect(screen.getByTestId("chat-link-preview-thumb")).toBeInTheDocument()
    expect(
      screen.queryByTestId("chat-link-preview-banner")
    ).not.toBeInTheDocument()
  })

  it("keeps a small image small instead of stretching it across the card", async () => {
    await renderMeasured("tiny", 50, 50)
    expect(screen.getByTestId("chat-link-preview-thumb")).toBeInTheDocument()
  })

  it("leaves no box behind when the og:image cannot be decoded", async () => {
    render(
      <ChatLinkPreview
        previews={[
          {
            url: "https://broken.example.com/page",
            title: "An interesting article",
            imageUrl: "https://cdn.example.com/broken.png",
          },
        ]}
      />
    )
    await act(async () => {
      measuring.at(-1)?.onerror?.()
    })
    expect(screen.getByText("An interesting article")).toBeInTheDocument()
    expect(
      screen.queryByTestId("chat-link-preview-banner")
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTestId("chat-link-preview-thumb")
    ).not.toBeInTheDocument()
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
    // Two links: the inline body link (F0Link) and the preview card itself.
    const links = screen.getAllByRole("link")
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      PREVIEW.url,
      PREVIEW.url,
    ])
    // The scraped title shows twice: on the card AND as the inline link's
    // text (the raw URL is replaced by the friendlier title).
    expect(screen.getAllByText("An interesting article")).toHaveLength(2)
    expect(
      screen.queryByText("https://www.example.com/some/article")
    ).not.toBeInTheDocument()
  })

  it("shows no card when the message has no linkPreviews", () => {
    render(<ChatBubble message={makeMessage("plain text")} isMine={false} />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  it("keeps incoming link previews on a neutral grey surface", () => {
    const message = {
      ...makeMessage("https://www.example.com/some/article"),
      author: {
        id: "other",
        name: "María José",
        avatarColor: "orange" as const,
      },
      linkPreviews: [PREVIEW],
    }
    render(<ChatBubble message={message} isMine={false} />)

    const previewCard = screen
      .getAllByRole("link")
      .find((link) => link.textContent?.includes("An interesting article"))
    const inlineLink = screen
      .getAllByRole("link")
      .find((link) => link !== previewCard)
    const senderSurface = messageSurfaceColorClass(message.author, false)

    expect(previewCard).toHaveClass(
      "bg-f1-background-secondary",
      "hover:ring-1"
    )
    expect(previewCard).not.toHaveClass(senderSurface)
    expect(inlineLink?.closest(".rounded-2xl")).toHaveClass(senderSurface)
    expect(previewCard).not.toHaveClass(
      "hover:bg-f1-background-secondary",
      "hover:opacity-90"
    )
    // The image's own surface too — the banner box is what shows through a
    // letterboxed or still-loading picture.
    expect(screen.getByTestId("chat-link-preview-banner")).toHaveClass(
      "bg-f1-background-secondary"
    )
  })

  it("keeps my link preview on the neutral nested surface", () => {
    const message = {
      ...makeMessage("https://www.example.com/some/article"),
      author: { id: "me", name: "Me" },
      isMine: true,
      linkPreviews: [PREVIEW],
    }
    render(<ChatBubble message={message} isMine />)

    const previewCard = screen
      .getAllByRole("link")
      .find((link) => link.textContent?.includes("An interesting article"))

    expect(previewCard).toHaveClass("bg-f1-background-secondary")
  })
})
