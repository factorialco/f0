import { memo, useMemo, useRef, type ReactNode } from "react"
import { type DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { CommunityPost } from "@/sds/Home/Communities/Post/CommunityPost"
import { useChatHighlightedId } from "../providers/ChatUIProvider"
import {
  useChatActivePostId,
  useF0ChatEmit,
  useF0ChatStable,
} from "../providers/F0ChatProvider"
import { type F0ChatPost } from "../types"
import { chatPermission } from "../utils/capabilities"
import {
  communityAuthorFrom,
  postCountersFrom,
  postReactionsFrom,
} from "../utils/posts"

/** Stands in for the community link's handler when there is nothing to go to:
 * either the link isn't drawn at all (`hideGroup`, the single-community case)
 * or it is drawn without navigation because the host passed no
 * `openCommunity`. `group` is a required prop either way. */
const noop = (): void => {}

/**
 * One post in the transcript: the full-width card, no avatar gutter and no
 * bubble. A pure adapter from the transported {@link F0ChatPost} to
 * `CommunityPost` — every handler, every word and every derived count is
 * resolved here, so the item itself stays serializable.
 *
 * Reads the STABLE context rather than the runtime: a transport event (someone
 * typing, a message arriving) must not re-render every post card on screen.
 */
const ChatPostRowComponent = ({
  post,
  last,
}: {
  post: F0ChatPost
  /** The feed ends here, so the row draws no divider. */
  last?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const {
    channelTitle,
    channelType,
    capabilities,
    toggleReaction,
    loadReactionUsers,
    openPost,
    openCommunity,
    postActions,
  } = useF0ChatStable()
  const emit = useF0ChatEmit()
  const { highlightedId } = useChatHighlightedId()
  const highlighted = highlightedId === post.id
  const active = useChatActivePostId() === post.id

  const canReact = chatPermission("canReact", channelType, capabilities)
  // Present ⇒ this is an aggregated feed and the card says which community the
  // post is from. Absent ⇒ one community's channel, and the header already did.
  const origin = post.community

  const reactions = useMemo(
    () => postReactionsFrom(post, { toggleReaction, loadReactionUsers }),
    [post, toggleReaction, loadReactionUsers]
  )

  const dropdownItems = useMemo<DropdownItem[] | undefined>(() => {
    const actions = postActions(post)
    if (actions.length === 0) {
      return undefined
    }
    return actions.map((action) => ({
      label: action.label,
      icon: action.icon,
      critical: action.critical,
      onClick: () => {
        emit.onPostActionInvoked({ actionId: action.id })
        action.onClick(post)
      },
    }))
  }, [post, postActions, emit])

  // The Comment button sits INSIDE the clickable card, so one click fires both
  // handlers: the button's first, then the card's as the event bubbles. The
  // card's would win, and a reader who pressed Comment would land at the top of
  // a post they came to the bottom of. First source in a tick wins.
  const openedThisTick = useRef(false)
  const open = (source: "card" | "comment") => {
    if (openedThisTick.current) {
      return
    }
    openedThisTick.current = true
    queueMicrotask(() => {
      openedThisTick.current = false
    })
    emit.onPostOpened({ source })
    openPost?.(post.id, { source })
  }

  return (
    // A named region per post, so a screen reader can move between posts by
    // region. The title itself stays a paragraph inside the card: a virtualized
    // feed that starts at the 47th post would otherwise emit a heading level
    // with no parent, which is a real `heading-order` violation.
    <article
      aria-label={post.title}
      data-testid="chat-post-row"
      // The current item of a set, which is what "the post you have open" is.
      aria-current={active ? "true" : undefined}
      data-active={active || undefined}
      className={cn(
        // ONE COLUMN OF POSTS, divided by a hairline — the shape every feed
        // worth reading has. Boxed cards with a gap between them made a short
        // channel look like a search results page: four rounded rectangles
        // floating on a background, each announcing its own edges twice.
        //
        // FULL BLEED, and no padding of its own: `-mx-4` cancels the
        // transcript's gutter so the divider — and the card's hover tint,
        // which is what the reader actually points at — reach both edges of
        // the panel. Any padding here would inset the tint and leave a
        // 4px frame of untinted row around a hovered post.
        //
        // The content's own inset is the card's `p-4`, which is where it comes
        // from on every other surface too.
        // …except on the last one, where the line would divide the feed from
        // the composer. Nothing follows it, so there is nothing to divide.
        "-mx-4 border-0 border-solid border-f1-border-secondary",
        !last && "border-b",
        // The card rounds its own hover tint, which inside a full-bleed row
        // leaves four untinted corners. Square it here rather than in the
        // shared component: the page still wants a rounded card.
        "[&>*]:rounded-none",
        // Arriving from a jump — the pinned bar, a search hit. Same token and
        // same 200ms as a message's: one visual answer to "this is the one you
        // asked for", however you asked.
        "transition-colors duration-200 motion-reduce:transition-none",
        // OPEN BESIDE THE FEED — the tint and nothing else. An accent edge on
        // top of it was a second thing saying the same thing, and in a column
        // with no card borders left it read as a stray rule.
        active && "bg-f1-background-selected-secondary",
        highlighted && "ring-1 ring-inset ring-f1-special-ring ring-offset-0"
      )}
    >
      <CommunityPost
        id={post.id}
        author={communityAuthorFrom(post.author)}
        // WHERE the post came from — drawn as "Ana in Barcelona" — but only in
        // an aggregated feed, where the posts come from different communities
        // and the channel header can't answer it. In a single community's
        // channel the header names it an inch above every card, so repeating it
        // per post is the same word twice; `hideGroup` drops it and the card
        // still needs the required prop.
        group={
          origin
            ? {
                title: origin.name,
                onClick: () => openCommunity?.(origin.id),
              }
            : { title: channelTitle, onClick: noop }
        }
        hideGroup={!origin}
        createdAt={new Date(post.createdAt)}
        title={post.title}
        description={post.description}
        mediaUrl={post.mediaUrl}
        event={
          post.event
            ? {
                title: post.event.title,
                date: new Date(post.event.date),
                place: post.event.place,
                mediaUrl: post.event.mediaUrl,
              }
            : undefined
        }
        counters={postCountersFrom(post, i18n.t)}
        pinned={!!post.pinnedAt}
        pinnedLabel={i18n.chat.community.pinnedPost}
        // A feed asks "how fresh is this", not "at what minute".
        relativeDate
        inLabel={i18n.chat.post.in}
        comment={{
          label: i18n.chat.post.comment,
          onClick: () => open("comment"),
        }}
        reactions={reactions}
        noReactionsButton={!canReact}
        dropdownItems={dropdownItems}
        // NOT `onClick` unless the host can actually open something: the card
        // withdraws its pointer cursor, hover tint and focus ring on its own when
        // this is absent, which is what should happen when there is nowhere to go.
        onClick={openPost ? () => open("card") : undefined}
        // The two props that would resize a row Virtuoso has already measured.
        // `descriptionExpandable`'s "See more" grows the card mid-scroll, and an
        // unclamped body has no upper bound at all — the whole body lives behind
        // `openPost` instead.
        descriptionExpandable={false}
        noDescriptionClamp={false}
        // The virtualizer mounts rows a screenful ahead; preloading every video
        // in that window would fetch megabytes nobody has scrolled to yet.
        noVideoPreload
      />
    </article>
  )
}

/**
 * Memoized on the post's identity. `flattenChatRows` hands back the SAME row
 * object when the post and its flags are unchanged, and everything this reads
 * from context is identity-stable, so a container re-render leaves mounted
 * cards alone.
 */
export const ChatPostRow = memo(ChatPostRowComponent)
