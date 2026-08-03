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

function ReactionPill({
  emoji,
  count,
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

function PostFooter() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <ReactionPill emoji="❤️" count={12} highlighted />
        <ReactionPill emoji="🍻" count={8} />
        <button className="flex items-center rounded-full border border-solid border-f1-border-secondary px-2 py-1">
          <F0Icon icon={Reaction} size="sm" color="secondary" />
        </button>
      </div>
      <div className="flex items-center gap-3 text-base text-f1-foreground-secondary">
        <span className="flex items-center gap-1">
          <F0Icon icon={EyeVisible} size="sm" color="secondary" />
          14
        </span>
        <span className="flex items-center gap-1">
          <F0Icon icon={Comment} size="sm" color="secondary" />3
        </span>
      </div>
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
      <F0AvatarPerson firstName={name} lastName="." src={avatarFor(seed)} size="md" />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-base font-semibold text-f1-foreground">{name}</span>
        <span className="truncate text-base text-f1-foreground-secondary">{meta}</span>
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
            <F0Button variant="ghost" size="md" icon={Paperclip} hideLabel label="Attach file" />
            <F0Button variant="ghost" size="md" icon={Reaction} hideLabel label="Add emoji" />
            <F0Button variant="ghost" size="md" icon={Pin} hideLabel label="Add location" />
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

      {/* Post: Taco Tuesday */}
      <div className="flex flex-col gap-2 border-0 border-t border-solid border-f1-border-secondary px-3 py-4">
        <PostHeader
          seed="eleanor"
          name="Eleanor Pena"
          meta="in Company updates · 2 days ago"
        />
        <span className="text-lg font-semibold text-f1-foreground">
          Taco Tuesday party! 🌮🍻
        </span>
        <p className="text-base text-f1-foreground">
          For anyone interested in unwinding after a busy week on the trails…
          we're planning a casual get-together at The Old Pine Tavern this
          Tuesday. Feel free to join and bring along any fun tales from the
          park. home to see y'all there!
        </p>
        <PostFooter />
      </div>

      {/* Post: Product Design */}
      <div className="flex flex-col gap-2 border-0 border-t border-solid border-f1-border-secondary px-3 py-4">
        <PostHeader
          seed="rene"
          name="René Galindo"
          meta="in Product Design · 5 days ago"
        />
        <img
          src="https://picsum.photos/seed/f0compose-post/600/400"
          alt=""
          className="max-w-full rounded-lg"
        />
        <span className="text-lg font-semibold text-f1-foreground">
          Olga Steinepreis' self portraits unpack the pressure to be the
          'perfect' mother
        </span>
        <p className="text-base text-f1-foreground">
          The Barcelona-based visual artist is transforming reality into
          blotchy collaged forms that merge medieval and folkloric
          inspirations.
        </p>
        <PostFooter />
      </div>
    </div>
  )
}
