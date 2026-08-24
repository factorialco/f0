import { useMemo, useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, userEvent, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import {
  createDataSourceDefinition,
  useData,
  useDataSource,
} from "@/hooks/datasource"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0CommunityPostsCarousel } from "@/sds/Home/Communities/F0CommunityPostsCarousel"
import { CommunityPost } from "@/sds/Home/Communities/Post/CommunityPost"

import { F0CarouselDialog, type F0CarouselDialogItem } from "./index"

/**
 * The posts as `CommunityPost` already takes them. The dialog is a FRAME: what
 * goes inside it is the Communities post component the rest of the product uses,
 * so a post opened from a feed is the same object it is everywhere else — its
 * reactions, its comment button and its counters included.
 */
const POSTS = [
  {
    id: "customers",
    title: "10,000 customers and counting",
    author: {
      firstName: "Ada",
      lastName: "Lovelace",
      avatarUrl: "/avatars/person08.jpg",
    },
    createdAt: new Date(2026, 6, 22, 9, 12),
    description:
      "<p>This morning we onboarded our <strong>10,000th customer</strong> — a milestone that felt impossibly far off two years ago.</p><p>Thank you to every team that got us here. We'll celebrate together at Friday's all-hands.</p>",
    mediaUrl: "/landscape01.jpg",
    counters: { views: "1.2k visits", comments: "37 comments" },
    reactions: {
      items: [
        { emoji: "\ud83c\udf89", initialCount: 84 },
        { emoji: "\u2764\ufe0f", initialCount: 52 },
      ],
    },
  },
  {
    id: "self-reviews",
    title: "Q3 self-reviews due Friday",
    author: {
      firstName: "Grace",
      lastName: "Hopper",
      avatarUrl: "/avatars/person04.jpg",
    },
    createdAt: new Date(2026, 6, 21, 16, 40),
    description:
      "<p>Please complete your self-review in the performance hub before <strong>Friday at 5pm</strong>.</p><p>Managers share feedback the following week, ahead of Q3 calibration.</p>",
    counters: { views: "54 visits", comments: "5 comments" },
  },
  {
    id: "office-move",
    title: "The Barcelona office moves in September",
    author: {
      firstName: "Marta",
      lastName: "Soler",
      avatarUrl: "/avatars/person06.jpg",
    },
    createdAt: new Date(2026, 6, 11, 11, 5),
    description:
      "<p>We outgrew the second floor about a year ago and have been pretending otherwise ever since. From 7 September we are two streets over, on Pau Claris.</p>",
    mediaUrl: "/landscape03.jpg",
    counters: { views: "1,208 visits", comments: "47 comments" },
  },
]

/**
 * The title goes in the DIALOG'S header — where the position and the close
 * button already are — and `CommunityPost` is told to hide its own, so the same
 * words don't appear twice an inch apart.
 */
const ITEMS: F0CarouselDialogItem[] = POSTS.map((post) => ({
  id: post.id,
  title: post.title,
  content: (
    <CommunityPost
      {...post}
      hideTitle
      group={{ title: "All company", onClick: () => {} }}
      inLabel="in"
      comment={{ label: "Comment", onClick: () => {} }}
      onClick={() => {}}
    />
  ),
}))

const Demo = ({
  loop,
  items = ITEMS,
}: {
  loop?: boolean
  items?: F0CarouselDialogItem[]
}) => {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-2 p-4">
      {POSTS.filter((post) => items.some((item) => item.id === post.id)).map(
        (post) => (
          <F0Button
            key={post.id}
            variant="outline"
            label={post.title}
            onClick={() => setOpenId(post.id)}
          />
        )
      )}
      <F0CarouselDialog
        isOpen={openId !== null}
        onClose={() => setOpenId(null)}
        items={items}
        // Not `?? ITEMS[0].id`: nothing is open, and naming the first item as
        // if it were is how a dialog ends up flashing page one on its way out.
        // (The component holds its last page through the fade regardless.)
        currentId={openId ?? ""}
        onNavigate={setOpenId}
        loop={loop}
        width="lg"
        labels={{ previous: "Previous post", next: "Next post" }}
      />
    </div>
  )
}

const meta: Meta<typeof F0CarouselDialog> = {
  component: F0CarouselDialog,
  title: "Patterns/F0CarouselDialog",
  tags: ["autodocs", "experimental"],
  // Axe BLOCKS: a dialog's accessible name, its focus trap and two icon-only
  // arrows are the things this component is FOR, and all three fail silently.
  parameters: withSnapshot({ layout: "fullscreen", a11y: { test: "error" } }),
}

export default meta

type Story = StoryObj<typeof F0CarouselDialog>

/**
 * Open any post and walk the set without closing: an arrow on each side of the
 * panel, "2 of 3" beside the close button, and the title changing with the
 * content — one dialog moving, rather than a frame things are loaded into.
 *
 * The arrow keys work too, which is what anyone who has used a photo viewer will
 * try first. Both arrows keep their places at the ends and go disabled, so the
 * one you are about to want has not moved.
 */
