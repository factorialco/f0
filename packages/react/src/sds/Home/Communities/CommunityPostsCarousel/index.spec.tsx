import { describe, expect, test, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { CommunityPostsCarousel, type CommunityPostSummary } from "./index"

const LABELS = { previous: "Previous posts", next: "More posts" }

const POSTS: CommunityPostSummary[] = [
  {
    id: "h2",
    title: "How we're changing planning for H2",
    description: "<p>There is no deck to read afterwards.</p>",
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
]

const render = (props = {}) =>
  zeroRender(
    <CommunityPostsCarousel posts={POSTS} labels={LABELS} {...props} />
  )

describe("CommunityPostsCarousel", () => {
  test("draws a tile per post: its title, its body, its author and its counters", () => {
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

  test("the title is the tile's only target, so the post is announced once", () => {
    render()

    // Not one link per tile PLUS a wrapper: the card is clickable through the
    // title's stretched hit area, which is why there are exactly two links here.
    expect(screen.getAllByRole("link")).toHaveLength(2)
  })

  test("a post with no href is a button, and it still reports the click", async () => {
    const onClick = vi.fn()
    render({
      posts: [{ ...POSTS[0], href: undefined, onClick }],
    })

    await userEvent.click(
      screen.getByRole("button", {
        name: "How we're changing planning for H2",
      })
    )

    expect(onClick).toHaveBeenCalled()
  })

  test("the paging arrows are always there, named, and disabled at the ends", () => {
    render()

    // THE POINT OF BUILDING THIS ROW rather than using `ui/carousel`'s own
    // arrows: those are hover-revealed overlays, so on a touch screen they do
    // not exist. These are in the flow and keep their place — the first page
    // simply has nowhere back to go.
    expect(
      screen.getByRole("button", { name: "Previous posts" })
    ).toBeDisabled()
    expect(screen.getByRole("button", { name: "More posts" })).toBeDisabled()
  })

  test("a cover image is drawn in a fixed 2:1 box, whatever its own shape", () => {
    render({
      posts: [{ ...POSTS[0], imageUrl: "/landscape01.jpg" }, POSTS[1]],
    })

    const image = screen.getByRole("presentation")
    expect(image).toHaveAttribute("src", "/landscape01.jpg")
    // The BOX is what holds the ratio; the picture fills it and is cropped. A
    // tile that took its height from its own image would put every title in a
    // row on a different line.
    expect(image.parentElement).toHaveClass("aspect-[2/1]")
    expect(image).toHaveClass("object-cover")
  })

  test("a post with no cover leaves no gap where one would be", () => {
    render({ posts: [POSTS[1]] })

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  test("loading draws placeholder tiles instead of posts, as many as expected", () => {
    render({ posts: [], loading: true, expectedItemsCount: 3 })

    expect(screen.queryByText("Yusuf Adeyemi")).not.toBeInTheDocument()
    // One slide per placeholder — the loading card stands as tall as the loaded
    // one rather than collapsing and then jumping.
    expect(screen.getAllByRole("group")).toHaveLength(3)
  })

  describe("when the posts are a PAGE of a longer feed", () => {
    test("Next stays live past the last mounted tile", () => {
      render({
        pagination: { hasMore: true, isLoading: false, onLoadMore: vi.fn() },
      })

      // Two posts, both on screen: the carousel itself has nowhere to go. The
      // arrow is alive anyway, because the FEED does.
      expect(screen.getByRole("button", { name: "More posts" })).toBeEnabled()
    })

    test("pressing Next at the end fetches instead of doing nothing", async () => {
      const onLoadMore = vi.fn()
      render({ pagination: { hasMore: true, onLoadMore } })

      await userEvent.click(screen.getByRole("button", { name: "More posts" }))

      expect(onLoadMore).toHaveBeenCalledTimes(1)
    })

    test("a card nobody touched fetches only the page it was given", () => {
      const onLoadMore = vi.fn()
      const { rerender } = render({ pagination: { hasMore: true, onLoadMore } })

      // Nothing is asked for on mount, and nothing on a re-render either — the
      // prefetch is bound to ARRIVING at the last slide, not to the props
      // changing. That is also what makes a source answering `hasMore: true`
      // with no new records stall rather than loop.
      rerender(
        <CommunityPostsCarousel
          posts={POSTS}
          labels={LABELS}
          pagination={{ hasMore: true, onLoadMore }}
        />
      )

      expect(onLoadMore).not.toHaveBeenCalled()
    })

    test("a page in flight shows a tile to scroll onto, not a blank card", () => {
      render({
        pagination: { hasMore: true, isLoading: true, onLoadMore: vi.fn() },
      })

      // The posts you were reading STAY: three slides now — the two real tiles
      // and the one being fetched.
      expect(screen.getByText("Yusuf Adeyemi")).toBeInTheDocument()
      expect(screen.getAllByRole("group")).toHaveLength(3)
      // And nothing is asked for twice while the first ask is outstanding.
      expect(screen.getByRole("button", { name: "More posts" })).toBeDisabled()
    })

    test("Next goes dead only once the feed says it is done", () => {
      render({
        pagination: { hasMore: false, isLoading: false, onLoadMore: vi.fn() },
      })

      expect(screen.getByRole("button", { name: "More posts" })).toBeDisabled()
    })

    test("only the pages fetched are in the DOM", () => {
      // NOT virtualized — embla measures its own slides, so every mounted page
      // stays mounted. What bounds the DOM is the paging: two posts in means two
      // tiles, however long the feed behind them is.
      render({
        posts: POSTS,
        pagination: { hasMore: true, isLoading: false, onLoadMore: vi.fn() },
      })

      expect(screen.getAllByRole("group")).toHaveLength(POSTS.length)
    })
  })
})
