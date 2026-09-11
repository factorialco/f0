import { composeStories } from "@storybook/react-vite"
import { beforeAll, describe, expect, it, vi } from "vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
  within,
} from "@/testing/test-utils"
import * as stories from "../index.stories"

vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } =
    await import("@/sds/chat/F0Chat/mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
  Element.prototype.scrollTo = vi.fn()
})

/**
 * The real story, for the same reason the rest of this folder uses it: the chat
 * panel is stashed in `setPanelContent` and rendered deep inside the frame, so a
 * hand-built tree can pass while the thing a user opens does nothing.
 */
const { CommunityPosting } = composeStories(stories)

const cards = () =>
  Array.from(document.querySelectorAll('[id^="community-post-"]'))

const feedReady = async () => {
  await waitFor(() => expect(cards().length).toBeGreaterThan(0), {
    timeout: 5000,
  })
}

const shelf = () => screen.getByTestId("chat-community-shelf")
const sheet = () => screen.getByTestId("chat-shelf-sheet")
/** The chips are the shelf's whole point: both counts, always readable. */
const chip = (name: RegExp) => within(shelf()).getByRole("button", { name })

/** A card's overflow menu renders twice — a wide row and a narrow one. */
const cardMenu = (card: HTMLElement) =>
  within(card).getAllByRole("button", { name: /toggle dropdown menu/i })[0]

const cardTitled = (text: string) =>
  cards().find((card) => card.textContent?.includes(text)) as HTMLElement

