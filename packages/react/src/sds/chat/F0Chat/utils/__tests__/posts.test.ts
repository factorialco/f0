import { describe, expect, it, vi } from "vitest"

import { type F0ChatPost } from "../../types"
import {
  communityAuthorFrom,
  postCountersFrom,
  postReactionsFrom,
  stripHtml,
} from "../posts"

const post = (overrides: Partial<F0ChatPost> = {}): F0ChatPost => ({
  type: "post",
  id: "p1",
  createdAt: "2026-06-21T10:00:00",
  title: "Q3 results",
  commentCount: 3,
  ...overrides,
})

/** Stand-in for the i18n `t`, echoing the key + count so assertions read
 * against the KEY that was chosen rather than the English behind it. */
const t = ((key: string, args?: { count?: number }) =>
  `${key}:${args?.count}`) as unknown as Parameters<typeof postCountersFrom>[1]

describe("stripHtml", () => {
  it("replaces tags with a space so words don't fuse", () => {
    // Without the space this reads "onetwo", and a substring search matches
    // across a paragraph boundary no reader can see.
    expect(stripHtml("<p>one</p><p>two</p>")).toBe("one two")
  })

  it("collapses whitespace and entities", () => {
    expect(stripHtml("<p>a&nbsp;&nbsp;b</p>\n<p>  c </p>")).toBe("a b c")
  })

  it("returns an empty string for markup with no text", () => {
    expect(stripHtml("<p></p><br/>")).toBe("")
  })
})

describe("communityAuthorFrom", () => {
  it("splits the display name on the first space", () => {
    expect(
      communityAuthorFrom({ id: "u", name: "Marcus Bennett" })
    ).toMatchObject({ firstName: "Marcus", lastName: "Bennett" })
  })

  it("keeps everything after the first space as the last name", () => {
    expect(
      communityAuthorFrom({ id: "u", name: "Ana María Ruiz Gómez" })
    ).toMatchObject({ firstName: "Ana", lastName: "María Ruiz Gómez" })
  })

  it("leaves a single-word name without a last name", () => {
    expect(communityAuthorFrom({ id: "u", name: "Factorial" })).toMatchObject({
      firstName: "Factorial",
      lastName: "",
    })
  })

  it("carries a real photo and omits a generated avatar", () => {
    // An empty `avatarUrl` renders a broken image; without one the card draws
    // initials, which is the right fallback.
    expect(
      communityAuthorFrom({
        id: "u",
        name: "Ana Ruiz",
        avatar: { type: "person", firstName: "Ana", lastName: "Ruiz" },
      })?.avatarUrl
    ).toBeUndefined()
  })

  it("returns nothing when the community itself published", () => {
    expect(communityAuthorFrom(undefined)).toBeUndefined()
  })
})

describe("postCountersFrom", () => {
  it("picks the singular key for one", () => {
    expect(postCountersFrom(post({ commentCount: 1 }), t).comments).toBe(
      "chat.post.comments.one:1"
    )
  })

  it("picks the plural key for zero", () => {
    // "0 comments" is an invitation — a missing counter reads as a broken card.
    expect(postCountersFrom(post({ commentCount: 0 }), t).comments).toBe(
      "chat.post.comments.other:0"
    )
  })

  it("omits views when the host doesn't count them", () => {
    expect(postCountersFrom(post(), t).views).toBeUndefined()
  })

  it("words views when it does", () => {
    expect(postCountersFrom(post({ viewCount: 214 }), t).views).toBe(
      "chat.post.views.other:214"
    )
  })
})

describe("postReactionsFrom", () => {
  it("toggles with the POST's id", () => {
    const toggleReaction = vi.fn()
    const reactions = postReactionsFrom(
      post({ reactions: [{ emoji: "🎉", count: 4, reactedByMe: true }] }),
      { toggleReaction }
    )

    reactions.onInteraction?.("🎉")

    expect(toggleReaction).toHaveBeenCalledWith("p1", "🎉")
  })

  it("maps the chat reaction shape onto the social one", () => {
    const reactions = postReactionsFrom(
      post({
        reactions: [
          {
            emoji: "👏",
            count: 2,
            reactedByMe: true,
            users: [{ id: "a", name: "Ana" }],
          },
        ],
      }),
      { toggleReaction: vi.fn() }
    )

    expect(reactions.items[0]).toMatchObject({
      emoji: "👏",
      initialCount: 2,
      hasReacted: true,
      users: [{ name: "Ana" }],
    })
  })

  it("resolves the full list lazily, with the post's id and count", async () => {
    const loadReactionUsers = vi
      .fn()
      .mockResolvedValue([{ id: "a", name: "Ana" }])
    const reactions = postReactionsFrom(
      post({ reactions: [{ emoji: "👏", count: 9, reactedByMe: false }] }),
      { toggleReaction: vi.fn(), loadReactionUsers }
    )

    await reactions.items[0].loadUsers?.()

    expect(loadReactionUsers).toHaveBeenCalledWith("p1", "👏", 9)
  })

  it("offers no lazy loader when the host has no way to resolve one", () => {
    const reactions = postReactionsFrom(
      post({ reactions: [{ emoji: "👏", count: 9, reactedByMe: false }] }),
      { toggleReaction: vi.fn() }
    )

    expect(reactions.items[0].loadUsers).toBeUndefined()
  })

  it("produces an empty set for a post nobody reacted to", () => {
    // The picker still renders — that's the affordance for the first reaction.
    expect(
      postReactionsFrom(post(), { toggleReaction: vi.fn() }).items
    ).toEqual([])
  })
})
