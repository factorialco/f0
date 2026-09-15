import { format } from "date-fns"
import { useState } from "react"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { useWidgetIsWide } from "@/experimental/Widgets/Widget"
import { isExternalHref, Link } from "@/lib/linkHandler"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { type CommunityPostSummary } from "../F0CommunityPostsCarousel"
import { PostDescription } from "../Post/PostDescription"
import { PostEvent } from "../Post/PostEvent"

/**
 * WHEN AND WHERE a post that is an EVENT happens. A post carrying one is drawn
 * as the event card the Communities feed itself draws ({@link PostEvent}) rather
 * than as a title over a few lines of body: an event's title, its time and its
 * place ARE the preview, and the body underneath them is the detail you open the
 * post for.
 */
export interface CommunityPostEvent {
  /** When it starts — the card's date chip, and the time in its own line. */
  date: Date
  /** Where it happens, after the time. Omitted when the event has no place. */
  place?: string
}

/**
 * ONE POST as a ROW — {@link CommunityPostSummary}, which the carousel's tiles
 * take, plus the one thing a row can show that a tile cannot.
 *
 * Sharing the tile's shape is deliberate: the two layouts are the same feed in
 * the same card, and an app that switches between them should not have to map
 * its posts twice.
 */
export interface CommunityPostListItem extends CommunityPostSummary {
  event?: CommunityPostEvent
}

/**
 * HOW MANY ROWS THE LIST OPENS WITH. Three — the rest are behind "View more",
 * which is the whole reason the number is small: the card states what it holds
 * and lets the reader ask for the rest, rather than being as tall as the feed.
 */
const DEFAULT_VISIBLE_COUNT = 3

/**
 * HOW WIDE THE PICTURE IS in a wide row — `w-56`, 224px on F0's own scale. Its
 * HEIGHT is not declared anywhere: the box keeps the cover's 16:9 proportion, so
 * the width decides it, and a row is exactly as tall as the taller of that
 * picture and its own words.
 *
 * In a NARROW card the picture takes the full width instead and the row becomes a
 * column — 224px beside text in a 396px rail leaves the words nothing.
 */
const THUMB_WIDTH = "w-full @lg:w-56"

/**
 * THE CARD'S OWN PADDING, which the list cancels and each row puts back.
 *
 * `Card` is `p-4`, so a list left inside it would stop its dividers 16px short of
 * the card's border and draw them as floating rules. Bled out by exactly that
 * (`-mx-4`), the rules reach the edge; each row's own `px-4` then starts the text
 * back where it always read, so only the LINES move.
 */
const EDGE_BLEED = "-mx-4"
const ROW_INSET = "px-4"

/**
 * WHERE "View more" SITS — the same place it sits under a `list` slot's rows and
 * under the frame's own footer: 2px outside the text above it, which is what
 * makes a bordered box read as aligned with words rather than 2px shy of them.
 *
 * It is NOT in the bleed. The rows reach the card's border because they are rows;
 * a button left out there would hang its whole rectangle past the widget's title.
 */
const MORE_BUTTON_CLASS = "-ml-0.5 mt-1 self-start"

/**
 * HOW MUCH OF THE POST A ROW PREVIEWS. Two lines beside a picture, three in a
 * narrow card — where the picture is above the words rather than beside them, so
 * the line that the picture was taking is free.
 *
 * A FLAT CLAMP, unlike the carousel's measured one: a tile declares its height
 * and the body takes what is left of it, but a row has no declared height — it is
 * as tall as it needs to be — so there is no leftover to measure and the number of
 * lines is the thing that holds a row's height in check.
 */
const BODY_CLAMP = "line-clamp-3 @lg:line-clamp-2"

/** The title, capped so a long one cannot crowd the body out of the row. */
const TITLE_CLAMP = "line-clamp-2 @lg:line-clamp-1"

/**
 * THE WHOLE ROW AS ONE TARGET: an overlay on the post's own anchor, covering the
 * row. Same mechanism the carousel's tiles use, `z-[1]` included — without it the
 * overlay paints in the same layer as the row's other positioned descendants (the
 * author avatar, the rich-text body) and the last one in the DOM takes the click.
 */
const STRETCH = "after:absolute after:inset-0 after:z-[1] after:content-['']"

/**
 * The post's clickable face — an anchor when the post has a `href`, a button when
 * all it has is an `onClick`, and in both cases the row's only control.
 *
 * `label` names it. For a text post the children ARE the title, so it is left
 * unset and the name comes from them; an EVENT card is a title, a time and a
 * place, and reading all three as the link's name says three times over what the
 * title already says — so an event row names itself with the title alone.
 */
