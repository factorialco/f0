import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"
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

const Demo = ({ loop }: { loop?: boolean }) => {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-2 p-4">
      {POSTS.map((post) => (
        <F0Button
          key={post.id}
          variant="outline"
          label={post.title}
          onClick={() => setOpenId(post.id)}
        />
      ))}
      <F0CarouselDialog
        isOpen={openId !== null}
        onClose={() => setOpenId(null)}
        items={ITEMS}
        currentId={openId ?? ITEMS[0].id}
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
  parameters: { layout: "fullscreen" },
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
export const Default: Story = { render: () => <Demo /> }

/**
 * `loop` joins the ends up — Next on the last post returns to the first, and
 * neither arrow is ever disabled.
 *
 * Off by default, and worth leaving off for anything with a real end: an arrow
 * that quietly starts you over is how you read the same three posts twice
 * without noticing you have.
 */
export const Looping: Story = { render: () => <Demo loop /> }
