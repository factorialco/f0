import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  createSuggestionConfig,
  MENTION_SUGGESTION_DEBOUNCE_MS,
} from "../suggestion"
import { MentionedUser } from "../types"

const users: MentionedUser[] = [
  { id: 1, label: "Alice", image_url: "/alice.png", href: "/alice" },
  { id: 2, label: "Alicia", image_url: "/alicia.png", href: "/alicia" },
  { id: 3, label: "Bob", image_url: "/bob.png", href: "/bob" },
  { id: 4, label: "Charlie", image_url: "/charlie.png", href: "/charlie" },
]

const undebouncedCandidates = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim()
  return normalizedQuery
    ? users.filter((user) => user.label.toLowerCase().includes(normalizedQuery))
    : [...users]
}

const openSession = async (publish: (items: MentionedUser[]) => void) => {
  const config = createSuggestionConfig([], publish, undefined, users)
  await config.items({ query: "" })
  return config
}

describe("createSuggestionConfig items", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("collapses a five-keystroke burst into a single filter pass", async () => {
    const publish = vi.fn()
    const config = await openSession(publish)
    publish.mockClear()

    const burst = ["a", "al", "ali", "alic", "alici"].map((query) =>
      config.items({ query })
    )

    expect(publish).not.toHaveBeenCalled()

    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    const resolved = await Promise.all(burst)

    expect(publish).toHaveBeenCalledTimes(1)
    expect(publish).toHaveBeenCalledWith(undebouncedCandidates("alici"))
    resolved.forEach((items) => expect(items).toBe(resolved[0]))
  })

  it("returns the candidates the undebounced filter returned, in the same order", async () => {
    for (const query of ["a", "li", "ALICE", " bob ", "zzz"]) {
      const publish = vi.fn()
      const config = await openSession(publish)

      const pending = config.items({ query })
      await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)

      await expect(pending).resolves.toEqual(undebouncedCandidates(query))
      expect(publish).toHaveBeenLastCalledWith(undebouncedCandidates(query))
    }
  })

  it("answers an empty query immediately, leaving no timer pending", async () => {
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, undefined, users)

    await expect(config.items({ query: "" })).resolves.toEqual(users)
    expect(publish).toHaveBeenCalledTimes(1)
    expect(publish).toHaveBeenCalledWith(users)
    expect(vi.getTimerCount()).toBe(0)
  })

  it("abandons a queued query when the mention is emptied back to @", async () => {
    const publish = vi.fn()
    const config = await openSession(publish)
    const queued = config.items({ query: "ali" })
    publish.mockClear()

    await expect(config.items({ query: "" })).resolves.toEqual(users)
    await expect(queued).resolves.toEqual(users)

    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS * 2)
    expect(publish).not.toHaveBeenCalled()
  })

  it("keeps an in-flight search from overwriting a cache hit", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)

    const opening = config.items({ query: "" })
    resolvers.get("")?.(users)
    await opening

    const narrowed = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    publish.mockClear()

    const reopened = config.items({ query: "" })
    resolvers.get("")?.(users)
    await expect(reopened).resolves.toEqual(users)
    expect(search).toHaveBeenCalledTimes(2)

    resolvers.get("ali")?.([users[1]])
    await expect(narrowed).resolves.toEqual(users)
    expect(publish).not.toHaveBeenCalled()
  })

  it("answers the first query of a session immediately", async () => {
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, undefined, users)

    await expect(config.items({ query: "ali" })).resolves.toEqual(
      undebouncedCandidates("ali")
    )
    expect(publish).toHaveBeenCalledTimes(1)
    expect(vi.getTimerCount()).toBe(0)
  })

  it("answers a repeated query from the last-query cache", async () => {
    const publish = vi.fn()
    const config = await openSession(publish)

    const pending = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    const first = await pending
    publish.mockClear()

    await expect(config.items({ query: "ali" })).resolves.toBe(first)
    expect(publish).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
  })

  it("never lets a stale search result replace a newer one", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)

    const opening = config.items({ query: "" })
    resolvers.get("")?.(users)
    await opening
    publish.mockClear()
    search.mockClear()

    const stale = config.items({ query: "al" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    expect(search).toHaveBeenCalledTimes(1)

    const fresh = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    expect(search).toHaveBeenCalledTimes(2)

    resolvers.get("ali")?.([users[1]])
    await expect(fresh).resolves.toEqual([users[1]])
    expect(publish).toHaveBeenCalledTimes(1)

    resolvers.get("al")?.([users[0], users[1]])
    await expect(stale).resolves.toEqual([users[1]])
    expect(publish).toHaveBeenCalledTimes(1)
    expect(publish).toHaveBeenLastCalledWith([users[1]])
  })

  it("does not cache or publish a failed search", async () => {
    const search = vi.fn(async (query: string) => {
      if (query === "ali") {
        throw new Error("network")
      }
      return users
    })
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)

    await config.items({ query: "" })
    publish.mockClear()

    const failing = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)

    await expect(failing).resolves.toEqual([])
    expect(publish).not.toHaveBeenCalled()

    const retry = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    await retry

    expect(search).toHaveBeenCalledTimes(3)
  })

  it("resolves a pass superseded by an exit with the list still on screen", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)
    const renderer = config.render()

    const opening = config.items({ query: "" })
    resolvers.get("")?.(users)
    await opening

    const superseded = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    publish.mockClear()

    renderer.onExit()
    resolvers.get("ali")?.([users[1]])

    await expect(superseded).resolves.toEqual(users)
    expect(publish).not.toHaveBeenCalled()
  })

  it("holds a keystroke for the full debounce window", async () => {
    expect(MENTION_SUGGESTION_DEBOUNCE_MS).toBeGreaterThan(0)

    const publish = vi.fn()
    const config = await openSession(publish)
    publish.mockClear()

    const pending = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS - 1)
    expect(publish).not.toHaveBeenCalled()

    await vi.advanceTimersByTimeAsync(1)
    await pending
    expect(publish).toHaveBeenCalledTimes(1)
  })

  it("opens on the newest candidates, not on an empty list, when the opening search is superseded", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)

    const opening = config.items({ query: "" })
    const narrowed = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)

    resolvers.get("")?.(users)
    resolvers.get("ali")?.([users[1]])

    await expect(narrowed).resolves.toEqual([users[1]])
    await expect(opening).resolves.toEqual([users[1]])
  })

  it("does not make a mid-session superseded pass wait for the newer search", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)

    const opening = config.items({ query: "" })
    resolvers.get("")?.(users)
    await opening

    const superseded = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    const newer = config.items({ query: "alic" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)

    let settled: MentionedUser[] | "pending" = "pending"
    void superseded.then((items) => {
      settled = items
    })
    resolvers.get("ali")?.([users[1]])
    await vi.advanceTimersByTimeAsync(0)

    expect(settled).toEqual(users)

    resolvers.get("alic")?.([users[1]])
    await expect(newer).resolves.toEqual([users[1]])
  })

  it("does not make a pass from a closed session wait for the next one", async () => {
    const resolvers = new Map<string, (items: MentionedUser[]) => void>()
    const search = vi.fn(
      (query: string) =>
        new Promise<MentionedUser[]>((resolve) => resolvers.set(query, resolve))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)
    const renderer = config.render()

    const opening = config.items({ query: "" })
    resolvers.get("")?.(users)
    await opening

    const orphan = config.items({ query: "ali" })
    await vi.advanceTimersByTimeAsync(MENTION_SUGGESTION_DEBOUNCE_MS)
    renderer.onExit()

    const reopened = config.items({ query: "bob" })
    resolvers.get("ali")?.([users[1]])
    resolvers.get("bob")?.([users[2]])

    await expect(reopened).resolves.toEqual([users[2]])
    await expect(orphan).resolves.toEqual(users)
  })

  it("answers the first query of a reopened session immediately", async () => {
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, undefined, users)
    const renderer = config.render()

    await config.items({ query: "" })
    renderer.onExit()

    const reopened = config.items({ query: "ali" })
    expect(vi.getTimerCount()).toBe(0)
    await expect(reopened).resolves.toEqual(undebouncedCandidates("ali"))
  })

  it("answers immediately when tiptap opens a session on a moved caret", async () => {
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, undefined, users)
    const renderer = config.render()

    await config.items({ query: "" })

    renderer.onBeforeStart()
    const opening = config.items({ query: "ali" })
    expect(vi.getTimerCount()).toBe(0)
    await expect(opening).resolves.toEqual(undebouncedCandidates("ali"))
  })

  it("drops the cache on exit so a reopened popover searches again", async () => {
    const search = vi.fn(async (query: string) =>
      users.filter((user) => user.label.toLowerCase().includes(query))
    )
    const publish = vi.fn()
    const config = createSuggestionConfig([], publish, search, users)
    const renderer = config.render()

    await config.items({ query: "" })
    expect(search).toHaveBeenCalledTimes(1)

    renderer.onExit()

    await config.items({ query: "" })
    expect(search).toHaveBeenCalledTimes(2)
  })
})
