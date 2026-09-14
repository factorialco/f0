import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"
import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { Plus } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { SlotWidget } from "../../SlotWidget"
import { F0CommunityPostsList, type CommunityPostListItem } from "."

const POSTS: CommunityPostListItem[] = [
  {
    id: "onboarding-cohort",
    title: "Welcome to the August onboarding cohort 🎉",
    imageUrl: "/landscape01.jpg",
    description:
      "<p>We're thrilled to welcome <strong>14 new joiners</strong> across Engineering, Sales and People this month.</p><p>Your first-week checklist, buddy assignment and payroll intro session are all in the onboarding hub — take a look before day one.</p>",
    author: {
      firstName: "Marie",
      lastName: "Curie",
      avatarUrl: "/avatars/person01.jpg",
    },
    createdAt: new Date(2026, 6, 16),
    counters: { visits: "128 visits", comments: "4 comments" },
    href: "/communities/posts/onboarding-cohort",
  },
  {
    id: "office-opens",
    title: "New Barcelona office opens",
    imageUrl: "/landscape03.jpg",
    description:
      "<p>The new floor is ready and we are opening it with coffee and a tour.</p>",
    author: {
      firstName: "Grace",
      lastName: "Hopper",
      avatarUrl: "/avatars/person04.jpg",
    },
    createdAt: new Date(2026, 6, 6),
    counters: { visits: "204 visits", comments: "9 comments" },
    href: "/communities/posts/office-opens",
    event: {
      date: new Date(2026, 8, 21, 9, 0),
      place: "Diagonal Mar office, ground floor",
    },
  },
  {
    id: "ten-thousand",
    title: "10,000 customers and counting",
    imageUrl: "/landscape02.jpg",
    description:
      "<p>This morning we onboarded our <strong>10,000th customer</strong> — a milestone that felt impossibly far off two years ago.</p><p>Thank you to every team that got us here. We'll celebrate together at Friday's all-hands.</p>",
    author: { firstName: "Ada", lastName: "Lovelace" },
    createdAt: new Date(2026, 6, 15),
    counters: { visits: "1,208 visits", comments: "37 comments" },
    href: "/communities/posts/ten-thousand",
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

const LABELS = { viewMore: "View more", viewLess: "View less" }

const meta: Meta<typeof F0CommunityPostsList> = {
  component: F0CommunityPostsList,
  title: "Home/Communities/F0CommunityPostsList",
  tags: ["autodocs", "experimental"],
  // Axe BLOCKS here rather than warning: the rows are links with stretched hit
  // areas, which is exactly the shape that loses its accessible name without
  // anyone noticing.
  parameters: withSnapshot({ layout: "centered", a11y: { test: "error" } }),
  args: { posts: POSTS, labels: LABELS },
  // A MAIN-COLUMN width, since that is where this belongs: a cover beside a
  // title and two lines of body needs the room to be beside anything.
  decorators: [
    (Story) => (
      <div className="w-[712px] max-w-full p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof F0CommunityPostsList>

/**
 * Three posts, divided, with the rest one press away. The toggle is drawn at its
 * NARROW size here — `outline`/`md` is what it takes inside a wide `Widget`, and
 * standalone there is no frame to ask (see `InsideAWidget`).
 */
export const Default: Story = {}

/**
 * AN EVENT POST, second in the list: the row draws the event card the Communities
 * feed itself draws — the title, the time, the place and the date chip — instead
 * of a title over a few lines of body. An event's when and where ARE its preview.
 */
export const WithAnEvent: Story = {
  args: { posts: POSTS.slice(1, 3) },
}

/**
 * NO COVERS. The words take the whole row; nothing holds a column of empty space
 * where the pictures would be.
 */
export const WithoutCovers: Story = {
  args: { posts: POSTS.map(({ imageUrl: _imageUrl, ...post }) => post) },
}

/**
 * Waiting on the posts — placeholder rows, as many as the slot said were coming,
 * so the card is already the height it will be. The toggle waits for real posts:
 * a "View more (1)" over placeholders counts posts the reader cannot see yet.
 */
export const Loading: Story = {
  args: { posts: [], loading: true, expectedItemsCount: 3 },
}

/**
 * A NARROW CARD — the rail's width. The row becomes a column: the cover goes full
 * width above the words rather than beside them, and the body previews a line
 * more of the post now that the picture is not taking one.
 */
export const Narrow: Story = {
  decorators: [
    (Story) => (
      <div className="w-[396px] max-w-full p-2">
        <Story />
      </div>
    ),
  ],
}

/**
 * IN THE FRAME IT SHIPS IN — the Communities widget as Home draws it: the
 * `Widget` card, its title linking out, and the widget's own controls in the
 * header's top-right (`headerControls`), which is what the scope switcher and
 * "New post" are. This is the whole widget; the stories above are its content.
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
          <F0CommunityPostsList
            {...(params as React.ComponentProps<typeof F0CommunityPostsList>)}
          />
        ),
      }}
    />
  ),
  /**
   * That the toggle really expands the list, and that inside a wide card it is
   * the frame's own footer button rather than the rail-sized one — the step every
   * card-sized control takes past 480px.
   */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const more = await canvas.findByRole("button", { name: "View more (1)" })
    await expect(canvas.getAllByRole("article")).toHaveLength(3)

    await userEvent.click(more)

    await expect(canvas.getAllByRole("article")).toHaveLength(4)
    await expect(
      canvas.getByRole("button", { name: "View less" })
    ).toBeInTheDocument()
  },
}
