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

const { CommunityPosting, CommunityChannel } = composeStories(stories)

const cards = () =>
  Array.from(document.querySelectorAll('[id^="community-post-"]'))

const feedReady = async () => {
  await waitFor(() => expect(cards().length).toBeGreaterThan(0), {
    timeout: 5000,
  })
}

const shelf = () => screen.getByTestId("chat-community-shelf")
const sheet = () => screen.getByTestId("chat-shelf-sheet")
const chip = (name: RegExp) => within(shelf()).getByRole("button", { name })

const openDrafts = async () => {
  await userEvent.click(chip(/drafts 2/i))
  await waitFor(() => expect(sheet()).toBeVisible())
}

describe("the drafts shelf", () => {
  it("is its own chip, beside pinned and scheduled", async () => {
    // Not a scheduled post without a date: pinned and scheduled are facts
    // about the channel, and a draft is one person's.
    render(<CommunityPosting />)
    await feedReady()

    expect(chip(/pinned 1/i)).toBeVisible()
    expect(chip(/scheduled 4/i)).toBeVisible()
    expect(chip(/drafts 2/i)).toBeVisible()
  })

  it("keeps drafts out of the scheduled list", async () => {
    // They used to be counted as scheduled and dated with the moment they were
    // saved, which read as "going out right now" — at the top of the queue.
    render(<CommunityPosting />)
    await feedReady()

    await userEvent.click(chip(/scheduled 4/i))
    await waitFor(() => expect(sheet()).toBeVisible())

    expect(sheet().textContent).not.toContain("Bike parking")
    expect(within(sheet()).getAllByRole("listitem")).toHaveLength(4)
  })

  it("says when it was last written to, not when it goes out", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await openDrafts()

    const row = within(sheet())
      .getAllByRole("listitem")
      .find((item) => item.textContent?.includes("Bike parking")) as HTMLElement
    expect(row.textContent).toMatch(/saved/i)
  })

  it("names the untitled one instead of leaving a blank row", async () => {
    // A draft is unfinished by definition, title included — and a nameless row
    // is unfindable.
    render(<CommunityPosting />)
    await feedReady()
    await openDrafts()

    const untitled = within(sheet()).getByText(/untitled post/i)
    expect(untitled).toBeVisible()
    // Drawn as a stand-in, because it is F0 talking and not the writer.
    expect(untitled.className).toMatch(/italic/)
  })

  it("puts the newest first — the one you were just writing", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await openDrafts()

    const rows = within(sheet()).getAllByRole("listitem")
    expect(rows[0].textContent).toMatch(/untitled post/i)
    expect(rows[1].textContent).toContain("Bike parking")
  })

  it("opens one straight into the composer, loaded", async () => {
    // What you want from something half-written is to keep writing it — not a
    // preview of it, which is what a scheduled post opens.
    render(<CommunityPosting />)
    await feedReady()
    await openDrafts()

    await userEvent.click(
      within(sheet()).getByRole("button", { name: /bike parking/i })
    )

    await waitFor(() =>
      expect(screen.getByTestId("community-post-composer")).toBeVisible()
    )
    expect(await screen.findByRole("textbox", { name: /title/i })).toHaveValue(
      "Bike parking — the new plan"
    )
  })

  it("publishes one, and it joins the feed", async () => {
    render(<CommunityPosting />)
    await feedReady()
    const before = cards().length
    await openDrafts()

    const row = within(sheet())
      .getAllByRole("listitem")
      .find((item) => item.textContent?.includes("Bike parking")) as HTMLElement
    await userEvent.click(
      within(row).getByRole("button", { name: /toggle dropdown menu/i })
    )
    // "Publish", not "Publish now": there is no later to bring it forward from.
    expect(screen.queryByRole("menuitem", { name: /publish now/i })).toBeNull()
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /^publish$/i })
    )

    await waitFor(() => expect(cards().length).toBe(before + 1))
    expect(
      cards().some((card) => card.textContent?.includes("Bike parking"))
    ).toBe(true)
    await waitFor(() => expect(chip(/drafts 1/i)).toBeVisible())
  })

  it("deletes one, and the chip goes with the last of them", async () => {
    render(<CommunityPosting />)
    await feedReady()
    await openDrafts()

    for (const name of [/untitled post/i, /bike parking/i]) {
      const row = within(sheet())
        .getAllByRole("listitem")
        .find((item) => name.test(item.textContent ?? "")) as HTMLElement
      await userEvent.click(
        within(row).getByRole("button", { name: /toggle dropdown menu/i })
      )
      await userEvent.click(
        await screen.findByRole("menuitem", { name: /delete draft/i })
      )
    }

    // An empty list has nothing to show, and a chip for it says nothing.
    await waitFor(() =>
      expect(
        within(shelf()).queryByRole("button", { name: /drafts/i })
      ).toBeNull()
    )
  })

  it("saves a new one from the composer, and it lands here", async () => {
    render(<CommunityPosting />)
    await feedReady()
    const before = cards().length

    await userEvent.click(screen.getByTestId("chat-post-composer"))
    await userEvent.type(
      await screen.findByRole("textbox", { name: /title/i }),
      "Half-written thing"
    )
    // In the FOOTER, beside Continue: the split button wears "Schedule post"
    // and keeps the draft behind its chevron (`button-menu`). It used to sit in
    // the dialog's header, where a way out reads as chrome.
    expect(screen.getByRole("button", { name: /schedule post/i })).toBeVisible()
    await userEvent.click(screen.getByTestId("button-menu"))
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /save as draft/i })
    )

    await waitFor(() => expect(chip(/drafts 3/i)).toBeVisible())
    // Nothing published: a draft is not visible to anyone.
    expect(cards().length).toBe(before)

    await userEvent.click(chip(/drafts 3/i))
    await waitFor(() => expect(sheet()).toBeVisible())
    expect(within(sheet()).getAllByRole("listitem")[0].textContent).toContain(
      "Half-written thing"
    )
  })
})

describe("someone who cannot publish", () => {
  it("has no drafts chip at all", async () => {
    // There is nowhere for them to have drafted anything.
    render(<CommunityChannel />)
    await feedReady()

    expect(
      within(shelf()).queryByRole("button", { name: /drafts/i })
    ).toBeNull()
  })
})
