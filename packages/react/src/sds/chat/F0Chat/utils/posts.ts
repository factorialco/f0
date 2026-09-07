import { type TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"
import { type ReactionsProps } from "@/sds/social/Reactions"
import { type ReactionProps } from "@/sds/social/Reactions/reaction"

import { type F0ChatPost, type F0ChatReaction, type F0ChatUser } from "../types"

/**
 * The plain text inside a post's HTML body, for measuring and searching.
 *
 * Tags are replaced with a SPACE rather than removed: `<p>one</p><p>two</p>`
 * has to read as "one two", not "onetwo", or a substring search matches across
 * a paragraph boundary that no reader can see. And counting the tags as
 * characters would overestimate a formatted post's height by ~3×.
 */
export const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()

/**
 * A chat identity as the post card wants it: first and last name apart.
 *
 * F0ChatUser carries ONE display name because that is what a bubble shows;
 * `CommunityPost` wants the halves because it links the person's name and
 * shows initials when there is no photo. Splitting on the first space is the
 * same approximation the transcript already makes for generated avatars (see
 * `ChatMessageRowRenderer`'s `avatarFor`), and it degrades cleanly: a
 * single-word name simply has no last name.
 */
export const communityAuthorFrom = (
  author: F0ChatUser | undefined
):
  | { firstName: string; lastName: string; avatarUrl?: string; url?: string }
  | undefined => {
  if (!author) return undefined
  const spaceAt = author.name.indexOf(" ")
  const firstName =
    spaceAt === -1 ? author.name : author.name.slice(0, spaceAt).trim()
  const lastName = spaceAt === -1 ? "" : author.name.slice(spaceAt + 1).trim()
  return {
    firstName,
    lastName,
    // Only a real photo travels: without one the card generates initials, which
    // is what it should do — an empty string would render a broken image.
    avatarUrl:
      author.avatar && "src" in author.avatar
        ? (author.avatar.src ?? undefined)
        : undefined,
    url: author.profileHref,
  }
}

/**
 * The counters line, already worded. Numbers travel on the wire and the plural
 * is resolved here, so the host never translates what F0 already translates —
 * the same split `chat.readBy.one/other` makes for read receipts.
 *
 * `views` is omitted when the host doesn't count them; `comments` never is,
 * because "0 comments" is an invitation and a missing counter reads as a bug.
 */
export const postCountersFrom = (
  post: F0ChatPost,
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
): { views?: string; comments: string } => ({
  views:
    post.viewCount === undefined
      ? undefined
      : t(
          post.viewCount === 1
            ? "chat.post.views.one"
            : "chat.post.views.other",
          { count: post.viewCount }
        ),
  comments: t(
    post.commentCount === 1
      ? "chat.post.comments.one"
      : "chat.post.comments.other",
    { count: post.commentCount }
  ),
})

/**
 * Chat reactions as the social `Reactions` component wants them. The two
 * vocabularies happen to be 1:1 today, so a post's reactions go through the
 * SAME `toggleReaction` / `loadReactionUsers` as a message's, with the post's
 * id as the item id — no second reaction API.
 */
export const postReactionsFrom = (
  post: F0ChatPost,
  handlers: {
    toggleReaction: (itemId: string, emoji: string) => void
    loadReactionUsers?: (
      itemId: string,
      emoji: string,
      count: number
    ) => Promise<F0ChatUser[]>
  }
): ReactionsProps => ({
  items: (post.reactions ?? []).map(
    (reaction: F0ChatReaction): ReactionProps => ({
      emoji: reaction.emoji,
      initialCount: reaction.count,
      hasReacted: reaction.reactedByMe,
      users: reaction.users?.map((user) => ({ name: user.name })),
      loadUsers: handlers.loadReactionUsers
        ? async () => {
            const users = await handlers.loadReactionUsers!(
              post.id,
              reaction.emoji,
              reaction.count
            )
            return users.map((user) => ({ name: user.name }))
          }
        : undefined,
    })
  ),
  onInteraction: (emoji: string) => handlers.toggleReaction(post.id, emoji),
})
