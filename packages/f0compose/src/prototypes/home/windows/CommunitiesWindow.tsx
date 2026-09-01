import { F0AvatarPerson, F0Button, F0Icon } from "@factorialco/f0-react"
import {
  Comment,
  EyeVisible,
  Paperclip,
  Pin,
  Reaction,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { avatarFor } from "@/fixtures/helpers"

import { aliciaAvatar } from "../fixtures"
import { COMMUNITY_POSTS, type CommunityPost } from "./communityPosts"

function ReactionPill({
  emoji,
  count,
  /** You reacted with this one — f0's critical token, as in the frame. */
  highlighted = false,
}: {
  emoji: string
  count: number
  highlighted?: boolean
}) {
  return (
    <button
      className={`flex items-center gap-1 rounded-full border border-solid px-2 py-0.5 text-base font-medium ${
        highlighted
          ? "border-f1-border-critical text-f1-foreground-critical"
          : "border-f1-border-secondary text-f1-foreground-secondary"
      }`}
    >
      <span>{emoji}</span>
      {count}
    </button>
  )
}

/** Reactions, views and comments come from the POST — they used to be
 *  hardcoded here, which meant every post in the feed claimed the same
 *  12 ❤️ and the same 14 views. */
function PostFooter({ post }: { post: CommunityPost }) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex min-w-0 flex-wrap items-center gap-1">
        {post.reactions.map((reaction) => (
          <ReactionPill
            key={reaction.emoji}
            emoji={reaction.emoji}
            count={reaction.count}
            highlighted={reaction.mine}
          />
        ))}
        <button
          aria-label="Add a reaction"
          className="flex items-center rounded-full border border-solid border-f1-border-secondary px-2 py-1"
        >
          <F0Icon icon={Reaction} size="sm" color="secondary" />
        </button>
      </div>
      <div className="flex shrink-0 items-center gap-3 text-base text-f1-foreground-secondary">
        <span className="flex items-center gap-1">
          <F0Icon icon={EyeVisible} size="sm" color="secondary" />
          {post.views}
        </span>
        <span className="flex items-center gap-1">
          <F0Icon icon={Comment} size="sm" color="secondary" />
          {post.comments}
        </span>
      </div>
    </div>
  )
}

function Post({ post }: { post: CommunityPost }) {
  return (
    <div className="flex flex-col gap-2 border-0 border-t border-solid border-f1-border-secondary px-3 py-4">
      <PostHeader
        seed={post.seed}
        name={post.author}
        meta={`in ${post.community} · ${post.posted}`}
      />
      {post.image && (
        // The 3:2 box is reserved before the image lands, so a slow load
        // does not shove the whole feed down as it arrives.
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="aspect-[3/2] w-full rounded-lg bg-f1-background-secondary object-cover"
        />
      )}
      {post.title && (
        <span className="text-lg font-semibold text-f1-foreground">
          {post.title}
        </span>
      )}
      <p className="text-base text-f1-foreground">{post.body}</p>
      <PostFooter post={post} />
    </div>
  )
}

function PostHeader({
  seed,
  name,
  meta,
}: {
  seed: string
  name: string
  meta: string
}) {
  return (
    <div className="flex items-center gap-2">
      <F0AvatarPerson
        firstName={name}
        lastName="."
        src={avatarFor(seed)}
        size="md"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-base font-semibold text-f1-foreground">
          {name}
        </span>
        <span className="truncate text-base text-f1-foreground-secondary">
          {meta}
        </span>
      </div>
    </div>
  )
}

export function CommunitiesWindow() {
  const [draft, setDraft] = useState("")

  return (
    // No horizontal padding on the root: post dividers must run
    // edge-to-edge across the window; each block carries its own px.
    <div className="flex flex-col">
      {/* Composer — Post stays primary/disabled until there's a draft */}
      <div className="flex flex-col gap-2 px-3 pb-4 pt-1">
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
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
