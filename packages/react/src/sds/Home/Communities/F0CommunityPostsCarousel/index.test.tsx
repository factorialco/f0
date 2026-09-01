import { describe, expect, test, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { F0CommunityPostsCarousel, type CommunityPostSummary } from "./index"

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
    <F0CommunityPostsCarousel posts={POSTS} labels={LABELS} {...props} />
  )

const slides = () => screen.getAllByRole("group")

describe("F0CommunityPostsCarousel", () => {
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

  test("the stretched hit area sits above the tile's positioned content", () => {
    render()

    // THE REGRESSION: the overlay had `z-index: auto`, so it shared a layer with
    // every other positioned descendant of the card and lost to whichever came
    // last in the DOM — the author avatar (`relative`) and the rich-text body
    // both sat on top of it. Hovering either showed no pointer and clicking
    // either did nothing. Asserted as a class because jsdom has no painting, so
    // there is no hit-test to make here; the browser check is the story.
    expect(
      screen.getByRole("link", { name: POSTS[0].title }).className
    ).toContain("after:z-[1]")
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

  test("a cover image is drawn in a fixed 16:9 box, whatever its own shape", () => {
    render({
      posts: [{ ...POSTS[0], imageUrl: "/landscape01.jpg" }, POSTS[1]],
    })

    const image = screen.getByRole("presentation")
    expect(image).toHaveAttribute("src", "/landscape01.jpg")
    // The BOX is what holds the ratio; the picture fills it and is cropped. A
    // tile that took its height from its own image would put every title in a
    // row on a different line.
    expect(image.parentElement).toHaveClass("aspect-video")
    expect(image).toHaveClass("object-cover")
  })

  test("a post with no cover leaves no gap where one would be", () => {
    render({ posts: [POSTS[1]] })

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  test("every tile is the same declared height, cover or no cover", () => {
    render({
      posts: [{ ...POSTS[0], imageUrl: "/landscape01.jpg" }, POSTS[1]],
    })

    // THE REGRESSION: the tiles were `h-full`, so the row took the tallest post
    // in it and the widget changed height every time the page turned. The
    // height is declared now and the BODY is what gives — which is only true
    // while every tile carries the same one.
    const tiles = screen.getAllByRole("article")
    expect(tiles).toHaveLength(2)
    for (const tile of tiles) expect(tile).toHaveClass("h-96")
  })

  test("the body takes the room the rest of the tile left, not a fixed count", () => {
    render({ posts: [POSTS[0]] })

    // The wrapper is the mechanism: it claims the leftover height (`flex-1`,
    // shrinkable via `min-h-0`) and clips, and the clamp inside it is measured
    // against that box at runtime. A flat five-line clamp — which is what this
    // replaced — overflows a tile with a cover and leaves a picture's worth of
    // white in one without.
    const body = screen.getByText("There is no deck to read afterwards.")
    const room = body.closest("div.flex-1")
    expect(room).not.toBeNull()
    expect(room).toHaveClass("min-h-0", "overflow-hidden")
  })

  test("loading draws placeholder tiles instead of posts, as many as expected", () => {
    render({ posts: [], loading: true, expectedItemsCount: 3 })

    expect(screen.queryByText("Yusuf Adeyemi")).not.toBeInTheDocument()
    // One slide per placeholder — the loading card stands as tall as the loaded
    // one rather than collapsing and then jumping.
    expect(screen.getAllByRole("group")).toHaveLength(3)
  })

  describe("the cover's seat in a placeholder tile", () => {
    /** The 16:9 box a placeholder keeps for a cover, if it keeps one. */
    const seats = () =>
      screen
        .getAllByTestId("skeleton")
        .filter((el) => el.className.includes("aspect-video"))

    test("is kept while the FIRST page loads, when nothing is known yet", () => {
      render({ posts: [], loading: true, expectedItemsCount: 2 })

      // A card that starts short and grows moves everything under it; one that
      // starts tall and settles only gives room back.
      expect(seats()).toHaveLength(2)
    })

    test("is kept on a refresh when the posts in hand have pictures", () => {
      render({
        posts: [{ ...POSTS[0], imageUrl: "/landscape01.jpg" }, POSTS[1]],
        loading: true,
        expectedItemsCount: 2,
      })

      expect(seats()).toHaveLength(2)
    })

    test("is dropped on a refresh when none of them do", () => {
      render({ posts: POSTS, loading: true, expectedItemsCount: 2 })

      // A feed of text posts should not flash an image-shaped hole while it
      // reloads.
      expect(seats()).toHaveLength(0)
    })
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
        <F0CommunityPostsCarousel
          posts={POSTS}
          labels={LABELS}
          pagination={{ hasMore: true, onLoadMore }}
        />
      )

      expect(onLoadMore).not.toHaveBeenCalled()
    })

    test("a page in flight is not announced — the row is left alone", () => {
      render({
        pagination: { hasMore: true, isLoading: true, onLoadMore: vi.fn() },
      })

      // MOST FETCHES HERE ARE PREFETCHES, asked for by nobody. A placeholder
      // tile made every one of them visible, which is the opposite of the point:
      // the posts you were reading stay, and the row does not grow a grey
      // rectangle to say that work is happening ahead of you.
      expect(screen.getByText("Yusuf Adeyemi")).toBeInTheDocument()
      expect(screen.getAllByRole("group")).toHaveLength(POSTS.length)
      // And nothing is asked for twice while the first ask is outstanding.
      expect(screen.getByRole("button", { name: "More posts" })).toBeDisabled()
    })

    test("Next goes dead only once the feed says it is done", () => {
      render({
        pagination: { hasMore: false, isLoading: false, onLoadMore: vi.fn() },
      })

      expect(screen.getByRole("button", { name: "More posts" })).toBeDisabled()
    })

    // The drag itself lives in the `LoadsMoreOnDrag` story: jsdom has no layout,
    // so embla never wires its drag handler up here.
    test("a page the reader is waiting on gets tiles to land on", async () => {
      const onLoadMore = vi.fn()
      const { rerender } = render({
        pagination: { hasMore: true, isLoading: false, onLoadMore },
        expectedItemsCount: 2,
      })

      await userEvent.click(screen.getByRole("button", { name: "More posts" }))
      rerender(
        <F0CommunityPostsCarousel
          posts={POSTS}
          labels={LABELS}
          expectedItemsCount={2}
          pagination={{ hasMore: true, isLoading: true, onLoadMore }}
        />
      )

      expect(screen.getByText("Yusuf Adeyemi")).toBeInTheDocument()
      expect(slides()).toHaveLength(POSTS.length + 2)
    })

    test("the placeholders give their places up when the posts arrive", async () => {
      const onLoadMore = vi.fn()
      const arrived = [
        ...POSTS,
        { ...POSTS[0], id: "third", title: "A third post" },
      ]
      const { rerender } = render({
        pagination: { hasMore: true, isLoading: false, onLoadMore },
        expectedItemsCount: 2,
      })

      await userEvent.click(screen.getByRole("button", { name: "More posts" }))
      rerender(
        <F0CommunityPostsCarousel
          posts={POSTS}
          labels={LABELS}
          expectedItemsCount={2}
          pagination={{ hasMore: true, isLoading: true, onLoadMore }}
        />
      )
      rerender(
        <F0CommunityPostsCarousel
          posts={arrived}
          labels={LABELS}
          expectedItemsCount={2}
          pagination={{ hasMore: true, isLoading: false, onLoadMore }}
        />
      )

      expect(screen.getByText("A third post")).toBeInTheDocument()
      expect(slides()).toHaveLength(arrived.length)
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