describe("the community shelf", () => {
  it("opens with both counts on show", async () => {
    render(<CommunityPosting />)
    await feedReady()

    // One pinned, four scheduled — and neither count is hidden behind a menu,
    // which was the whole complaint about the version this replaced.
    expect(chip(/pinned 1/i)).toBeVisible()
    expect(chip(/scheduled 4/i)).toBeVisible()
    expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
  })

  it("drops a sheet without taking the panel", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))

    await waitFor(() => expect(sheet()).toBeVisible())
    expect(within(sheet()).getByTestId("shelf-pinned")).toBeVisible()
    // The channel is still the channel, and you can still publish.
    expect(screen.getByText("Barcelona office")).toBeVisible()
    expect(screen.getByTestId("chat-post-composer")).toBeVisible()
    // And the feed is still mounted underneath, at its own scroll.
    expect(cards().length).toBeGreaterThan(0)
  })

  it("gives the sheet a height it can actually show a list in", async () => {
    // The hand-rolled sheet capped itself at `60%` — of the 44px chip strip it
    // was positioned against, not of the panel — which clipped the whole thing
    // to a 26px sliver with the segmented control cut in half. Radix measures
    // the space below the anchor for us, so the cap has to come from IT and
    // never from a percentage of anything.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    expect(sheet().className).not.toMatch(/max-h-\[[^\]]*%/)
    expect(sheet().className).toMatch(
      /--radix-popover-content-available-height/
    )
  })

  it("is a popover: portalled out, and wider than the panel it hangs off", async () => {
    // Free of the panel's layout on purpose — two lines of a post's body in a
    // 360px column is four words a line, and the popover gives the room back
    // the moment it closes.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    expect(shelf().contains(sheet())).toBe(false)
    expect(
      sheet().closest("[data-radix-popper-content-wrapper]")
    ).not.toBeNull()
    // Wider than `panelWidths.default` (360), and rounded and shadowed like
    // any other popover rather than butted against the header.
    expect(sheet().className).toMatch(/w-\[420px\]/)
    expect(sheet().className).toMatch(/rounded-lg/)
    expect(sheet().className).toMatch(/shadow-md/)
  })

  it("gives back the chip when it closes", async () => {
    // Radix hands focus back to the TRIGGER, and the trigger here is an anchor
    // — left alone, Escape drops a keyboard reader on the body.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(chip(/scheduled 4/i)).toHaveFocus())
  })

  it("shows a couple of lines of the post itself", async () => {
    // A column of headlines all read alike. Two lines of the body is what
    // tells you whether this is the pin you meant.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    const row = within(sheet()).getByRole("button", {
      name: /the coffee machine is fixed/i,
    })
    // Plain text, clamped by CSS — not the post's HTML re-rendered in a row.
    expect(row.textContent).toContain("It was the grinder")
    expect(row.innerHTML).not.toContain("<p>")
    expect(within(row).getByText(/it was the grinder/i).className).toMatch(
      /line-clamp-2/
    )
  })

  it("shows the cover as a thumbnail, and nothing where there is none", async () => {
    // A feed of photographs is remembered as photographs: the picture finds
    // the post faster than the headline does.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    const rows = within(sheet()).getAllByRole("listitem")
    const withCover = rows.find((row) =>
      row.textContent?.includes("Padel tournament")
    ) as HTMLElement
    const withoutCover = rows.find((row) =>
      row.textContent?.includes("Q2 all-hands")
    ) as HTMLElement

    const thumb = within(withCover).getByRole("presentation", { hidden: true })
    expect(thumb).toHaveAttribute("src")
    expect(thumb.className).toMatch(/object-cover/)
    // Decorative: the title beside it already names the post.
    expect(thumb).toHaveAttribute("alt", "")
    expect(
      within(withoutCover).queryByRole("presentation", { hidden: true })
    ).toBeNull()
  })

  it("reads at one size, and it is not fine print", async () => {
    // The rows were `text-sm` titles over `text-xs` bodies. These are read,
    // not skimmed like a table: one `text-base` throughout, and the hierarchy
    // comes from weight and colour.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    const row = within(sheet()).getAllByRole("listitem")[0]
    expect(row.className).toMatch(/text-base/)
    expect(row.innerHTML).not.toMatch(/class="[^"]*text-(xs|sm)\b/)
  })

  it("dates a scheduled post under it, not in a column beside it", async () => {
    // The date used to be a fixed 64px column in warning orange, which wrapped
    // onto two lines and read as a second thing to scan before the title.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    expect(sheet().innerHTML).not.toMatch(/text-f1-foreground-warning/)
    // The event one says so as a tag, next to when it goes out.
    const eventRow = within(sheet())
      .getAllByRole("listitem")
      .find((item) => item.textContent?.includes("Q2 all-hands")) as HTMLElement
    expect(within(eventRow).getByText("Event")).toBeVisible()
  })

  it("crosses to the other list in one press, on the chips themselves", async () => {
    // Two separate popovers, and no tabs inside either: the chips ARE the
    // switch, so crossing costs the same one press a tab row would have.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    expect(within(sheet()).queryByRole("radio")).toBeNull()

    await userEvent.click(chip(/scheduled 4/i))

    await waitFor(() =>
      expect(within(sheet()).getByTestId("shelf-scheduled")).toBeVisible()
    )
    // One at a time: the pinned one is gone, not stacked underneath.
    expect(screen.getAllByTestId("chat-shelf-sheet")).toHaveLength(1)
    expect(screen.queryByTestId("shelf-pinned")).toBeNull()
    expect(sheet().textContent).toContain("Padel tournament")
  })

  it("has no close button — outside is how you leave a popover", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    expect(
      within(sheet()).queryByRole("button", { name: /^close$/i })
    ).toBeNull()
  })

  it("closes on the chip, on Escape and on a press outside", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() =>
      expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
    )

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.keyboard("{Escape}")
    await waitFor(() =>
      expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
    )

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(cards()[0] as HTMLElement)
    await waitFor(() =>
      expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
    )
  })

  it("counts a newly pinned post, and stops counting an unpinned one", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(cardMenu(cardTitled("Rooftop summer party")))
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /^pin post$/i })
    )

    await waitFor(() => expect(chip(/pinned 2/i)).toBeVisible())

    // …and back down from the sheet's own menu.
    await userEvent.click(chip(/pinned 2/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(
      within(sheet()).getAllByRole("button", {
        name: /toggle dropdown menu/i,
      })[0]
    )
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /^unpin post$/i })
    )

    await waitFor(() => expect(chip(/pinned 1/i)).toBeVisible())
  })

  it("marks the pinned post's own card", async () => {
    render(<CommunityPosting />)
    await feedReady()

    expect(
      within(cardTitled("The coffee machine is fixed")).getByRole("img", {
        name: /pinned post/i,
      })
    ).toBeVisible()
  })

  it("takes you to a pin in the feed, ringed", async () => {
    // `highlightedId` used to be read by `ChatMessageItem` alone, so a jump to a
    // POST landed with nothing to show for it.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(
      within(sheet()).getAllByRole("button", {
        name: /toggle dropdown menu/i,
      })[0]
    )
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /go to post/i })
    )

    await waitFor(() => {
      const ringed = Array.from(
        document.querySelectorAll('[data-testid="chat-post-row"]')
      ).filter((row) => row.className.includes("ring-1"))
      expect(ringed).toHaveLength(1)
      expect(ringed[0].textContent).toContain("The coffee machine is fixed")
    })
    // The sheet got out of the way so the ring is visible.
    expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
  })

  it("opens a pinned post's page from its row", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/pinned 1/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(
      within(sheet()).getByRole("button", {
        name: /the coffee machine is fixed/i,
      })
    )

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
    expect(screen.queryByTestId("chat-shelf-sheet")).toBeNull()
  })
})

