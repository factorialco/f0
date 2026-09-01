import { useMemo } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import {
  createDataSourceDefinition,
  useData,
  useDataSource,
} from "@/hooks/datasource"
import { Plus } from "@/icons/app"

import { SlotWidget } from "../../SlotWidget"
import { F0CommunityPostsCarousel, type CommunityPostSummary } from "./index"

const POSTS: CommunityPostSummary[] = [
  {
    id: "h2-planning",
    title: "How we're changing planning for H2",
    imageUrl: "/landscape01.jpg",
    description:
      "<p>We're changing how planning works for the second half, and this note is the whole of it — there is no deck to read afterwards.</p><p><strong>What stays the same.</strong> Teams still own their roadmaps, still commit to outcomes rather than output, and still publish a weekly update.</p><p><strong>What changes.</strong> The quarterly planning week is gone. In its place, each team writes a one-pager per initiative.</p>",
    author: {
      firstName: "Yusuf",
      lastName: "Adeyemi",
      avatarUrl: "/avatars/person01.jpg",
    },
    createdAt: new Date(2026, 6, 16),
    counters: { visits: "742 visits", comments: "23 comments" },
    href: "/communities/posts/h2-planning",
  },
  {
    id: "nordics-pilot",
    title: "Hana closed the Nordics pilot",
    description:
      "<p>Six weeks of evenings on top of her own reviews and a landing page nobody asked for, and the Nordics pilot is signed.</p><p>Hana ran the whole thing end to end while covering for two people on leave. Give her a clap.</p>",
    author: {
      firstName: "Hana",
      lastName: "Tanaka",
      avatarUrl: "/avatars/person04.jpg",
    },
    createdAt: new Date(2026, 6, 15),
    counters: { visits: "164 visits", comments: "11 comments" },
    href: "/communities/posts/nordics-pilot",
  },
  {
    id: "office-move",
    title: "The Barcelona office moves in September",
    imageUrl: "/landscape03.jpg",
    description:
      "<p>We outgrew the second floor about a year ago and have been pretending otherwise ever since. From 7 September we are two streets over, on Pau Claris.</p>",
    author: { firstName: "Marta", lastName: "Soler" },
    createdAt: new Date(2026, 6, 11),
    counters: { visits: "1,208 visits", comments: "47 comments" },
    href: "/communities/posts/office-move",
  },
  {
    id: "handbook",
    title: "The handbook is now the source of truth",
    description:
      "<p>Every policy that used to live in a pinned message, a PDF or somebody's head is now in the handbook, and the handbook is now the thing we change when a policy changes.</p>",
    author: { firstName: "Leo", lastName: "Costa" },
    createdAt: new Date(2026, 6, 8),
    counters: { visits: "512 visits", comments: "9 comments" },
    href: "/communities/posts/handbook",
  },
]

const LABELS = { previous: "Previous posts", next: "More posts" }

