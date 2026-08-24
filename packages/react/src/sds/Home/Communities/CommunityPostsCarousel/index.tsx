import { format } from "date-fns"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { isExternalHref, Link } from "@/lib/linkHandler"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
  type CarouselPaging,
} from "@/ui/carousel"
import { Skeleton } from "@/ui/skeleton"

import { PostDescription } from "../Post/PostDescription"

/**
 * ONE POST as the Home card shows it — the shape a feed row keeps when it is
 * given a whole tile instead of a line.
 *
 * Deliberately NOT `CommunityPostProps`: that is the post as the Communities
 * page renders it, with its media, its reactions, its comment button and its own
 * overflow menu. Here the post is a PREVIEW you click through — anything you
 * can do to it, you do on the other side.
 */
export interface CommunityPostSummary {
  id: string
  title: string
  /**
   * The post's body as the editor stored it (an HTML string), clamped to the
   * first few lines. Whatever links it contains are NOT clickable here: the
   * whole tile is one target (see {@link CommunityPostCard}), and a link inside
   * a link is neither valid nor operable.
   */
  description?: string
  /**
   * The post's cover image, above the title.
   *
   * ALWAYS DRAWN AT {@link POST_IMAGE_RATIO} — the tile gives it the full width
   * of its column and takes its height from that ratio, cropping (`object-cover`)
   * whatever doesn't fit. A carousel is a ROW: a tile that sized itself to its
   * own image would put every title on a different line and move them all when
   * the page turned. So the frame is fixed and the picture fits into it.
   */
  imageUrl?: string
  author?: {
    firstName: string
    lastName: string
    avatarUrl?: string
  }
  createdAt: Date
  /**
   * The counters under the author, ALREADY IN WORDS — "742 visits", "23
   * comments". Strings rather than numbers because the plural, the thousands
   * separator and the noun are all the app's locale, not this component's; the
   * same reason `CommunityPost` takes them this way.
   */
  counters?: {
    visits?: string
    comments?: string
  }
  /** Where the post lives. A `url` makes the tile a real anchor. */
  href?: string
  onClick?: () => void
}

/**
 * ONE TILE. Bordered, the width of its carousel column, and as tall as the
 * tallest one beside it (`h-full`) so a short post and a long one don't leave the
 * row ragged.
 *
 * THE TITLE IS THE TARGET, stretched over the whole tile: the anchor carries the
 * accessible name, and an `::after` covering the card makes the rest of it
 * clickable without wrapping the body — which would put the post's own links
 * inside a link. So a screen reader hears one "How we're changing planning for
 * H2, link" and a pointer can hit the card anywhere.
 */
/**
 * THE COVER IMAGE'S RATIO — 1200×600, the size these are authored at, expressed
 * as the 2:1 box the tile reserves for them. The height is never given: it comes
 * out of the box's own width and this, so the same post is the same shape in a
 * 712px main column as in the catalog's preview — and it follows the bleed
 * (`-mx-3`) without being told, since the box widened and the ratio did not.
 */
const POST_IMAGE_RATIO = "aspect-[2/1]"