describe("a scheduled post", () => {
  const openScheduled = async () => {
    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())
  }

  /** A row's ⋯, by the post it belongs to — the list is ordered by when each
   * one goes out, so an index picks whichever seed happens to be soonest. */
  const rowMenu = async (name: RegExp) => {
    const row = within(sheet())
      .getAllByRole("listitem")
      .find((item) => name.test(item.textContent ?? "")) as HTMLElement
    await userEvent.click(
      within(row).getByRole("button", { name: /toggle dropdown menu/i })
    )
  }

  it("waits on the shelf and nowhere near the feed", async () => {
    render(<CommunityPosting />)
    await feedReady()

    expect(
      cards().some((card) => card.textContent?.includes("Padel tournament"))
    ).toBe(false)

    await openScheduled()
    expect(sheet().textContent).toContain("Padel tournament")
    expect(sheet().textContent).toContain("Q2 all-hands")
    // The event one says so.
    expect(sheet().textContent).toContain("Event")
  })

  it("opens as a PREVIEW: the page, without what hasn't happened", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await openScheduled()

    await userEvent.click(
      within(sheet()).getByRole("button", { name: /padel tournament/i })
    )

    const preview = await screen.findByTestId("community-scheduled-preview")
    expect(preview.textContent).toContain("Padel tournament")
    // No comment box, no reaction row, no visit count: none of it exists yet.
    expect(
      within(preview).queryByRole("textbox", { name: /write a comment/i })
    ).toBeNull()
    expect(preview.textContent).not.toContain("comment")
    // What it does say is when it goes out.
    expect(screen.getAllByText(/publishes/i)[0]).toBeVisible()
  })

  it("publishes now from the preview", async () => {
    render(<CommunityPosting />)
    await feedReady()
    const before = cards().length
    await openScheduled()

    await userEvent.click(
      within(sheet()).getByRole("button", { name: /padel tournament/i })
    )
    await screen.findByTestId("community-scheduled-preview")
    await userEvent.click(
      screen.getAllByRole("button", { name: /publish now/i })[0]
    )

    await waitFor(() => expect(cards()).toHaveLength(before + 1))
    expect(
      cards().some((card) => card.textContent?.includes("Padel tournament"))
    ).toBe(true)
    // One fewer waiting.
    await waitFor(() => expect(chip(/scheduled 3/i)).toBeVisible())
  })

  it("cancels one from its row", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await openScheduled()

    await rowMenu(/padel tournament/i)
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /^cancel$/i })
    )

    await waitFor(() => expect(chip(/scheduled 3/i)).toBeVisible())
    expect(sheet().textContent).not.toContain("Padel tournament")
  })

  it("edits one without publishing it", async () => {
    // The third case the composer has to know about: not a new post, and not a
    // published one — saving must leave it scheduled.
    render(<CommunityPosting />)
    await feedReady()
    const before = cards().length
    await openScheduled()

    await rowMenu(/padel tournament/i)
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /edit post/i })
    )

    const title = await screen.findByRole("textbox", { name: /title/i })
    expect(title).toHaveValue("Padel tournament — sign-ups open")
    await userEvent.clear(title)
    await userEvent.type(title, "Padel tournament — last call")
    await userEvent.click(screen.getByRole("button", { name: /continue/i }))
    await userEvent.click(
      await screen.findByRole("button", { name: /^publish$/i })
    )

    await waitFor(() =>
      expect(screen.queryByTestId("community-post-composer")).toBeNull()
    )
    // Still four waiting, nothing new in the feed, and the new title on the shelf.
    expect(cards()).toHaveLength(before)
    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() =>
      expect(sheet().textContent).toContain("Padel tournament — last call")
    )
  })
})

describe("opening something from a fullscreen panel", () => {
  /** The chat header's own expand control — scoped to the panel, because the
   * page behind it has expand buttons of its own. */
  const goFullscreen = async () => {
    const header = shelf().parentElement?.parentElement as HTMLElement
    await userEvent.click(
      within(header).getByRole("button", { name: /^expand$/i })
    )
  }

  it("docks the panel when a post opens behind it", async () => {
    // A fullscreen panel covers the main content, so the post it just opened
    // is behind it and nothing appears to have happened. The mock changes its
    // route on open — `/communities/post/:id`, as the product does — and F0's
    // rule about navigating out of fullscreen does the rest.
    render(<CommunityPosting />)
    await feedReady()
    await goFullscreen()

    await userEvent.click(cards()[0] as HTMLElement)

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
    // Docked, not closed: the conversation is still beside what it opened.
    expect(screen.getByTestId("chat-message-viewport")).toBeVisible()
  })

  it("docks it for a scheduled preview too", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await goFullscreen()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(
      within(sheet()).getByRole("button", { name: /padel tournament/i })
    )

    await waitFor(() =>
      expect(screen.getByTestId("community-scheduled-preview")).toBeVisible()
    )
    expect(screen.getByTestId("chat-message-viewport")).toBeVisible()
  })
})

describe("a channel that is not a community", () => {
  it("has no shelf at all", async () => {
    const { EverythingChannel } = composeStories(stories)
    render(<EverythingChannel />)

    await waitFor(() =>
      expect(screen.getByTestId("chat-message-viewport")).toBeVisible()
    )
    expect(screen.queryByTestId("chat-community-shelf")).toBeNull()
  })
})
