import { describe, expect, it } from "vitest"
import { isPost, isUserMessage } from "../../types"
import {
  buildSeedMessages,
  initialConvState,
  SEED_BY_ID,
  SEEDS,
  unreadCountOf,
} from "../mockSeeds"

const communities = SEEDS.filter((seed) => seed.type === "community")

describe("the community seeds", () => {
  it("ships the aggregated feed FIRST, then the four communities", () => {
    // Order is the sidebar's order: "All posts" leads the group, because it is
    // what someone who follows six communities actually opens.
    expect(communities.map((seed) => seed.id)).toEqual([
      "feed",
      "com-company-news",
      "com-barcelona-office",
      "com-kudos",
      "com-people-ops",
    ])
  })

  it("keeps them at the END of SEEDS, after the conversations", () => {
    // The sidebar's Communities group is last because the host's array is —
    // `SidebarChatList` renders what it's given and never sorts.
    const firstCommunity = SEEDS.findIndex((seed) => seed.type === "community")
    expect(
      SEEDS.slice(firstCommunity).every((seed) => seed.type === "community")
    ).toBe(true)
  })

  it("leaves the announcement seed leading the list", () => {
    // Non-regression: the welcome screen is still SEEDS[0].
    expect(SEEDS[0]?.id).toBe("dm-factorial")
  })

  it("builds posts, never messages", () => {
    for (const seed of communities) {
      const items = buildSeedMessages(seed)
      expect(items.length).toBeGreaterThan(0)
      expect(items.every(isPost)).toBe(true)
      expect(items.some(isUserMessage)).toBe(false)
    }
  })

  it("gives exactly two communities permission to post, plus the feed", () => {
    // The feed publishes too — into a community you pick, not the one you are
    // reading — which is the whole point of a composer that lives above them.
    expect(
      communities.filter((seed) => seed.canPost).map((seed) => seed.id)
    ).toEqual(["feed", "com-barcelona-office", "com-kudos"])
  })

  it("names who CAN post wherever the reader can't", () => {
    // "You don't have permission" tells the reader nothing they can act on.
    for (const seed of communities.filter((s) => !s.canPost)) {
      expect(seed.readOnlyNotice).toMatch(/can post here$/)
    }
  })

  it("counts posts, not messages, as unread", () => {
    // `unreadCountOf` used to filter on `isUserMessage`, which would have left
    // every community badge at zero.
    const seed = SEED_BY_ID.get("com-company-news")!
    expect(unreadCountOf(initialConvState(seed))).toBe(3)
  })

  it("leaves the kudos community fully read — no badge, no divider", () => {
    const seed = SEED_BY_ID.get("com-kudos")!
    expect(unreadCountOf(initialConvState(seed))).toBe(0)
  })

  it("gives the volume seed a two-figure count", () => {
    const seed = SEED_BY_ID.get("com-people-ops")!
    expect(unreadCountOf(initialConvState(seed))).toBe(12)
  })

  it("carries the fixtures the stories demonstrate", () => {
    const news = buildSeedMessages(SEED_BY_ID.get("com-company-news")!)
    expect(news.some((item) => isPost(item) && !!item.mediaUrl)).toBe(true)
    expect(news.some((item) => isPost(item) && !!item.reactions?.length)).toBe(
      true
    )

    const office = buildSeedMessages(SEED_BY_ID.get("com-barcelona-office")!)
    expect(office.some((item) => isPost(item) && !!item.event)).toBe(true)
  })

  it("orders every feed oldest → newest", () => {
    for (const seed of communities) {
      const times = buildSeedMessages(seed).map((item) =>
        new Date(item.createdAt).getTime()
      )
      expect([...times].sort((a, b) => a - b)).toEqual(times)
    }
  })

  it("starts with none of them pinned", () => {
    // Pinnable, but not pinned out of the box — the demo starts from the plain
    // Communities group and lets you pin from there.
    expect(communities.every((seed) => !seed.pinned)).toBe(true)
  })

  it("gives a REAL community no emoji, so every one draws ＃", () => {
    // Production parity, not a gap in the fixtures: `PostsGroup` carries a
    // title, a description and an identifier, and no field for an emoji. A
    // pretty fixture here would demo a sidebar the product cannot render — and
    // would take the ＃ fallback out of every story at the same time.
    //
    // The synthetic feed is exempt: it is not a `PostsGroup`.
    for (const seed of communities.filter((s) => s.id !== "feed")) {
      expect(seed.avatar.type).not.toBe("emoji")
    }
  })
})

