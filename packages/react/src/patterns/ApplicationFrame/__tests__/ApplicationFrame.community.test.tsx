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
  window.matchMedia =
    window.matchMedia ??
    ((query: string) =>
      ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
        onchange: null,
      }) as unknown as MediaQueryList)
})

/**
 * THE STORY ITSELF, not a simplified harness.
 *
 * A harness passed all of this while the real story did none of it: the chat
 * panel is stashed as an element in `setPanelContent` and rendered by
 * `HostedPanelWindow` deep inside the frame, and the handlers it needed never
 * reached it there. A test that rebuilt the tree by hand couldn't see that.
 */
const { CommunityPosting } = composeStories(stories)

/** The feed's post cards, in transcript order. */
const cards = () =>
  Array.from(document.querySelectorAll('[id^="community-post-"]'))

const feedReady = async () => {
  await waitFor(() => expect(cards().length).toBeGreaterThan(0), {
    timeout: 5000,
  })
  return cards()
}

describe("a community channel inside the application frame", () => {
  it("opens with the ordinary page beside the feed", async () => {
    render(<CommunityPosting />)

    await feedReady()
    expect(screen.getByText(/good morning, jordan/i)).toBeVisible()
  })

  it("makes the post cards clickable", async () => {
    render(<CommunityPosting />)

    for (const card of await feedReady()) {
      expect(card).toHaveClass("cursor-pointer")
    }
  })

  it("opens the post in the main content when a card is pressed", async () => {
    render(<CommunityPosting />)
    const feed = await feedReady()

    await userEvent.click(feed[0] as HTMLElement)

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
    // The page was replaced, not covered.
    expect(screen.queryByText(/good morning, jordan/i)).toBeNull()
  })

  it("keeps the conversation open and scrollable beside it", async () => {
    render(<CommunityPosting />)
    const feed = await feedReady()

    await userEvent.click(feed[0] as HTMLElement)
    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )

    expect(screen.getByTestId("chat-message-viewport")).toBeVisible()
    expect(cards().length).toBeGreaterThan(0)
  })

  it("marks the open post's card, and only that one", async () => {
    // A feed and a page beside it: without this, nothing in the feed says which
    // of thirty cards is the page you are reading.
    render(<CommunityPosting />)
    const feed = await feedReady()

    expect(document.querySelectorAll("[data-active]")).toHaveLength(0)

    const opened = feed.find((card) =>
      card.textContent?.includes("The coffee machine is fixed")
    ) as HTMLElement
    await userEvent.click(opened)
    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )

    const marked = Array.from(
      document.querySelectorAll('[data-testid="chat-post-row"][data-active]')
    )
    expect(marked).toHaveLength(1)
    expect(marked[0].textContent).toContain("The coffee machine is fixed")
    // Selected, not "done": the selection tint, and the card says so to a
    // screen reader as the current item of the set. A tint alone — an accent
    // edge on top of it was a second thing saying the same thing.
    expect(marked[0].className).toMatch(/bg-f1-background-selected-secondary/)
    expect(marked[0].className).not.toMatch(/border-f1-border-selected/)
    expect(marked[0]).toHaveAttribute("aria-current", "true")
  })

  it("clears the mark when the page stops being a post", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(await screen.findByTestId("chat-post-composer"))
    await waitFor(() =>
      expect(screen.getByTestId("community-post-composer")).toBeVisible()
    )

    // The composer is a page too, and it is not a post in this feed.
    expect(document.querySelectorAll("[data-active]")).toHaveLength(0)
  })

  it("heads the open post with a breadcrumb home, not a close button", async () => {
    render(<CommunityPosting />)
    const feed = await feedReady()

    const opened = feed.find((card) =>
      card.textContent?.includes("The coffee machine is fixed")
    ) as HTMLElement
    await userEvent.click(opened)
    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )

    // `Inicio > <post>`, as in production.
    const home = screen.getByRole("link", { name: /^home$/i })
    expect(home).toBeVisible()
    expect(screen.getByTestId("community-post-detail").textContent).toContain(
      "The coffee machine is fixed"
    )
    // Scoped to the post: the chat panel beside it keeps its own Close.
    expect(
      within(screen.getByTestId("community-post-detail")).queryByRole(
        "button",
        { name: /^close$/i }
      )
    ).toBeNull()

    // And it is the way back — without navigating the iframe anywhere.
    await userEvent.click(home)
    await waitFor(() =>
      expect(screen.queryByTestId("community-post-detail")).toBeNull()
    )
    expect(screen.getByText(/good morning, jordan/i)).toBeVisible()
  })

  it("reacts from the feed and moves the count on the card", async () => {
    // The regression that made the `+` button do nothing: a post is not a
    // "user message", so the store's guard dropped the toggle in silence.
    render(<CommunityPosting />)
    await feedReady()

    const pill = await screen.findByRole("button", { name: /: 18$/ })
    await userEvent.click(pill)

    await waitFor(() =>
      expect(screen.getByRole("button", { name: /: 19$/ })).toBeVisible()
    )
  })

  it("opens the post with the comment box focused from Comment", async () => {
    render(<CommunityPosting />)
    await feedReady()

    const commentButtons = await screen.findAllByRole("button", {
      name: /comment/i,
    })
    await userEvent.click(commentButtons[0])

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", { name: /write a comment/i })
      ).toHaveFocus()
    )
  })

  it("counts one visit however many times the post is opened", async () => {
    // The other regression: `visitPost` called a setState inside another
    // setState's updater, so StrictMode ran it twice.
    render(<CommunityPosting />)
    const feed = await feedReady()

    await userEvent.click(feed[0] as HTMLElement)
    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
    const afterFirst = screen.getByTestId("community-post-detail").textContent

    await userEvent.click(screen.getByRole("link", { name: /^home$/i }))
    await waitFor(() => expect(cards().length).toBeGreaterThan(0))
    await userEvent.click(cards()[0] as HTMLElement)

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail").textContent).toBe(
        afterFirst
      )
    )
  })

  it("opens the full post form, not the minimal dialog", async () => {
    // The dialog that used to appear was F0Chat's own fallback, which only has
    // a title and a body — proof that `composePost` never reached the panel.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(await screen.findByTestId("chat-post-composer"))

    await waitFor(() =>
      expect(screen.getByTestId("community-post-composer")).toBeVisible()
    )
    expect(screen.getByText("Create post")).toBeVisible()
    expect(screen.getByText("Post cover")).toBeVisible()
    expect(screen.getByText("Post settings")).toBeVisible()
  })

  it("publishes through the step nested inside the composer dialog", async () => {
    // The publish step is a dialog ON a dialog. Radix pauses the outer focus
    // scope for the inner one — if it didn't, the outer would snatch focus back
    // and the step would be unusable.
    render(<CommunityPosting />)
    const before = (await feedReady()).length

    await userEvent.click(await screen.findByTestId("chat-post-composer"))
    await userEvent.type(
      await screen.findByRole("textbox", { name: /title/i }),
      "Padel tournament"
    )
    await userEvent.click(screen.getByRole("button", { name: /continue/i }))

    const publish = await screen.findByRole("button", { name: /^publish$/i })
    await userEvent.click(publish)

    // The composer closed and the post is at the foot of the feed.
    await waitFor(() => expect(cards().length).toBe(before + 1))
    await waitFor(() =>
      expect(screen.queryByTestId("community-post-composer")).toBeNull()
    )
  })

  it("publishes an EVENT, with its date and place on the card", async () => {
    // The whole event branch used to be dropped on the floor: `publishPost`
    // built a post out of the title and body and nothing else, so an event
    // landed as an ordinary post with no date, no place and no cover.
    render(<CommunityPosting />)
    const before = (await feedReady()).length

    await userEvent.click(await screen.findByTestId("chat-post-composer"))
    const composer = () => screen.getByTestId("community-post-composer")

    await userEvent.type(
      await screen.findByRole("textbox", { name: /title/i }),
      "Summer offsite"
    )

    // The event switch reveals the two fields only it needs.
    expect(within(composer()).queryByLabelText(/event location/i)).toBeNull()
    await userEvent.click(
      within(composer()).getByRole("switch", { name: /this is an event/i })
    )
    const location = await within(composer()).findByLabelText(/event location/i)
    await userEvent.type(location, "Rooftop, 8th floor")

    await userEvent.click(screen.getByRole("button", { name: /continue/i }))
    await userEvent.click(
      await screen.findByRole("button", { name: /^publish$/i })
    )

    await waitFor(() => expect(cards().length).toBe(before + 1))

    const published = cards()[cards().length - 1] as HTMLElement
    expect(published.textContent).toContain("Summer offsite")
    expect(published.textContent).toContain("Rooftop, 8th floor")
  })

  it("carries the settings a new post was given", async () => {
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(await screen.findByTestId("chat-post-composer"))
    const composer = () => screen.getByTestId("community-post-composer")
    await userEvent.type(
      await screen.findByRole("textbox", { name: /title/i }),
      "Read this one"
    )
    await userEvent.click(
      within(composer()).getByRole("switch", { name: /require action/i })
    )

    await userEvent.click(screen.getByRole("button", { name: /continue/i }))
    // Comments off, from the publish step — the audience decisions live there.
    await userEvent.click(
      await screen.findByRole("checkbox", {
        name: /allow comments and reactions/i,
      })
    )
    await userEvent.click(
      await screen.findByRole("button", { name: /^publish$/i })
    )

    // Opening it shows the acknowledgement bar the post asked for, and no
    // comment box, because comments were turned off.
    await waitFor(() => expect(cards().length).toBeGreaterThan(0))
    const published = cards()[cards().length - 1] as HTMLElement
    await userEvent.click(published)

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
    const detail = within(screen.getByTestId("community-post-detail"))
    // `getAll`: the action bar draws a wide row and a narrow one.
    expect(
      detail.getAllByRole("button", { name: /i acknowledge/i })[0]
    ).toBeVisible()
    expect(
      detail.queryByRole("textbox", { name: /write a comment/i })
    ).toBeNull()
  })

  it("keeps a saved draft out of the feed, and says so", async () => {
    // Both used to be a `window.alert` over a post that was never built. A
    // draft is a real post that nobody can see yet — so it must NOT appear in
    // the transcript, and something has to say it was kept.
    render(<CommunityPosting />)
    const before = (await feedReady()).length

    await userEvent.click(await screen.findByTestId("chat-post-composer"))
    await userEvent.type(
      await screen.findByRole("textbox", { name: /title/i }),
      "Not ready yet"
    )
    // In the FOOTER with the other ways out, behind the split button's
    // chevron: "Schedule post" wears the label, the draft sits under it. It
    // used to be an icon button in the dialog's header, where a way out reads
    // as chrome.
    await userEvent.click(screen.getByTestId("button-menu"))
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /save as draft/i })
    )

    await waitFor(() =>
      expect(screen.getByText(/saved as draft/i)).toBeVisible()
    )
    expect(cards().length).toBe(before)
  })
})

