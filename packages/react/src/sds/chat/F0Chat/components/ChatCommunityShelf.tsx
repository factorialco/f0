import { format, isSameDay, isTomorrow, type Locale } from "date-fns"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import {
  Calendar,
  Clock,
  EllipsisHorizontal,
  FileFilled,
  PushPinSolid,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"
import { Popover, PopoverAnchor, PopoverContent } from "@/ui/popover"
import { useChatJump } from "../providers/ChatUIProvider"
import { useF0Chat, useF0ChatEmit } from "../providers/F0ChatProvider"
import {
  type F0ChatDraftPost,
  type F0ChatPinnedPost,
  type F0ChatScheduledPost,
} from "../types"

type ShelfList = "pinned" | "scheduled" | "draft"

/**
 * A community's shelves, as one strip of chips under the header: the posts kept
 * at the top, the ones waiting to go out, and the ones you never finished.
 *
 * A CHIP WITH ITS COUNT, always, and only where there is something in it. That
 * is the whole idea, and it is what Slack, Teams and Reddit all landed on: what
 * is pinned announces itself with a number, and reaching it never costs you the
 * place you were reading. The lists used to be entries in the overflow menu,
 * which hid every count and made getting from one to the other a three-click
 * round trip through the transcript.
 *
 * Drafts are a list of their own rather than undated scheduled posts: pinned and
 * scheduled are facts about the CHANNEL, and a draft is one person's — see
 * {@link F0ChatDraftPost}.
 *
 * Each chip opens its OWN Radix popover — no tabs between the lists. A
 * segmented control was one extra thing to read on the way to a post, and the
 * chips already are the switch: pressing the other one crosses over.
 *
 * The popover floats FREE OF THE PANEL: portalled, wider than the sidepanel,
 * rounded and shadowed like any other. It can be, because it does not belong to
 * the transcript's layout — and it must be, because two lines of a post's body
 * in a 360px column is four words a line.
 *
 * A popover rather than a hand-rolled sheet because Escape, the press outside,
 * the focus that comes back to the chip and the menus portalled out of a row are
 * all things Radix's dismissable-layer stack already gets right — this file used
 * to carry ~30 lines of document listeners to approximate them, and still closed
 * itself out from under the row menu doing the unpinning.
 */
export const ChatCommunityShelf = (): ReactNode => {
  const i18n = useI18n()
  const { channel } = useF0Chat()
  const emit = useF0ChatEmit()
  // ONE at a time, though they are two independent popovers: opening the other
  // shelf means you are done with this one, and two panels stacked over the
  // same transcript is two things covering what you came to read.
  const [open, setOpen] = useState<ShelfList | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  /** Set while one shelf hands over to the other — see `onCloseAutoFocus`. */
  const crossingRef = useRef(false)

  const pinned = channel.pinnedPosts ?? []
  const scheduled = channel.scheduledPosts ?? []
  const drafts = channel.draftPosts ?? []

  // A list that empties while it is open (the last pin unpinned) has nothing
  // left to show, and an empty state under a chip that is gone reads as a bug.
  useEffect(() => {
    if (open === "pinned" && pinned.length === 0) {
      setOpen(null)
    }
    if (open === "scheduled" && scheduled.length === 0) {
      setOpen(null)
    }
    if (open === "draft" && drafts.length === 0) {
      setOpen(null)
    }
  }, [open, pinned.length, scheduled.length, drafts.length])

  // Nothing on any shelf ⇒ no shelf. An empty strip is a row of chrome that
  // says nothing, above a feed that is what people came for.
  if (pinned.length === 0 && scheduled.length === 0 && drafts.length === 0) {
    return null
  }

  const toggle = (list: ShelfList) => {
    if (open === list) {
      setOpen(null)
      return
    }
    crossingRef.current = open !== null
    emit.onShelfOpened({ list })
    setOpen(list)
  }

  const counts: Record<ShelfList, number> = {
    pinned: pinned.length,
    scheduled: scheduled.length,
    draft: drafts.length,
  }
  const icons: Record<ShelfList, IconType> = {
    pinned: PushPinSolid,
    scheduled: Clock,
    draft: FileFilled,
  }
  // Spelled out rather than built from `list`: a composed key is invisible to
  // the i18n tooling, so a missing translation only shows up at runtime.
  const chipLabels: Record<ShelfList, string> = {
    pinned: i18n.t("chat.community.pinnedPosts"),
    scheduled: i18n.t("chat.community.scheduledPosts"),
    draft: i18n.t("chat.community.draftPosts"),
  }

  /** One chip and the popover it opens. */
  const shelf = (list: ShelfList, rows: ReactNode) => (
    <Popover
      open={open === list}
      onOpenChange={(next) => {
        // Only ever close ITSELF. Crossing to the other shelf dismisses this
        // popover a beat after the chip already opened the other one, and a
        // blind `setOpen(null)` would take that one down with it.
        if (!next) {
          setOpen((current) => (current === list ? null : current))
        }
      }}
    >
      <PopoverAnchor asChild>
        {/* The chip can't be the anchor itself — `Chip` takes no ref — so this
            wrapper is it, and `flex` keeps it from adding a line box of its
            own around the chip it holds. */}
        <span data-shelf-chip={list} className="flex">
          <ButtonInternal
            icon={icons[list]}
            label={`${chipLabels[list]} ${counts[list]}`}
            pressed={open === list}
            onClick={() => toggle(list)}
            variant="outline"
            size="sm"
          />
        </span>
      </PopoverAnchor>
      <PopoverContent
        data-testid="chat-shelf-sheet"
        data-shelf-list={list}
        align="start"
        sideOffset={6}
        collisionPadding={12}
        // WIDER THAN THE PANEL, on purpose. A pin's two lines of body in a
        // 360px column is four words per line; the popover is portalled and
        // floats over the main content, so it can take the room it needs and
        // give it back the moment it closes.
        className="w-[420px] max-w-[calc(100vw-1.5rem)] rounded-lg border border-solid border-f1-border-secondary p-0 shadow-md"
        onInteractOutside={(event) => {
          // The OTHER chip is "outside" this popover: without this, the press
          // meaning "show me the other shelf" is spent dismissing this one.
          //
          // `onInteractOutside` and not `onPointerDownOutside`, because the
          // press is TWO interactions — the pointer, and the focus that lands
          // on the chip — and stopping only the first still dismissed on the
          // second.
          if (stripRef.current?.contains(event.target as Node)) {
            event.preventDefault()
          }
        }}
        onCloseAutoFocus={(event) => {
          // Radix returns focus to the TRIGGER, and there is none here — only
          // an anchor. Left alone, closing drops a keyboard reader on the body.
          event.preventDefault()
          // …unless the other shelf is opening: focus has just gone to the new
          // popover, and pulling it back to this chip reads to THAT popover as
          // a focus landing outside it, which dismisses it on the spot.
          if (crossingRef.current) {
            crossingRef.current = false
            return
          }
          stripRef.current
            ?.querySelector<HTMLElement>(`[data-shelf-chip="${list}"] button`)
            ?.focus()
        }}
      >
        {rows}
      </PopoverContent>
    </Popover>
  )

  return (
    <div
      ref={stripRef}
      data-testid="chat-community-shelf"
      aria-label={i18n.t("chat.community.shelfLabel")}
      className="flex pb-2 shrink-0 items-center gap-1.5 px-4 overflow-x-auto overflow-y-hidden"
    >
      {pinned.length > 0
        ? shelf(
            "pinned",
            <PinnedRows posts={pinned} onDone={() => setOpen(null)} />
          )
        : null}
      {scheduled.length > 0
        ? shelf(
            "scheduled",
            <ScheduledRows posts={scheduled} onDone={() => setOpen(null)} />
          )
        : null}
      {/* Last, and it is the right place: pinned and scheduled are facts about
          the CHANNEL, and this one is only about you. */}
      {drafts.length > 0
        ? shelf(
            "draft",
            <DraftRows posts={drafts} onDone={() => setOpen(null)} />
          )
        : null}
    </div>
  )
}

const PinnedRows = ({
  posts,
  onDone,
}: {
  posts: F0ChatPinnedPost[]
  onDone: () => void
}): ReactNode => {
  const i18n = useI18n()
  const { openPost, unpinPost } = useF0Chat()
  const { jumpToMessage } = useChatJump()

  return (
    <ul className="m-0 flex list-none flex-col p-0" data-testid="shelf-pinned">
      {posts.map((post) => (
        <Row
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          thumbnailUrl={post.thumbnailUrl}
          onClick={
            openPost
              ? () => {
                  onDone()
                  openPost(post.id, { source: "pinned" })
                }
              : undefined
          }
          actions={[
            // The other way to a pin: stay in the feed and be taken to it, ringed
            // where it sits. Reading the post in place is a different thing from
            // opening its page, and both are worth having.
            {
              label: i18n.t("chat.community.goToPost"),
              onClick: () => {
                onDone()
                jumpToMessage(post.id)
              },
            },
            ...(unpinPost
              ? [
                  {
                    label: i18n.t("chat.community.unpinPost"),
                    icon: PushPinSolid,
                    onClick: () => void unpinPost(post.id),
                  },
                ]
              : []),
          ]}
        />
      ))}
    </ul>
  )
}

const ScheduledRows = ({
  posts,
  onDone,
}: {
  posts: F0ChatScheduledPost[]
  onDone: () => void
}): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const { scheduledActions, openScheduledPost } = useF0Chat()
  const emit = useF0ChatEmit()

  return (
    <ul
      className="m-0 flex list-none flex-col p-0"
      data-testid="shelf-scheduled"
    >
      {posts.map((post) => {
        const actions = scheduledActions?.(post) ?? []
        return (
          <Row
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            thumbnailUrl={post.thumbnailUrl}
            // When it goes out reads as a FACT ABOUT THE POST, under it with
            // the rest. As a column down the left it was a second thing to
            // scan, in a colour that shouted, wrapping onto two lines.
            meta={
              <>
                <span className="flex items-center gap-1.5 text-f1-foreground-secondary">
                  <F0Icon icon={Clock} size="sm" />
                  {formatWhen(post.scheduledFor, locale)}
                </span>
                {post.event ? (
                  <F0TagRaw
                    icon={Calendar}
                    text={i18n.t("chat.community.scheduledEvent")}
                  />
                ) : null}
              </>
            }
            onClick={
              openScheduledPost
                ? () => {
                    onDone()
                    emit.onScheduledPostOpened()
                    openScheduledPost(post.id)
                  }
                : undefined
            }
            actions={actions.map((action) => ({
              label: action.label,
              icon: action.icon,
              critical: action.critical,
              onClick: action.onClick,
            }))}
          />
        )
      })}
    </ul>
  )
}

