import {
  type F0ChatMention,
  type F0ChatPost,
  type F0ChatPostComment,
  type F0ChatPostVisit,
  type F0ChatUser,
} from "../types"

/**
 * The post's comments, as a page rather than the whole thread — the same
 * `hasMore` / `loadMore` shape the rest of F0's paginated surfaces use, so a
 * host can hand it `useData`'s return unchanged.
 */
export type MockPostThread = {
  items: F0ChatPostComment[]
  hasMore: boolean
  loading?: boolean
  loadMore: () => void
  /** Total, which is what the "N comments" heading shows — NOT `items.length`,
   * since only the loaded page is here. */
  totalCount: number
}

/**
 * Who has opened the post. The count is always shown; the LIST is only
 * resolved for hosts whose policy allows it (`canSee`), which is why they are
 * separate fields rather than an optional array.
 */
export type MockPostVisitList = {
  count: number
  items?: F0ChatPostVisit[]
  canSee: boolean
}

export type MockPostDetailProps = {
  post: F0ChatPost
  /** Where the post lives. Named here because the detail view is reached from
   * places that don't carry the community with them. */
  community: { id: string; title: string }
  comments: MockPostThread
  visits: MockPostVisitList
  /** Whose avatar sits next to the comment box. */
  currentUser: F0ChatUser
  /**
   * Open with the comment box focused and scrolled into view — for the reader
   * who arrived by pressing "Comment" rather than the post itself. They already
   * said what they came to do; landing them at the top to scroll back down
   * makes them say it twice.
   */
  focusComment?: boolean

  /**
   * Every handler below is OPTIONAL, and an absent one REMOVES its affordance
   * rather than disabling it. A disabled control promises something the reader
   * will never be allowed to do; an absent one says nothing, which is the
   * truth.
   */
  onReact?: (emoji: string) => void
  onLoadReactionUsers?: (emoji: string) => Promise<F0ChatUser[]>
  onCreateComment?: (
    text: string,
    mentions?: F0ChatMention[]
  ) => void | Promise<void>
  onEditComment?: (id: string, text: string) => void | Promise<void>
  onDeleteComment?: (id: string) => void | Promise<void>
  onAcknowledge?: () => void | Promise<void>
  onEdit?: () => void
  onDelete?: () => void | Promise<void>
  onToggleComments?: () => void | Promise<void>
  onOpenInsights?: () => void
  /** Closes the surface hosting this view. Omit when the host has its own
   * chrome (a page, a route) and there is nothing to close. */
  onClose?: () => void
  /** Resolves `@`-mention candidates for the comment box. Omit to write plain
   * comments. */
  searchMembers?: (query: string) => Promise<F0ChatUser[]>

  /**
   * Called when the reader tries to leave with an acknowledgement still
   * pending. Return `false` to keep the view open.
   *
   * F0 deliberately does NOT block navigation itself — the product does that
   * with `useBlocker` plus a `beforeunload` listener, and a design-system
   * component that seizes the host's router is exactly what a design-system
   * component must not do. This reports; the host decides.
   */
  onDismissAttempt?: (context: { acknowledgePending: boolean }) => boolean
}
