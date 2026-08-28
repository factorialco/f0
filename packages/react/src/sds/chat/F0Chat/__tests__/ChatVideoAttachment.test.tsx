import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
  within,
} from "@/testing/test-utils"

import { ChatVideoAttachment } from "../components/ChatVideoAttachment"
import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatAttachment, type F0ChatRuntime } from "../types"

vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

vi.mock("@/components/F0VideoPlayer", () => ({
  F0VideoPlayer: ({
    src,
    poster,
    content,
    defaultLanguage,
    silent,
    ariaLabel,
    download,
    "data-testid": testId,
  }: {
    src: string
    poster?: string
    content?: { captions?: string }
    defaultLanguage?: string
    silent?: boolean
    ariaLabel?: string
    download?: { label: string; onClick: () => void }
    "data-testid"?: string
  }) => (
    <div
      role="region"
      aria-label={ariaLabel ?? "Video player"}
      data-testid={testId}
      data-src={src}
      data-poster={poster}
      data-captions={content?.captions}
      data-default-language={defaultLanguage}
      data-silent={silent}
    >
      <video data-testid="mock-video-media">
        {content?.captions && (
          <track
            data-testid="mock-video-captions"
            kind="captions"
            src="captions.vtt"
          />
        )}
      </video>
      <button type="button">Play</button>
      <button type="button">Enter fullscreen</button>
      {download && (
        <button type="button" onClick={download.onClick}>
          {download.label}
        </button>
      )}
    </div>
  ),
}))

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      private readonly callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe(target: Element) {
        this.callback(
          [{ isIntersecting: true, target } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        )
      }
      unobserve() {}
      disconnect() {}
      takeRecords = () => []
    }
  )
})

const now = new Date().toISOString()

const makeRuntime = (attachments: F0ChatAttachment[]): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "group",
    title: "Video review",
    avatar: { type: "company", name: "Video review" },
    memberCount: 2,
  },
  status: "ready",
  messages: [
    {
      id: "m1",
      author: { id: "me", name: "Me" },
      body: "Two walkthroughs and the source deck",
      createdAt: now,
      isMine: true,
      status: "sent",
      attachments,
    },
  ],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  retryMessage: vi.fn(),
  loadOlder: vi.fn(),
  toggleReaction: vi.fn(),
  deleteMessage: vi.fn(),
  onInputActivity: vi.fn(),
  markRead: vi.fn(),
})

const renderChat = (attachments: F0ChatAttachment[]) =>
  render(
    <F0ChatProvider runtime={makeRuntime(attachments)}>
      <F0Chat />
    </F0ChatProvider>
  )

const captions = [
  "WEBVTT",
  "",
  "00:00:00.000 --> 00:00:02.000",
  "A chart appears.",
].join("\n")

