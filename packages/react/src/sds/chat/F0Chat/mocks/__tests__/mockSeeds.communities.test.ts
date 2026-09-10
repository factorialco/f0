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
  it("ships the four the stories rely on", () => {
    expect(communities.map((seed) => seed.id)).toEqual([
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

  it("gives exactly two of them permission to post", () => {
    expect(
      communities.filter((seed) => seed.canPost).map((seed) => seed.id)
    ).toEqual(["com-barcelona-office", "com-kudos"])
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
})
