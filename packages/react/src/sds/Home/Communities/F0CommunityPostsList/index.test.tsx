import { describe, expect, test, vi } from "vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"
import { F0CommunityPostsList, type CommunityPostListItem } from "."

const LABELS = { viewMore: "View more", viewLess: "View less" }

const POSTS: CommunityPostListItem[] = [
  {
    id: "h2",
    title: "How we're changing planning for H2",
    description: "<p>There is no deck to read afterwards.</p>",
    imageUrl: "/landscape01.jpg",
    author: { firstName: "Yusuf", lastName: "Adeyemi" },
    createdAt: new Date(2026, 6, 16),
    counters: { visits: "742 visits", comments: "23 comments" },
    href: "/communities/posts/h2",
  },
  {
    id: "nordics",
    title: "Hana closed the Nordics pilot",
    author: { firstName: "Hana", lastName: "Tanaka" },
    createdAt: new Date(2026, 6, 15),
    counters: { visits: "164 visits", comments: "11 comments" },
    href: "/communities/posts/nordics",
  },
  {
    id: "handbook",
    title: "The handbook is now the source of truth",
    author: { firstName: "Leo", lastName: "Costa" },
    createdAt: new Date(2026, 6, 8),
    href: "/communities/posts/handbook",
  },
  {
    id: "office-move",
    title: "The Barcelona office moves in September",
    author: { firstName: "Marta", lastName: "Soler" },
    createdAt: new Date(2026, 6, 4),
    href: "/communities/posts/office-move",
  },
]

const EVENT_POST: CommunityPostListItem = {
  id: "office-opens",
  title: "New Barcelona office opens",
  description: "<p>Come and see the new floor.</p>",
  author: { firstName: "Grace", lastName: "Hopper" },
  createdAt: new Date(2026, 6, 6),
  counters: { visits: "204 visits", comments: "9 comments" },
  href: "/communities/posts/office-opens",
  event: {
    date: new Date(2026, 8, 21, 9, 0),
    place: "Diagonal Mar office, ground floor",
  },
}

const render = (props = {}) =>
  zeroRender(<F0CommunityPostsList posts={POSTS} labels={LABELS} {...props} />)

describe("F0CommunityPostsList", () => {
  test("draws a row per post: its title, its body, its author and its counters", () => {
    render()

    expect(
      screen.getByRole("link", { name: "How we're changing planning for H2" })
    ).toHaveAttribute("href", "/communities/posts/h2")
    expect(
      screen.getByText("There is no deck to read afterwards.")
    ).toBeInTheDocument()
    expect(screen.getByText("Yusuf Adeyemi")).toBeInTheDocument()
    // The day, then the counters the app already put into words — one line.
    expect(
      screen.getByText("Jul 16 · 742 visits · 23 comments")
    ).toBeInTheDocument()
  })

  test("opens with three rows, however many posts it was given", () => {
    render()

    expect(screen.getAllByRole("article")).toHaveLength(3)
    expect(
      screen.queryByText("The Barcelona office moves in September")
    ).not.toBeInTheDocument()
  })

  test("the title is the row's only target, so the post is announced once", () => {
    render()

    // Not one link per row PLUS a wrapper: the row is clickable through the
    // title's stretched hit area, which is why there are exactly three links.
    expect(screen.getAllByRole("link")).toHaveLength(3)
  })

  test("the stretched hit area sits above the row's positioned content", () => {
    render()

    // THE SAME REGRESSION THE TILES HAD: an overlay with `z-index: auto` shares
    // a layer with every other positioned descendant of the row — the author
    // avatar, the rich-text body — and loses to whichever comes last in the DOM,
    // taking the pointer and the click with it. Asserted as a class because
    // jsdom has no painting and so no hit test to make.
    expect(
      screen.getByRole("link", { name: POSTS[0].title }).className
    ).toContain("after:z-[1]")
  })

  test("a post with no href is a button, and it still reports the click", async () => {
    const onClick = vi.fn()
    render({ posts: [{ ...POSTS[0], href: undefined, onClick }] })

    await userEvent.click(
      screen.getByRole("button", {
        name: "How we're changing planning for H2",
      })
    )

    expect(onClick).toHaveBeenCalled()
  })

  test("a cover is drawn in a fixed 16:9 box beside the words", () => {
    render()

    const image = screen.getByRole("presentation")
    expect(image).toHaveAttribute("src", "/landscape01.jpg")
    // The BOX holds the ratio and the picture is cropped into it, so a row's
    // height comes from its words rather than from however the cover was
    // authored.
    expect(image.parentElement).toHaveClass("aspect-video")
    expect(image).toHaveClass("object-cover")
  })

  test("a post with no cover leaves no gap where one would be", () => {
    render({ posts: [POSTS[1]] })

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  test("the rules between rows reach the card's own border", () => {
    render()

    // THE BLEED IS THE POINT. Left inside the card's `p-4`, the dividers stop
    // 16px short of its border and read as rules floating in the middle of a
    // card; pulled out by exactly that, they reach the edge — and each row puts
    // the same 16px back as its own padding, so only the LINES move.
    const list = screen.getAllByRole("article")[0].parentElement
    expect(list).toHaveClass("-mx-4", "divide-y")
    expect(screen.getAllByRole("article")[0]).toHaveClass("px-4")
  })

  test("an event post is drawn as its event, not as a title over a body", () => {
    render({ posts: [EVENT_POST] })

    // The event card carries the title, so the row does not draw a second copy
    // of it — and the body, which the post's own page shows, is not previewed
    // here either: an event's time and place ARE its preview.
    expect(screen.getByText("New Barcelona office opens")).toBeInTheDocument()
    expect(
      screen.queryByText("Come and see the new floor.")
    ).not.toBeInTheDocument()
    expect(
      screen.getByText(/Diagonal Mar office, ground floor/)
    ).toBeInTheDocument()
  })

  test("an event row's link is named by the post's title alone", () => {
    render({ posts: [EVENT_POST] })

    // Its target wraps the whole event card, whose text is a title, a time AND a
    // place — read as the link's name that says three times over what the title
    // already says, so the name is set explicitly.
    expect(
      screen.getByRole("link", { name: "New Barcelona office opens" })
    ).toHaveAttribute("href", "/communities/posts/office-opens")
  })

  test("View more says how many are left, and turns into View less", async () => {
    render()

    const more = screen.getByRole("button", { name: "View more (1)" })
    await userEvent.click(more)

    expect(screen.getAllByRole("article")).toHaveLength(4)
    expect(
      screen.getByText("The Barcelona office moves in September")
    ).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: "View less" }))

    expect(screen.getAllByRole("article")).toHaveLength(3)
  })

  test("no toggle when every post already fits", () => {
    render({ posts: POSTS.slice(0, 3) })

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  test("loading draws the rows it is expecting and none of the posts", () => {
    render({ loading: true, expectedItemsCount: 2 })

    expect(screen.queryByRole("article")).not.toBeInTheDocument()
    expect(
      screen.queryByText("How we're changing planning for H2")
    ).not.toBeInTheDocument()
    // The toggle waits for real posts: a "View more (1)" over placeholder rows
    // counts posts the reader cannot see yet.
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