export const Default: Story = {
  render: () => <Demo />,
  // Opening on the SECOND post and walking back to the first: the page you open
  // on has to be the one you clicked, and the position has to follow.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole("button", { name: POSTS[1].title }))

    // The dialog portals out of the story root, so it is found on the document.
    const dialog = within(document.body)
    await expect(await dialog.findByText("2 of 3")).toBeInTheDocument()

    await userEvent.click(dialog.getByRole("button", { name: "Previous post" }))

    await expect(await dialog.findByText("1 of 3")).toBeInTheDocument()
    // First page: nowhere further back, and the arrow says so rather than going.
    await expect(
      dialog.getByRole("button", { name: "Previous post" })
    ).toBeDisabled()
  },
}

/**
 * `loop` joins the ends up — Next on the last post returns to the first, and
 * neither arrow is ever disabled.
 *
 * Off by default, and worth leaving off for anything with a real end: an arrow
 * that quietly starts you over is how you read the same three posts twice
 * without noticing you have.
 */
export const Looping: Story = { render: () => <Demo loop /> }

/* ------------------------ one source, both surfaces ------------------------ */

/** A page's worth. */
const POSTS_PER_PAGE = 2

/** Enough posts that the set is worth paging through. */
const FEED = Array.from({ length: 12 }, (_, index) => {
  const post = POSTS[index % POSTS.length]
  return {
    ...post,
    id: `${post.id}-${index}`,
    title: `${post.title} (#${index + 1})`,
  }
})

type PostRecord = (typeof FEED)[number] & Record<string, unknown>

/** A cursor-paged source: an offset in, a slice out, `hasMore` on the end. */
const pagedPosts = () =>
  createDataSourceDefinition<PostRecord>({
    dataAdapter: {
      paginationType: "infinite-scroll",
      perPage: POSTS_PER_PAGE,
      fetchData: async ({ pagination }) => {
        const from = Number(pagination?.cursor ?? 0)
        await new Promise((resolve) => setTimeout(resolve, 700))
        const records = FEED.slice(from, from + POSTS_PER_PAGE) as PostRecord[]
        const next = from + records.length
        return {
          type: "infinite-scroll" as const,
          records,
          cursor: String(next),
          hasMore: next < FEED.length,
          total: FEED.length,
          perPage: POSTS_PER_PAGE,
        }
      },
    },
  })

/**
 * ONE `useData`, TWO SURFACES. The carousel and the dialog are handed the same
 * records and the same `loadMore`, so they are two views of one query rather
 * than two lists that have to be kept in step: walk past the end in the dialog
 * and the carousel behind it has the new posts too, because there is only one
 * list and both are looking at it.
 */
const OneSourceDemo = () => {
  const source = useDataSource(useMemo(pagedPosts, []))
  const { data, isInitialLoading, isLoadingMore, paginationInfo, loadMore } =
    useData(source)
  const [openId, setOpenId] = useState<string | null>(null)

  const posts = data.type === "flat" ? data.records : []

  // The three fields both surfaces take, built once.
  const paging = {
    hasMore:
      paginationInfo?.type === "infinite-scroll"
        ? paginationInfo.hasMore
        : false,
    isLoading: isLoadingMore,
    onLoadMore: loadMore,
    total: paginationInfo?.total,
  }

  return (
    <div className="w-full max-w-content p-4">
      <F0CommunityPostsCarousel
        posts={posts.map((post) => ({
          ...post,
          href: undefined,
          onClick: () => setOpenId(post.id),
        }))}
        labels={{ previous: "Previous posts", next: "More posts" }}
        loading={isInitialLoading}
        expectedItemsCount={POSTS_PER_PAGE}
        pagination={paging}
      />
      <F0CarouselDialog
        isOpen={openId !== null}
        onClose={() => setOpenId(null)}
        width="lg"
        items={posts.map((post) => ({
          id: post.id,
          title: post.title,
          content: (
            <CommunityPost
              {...post}
              hideTitle
              group={{ title: "All company", onClick: () => {} }}
              inLabel="in"
              comment={{ label: "Comment", onClick: () => {} }}
              onClick={() => {}}
            />
          ),
        }))}
        currentId={openId ?? ""}
        onNavigate={setOpenId}
        labels={{ previous: "Previous post", next: "Next post" }}
        pagination={paging}
      />
    </div>
  )
}

/**
 * PAGED, FROM THE SAME SOURCE AS THE CAROUSEL — twelve posts fetched two at a
 * time. Open any tile and walk: Next past the last loaded post fetches the next
 * page and CONTINUES onto it, so one press advances once even at the boundary.
 * Arriving at the last loaded post also prefetches, so most presses just move.
 *
 * The header counts against the source's own total ("3 of 12"), not against how
 * many happen to be loaded — pass `total` and the number stops moving under the
 * reader. Without it the count is open-ended ("3 of 4+").
 */
export const PagedFromDataSource: Story = { render: () => <OneSourceDemo /> }

/**
 * ONE ITEM, and so not a carousel at all: no arrows and no "1 of 1" — a reading
 * nobody needs, on a dialog with nowhere to go.
 *
 * Worth knowing because a set's length is usually data: a feed filtered down to a
 * single post should quietly become an ordinary dialog rather than growing two
 * dead controls, and it does.
 */
export const SingleItem: Story = {
  render: () => <Demo items={ITEMS.slice(0, 1)} />,
}