const DraftRows = ({
  posts,
  onDone,
}: {
  posts: F0ChatDraftPost[]
  onDone: () => void
}): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const { draftActions, openDraftPost } = useF0Chat()

  return (
    <ul className="m-0 flex list-none flex-col p-0" data-testid="shelf-drafts">
      {posts.map((post) => {
        const actions = draftActions?.(post) ?? []
        return (
          <Row
            key={post.id}
            // A draft is unfinished BY DEFINITION, and a nameless row is
            // unfindable — so the untitled ones are named here rather than
            // left as a blank line the reader has to guess at.
            title={post.title.trim() || i18n.t("chat.community.draftUntitled")}
            untitled={post.title.trim().length === 0}
            excerpt={post.excerpt}
            thumbnailUrl={post.thumbnailUrl}
            // WHEN YOU LAST TOUCHED IT, not when it goes out: a draft has no
            // moment coming, and "how old is this" is the question you actually
            // have about one you had forgotten writing.
            meta={
              <span className="flex items-center gap-1.5 text-f1-foreground-secondary">
                <F0Icon icon={FileFilled} size="sm" />
                {i18n.t("chat.community.draftSavedAt", {
                  when: formatWhen(post.savedAt, locale),
                })}
              </span>
            }
            // Straight into the composer with it loaded: what you want from
            // something half-written is to keep writing it.
            onClick={
              openDraftPost
                ? () => {
                    onDone()
                    openDraftPost(post.id)
                  }
                : undefined
            }
            actions={actions.map((action) => ({
              label: action.label,
              icon: action.icon,
              critical: action.critical,
              onClick: action.onClick,
            }))}
          />
        )
      })}
    </ul>
  )
}