describe("ChatVideoAttachment", () => {
  it("mounts the player immediately behind the stable placeholder", async () => {
    const file = {
      kind: "file" as const,
      url: "https://cdn.example.com/walkthrough.webm",
      name: "walkthrough.webm",
      mimeType: "video/webm",
    }
    render(<ChatVideoAttachment file={file} cornerClass="rounded-xl" />)

    expect(await screen.findByTestId("chat-video-player")).toBeInTheDocument()
    expect(
      screen.getByRole("region", {
        name: "Video player: walkthrough.webm",
      })
    ).toBeInTheDocument()
    expect(screen.getByRole("status")).toHaveAccessibleName(
      "Loading video: walkthrough.webm"
    )
    expect(screen.getByTestId("chat-video-attachment")).toHaveAttribute(
      "aria-busy",
      "true"
    )
    expect(screen.getByTestId("chat-video-placeholder")).toHaveClass(
      "pointer-events-none"
    )

    fireEvent.loadedData(screen.getByTestId("mock-video-media"))

    expect(
      screen.getByRole("region", {
        name: "Video player: walkthrough.webm",
      })
    ).toBeInTheDocument()
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByTestId("chat-video-attachment")).not.toHaveAttribute(
      "aria-busy"
    )
    expect(screen.getByTestId("chat-video-placeholder")).toHaveClass(
      "opacity-0"
    )
  })

  it("keeps the same poster visible until the mounted player has media data", async () => {
    const file = {
      kind: "file" as const,
      url: "https://cdn.example.com/walkthrough.webm",
      name: "walkthrough.webm",
      mimeType: "video/webm",
      thumbnailUrl: "https://cdn.example.com/poster.webp",
    }
    const { container } = render(
      <ChatVideoAttachment file={file} cornerClass="rounded-xl" />
    )

    const card = screen.getByTestId("chat-video-attachment")
    expect(card).toHaveClass("w-[min(24rem,70%)]", "max-w-full", "aspect-video")
    expect(card).not.toHaveClass("w-full")
    const poster = container.querySelector<HTMLImageElement>(
      'img[src="https://cdn.example.com/poster.webp"]'
    )
    expect(poster).toBeInTheDocument()
    fireEvent.load(poster!)
    expect(poster).toHaveClass("opacity-100")
    expect(await screen.findByTestId("chat-video-player")).toBeInTheDocument()
    expect(screen.getByTestId("chat-video-attachment")).toBe(card)
    const mountedPoster = container.querySelector<HTMLImageElement>(
      'img[src="https://cdn.example.com/poster.webp"]'
    )
    expect(mountedPoster).toBe(poster)
    expect(mountedPoster).toBeInTheDocument()
    expect(mountedPoster).toHaveClass("opacity-100")
    expect(screen.getByTestId("chat-video-placeholder")).not.toHaveClass(
      "opacity-0"
    )

    fireEvent.loadedData(screen.getByTestId("mock-video-media"))

    expect(screen.getByTestId("chat-video-placeholder")).toHaveClass(
      "opacity-0"
    )
  })

  it("applies a sender-aware surface to the shell and empty placeholder", () => {
    const surfaceClassName = "bg-[color:orange]"
    render(
      <ChatVideoAttachment
        file={{
          kind: "file",
          url: "https://cdn.example.com/walkthrough.webm",
          name: "walkthrough.webm",
          mimeType: "video/webm",
        }}
        cornerClass="rounded-xl"
        surfaceClassName={surfaceClassName}
      />
    )

    // The card itself letterboxes on a neutral dark surface — the sender tint
    // is for card chrome, never for the bars around someone's pixels. It still
    // reaches the empty-poster skeleton, which IS chrome.
    expect(screen.getByTestId("chat-video-attachment")).not.toHaveClass(
      surfaceClassName
    )
    expect(screen.getByTestId("chat-video-attachment")).toHaveClass(
      "bg-[hsl(222_31%_11%)]"
    )
    expect(screen.getByTestId("skeleton")).toHaveClass(surfaceClassName)
  })

  it("stacks multiple completed videos as wide inline players", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/walkthrough.webm",
        name: "walkthrough.webm",
        mimeType: "video/webm",
        thumbnailUrl: "https://cdn.example.com/poster.webp",
        videoContent: { captions },
        videoDefaultLanguage: "en",
      },
      {
        kind: "file",
        url: "https://cdn.example.com/deep-dive.mp4",
        name: "deep-dive.mp4",
        mimeType: "video/mp4",
        videoSilent: true,
      },
      {
        kind: "file",
        url: "https://cdn.example.com/deck.pptx",
        name: "source-deck.pptx",
        mimeType: "application/vnd.ms-powerpoint",
      },
    ])

    await waitFor(() =>
      expect(
        screen.getAllByRole("region", { name: /Video player:/ })
      ).toHaveLength(2)
    )
    const players = screen.getAllByRole("region", {
      name: /Video player:/,
    })
    expect(players[0]).toHaveAttribute(
      "data-src",
      "https://cdn.example.com/walkthrough.webm"
    )
    expect(players[0]).toHaveAttribute(
      "data-poster",
      "https://cdn.example.com/poster.webp"
    )
    expect(players[0]).toHaveAttribute("data-captions", captions)
    expect(players[0]).toHaveAttribute("data-default-language", "en")
    expect(players[1]).toHaveAttribute("data-silent", "true")

    const videoCards = screen.getAllByTestId("chat-video-attachment")
    expect(videoCards).toHaveLength(2)
    for (const card of videoCards) {
      expect(card).toHaveClass(
        "w-[min(24rem,70%)]",
        "max-w-full",
        "aspect-video"
      )
    }

    expect(screen.getByText("source-deck.pptx")).toBeInTheDocument()
    expect(screen.getAllByRole("button", { name: "Play" })).toHaveLength(2)
    expect(
      screen.getAllByRole("button", { name: "Enter fullscreen" })
    ).toHaveLength(2)
    expect(
      within(players[0]).getByRole("button", {
        name: "Download walkthrough.webm",
      })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole("button", {
        name: "Download walkthrough.webm",
      })
    ).toHaveLength(1)
    expect(
      within(players[1]).getByRole("button", {
        name: "Download deep-dive.mp4",
      })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole("button", {
        name: "Download deep-dive.mp4",
      })
    ).toHaveLength(1)
  })

  it("keeps an uploading video as a file chip until it completes", async () => {
    renderChat([
      {
        kind: "file",
        url: "blob:upload",
        name: "uploading-video.mp4",
        mimeType: "video/mp4",
        progress: 40,
      },
    ])

    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-video-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("uploading-video.mp4")).toBeInTheDocument()
  })

  it("recognizes a video URL when the transport omits its MIME type", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/preview.mov?token=123",
        name: "download",
      },
    ])

    expect(
      await screen.findByTestId("chat-video-attachment")
    ).toBeInTheDocument()
  })

  it("falls back to a downloadable file when the media fails", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/unsupported.avi",
        name: "unsupported.avi",
        mimeType: "video/x-msvideo",
      },
    ])

    fireEvent.error(await screen.findByTestId("mock-video-media"))

    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-video-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("unsupported.avi")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Download unsupported.avi" })
    ).toBeInTheDocument()
  })

  it("keeps the failed-media file item neutral", async () => {
    const surfaceClassName = "bg-[color:orange]"
    render(
      <ChatVideoAttachment
        file={{
          kind: "file",
          url: "https://cdn.example.com/broken.mp4",
          name: "broken.mp4",
          mimeType: "video/mp4",
        }}
        cornerClass="rounded-xl"
        surfaceClassName={surfaceClassName}
      />
    )

    fireEvent.error(await screen.findByTestId("mock-video-media"))

    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-video-attachment")
      ).not.toBeInTheDocument()
    )
    const fileItem = screen.getByText("broken.mp4").parentElement
    expect(fileItem).toHaveClass("bg-f1-background-tertiary")
    expect(fileItem).not.toHaveClass(surfaceClassName)
  })

  it("keeps the player when only its captions fail", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/walkthrough.mp4",
        name: "walkthrough.mp4",
        mimeType: "video/mp4",
        videoContent: { captions },
      },
    ])

    fireEvent.error(await screen.findByTestId("mock-video-captions"))

    expect(
      screen.getByRole("region", {
        name: "Video player: walkthrough.mp4",
      })
    ).toBeInTheDocument()
    expect(screen.getByTestId("chat-video-attachment")).toBeInTheDocument()
  })
})