const meta: Meta<typeof F0CommunityPostsCarousel> = {
  component: F0CommunityPostsCarousel,
  title: "Home/Communities/F0CommunityPostsCarousel",
  tags: ["autodocs", "experimental"],
  // Axe BLOCKS here rather than warning: the tiles are links with stretched hit
  // areas and the paging row is two icon-only buttons, which is exactly the
  // shape that loses its accessible names without anyone noticing.
  parameters: withSnapshot({ layout: "centered", a11y: { test: "error" } }),
  args: { posts: POSTS, labels: LABELS },
  // A MAIN-COLUMN width, since that is the only place this belongs: two tiles
  // side by side is the whole point, and it needs the room to have two.
  decorators: [
    (Story) => (
      <div className="w-[712px] max-w-full p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof F0CommunityPostsCarousel>

/**
 * The posts as tiles, two at a time, with the paging row under them: an arrow on
 * each end and the dots between. Both arrows stay put whether or not there is
 * anywhere to go — disabled rather than gone, so the row keeps its shape.
 */
export const Default: Story = {
  /**
   * That the row MOVES, and that the arrows describe where it is.
   *
   * Deliberately says nothing about how many pages there are: tiles-per-view is
   * a container query (`@lg`), so a narrower runner viewport turns four posts
   * from two pages into four. Asserting "one press exhausts the feed" pinned a
   * layout rather than a behaviour, and duly passed locally and failed in CI.
   *
   * `waitFor` because embla settles its own scroll — reading the arrows on the
   * tick after the click is a race, and the fast machine is the one that hides
   * it.
   */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const next = canvas.getByRole("button", { name: LABELS.next })
    const previous = canvas.getByRole("button", { name: LABELS.previous })

    // Both arrows are there from the start; only the one with nowhere to go is
    // disabled — an arrow that vanishes takes the reader's aim with it.
    await expect(previous).toBeDisabled()
    await waitFor(() => expect(next).toBeEnabled())

    await userEvent.click(next)

    // The row moved: there is now something behind us, whatever the width.
    await waitFor(() => expect(previous).toBeEnabled())
  },
}

/**
 * Waiting on the posts. The same carousel with placeholder tiles in it, as many
 * as the slot said were coming, so the card is already the height it will be.
 */
export const Loading: Story = {
  args: { posts: [], loading: true, expectedItemsCount: 2 },
}

/**
 * COVER IMAGES, and the case that matters: a post WITH one beside a post
 * WITHOUT. Every cover is drawn in the same 16:9 box, sized from the column's
 * width and cropped to fit, so the tiles in a row stay the same shape however
 * the pictures were authored — and the tile with no picture simply gives its
 * body the room instead.
 */
export const WithImages: Story = {
  args: { posts: POSTS.slice(0, 2) },
}

/**
 * ONE POST. The dots take themselves away (there is nothing to page through) and
 * both arrows are dead — the row is still there, because a card that grows a
 * control when its second post arrives is a card that moves under the pointer.
 */
export const SinglePost: Story = {
  args: { posts: POSTS.slice(0, 1) },
}

/* ------------------------------ paged source ------------------------------ */

/** A page's worth — two tiles, which is one screenful of a main-column card. */
const POSTS_PER_PAGE = 2

/** Enough posts that the feed is worth paging through. */
const FEED = Array.from({ length: 12 }, (_, index) => {
  const template = POSTS[index % POSTS.length]
  return {
    ...template,
    id: `${template.id}-${index}`,
    title: `${template.title} (#${index + 1})`,
  }
})

/**
 * The post as a data-source RECORD. `RecordType` is `Record<string, unknown>`, so
 * a source's records have to be indexable — this is that constraint and nothing
 * more; the fields are the post's own.
 */
type PostRecord = CommunityPostSummary & Record<string, unknown>

/**
 * A CURSOR-PAGED SOURCE, the shape a real one has: an offset in, a slice out,
 * `hasMore` saying whether the feed continues. The delay is there so the
 * loading tile and the arrow's spinner are actually visible.
 */
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
 * THE WHOLE WIRING, and it is four lines: `useData` hands back the records it has
 * accumulated plus the three fields `pagination` wants, and the carousel does the
 * rest. The component never learns what a data source is.
 */
const PagedCarousel = () => {
  const source = useDataSource(useMemo(pagedPosts, []))
  const { data, isInitialLoading, isLoadingMore, paginationInfo, loadMore } =
    useData(source)

  const posts: CommunityPostSummary[] = data.type === "flat" ? data.records : []

  return (
    <F0CommunityPostsCarousel
      posts={posts}
      labels={LABELS}
      loading={isInitialLoading}
      expectedItemsCount={POSTS_PER_PAGE}
      pagination={{
        hasMore:
          paginationInfo?.type === "infinite-scroll"
            ? paginationInfo.hasMore
            : false,
        isLoading: isLoadingMore,
        onLoadMore: loadMore,
      }}
    />
  )
}

/**
 * PAGED, FROM A DATA SOURCE — twelve posts fetched two at a time.
 *
 * The carousel holds only the pages that have been asked for, so what is in the
 * DOM is bounded by how far you actually walked rather than by how long the feed
 * is. Reaching the last tile asks for the next page BEFORE the arrow is pressed
 * there, so pressing it usually just scrolls; press it early and you get the
 * spinner on the arrow and a placeholder tile to scroll onto while the fetch is
 * in flight. Next only goes dead once the source says `hasMore: false`.
 *
 * There is no windowing: every page fetched stays mounted (embla measures its
 * own slides, so it cannot page them out). Paging is what keeps that bounded.
 */
export const PagedFromDataSource: Story = {
  render: () => <PagedCarousel />,
}

/**
 * IN THE FRAME IT SHIPS IN — the Communities widget as Home draws it: the
 * `Widget` card, its title linking out, and the widget's OWN controls in the
 * header's top-right (`headerControls`), which is what the scope switcher and
 * "New post" are. This is the whole widget; the story above is just its content.
 */
export const InsideAWidget: Story = {
  render: (args) => (
    <SlotWidget
      header={{
        title: "Communities",
        link: { title: "Go to Communities", url: "/communities" },
      }}
      headerControls={
        <>
          <F0Button
            variant="ghost"
            size="sm"
            icon={Plus}
            label="New Post"
            onClick={fn()}
          />
          <F0ButtonDropdown
            mode="dropdown"
            variant="neutral"
            size="sm"
            tooltip="Show"
            value="all"
            items={[
              { value: "all", label: "All communications" },
              { value: "announcements", label: "Company announcements" },
              { value: "celebrations", label: "Celebrations" },
              { value: "talent", label: "Talent spaces" },
              { value: "claps", label: "Claps" },
            ]}
            onClick={fn()}
          />
        </>
      }
      slots={[{ visualization: "community-posts", params: args }]}
      slotRenderers={{
        "community-posts": (params) => (
          <F0CommunityPostsCarousel
            {...(params as React.ComponentProps<
              typeof F0CommunityPostsCarousel
            >)}
          />
        ),
      }}
    />
  ),
}