describe("the aggregated feed", () => {
  const feed = SEED_BY_ID.get("feed")!
  const sources = [
    "com-company-news",
    "com-barcelona-office",
    "com-kudos",
    "com-people-ops",
  ]

  it("gathers every post of every community it names", () => {
    // Derived, not written out: the count has to be the sum, or the feed has
    // quietly stopped being the union of what it claims to aggregate.
    const expected = sources
      .map((id) => SEED_BY_ID.get(id)!.lines.length)
      .reduce((total, n) => total + n, 0)

    expect(buildSeedMessages(feed)).toHaveLength(expected)
  })

  it("tags every post with the community it came from", () => {
    // This is what makes the card say "Marcus in Company news". Without it the
    // feed is an undifferentiated pile, which is the one thing it must not be.
    const items = buildSeedMessages(feed)

    expect(items.every((item) => isPost(item) && !!item.community)).toBe(true)
    expect(
      new Set(
        items.map((item) => (isPost(item) ? item.community?.id : undefined))
      )
    ).toEqual(new Set(sources))
  })

  it("names the community as the reader knows it, not by id", () => {
    const item = buildSeedMessages(feed).find(
      (candidate) =>
        isPost(candidate) && candidate.community?.id === "com-company-news"
    )

    expect(isPost(item!) && item.community?.name).toBe("Company news")
  })

  it("interleaves the communities by time rather than listing them in turn", () => {
    // Concatenating the sources would pass "oldest → newest" per community and
    // still read as four separate feeds stacked on top of each other.
    const origins = buildSeedMessages(feed).map((item) =>
      isPost(item) ? item.community?.id : undefined
    )
    const runs = origins.filter((id, i) => id !== origins[i - 1]).length

    expect(runs).toBeGreaterThan(sources.length)
  })

  it("leaves the single-community feeds untagged", () => {
    // The other half of the rule: a community's own channel already names
    // itself in the header, so repeating it per card is the same word twice.
    for (const seed of communities.filter((s) => !s.aggregates)) {
      expect(
        buildSeedMessages(seed).every(
          (item) => isPost(item) && item.community === undefined
        )
      ).toBe(true)
    }
  })

  it("carries no unread of its own", () => {
    // Deliberate: there is no per-post read state to derive a count from, so a
    // badge here would be a number nobody could explain.
    expect(feed.unread).toBeUndefined()
    expect(unreadCountOf(initialConvState(feed))).toBe(0)
  })

  it("carries an emoji, so it never falls back to ＃", () => {
    expect(feed.avatar).toMatchObject({ type: "emoji", emoji: "📣" })
  })

  it("inherits the pins from every community it gathers", () => {
    // The shelf spanning communities is the feed's other reason to exist: it is
    // how you find the post you half-remember without remembering where.
    const pinnedSources = sources.filter((id) =>
      SEED_BY_ID.get(id)!.lines.some((line) => "pinned" in line && line.pinned)
    )
    expect(pinnedSources.length).toBeGreaterThan(0)

    const pinnedOrigins = new Set(
      buildSeedMessages(feed)
        .filter((item) => isPost(item) && !!item.pinnedAt)
        .map((item) => (isPost(item) ? item.community?.id : undefined))
    )
    for (const id of pinnedSources) {
      expect(pinnedOrigins).toContain(id)
    }
  })
})
