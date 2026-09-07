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
 * Company news: the feed a company uses to reach everyone — results, policy,
 * events, legal notices — read by someone who cannot post in it. That reader is
 * almost everybody, so it is the case the fixtures owe the most detail to.
 */
const { CommunityChannel } = composeStories(stories)

const cards = () =>
  Array.from(document.querySelectorAll('[id^="community-post-"]'))

const feedReady = async () => {
  await waitFor(() => expect(cards().length).toBeGreaterThan(0), {
    timeout: 5000,
  })
  return cards()
}

const cardTitled = (text: string) =>
  cards().find((card) => card.textContent?.includes(text)) as HTMLElement

const openPost = async (title: string) => {
  await userEvent.click(cardTitled(title))
  return await screen.findByTestId("community-post-detail")
}

const shelf = () => screen.getByTestId("chat-community-shelf")
const sheet = () => screen.getByTestId("chat-shelf-sheet")

describe("a community you can only read", () => {
  it("still pins: the shelf is how you find the important ones", async () => {
    // Pinning is moderation, reading is not — but the RESULT of moderating is
    // for everyone. A reader who cannot post still needs the table of contents.
    render(<CommunityChannel />)
    await feedReady()

    expect(
      within(shelf()).getByRole("button", { name: /pinned 2/i })
    ).toBeVisible()
  })

  it("offers no way to unpin what someone else pinned", async () => {
    render(<CommunityChannel />)
    await feedReady()

    await userEvent.click(
      within(shelf()).getByRole("button", { name: /pinned 2/i })
    )
    await waitFor(() => expect(sheet()).toBeVisible())
    await userEvent.click(
      within(sheet()).getAllByRole("button", {
        name: /toggle dropdown menu/i,
      })[0]
    )

    // Finding it is all a reader gets.
    expect(
      await screen.findByRole("menuitem", { name: /go to post/i })
    ).toBeVisible()
    expect(screen.queryByRole("menuitem", { name: /unpin post/i })).toBeNull()
  })

  it("never shows them what has not been published yet", async () => {
    // Scheduled posts are the publisher's queue. A reader seeing Monday's
    // announcement on Friday is a leak, not a feature.
    render(<CommunityChannel />)
    await feedReady()

    expect(
      within(shelf()).queryByRole("button", { name: /scheduled/i })
    ).toBeNull()
  })

  it("has no composer, and says who does", async () => {
    render(<CommunityChannel />)
    await feedReady()

    expect(screen.queryByTestId("chat-post-composer")).toBeNull()
    expect(screen.getByTestId("chat-read-only-notice")).toHaveTextContent(
      /only the communications team can post here/i
    )
  })
})

describe("a post the company signs itself", () => {
  it("names nobody — a policy is not one person's opinion", async () => {
    render(<CommunityChannel />)
    await feedReady()

    const card = cardTitled("Legal notice: updated terms")
    expect(card.textContent).toContain("Legal notice: updated terms")
    expect(card.textContent).not.toMatch(/Marcus|Eleanor|Isla|Owen/)
  })
})

describe("a comunicado that has to be acknowledged", () => {
  it("asks in the post, and confirms once it is done", async () => {
    render(<CommunityChannel />)
    await feedReady()

    const detail = await openPost("Updated information security policy")
    expect(
      within(detail).getByText(/post acknowledgement required/i)
    ).toBeVisible()

    // The action bar draws its buttons twice — a wide row and a narrow one.
    await userEvent.click(
      within(detail).getAllByRole("button", { name: /i acknowledge/i })[0]
    )

    // The bar does not disappear: the reader's own record is the point.
    await waitFor(() =>
      expect(within(detail).getByText(/acknowledged on/i)).toBeVisible()
    )
    expect(
      within(detail).queryAllByRole("button", { name: /i acknowledge/i })
    ).toHaveLength(0)
  })

  it("carries the documents it is asking about", async () => {
    render(<CommunityChannel />)
    await feedReady()

    const detail = await openPost("Updated information security policy")

    expect(detail.textContent).toContain("information-security-policy-v4.pdf")
    expect(detail.textContent).toContain("approved-tools-list.csv")
  })

  it("keeps the files off the feed card", async () => {
    // A row of download chips is not something anyone skims past.
    render(<CommunityChannel />)
    await feedReady()

    expect(
      cardTitled("Updated information security policy").textContent
    ).not.toContain("information-security-policy-v4.pdf")
  })
})

describe("a notice that is not a conversation", () => {
  it("drops comments and reactions together", async () => {
    // Half the block is worse than none: no comment box AND no reaction row.
    render(<CommunityChannel />)
    await feedReady()

    const detail = await openPost("Legal notice: updated terms")

    expect(
      within(detail).queryByRole("textbox", { name: /write a comment/i })
    ).toBeNull()
    expect(
      within(detail).queryByRole("button", { name: /add reaction/i })
    ).toBeNull()
  })

  it("leaves the ordinary posts their comments", async () => {
    render(<CommunityChannel />)
    await feedReady()

    const detail = await openPost("Q3 results are in")

    expect(
      within(detail).getByRole("button", { name: /add reaction/i })
    ).toBeVisible()
    expect(detail.textContent).toMatch(/comments?/i)
  })
})

describe("the posts themselves", () => {
  it("carry the formatting a real announcement needs", async () => {
    // Headings, lists and links, not a paragraph of plain text: this is where
    // the quarter's numbers are read.
    render(<CommunityChannel />)
    await feedReady()

    const detail = await openPost("Q3 results are in")

    expect(
      within(detail).getByText(/the three numbers that matter/i)
    ).toBeVisible()
    expect(detail.querySelectorAll("li").length).toBeGreaterThanOrEqual(3)
  })

  it("announce events with a date and a place", async () => {
    render(<CommunityChannel />)
    await feedReady()

    const card = cardTitled("Q4 kick-off")
    expect(card.textContent).toContain("Auditorium, ground floor")
  })
})