/**
 * A community is reachable from the SIDEBAR of every story that mounts the
 * conversations sidebar, not only from the two whose name says "Community".
 * A story that forgets the surface gets a feed whose cards swallow every
 * press in silence — the store records the open post and nothing renders it.
 */
const { Default, EverythingChannel, AnnouncementChannel, Snapshot } =
  composeStories(stories)

const openBarcelonaFromSidebar = async () => {
  // The conversations tab, whichever navigation the story wears: the rail
  // names the module ("Comms"), the tab row names the panel ("Chat").
  await userEvent.click(
    await screen.findByRole("button", { name: /^(chat|comms)$/i })
  )
  await userEvent.click(
    await screen.findByRole("button", { name: /barcelona office/i })
  )
  await feedReady()
}

describe.each([
  ["Default", Default],
  ["EverythingChannel", EverythingChannel],
  ["AnnouncementChannel", AnnouncementChannel],
  ["Snapshot", Snapshot],
])("reaching a community from the %s story's sidebar", (_name, Story) => {
  it("opens the post in the main content", async () => {
    render(<Story />)
    await openBarcelonaFromSidebar()

    await userEvent.click(cards()[0] as HTMLElement)

    await waitFor(() =>
      expect(screen.getByTestId("community-post-detail")).toBeVisible()
    )
  })

  it("opens the full post form from the composer bar", async () => {
    render(<Story />)
    await openBarcelonaFromSidebar()

    await userEvent.click(await screen.findByTestId("chat-post-composer"))

    await waitFor(() =>
      expect(screen.getByTestId("community-post-composer")).toBeVisible()
    )
  })
})