/**
 * "Tomorrow · 09:00" — the day in words while it still has one, the date after.
 * A scheduled post is read as "how long have I got", which an ISO date does not
 * answer.
 */
const formatWhen = (iso: string, locale: Locale): string => {
  const date = new Date(iso)
  const day =
    isSameDay(date, new Date()) || isTomorrow(date)
      ? format(date, "EEEE", { locale })
      : format(date, "d MMM", { locale })
  return `${day} · ${format(date, "HH:mm")}`
}

const Row = ({
  title,
  untitled,
  excerpt,
  thumbnailUrl,
  meta,
  onClick,
  actions,
}: {
  title: string
  /** The title is a stand-in F0 supplied, so it is drawn as one. */
  untitled?: boolean
  excerpt?: string
  /** The post's cover, as a square thumbnail before the text. */
  thumbnailUrl?: string
  /** A line under the body — when it goes out, whether it is an event. */
  meta?: ReactNode
  /** Absent ⇒ the row names something with no page to open. */
  onClick?: () => void
  actions: DropdownItem[]
}): ReactNode => (
  // ONE text size throughout, `text-base`. These rows are read, not skimmed
  // like a table, and `text-xs` bodies under `text-sm` titles turned the
  // popover into fine print; the hierarchy is weight and colour instead.
  <li className="flex items-start gap-3 border-0 border-b border-solid border-f1-border-secondary px-4 py-3 text-base last:border-b-0 hover:bg-f1-background-hover">
    {onClick ? (
      <button
        type="button"
        onClick={onClick}
        className="flex min-w-0 flex-1 items-start gap-3 border-0 bg-transparent p-0 text-left font-inherit text-inherit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"
      >
        <Label
          title={title}
          untitled={untitled}
          excerpt={excerpt}
          thumbnailUrl={thumbnailUrl}
          meta={meta}
        />
      </button>
    ) : (
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <Label
          title={title}
          untitled={untitled}
          excerpt={excerpt}
          thumbnailUrl={thumbnailUrl}
          meta={meta}
        />
      </div>
    )}
    {actions.length > 0 ? (
      <div className="shrink-0">
        <Dropdown items={actions} icon={EllipsisHorizontal} size="sm" />
      </div>
    ) : null}
  </li>
)

