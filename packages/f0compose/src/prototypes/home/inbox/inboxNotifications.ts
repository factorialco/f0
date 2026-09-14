import type { ModuleId } from "@factorialco/f0-react"

import type { InboxTask } from "./inboxTasks"

import { COMMUNITY_POSTS } from "../windows/communityPosts"

/**
 * The informational half of the Inbox, now that the rail's Bell is gone
 * (Angel, 2026-09-14). DERIVED from the community wall rather than
 * hand-written, for the same reason the Comms nav derives its communities
 * from it: a notification about a post and the post itself cannot drift.
 *
 * The wall is the only real stream this prototype has. When there is a
 * mentions or reactions fixture, it belongs here too — the preset already
 * knows how to show it.
 */

const COMMUNITY_MODULE: ModuleId = "communities"

export function inboxNotifications(): InboxTask[] {
  return COMMUNITY_POSTS.slice(0, 4).map((post) => ({
    id: `post:${post.id}`,
    title: post.title ?? `${post.author} posted in ${post.community}`,
    meta: `${post.author} · ${post.community} · ${post.posted}`,
    module: COMMUNITY_MODULE,
    avatarSeed: post.seed,
    kind: "notification" as const,
  }))
}
