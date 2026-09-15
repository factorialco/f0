import type { CommunityPostProps } from "@factorialco/f0-react/dist/experimental"

import { F0AvatarPerson, F0Button } from "@factorialco/f0-react"
import { CommunityPost } from "@factorialco/f0-react/dist/experimental"
import { Paperclip, Pin, Reaction } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { avatarFor } from "@/fixtures/helpers"

import { aliciaAvatar } from "../fixtures"
import {
  COMMUNITY_POSTS,
  type CommunityPost as PostData,
} from "./communityPosts"

/**
 * The Communities widget, rendered by f0's OWN `CommunityPost` (Angel,
 * 2026-09-15: the widgets were hand-copied from production and the
 * paddings had drifted). Production's Communities spec hands its posts to
 * the same component, so the card, its header, media box, reactions row
 * and counters are production's, not a lookalike.
 */

/** "2 days ago" / "1 week ago" back into a date the component can format. */
function postedAt(posted: string): Date {
  const amount = Number(posted.match(/\d+/)?.[0] ?? 0)
  const days = /week/.test(posted) ? amount * 7 : amount
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
}

export function Post({ post }: { post: PostData }) {
  return <CommunityPost {...toWidgetPost(post)} />
}

function toWidgetPost(post: PostData): CommunityPostProps {
  const [firstName, ...rest] = post.author.split(" ")
  return {
    id: post.id,
    author: {
      firstName,
      lastName: rest.join(" "),
      avatarUrl: avatarFor(post.seed),
    },
    group: { title: post.community, onClick: () => {} },
    createdAt: postedAt(post.posted),
    title: post.title ?? post.body,
    description: post.title ? `<p>${post.body}</p>` : undefined,
    mediaUrl: post.image,
    counters: {
      views: String(post.views),
      comments: String(post.comments),
    },
    reactions: {
      items: post.reactions.map((reaction) => ({
        emoji: reaction.emoji,
        initialCount: reaction.count,
        hasReacted: reaction.mine,
      })),
    },
    inLabel: "in",
    comment: { label: "Comment", onClick: () => {} },
    onClick: () => {},
  }
}

export function CommunitiesWindow() {
  const [draft, setDraft] = useState("")

  return (
    <div className="flex flex-col gap-4 p-3">
      {/* Composer: Post stays disabled until there is a draft. */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <F0AvatarPerson
            firstName="Alicia"
            lastName="Keys"
            src={aliciaAvatar}
            size="md"
          />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Create a post…"
            className="h-9 min-w-0 flex-1 rounded-md border border-solid border-f1-border-secondary bg-transparent px-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          />
        </div>
        <div className="flex items-center justify-between pl-10">
          <div className="flex items-center gap-1">
            <F0Button
              variant="ghost"
              size="md"
              icon={Paperclip}
              hideLabel
              label="Attach file"
            />
            <F0Button
              variant="ghost"
              size="md"
              icon={Reaction}
              hideLabel
              label="Add emoji"
            />
            <F0Button
              variant="ghost"
              size="md"
              icon={Pin}
              hideLabel
              label="Add location"
            />
          </div>
          <F0Button
            variant="default"
            size="md"
            label="Post"
            disabled={draft.trim().length === 0}
            onClick={() => setDraft("")}
          />
        </div>
      </div>

      {COMMUNITY_POSTS.map((post) => (
        <CommunityPost key={post.id} {...toWidgetPost(post)} />
      ))}
    </div>
  )
}