const Label = ({
  title,
  untitled,
  excerpt,
  thumbnailUrl,
  meta,
}: {
  title: string
  untitled?: boolean
  excerpt?: string
  thumbnailUrl?: string
  meta?: ReactNode
}): ReactNode => (
  <>
    {thumbnailUrl ? (
      <span className="size-12 shrink-0 overflow-hidden rounded-md bg-f1-background-secondary">
        <img
          src={thumbnailUrl}
          alt=""
          aria-hidden
          loading="lazy"
          className="size-full object-cover"
        />
      </span>
    ) : null}
    <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
      {/* One line: these shelves are for finding one thing among a few, and a
          wrapped title turns the sheet into a wall. */}
      <span
        className={cn(
          "w-full truncate font-medium",
          // A stand-in, drawn as one: it is F0 talking, not the writer.
          untitled
            ? "italic text-f1-foreground-secondary"
            : "text-f1-foreground"
        )}
      >
        {title}
      </span>
      {/* Two lines of the post itself. A column of headlines all read alike —
          this is usually what tells you whether it is the one you meant. */}
      {excerpt ? (
        <span className="line-clamp-2 w-full text-f1-foreground-secondary">
          {excerpt}
        </span>
      ) : null}
      {meta ? (
        <span className="mt-0.5 flex flex-wrap items-center gap-2">{meta}</span>
      ) : null}
    </span>
  </>
)
