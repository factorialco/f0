import { StrictMode } from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

const now = new Date().toISOString()

const theirs: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "María José" },
  body: "Hello there",
  createdAt: now,
  isMine: false,
}

const mine: F0ChatMessage = {
  id: "m2",
  author: { id: "me", name: "Me" },
  body: "Hi back",
  createdAt: now,
  isMine: true,
  status: "read",
}

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {}
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
    presence: "online",
  },
  status: "ready",
  messages: [theirs, mine],
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
  ...overrides,
})

/** A runtime where editing is allowed, so the shortcut has something to find. */
const editable = (overrides: Partial<F0ChatRuntime> = {}) =>
  makeRuntime({ editMessage: vi.fn(), editWindowMs: 60_000, ...overrides })

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

const composer = () => screen.getByPlaceholderText(/write something here/i)

const pressArrowUp = async () => {
  await userEvent.click(composer())
  await userEvent.keyboard("{ArrowUp}")
}

/** The padded box a body sits in — the part of a bubble a double-click still
 * quotes. The words themselves are left to the browser's word selection, so a
 * test that wants a quote must not aim at them. */
const bubbleAround = (body: string): HTMLElement => {
  const box = screen.getByText(body).parentElement
  if (!box) throw new Error(`No bubble around "${body}"`)
  return box
}

