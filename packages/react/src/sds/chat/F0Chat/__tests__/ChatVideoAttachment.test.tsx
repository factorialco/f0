import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

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
    "data-testid": testId,
  }: {
    src: string
    poster?: string
    content?: { captions?: string }
    defaultLanguage?: string
    silent?: boolean
    ariaLabel?: string
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
    </div>
  ),
}))

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
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

    const players = await screen.findAllByRole("region", {
      name: /Video player:/,
    })
    expect(players).toHaveLength(2)
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
      expect(card).toHaveClass("w-full", "max-w-xl", "aspect-video")
    }

    expect(screen.getByText("source-deck.pptx")).toBeInTheDocument()
    expect(screen.getAllByRole("button", { name: "Play" })).toHaveLength(2)
    expect(
      screen.getAllByRole("button", { name: "Enter fullscreen" })
    ).toHaveLength(2)
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