const CommunityPostCard = ({ post }: { post: CommunityPostSummary }) => {
  const locale = useDateFnsLocale()
  // "Jul 16" — the day, and only the day. A tile carries three or four of these
  // facts on one line, and a full timestamp would be the longest of them.
  const date = format(post.createdAt, "MMM d", { locale })
  const meta = [date, post.counters?.visits, post.counters?.comments]
    .filter(Boolean)
    .join(" · ")

  const title = post.href ? (
    <Link
      href={post.href}
      onClick={post.onClick}
      className={cn(
        "no-underline visited:text-f1-foreground",
        // THE STRETCH: the anchor's own box is the title, its hit area is the
        // whole card.
        "after:absolute after:inset-0 after:rounded-xl after:content-['']",
        focusRing()
      )}
      {...(isExternalHref(post.href)
        ? { target: "_blank" as const, rel: "noreferrer" }
        : {})}
    >
      <h3 className="m-0 text-lg font-semibold text-f1-foreground">
        {post.title}
      </h3>
    </Link>
  ) : (
    <button
      type="button"
      onClick={post.onClick}
      className={cn(
        "cursor-pointer border-none bg-transparent p-0 text-left",
        "after:absolute after:inset-0 after:rounded-xl after:content-['']",
        focusRing()
      )}
    >
      <h3 className="m-0 text-lg font-semibold text-f1-foreground">
        {post.title}
      </h3>
    </button>
  )

  return (
    // `relative` for the stretched anchor to have something to fill, and
    // `isolate` so its overlay can't escape the tile it belongs to.
    <article
      className={cn(
        "relative isolate flex h-full flex-col gap-3 rounded-xl p-4",
        "border border-solid border-f1-border-secondary bg-f1-background",
        "transition-colors hover:border-f1-border-hover"
      )}
    >
      {post.imageUrl ? (
        // The skeleton BEHIND it, not instead of it: the box is already the
        // right shape, so a slow image is a grey panel of exactly the height the
        // picture will take rather than a card that grows when it arrives.
        <div
          className={cn(
            // NO `w-full`. It resolves against the tile's PADDED content box, so
            // the negative margins below only shifted the picture left and left
            // 24px of card showing on the right. Stretched instead — the tile is
            // a flex column, so a block child fills it and the negative margins
            // extend it past both edges, which is the whole point of them.
            "relative overflow-hidden rounded-lg",
            // IT REACHES PAST THE TEXT. The tile's padding is `p-4`, and 16px of
            // it on three sides made the picture read as an illustration dropped
            // into the copy rather than as the post's own cover. Pulling 12px
            // back leaves a 4px margin — enough for the rounded corners to sit
            // inside the card's, not enough to be a gutter. The BOTTOM keeps its
            // full 16px: that gap is the one between the cover and the title, and
            // it is doing real work.
            "-mx-3 -mt-3",
            POST_IMAGE_RATIO
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
      {title}
      {post.description ? (
        // `collapsed` is the five-line clamp — the tile shows the opening of the
        // post, never the whole of it.
        <PostDescription content={post.description} collapsed />
      ) : null}
      {/* PUSHED DOWN: the author line sits on the tile's floor whatever the body
          did, so a row of tiles has its avatars on one line. */}
      <div className="mt-auto flex flex-row items-center gap-2 pt-2">
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
    </article>
  )
}

/** A tile's placeholder: the same box, the same floor, nothing written on it. */
const CommunityPostCardSkeleton = () => (
  <div className="flex h-full flex-col gap-3 rounded-xl border border-solid border-f1-border-secondary p-4">
    {/* THE COVER'S SEAT, kept even though we don't yet know whether this post has
        one. Its 2:1 box is most of the tile's height, so a placeholder without it
        is a card that lurches taller the moment the posts land — and a carousel
        does that to every tile in the row at once. Reserving it costs a picture
        that never arrives; not reserving it costs the whole row jumping. Same
        bleed as the real one, so the two are the same shape. */}
    <Skeleton className={cn("-mx-3 -mt-3 rounded-lg", POST_IMAGE_RATIO)} />
    <Skeleton className="h-5 w-3/4 rounded-2xs" />
    <Skeleton className="h-3 w-full rounded-2xs" />
    <Skeleton className="h-3 w-5/6 rounded-2xs" />
    <Skeleton className="h-3 w-2/3 rounded-2xs" />
    <div className="mt-auto flex flex-row items-center gap-2 pt-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-24 rounded-2xs" />
        <Skeleton className="h-3 w-32 rounded-2xs" />
      </div>
    </div>
  </div>
)

export interface CommunityPostsCarouselProps {
  posts: CommunityPostSummary[]
  /**
   * The controls' words — the two arrows' accessible names. There is no visible
   * text in this component's chrome, so these are what a screen reader reads and
   * what the tooltips say.
   */
  labels: {
    previous: string
    next: string
  }
  /**
   * Waiting on the FIRST posts: the same carousel with placeholder tiles in it,
   * so the widget is the height it will be once they land. How MANY it draws is
   * `expectedItemsCount`.
   *
   * This is the initial load only. A LATER page is `pagination`, and it does not
   * blank the tiles you are already reading.
   */
  loading?: boolean
  /** How many placeholder tiles `loading` draws. Defaults to 2 — one screenful. */
  expectedItemsCount?: number
  /**
   * THE POSTS ARE A PAGE, not the whole feed. Pass this and the Next arrow stays
   * live past the last mounted tile: reaching the end asks for the next page, and
   * the new posts are appended to `posts` by whoever owns them.
   *
   * It is `useData`'s infinite-scroll return, field for field — `hasMore` off
   * `paginationInfo`, `isLoadingMore`, `loadMore` — because that is where these
   * posts come from in an app. The component itself stays ignorant of data
   * sources: it takes posts and a way to ask for more.
   *
   * Omit it for a feed you already hold in full, which is what the widget's
   * "latest five" is.
   */
  pagination?: CarouselPaging
}

/**
 * CommunityPostsCarousel — the Communities widget's content: the latest posts as
 * TILES you page through, two at a time on a main-column card and one in
 * anything narrower.
 *
 * A WIDE-COLUMN WIDGET. Two tiles side by side is the whole reason this exists
 * rather than a `list` slot — a post needs a title, four lines of its body and
 * its author to be worth previewing at all, and that does not fit a 396px rail.
 * Put it in the main column (`areas: ["main"]` in the catalog).
 *
 * THE PAGING IS UNDER THE TILES, not floating over them — `CarouselControls`,
 * the shared row: an arrow on each end, the dots between, its own `pt-4` above
 * it. Nothing about that row is this widget's, which is why it lives in
 * `ui/carousel` beside the overlay arrows rather than here.
 *
 * EVERY POST IT HOLDS IS IN THE DOM. Embla lays its slides out in a flex row and
 * transforms the track, so the slides off-screen are mounted and measured like
 * the ones you can see — there is no windowing here, and adding it would mean
 * the carousel could no longer measure its own snaps. That is the right trade
 * for what this shows: a handful of tiles, each one a title and four lines.
 *
 * It is `pagination` that keeps it a handful. A feed of two hundred posts is not
 * a longer carousel, it is a carousel that holds a PAGE and asks for the next
 * one when you reach the end — so what is mounted is bounded by how far the
 * reader actually walked rather than by how much the server has.
 */
export const CommunityPostsCarousel = ({
  posts,
  labels,
  loading = false,
  expectedItemsCount = 2,
  pagination,
}: CommunityPostsCarouselProps) => {
  const items = loading
    ? Array.from({ length: expectedItemsCount }, (_, index) => (
        <CommunityPostCardSkeleton key={index} />
      ))
    : [
        ...posts.map((post) => <CommunityPostCard key={post.id} post={post} />),
        // THE PAGE THAT IS COMING, as a tile at the end. It is a slide like any
        // other, which is the point: it gives the carousel somewhere to scroll
        // to while the fetch is in flight, so pressing Next moves rather than
        // doing nothing until the response lands.
        ...(pagination?.isLoading
          ? [<CommunityPostCardSkeleton key="loading-more" />]
          : []),
      ]

  return (
    <Carousel
      opts={{
        // `start`, so the first tile is flush with the card's content box —
        // centering would inset it from the title above it.
        align: "start",
        containScroll: "trimSnaps",
        // A PAGE AT A TIME, not a tile at a time. Scrolling by one would leave
        // the post you just read sitting in the row you turned to, so half of
        // every "next" is something you have already seen. `"auto"` is however
        // many fit — two in the main column, one in anything narrower — so the
        // step follows the card's width without being told it.
        //
        // It is the DRAG's step too: embla snaps to the same list, so throwing
        // the row lands on a page boundary rather than half a tile off.
        slidesToScroll: "auto",
      }}
      // `@container`, because what decides one tile or two is the CARD's width,
      // not the window's: the same widget sits in a 712px main column and in a
      // 396px rail, and a viewport media query cannot tell those apart.
      className="@container"
      {...(loading ? { "aria-busy": true } : {})}
    >
      <CarouselContent>
        {items.map((item, index) => (
          // `basis-full` under 480px of CARD (`@lg`), half above it — the same
          // width at which the `Widget` frame itself decides it is wide.
          <CarouselItem key={index} className="basis-full @lg:basis-1/2">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselControls labels={labels} paging={pagination} />
    </Carousel>
  )
}