describe("F0Chat arrow-up editing", () => {
  it("reopens my last message for editing from an empty composer", async () => {
    renderChat(editable())
    await pressArrowUp()

    expect(composer()).toHaveValue("Hi back")
    expect(
      screen.getByRole("button", { name: /cancel edit/i })
    ).toBeInTheDocument()
  })

  it("saves the reopened message through editMessage", async () => {
    const editMessage = vi.fn()
    renderChat(editable({ editMessage }))
    await pressArrowUp()

    await userEvent.type(composer(), " again")
    await userEvent.click(screen.getByRole("button", { name: /^Save$/i }))

    expect(editMessage).toHaveBeenCalledWith(
      "m2",
      expect.objectContaining({ body: "Hi back again" })
    )
  })

  it("leaves arrow-up alone once the composer has text", async () => {
    renderChat(editable())
    await userEvent.type(composer(), "draft")
    await userEvent.keyboard("{ArrowUp}")

    expect(composer()).toHaveValue("draft")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("leaves arrow-up alone while a reply quote is pending", async () => {
    renderChat(editable())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[0])
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))
    await pressArrowUp()

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("does nothing when the host provides no editMessage", async () => {
    renderChat(makeRuntime())
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("never reopens someone else's message", async () => {
    // Only their message is left, and a moderator capability would let the menu
    // edit it — the shortcut must still find nothing.
    renderChat(
      editable({
        messages: [theirs],
        capabilities: { canEditMessage: () => true },
      })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  // The shortcut targets only the newest own message. The user pressed a key
  // without choosing one, so opening an older message would surprise them.
  it("does nothing when the newest own message is no longer editable", async () => {
    const older: F0ChatMessage = { ...mine, id: "m0", body: "Older of mine" }
    renderChat(
      editable({
        messages: [older, mine],
        capabilities: { canEditMessage: (message) => message.id !== "m2" },
      })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  // Discriminator: the loaded messages do not always end at the newest one.
  it("does nothing while newer messages are outside the loaded window", async () => {
    renderChat(editable({ hasMoreNewer: true }))
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  // Discriminator: an attachment-only message has no text to edit, so loading
  // it would turn the user's next Enter into a caption on the old image. The
  // Edit action still offers it; only the blind shortcut declines.
  it("does nothing when the newest own message carries only an attachment", async () => {
    renderChat(
      editable({
        messages: [
          { ...mine, id: "m0", body: "Older of mine" },
          {
            ...mine,
            body: "",
            attachments: [
              {
                kind: "image",
                url: "https://example.test/a.png",
                name: "a.png",
              },
            ],
          },
        ],
      })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
  })

  // Discriminator: the edit effect used to rebuild `attachments` from the
  // message, so firing here would silently drop a pending upload.
  it("does nothing while an attachment is pending", async () => {
    const uploadFiles = vi
      .fn()
      .mockResolvedValue([
        { kind: "image", url: "blob:img", name: "photo.png" },
      ])
    const { container } = renderChat(editable({ uploadFiles }))
    fireEvent.change(
      container.querySelector<HTMLInputElement>("input[type=file]")!,
      {
        target: {
          files: [new File(["img"], "photo.png", { type: "image/png" })],
        },
      }
    )
    await screen.findByRole("img", { name: /photo\.png/i })

    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("img", { name: /photo\.png/i })).toBeInTheDocument()
  })

  // PIN: modifier chords have no native meaning on an empty composer, so this
  // asserts the rule rather than catching a live regression.
  it("ignores a modified arrow-up", async () => {
    renderChat(editable())
    await userEvent.click(composer())
    await userEvent.keyboard("{Shift>}{ArrowUp}{/Shift}")

    expect(composer()).toHaveValue("")
  })

  it("is not offered once my last message is past the edit window", async () => {
    const old = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    renderChat(
      editable({ messages: [{ ...mine, createdAt: old }], editWindowMs: 5000 })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
  })
})

describe("F0Chat double-click reply", () => {
  it("quotes someone else's message and focuses the composer", async () => {
    renderChat(makeRuntime())
    await userEvent.dblClick(bubbleAround("Hello there"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    await waitFor(() => expect(composer()).toHaveFocus())
  })

  it("quotes my own message too", async () => {
    renderChat(makeRuntime())
    await userEvent.dblClick(bubbleAround("Hi back"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  it("replaces an edit in progress with the quote", async () => {
    renderChat(editable())
    await pressArrowUp()
    expect(composer()).toHaveValue("Hi back")

    await userEvent.dblClick(bubbleAround("Hello there"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  // Discriminator for the draft leak: before the fix the edit chip was
  // replaced by the reply chip while the edited body stayed in the box, so
  // Enter re-sent the old message as a reply.
  it("clears the edit draft when the quote replaces it", async () => {
    renderChat(editable())
    await pressArrowUp()
    expect(composer()).toHaveValue("Hi back")

    await userEvent.dblClick(bubbleAround("Hello there"))

    expect(composer()).toHaveValue("")
    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  it("keeps the typed draft when Edit is re-picked on the same message", async () => {
    renderChat(editable())
    await pressArrowUp()
    await userEvent.type(composer(), " and more")

    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    await userEvent.click(screen.getByRole("button", { name: /^Edit$/i }))

    expect(composer()).toHaveValue("Hi back and more")
  })

  it("ignores a double-click on a deleted message", async () => {
    renderChat(makeRuntime({ messages: [{ ...theirs, deleted: true }, mine] }))
    await userEvent.dblClick(screen.getByText(/message deleted/i))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })

  // Guards the bounded walk against being replaced by a plain `closest` over
  // the focusability selector: react-virtuoso renders its scroller with
  // tabIndex={0} (and ChatMessagesContainer forwards that onto the scroll
  // viewport), so an unbounded lookup would match from anywhere in a bubble
  // and no message would be quotable at all.
  it("still quotes when an ancestor of the row is focusable", async () => {
    renderChat(makeRuntime())
    screen.getByTestId("chat-message-viewport").setAttribute("tabindex", "0")

    await userEvent.dblClick(bubbleAround("Hello there"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  // SELECTOR PIN, not a behaviour test: it proves the rule treats a
  // `[role="slider"]` descendant as self-handling. The real case is the voice
  // waveform (ChatVoiceAttachment renders `role="slider"` with its own
  // onClick), which cannot mount here — the transcript defers heavy previews
  // until browser readiness — so the live widget is covered by the
  // "Composer hotkeys" Storybook play function instead.
  it("treats a role=slider descendant as self-handling", async () => {
    renderChat(makeRuntime())
    const slider = document.createElement("div")
    slider.setAttribute("role", "slider")
    slider.textContent = "seek"
    // Appended beside the body, not inside it: the body's own marker would
    // stop the quote on its own and the pin would prove nothing.
    bubbleAround("Hello there").append(slider)

    await userEvent.dblClick(slider)

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })

  it("leaves the body text to the browser's word selection", async () => {
    renderChat(makeRuntime())
    await userEvent.dblClick(screen.getByText("Hello there"))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })

  // The sender name and the time sit in the same padded box as the body but
  // outside its marker, so the bubble stays quotable around the words.
  it("quotes from the sender name in a group channel", async () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "c1",
          type: "group",
          title: "Product Team",
          avatar: { type: "company", name: "Product Team" },
        },
      })
    )
    await userEvent.dblClick(screen.getByText("María José"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  it("leaves an interactive attachment to its own action", async () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            ...theirs,
            body: "",
            attachments: [
              {
                kind: "image",
                url: "https://example.test/a.png",
                name: "a.png",
              },
            ],
          },
        ],
      })
    )
    await userEvent.dblClick(screen.getByTestId("chat-image-attachment"))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })
})

describe("F0Chat compose target lifecycle", () => {
  // The composer registers its handle in an effect. StrictMode runs
  // setup → cleanup → setup, and the cleanup nulls the ref, so a registration
  // that does not re-register leaves the provider unable to drive the composer.
  it("keeps the composer handle registered through a StrictMode replay", async () => {
    render(
      <StrictMode>
        <F0ChatProvider runtime={editable()}>
          <F0Chat />
        </F0ChatProvider>
      </StrictMode>
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("Hi back")
  })

  it("sets no quote on a read-only channel, where there is no composer", async () => {
    renderChat(makeRuntime({ capabilities: { canSend: false } }))
    await userEvent.dblClick(bubbleAround("Hello there"))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })

  // Discriminator: the composer is unmounted on a read-only channel while the
  // target lives in the provider. If the target survived, the composer would
  // come back showing an edit chip over an EMPTY draft — one Enter from
  // blanking the message it points at.
  it("releases the target when the composer goes away and comes back", async () => {
    const runtime = editable()
    const { rerender } = render(
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    )
    await pressArrowUp()
    expect(composer()).toHaveValue("Hi back")

    // The channel is frozen: F0Chat stops rendering the composer entirely.
    rerender(
      <F0ChatProvider
        runtime={{ ...runtime, capabilities: { canSend: false } }}
      >
        <F0Chat />
      </F0ChatProvider>
    )
    rerender(
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    )

    expect(composer()).toHaveValue("")
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /cancel edit/i })
      ).not.toBeInTheDocument()
    )
  })

  // Discriminator: `retarget` only discards on the way OUT of edit mode, so a
  // typed REPLY draft used to survive the switch and could be sent to whoever
  // the viewer moved to.
  it("abandons a typed reply draft when the channel changes", async () => {
    const runtime = makeRuntime()
    const { rerender } = render(
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    )
    await userEvent.dblClick(bubbleAround("Hello there"))
    await userEvent.type(composer(), "for your eyes only")
    expect(composer()).toHaveValue("for your eyes only")

    rerender(
      <F0ChatProvider
        runtime={{ ...runtime, channel: { ...runtime.channel, id: "c2" } }}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(composer()).toHaveValue("")
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /remove quote/i })
      ).not.toBeInTheDocument()
    )
  })

  // Discriminator: the provider and the composer both survive a channel
  // switch, so without this Save would edit a message in the channel you left.
  it("drops the target and the edit draft when the channel changes", async () => {
    const runtime = editable()
    const { rerender } = render(
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    )
    await pressArrowUp()
    expect(composer()).toHaveValue("Hi back")

    rerender(
      <F0ChatProvider
        runtime={{ ...runtime, channel: { ...runtime.channel, id: "c2" } }}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(composer()).toHaveValue("")
    // The chip animates out, so it leaves the DOM a tick after the target.
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /cancel edit/i })
      ).not.toBeInTheDocument()
    )
  })
})