const PostTarget = ({
  post,
  label,
  className,
  children,
}: {
  post: CommunityPostListItem
  label?: string
  className?: string
  children: React.ReactNode
}) =>
  post.href ? (
    <Link
      href={post.href}
      onClick={post.onClick}
      aria-label={label}
      className={cn(
        "no-underline visited:text-f1-foreground",
        STRETCH,
        focusRing(),
        className
      )}
      {...(isExternalHref(post.href)
        ? { target: "_blank" as const, rel: "noreferrer" }
        : {})}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      onClick={post.onClick}
      aria-label={label}
      className={cn(
        "cursor-pointer border-none bg-transparent p-0 text-left",
        STRETCH,
        focusRing(),
        className
      )}
    >
      {children}
    </button>
  )

/**
 * ONE ROW: the post's cover on the left, its words on the right, and the poster
 * under them — or, in a narrow card, the cover above all of it.
 *
 * `relative` for the stretched target to have something to fill, and `isolate` so
 * that target's overlay cannot climb out of the row it belongs to.
 */
const CommunityPostRow = ({ post }: { post: CommunityPostListItem }) => {
  const locale = useDateFnsLocale()
  // "Jul 16" — the day and only the day, as on a tile: a row carries three of
  // these facts on one line and a full timestamp would be the longest of them.
  const date = format(post.createdAt, "MMM d", { locale })
  const meta = [date, post.counters?.visits, post.counters?.comments]
    .filter(Boolean)
    .join(" · ")

  return (
    <article
      className={cn(
        "relative isolate flex flex-col gap-4 py-4 @lg:flex-row @lg:gap-6",
        ROW_INSET,
        // The same wash every other Home row hovers to, edge to edge and square:
        // the list already reads as one divided block, and an inset rounded hover
        // on top of a flush divider is two shapes disagreeing about how wide a row
        // is.
        "transition-colors hover:bg-f1-background-tertiary"
      )}
    >
      {post.imageUrl ? (
        // The skeleton BEHIND the picture, not instead of it: the box is already
        // the right shape, so a slow image is a grey panel of exactly the height
        // the cover will take rather than a row that grows when it arrives.
        <div
          className={cn(
            "relative aspect-video shrink-0 overflow-hidden rounded-xl",
            THUMB_WIDTH
          )}
        >
          <img
            src={post.imageUrl}
            // Decorative: the title beside it already names the post, and an alt
            // repeating it would have a screen reader read the post twice.
            role="presentation"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <Skeleton className="absolute inset-0 -z-10 h-full w-full" />
        </div>
      ) : null}
      {/* ⚠️ `min-w-0` IS LOAD-BEARING. A flex item's min-width is its content's
          own, so an unbreakable word in a title makes this column wider than the
          room left beside the picture and pushes the words past the row's edge.
          Zero lets the column be squeezed, and the text inside it wrap and clamp
          as it is meant to. */}
      <div className="flex min-w-0 grow flex-col gap-2">
        {post.event ? (
          <PostTarget post={post} label={post.title}>
            <PostEvent
              title={post.title}
              place={post.event.place}
              date={post.event.date}
            />
          </PostTarget>
        ) : (
          <>
            <PostTarget post={post}>
              <h3
                className={cn(
                  "m-0 text-lg font-semibold text-f1-foreground",
                  TITLE_CLAMP
                )}
              >
                {post.title}
              </h3>
            </PostTarget>
            {/* The post's own rich body — the SAME component the post itself
                renders, so bold, emphasis and paragraph breaks read identically
                here and on the other side of the click. Its links are NOT
                clickable through: the row's target is the title's anchor and a
                link inside a link is neither valid nor operable. */}
            {post.description ? (
              <PostDescription
                content={post.description}
                collapsed
                className={BODY_CLAMP}
              />
            ) : null}
          </>
        )}
        {/* WHO POSTED IT, with the post's own engagement line under the name.
            `pt-2` on top of the column's `gap-2`: the byline is a different KIND
            of thing from the post's words and reads as one. */}
        <div className="flex flex-row items-center gap-3 pt-2">
          {post.author ? (
            <F0AvatarPerson
              firstName={post.author.firstName}
              lastName={post.author.lastName}
              src={post.author.avatarUrl}
            />
          ) : null}
          <div className="flex min-w-0 flex-col">
            {post.author ? (
              <span className="truncate font-medium text-f1-foreground">
                {`${post.author.firstName} ${post.author.lastName}`}
              </span>
            ) : null}
            {meta ? (
              <span className="truncate text-f1-foreground-secondary">
                {meta}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * A row's placeholder: the same shape with nothing written on it, so the card is
 * the height it will be once the posts land.
 *
 * It always reserves the cover's seat. A feed with no pictures is the rarer one,
 * and a row that starts tall and settles only gives room back — while one that
 * starts short and grows moves everything under it.
 */
const CommunityPostRowSkeleton = () => (
  <div
    className={cn("flex flex-col gap-4 py-4 @lg:flex-row @lg:gap-6", ROW_INSET)}
  >
    <Skeleton className={cn("aspect-video shrink-0 rounded-xl", THUMB_WIDTH)} />
    <div className="flex grow flex-col gap-2">
      <Skeleton className="h-5 w-3/4 rounded-2xs" />
      <Skeleton className="h-3 w-full rounded-2xs" />
      <Skeleton className="h-3 w-5/6 rounded-2xs" />
      <div className="flex flex-row items-center gap-3 pt-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-24 rounded-2xs" />
          <Skeleton className="h-3 w-32 rounded-2xs" />
        </div>
      </div>
    </div>
  </div>
)

export interface F0CommunityPostsListProps {
  posts: CommunityPostListItem[]
  /**
   * The toggle's words. The count of what is still hidden is appended to
   * `viewMore` by the component — the same way a `list` slot's own button says
   * it — so these are the bare labels and not a sentence to format.
   */
  labels: {
    viewMore: string
    viewLess: string
  }
  /** How many rows show before the toggle. Defaults to {@link DEFAULT_VISIBLE_COUNT}. */
  visibleCount?: number
  /**
   * Waiting on the posts: the same list with placeholder rows in it, as many as
   * `expectedItemsCount`, so the card is already the height it will be.
   */
  loading?: boolean
  /** How many placeholder rows are drawn. Defaults to `visibleCount`. */
  expectedItemsCount?: number
}

/**
 * F0CommunityPostsList — the Communities widget's content as a LIST: the latest
 * posts as full-width rows, a cover beside each one, divided by a rule that
 * reaches the card's own border.
 *
 * THE OTHER SHAPE OF {@link F0CommunityPostsCarousel}, and the reason both exist:
 * a carousel shows two posts at a time and asks you to page for the third, which
 * is right when the posts are what the card is FOR. A list shows three at once and
 * puts the rest one press away, which is right when the card is one of several on
 * a Home and the reader is skimming. They take the same posts
 * ({@link CommunityPostListItem} extends the tile's own shape), so switching
 * between them is a change of component and not of data.
 *
 * A WIDE-COLUMN WIDGET, like the carousel. Below the width at which the frame
 * itself decides it is wide (480px, the `@lg` container query throughout this
 * file), a row turns into a column: the cover goes full width above the words
 * rather than beside them, and the body previews a line more of the post.
 *
 * AN EVENT POST IS DRAWN AS ITS EVENT ({@link CommunityPostEvent}) — the same
 * card the Communities feed draws — rather than as a title over its body.
 *
 * NO PAGING. The list holds the posts it is given and the toggle expands to all
 * of them, so the card's own query fetches one page and this shows it. That is
 * the trade the carousel makes the other way, and it is why that one takes
 * `pagination` and this one does not.
 */
export const F0CommunityPostsList = ({
  posts,
  labels,
  visibleCount = DEFAULT_VISIBLE_COUNT,
  loading = false,
  expectedItemsCount,
}: F0CommunityPostsListProps) => {
  const [expanded, setExpanded] = useState(false)
  // Past the WIDGET's own threshold the toggle takes the step every card-sized
  // control takes — `md` and `outline`, exactly like the frame's footer button —
  // so a wide card doesn't grow its rows around a button still drawn at rail size.
  const isWide = useWidgetIsWide()

  const placeholders = expectedItemsCount ?? visibleCount
  const rows = expanded ? posts : posts.slice(0, visibleCount)
  const hidden = posts.length - rows.length

  return (
    // `@container`, because what decides a row from a column is the CARD's width
    // and not the window's: the same widget sits in a 712px main column and in a
    // 396px rail, and a viewport media query cannot tell those apart.
    <div className="@container flex flex-col">
      <div
        className={cn(
          "flex flex-col divide-y divide-solid divide-f1-border-secondary",
          EDGE_BLEED
        )}
        {...(loading ? { "aria-busy": true } : {})}
      >
        {loading
          ? Array.from({ length: placeholders }, (_, index) => (
              <CommunityPostRowSkeleton key={`placeholder-${index}`} />
            ))
          : rows.map((post) => <CommunityPostRow key={post.id} post={post} />)}
      </div>
      {!loading && (hidden > 0 || expanded) ? (
        <div className={MORE_BUTTON_CLASS}>
          <F0Button
            variant={isWide ? "outline" : "neutral"}
            size={isWide ? "md" : "sm"}
            label={
              expanded ? labels.viewLess : `${labels.viewMore} (${hidden})`
            }
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      ) : null}
    </div>
  )
}
