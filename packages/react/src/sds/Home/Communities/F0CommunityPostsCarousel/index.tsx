import { useCallback, useRef } from "react"

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
  useCarouselPaging,
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
   * lines the tile has room for — see {@link PostBody}, and note that a post
   * with no cover therefore previews more of itself than one with a picture.
   * Whatever links it contains are NOT clickable here: the
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
 * ONE TILE. Bordered, the width of its carousel column, and always exactly
 * {@link POST_CARD_HEIGHT} tall — so a short post and a long one leave the row
 * neither ragged nor a different height from the page before it.
 *
 * THE TITLE IS THE TARGET, stretched over the whole tile: the anchor carries the
 * accessible name, and an `::after` covering the card makes the rest of it
 * clickable without wrapping the body — which would put the post's own links
 * inside a link. So a screen reader hears one "How we're changing planning for
 * H2, link" and a pointer can hit the card anywhere.
 */
/**
 * THE COVER IMAGE'S RATIO — 16:9, the box the tile reserves for a cover however
 * the picture itself was authored (`object-cover` crops the rest). The height is
 * never given: it comes out of the box's own width and this, so the same post is
 * the same shape in a 712px main column as in the catalog's preview — and it
 * follows the bleed (`-mx-3`) without being told, since the box widened and the
 * ratio did not.
 *
 * ⚠️ IT IS ALSO WHAT DECIDES HOW MUCH OF THE POST YOU READ. With the tile's
 * height declared ({@link POST_CARD_HEIGHT}) the cover and the body divide one
 * fixed budget between them, so a taller frame is directly a shorter preview:
 * this was 2:1 and the body showed four lines, and 16:9 — 18px more picture in a
 * 311px tile — is the three the design asks for.
 */
const POST_IMAGE_RATIO = "aspect-video"

/**
 * THE WHOLE TILE AS ONE TARGET: an overlay on the title's own anchor, covering
 * the card.
 *
 * `z-[1]` is the part that is easy to leave out and hard to spot. An overlay with
 * `z-index: auto` paints in the same layer as every other positioned descendant
 * of the card, so whichever comes LAST in the DOM wins — and two things after the
 * title are positioned: the author avatar (`relative`, from `F0AvatarPerson`) and
 * the rich-text body. Both sat on top of the overlay, which took the pointer
 * cursor away and, worse, the click with it. One layer up and the overlay is
 * above its siblings again.
 *
 * The card is `isolate`, so this z-index cannot climb out of the tile it belongs
 * to and interfere with the carousel's own controls.
 */
const STRETCH =
  "after:absolute after:inset-0 after:z-[1] after:rounded-xl after:content-['']"

/**
 * HOW TALL A TILE IS — 384px, and the one number this file declares about height.
 *
 * DECLARED, NOT GROWN. Every other part of the tile already knows its own size:
 * the cover keeps its ratio, the title is its own type, the author line is an
 * avatar row. The BODY is the only part that gives, so it takes whatever those
 * three leave and shows the lines that fit (see {@link PostBody}) — which is why
 * a post with no cover previews more of itself than one with a picture, in a tile
 * the same height as its neighbour.
 *
 * Before this the tile was `h-full` and the row took the tallest post in it, so
 * turning the page moved the widget. Now the widget is the height it will still
 * be four pages later.
 *
 * `h-96` is 24rem — F0's own scale, the step nearest the height the tiles had
 * when the one with a cover showed three lines. A step off the scale rather than
 * a number of our own, for the same reason every other measurement here is.
 */
const POST_CARD_HEIGHT = "h-96"

/**
 * HOW MANY WHOLE LINES FIT in `heightPx`, at `lineHeightPx` — the clamp, as
 * arithmetic.
 *
 * Never less than one: a box too short for a single line still shows that line,
 * cut by the wrapper's own `overflow`, because a tile that previews none of its
 * post reads as broken rather than as short.
 */
const linesThatFit = (heightPx: number, lineHeightPx: number) =>
  lineHeightPx > 0 ? Math.max(1, Math.floor(heightPx / lineHeightPx)) : 1

/**
 * The line height to clamp against, in px.
 *
 * The container's own is the answer when it has one. Rich text often does not —
 * the lines that actually wrap live in a `<p>` inside it — so fall through to the
 * first element child. Returns 0 when neither resolves, and `linesThatFit` then
 * holds at one line rather than dividing by nothing.
 */
const lineHeightOf = (element: HTMLElement) => {
  const own = Number.parseFloat(window.getComputedStyle(element).lineHeight)
  if (own > 0) return own
  const child = element.firstElementChild
  const inner = child
    ? Number.parseFloat(window.getComputedStyle(child).lineHeight)
    : Number.NaN
  return inner > 0 ? inner : 0
}

/**
 * THE POST'S OPENING, in however many lines the tile has room for.
 *
 * WHY IT IS MEASURED AND NOT A NUMBER. `PostDescription collapsed` clamps at
 * five, and five had nothing to do with the space a tile actually has: with the
 * tile's height now declared ({@link POST_CARD_HEIGHT}), a post with a cover has
 * room for about three and a post without one for twice that. A flat clamp gets
 * one of those two wrong — either it overflows the tile or it leaves a picture's
 * worth of white under the last line.
 *
 * The old objection to measuring — "the room IS the text's height, so the
 * measurement feeds itself" — was true while the tile grew to its content. With
 * the height fixed, the leftover no longer depends on the text and the loop is
 * gone.
 *
 * TWO ELEMENTS, AND THAT IS THE FIX FOR THE UGLY CUT. One element cannot both
 * TAKE a height and be clamped: `-webkit-line-clamp` puts its ellipsis at line N
 * while the box, stretched taller by the flex layout, goes on to reveal a sliver
 * of line N+1 underneath it. So the jobs are split — the WRAPPER takes the
 * leftover height and clips, and the TEXT inside it is clamped at its natural
 * height, where the clamp behaves as designed: the ellipsis ends the last line
 * and nothing follows.
 *
 * `collapsed` IS STILL PASSED, and it is the fallback rather than the answer: it
 * carries the `-webkit-box` display the clamp needs, and its five lines are what
 * shows if this never measures — no `ResizeObserver`, or markup rendered on a
 * server. The inline `-webkit-line-clamp` written below overrides the class the
 * moment there is a real box to read.
 */
const PostBody = ({ content }: { content: string }) => {
  const text = useRef<HTMLDivElement | null>(null)
  const observer = useRef<ResizeObserver | null>(null)

  /**
   * Measure the leftover and set the clamp — straight to the DOM, from the
   * observer. `ResizeObserver` callbacks run after layout and BEFORE paint, so
   * the right line count lands in the same frame as the resize that changed the
   * space. Through React state it would arrive a render later, and every tile
   * would show its old clamp for a frame each time the carousel resized.
   */
  const fit = useCallback((room: HTMLDivElement | null) => {
    observer.current?.disconnect()
    observer.current = null
    if (!room || typeof ResizeObserver === "undefined") return

    const read = () => {
      const body = text.current
      if (!body) return
      // The LINE HEIGHT is the text's own and the ROOM is the wrapper's — the two
      // things this needs sit on two different elements, which is the same split
      // that fixed the cut.
      const available = room.clientHeight
      let lines = linesThatFit(available, lineHeightOf(body))
      body.style.webkitLineClamp = String(lines)
      /**
       * …THEN CORRECT IT AGAINST THE REAL BOX. The arithmetic above knows about
       * line heights and nothing else, and a post's body is rich text: the
       * paragraph MARGINS between its blocks mean N lines can occupy more than N
       * line-heights, so the guess overflows and the wrapper's `overflow: hidden`
       * cuts it mid-line — exactly the cut the two-element split exists to end.
       * Step down until the clamped box really fits.
       *
       * Bounded and downward only, so it cannot cycle; the guard is a backstop
       * against a pathological layout rather than an expected exit.
       */
      for (let guard = 0; lines > 1 && guard < 40; guard += 1) {
        if (body.getBoundingClientRect().height <= available) break
        lines -= 1
        body.style.webkitLineClamp = String(lines)
      }
    }

    read()
    observer.current = new ResizeObserver(read)
    observer.current.observe(room)
  }, [])

  return (
    // `min-h-0` is what lets this be SHRUNK below its content: a flex child's
    // default `min-height: auto` would size the tile to the whole post instead,
    // which is the fixed height quietly not applying.
    <div ref={fit} className="min-h-0 flex-1 overflow-hidden">
      <PostDescription ref={text} content={content} collapsed />
    </div>
  )
}

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
        STRETCH,
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
        STRETCH,
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
        // NO `gap` ON THE TILE. Its two parts are the cover and the column of
        // words, and the air between them is the column's own `pt-3` — a tile
        // with no cover has its title flush against the padding instead, which a
        // gap here could not express.
        "relative isolate flex flex-col rounded-xl p-4",
        POST_CARD_HEIGHT,
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
            // `rounded-md` (12px) INSIDE the tile's own `rounded-xl` (16px):
            // the cover sits 4px in from the card's corners, so the two curves
            // are concentric rather than the inner one being the tighter of the
            // two. Same pairing F0Card uses for its own image band.
            "relative overflow-hidden rounded-md",
            // IT REACHES PAST THE TEXT. The tile's padding is `p-4`, and 16px of
            // it on three sides made the picture read as an illustration dropped
            // into the copy rather than as the post's own cover. Pulling 12px
            // back leaves a 4px margin — enough for the rounded corners to sit
            // inside the card's, not enough to be a gutter. NOTHING is pulled
            // back at the bottom: the 12px between the cover and the title is the
            // column's own `pt-3` below.
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
      {/* THE COLUMN OF WORDS — title, body, author line, 8px apart, and the part
          of the tile that absorbs whatever the cover left (`grow`, `min-h-0`).
          `pt-3` ONLY UNDER A COVER: 12px is the gap between a picture and the
          words it belongs to, and with no picture the title sits on the tile's
          own padding instead. */}
      <div
        className={cn(
          "flex min-h-0 grow flex-col gap-2",
          post.imageUrl && "pt-3"
        )}
      >
        {title}
        {post.description ? <PostBody content={post.description} /> : null}
        {/* PUSHED DOWN: the author line sits on the tile's floor whatever the
            body did, so a row of tiles has its avatars on one line. `mt-auto` is
            what does it for a post with NO body — with one, `PostBody` has
            already taken the slack and this changes nothing. */}
        {/* `pt-2` ON TOP OF THE COLUMN'S OWN `gap-2` — 16px between the last
            line of the post and the face under it, twice the 8px that separates
            the title from the body. The author line is a different KIND of
            thing from the post's own words and reads as one, which is why the
            air above it is not the column's default.
            It costs the body 8px rather than moving the avatar: `mt-auto` pins
            this box's BOTTOM to the tile's floor, so the padding grows upward
            into the body's flexible space. */}
        <div className="mt-auto flex flex-row items-center gap-3 pt-2">
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
 * A tile's placeholder: the same box, the same floor, nothing written on it.
 *
 * `withImage` reserves the cover's seat. Its 16:9 box is most of a tile's height,
 * so getting this wrong shows: reserve it for a feed with no pictures and the row
 * shrinks when the posts land; skip it for a feed that has them and the row
 * lurches taller instead. What decides it is {@link reservesImageSeat}.
 */
const CommunityPostCardSkeleton = ({ withImage }: { withImage: boolean }) => (
  // THE SAME HEIGHT AND THE SAME COLUMN as a real tile — that is the whole job of
  // a placeholder here. A skeleton that measured itself off its own grey bars
  // would be a different height from the post that replaces it, and the widget
  // would jump the moment the feed landed.
  <div
    className={cn(
      "flex flex-col rounded-xl border border-solid border-f1-border-secondary p-4",
      POST_CARD_HEIGHT
    )}
  >
    {withImage ? (
      // Same bleed as the real cover, so the two are the same shape.
      <Skeleton className={cn("-mx-3 -mt-3 rounded-md", POST_IMAGE_RATIO)} />
    ) : null}
    <div
      className={cn("flex min-h-0 grow flex-col gap-2", withImage && "pt-3")}
    >
      <Skeleton className="h-5 w-3/4 rounded-2xs" />
      {/* The body's own bars, in the space the real body will take: a column
          that grows, so they sit where the post's opening lines will be rather
          than stacking under the title and leaving the rest blank. */}
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
        <Skeleton className="h-3 w-full rounded-2xs" />
        <Skeleton className="h-3 w-5/6 rounded-2xs" />
        <Skeleton className="h-3 w-2/3 rounded-2xs" />
      </div>
      <div className="mt-auto flex flex-row items-center gap-3 pt-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-24 rounded-2xs" />
          <Skeleton className="h-3 w-32 rounded-2xs" />
        </div>
      </div>
    </div>
  </div>
)

/**
 * Whether a placeholder tile should keep room for a cover.
 *
 * ASK THE POSTS YOU ALREADY HAVE. A feed whose posts carry no pictures should not
 * flash an image-shaped hole every time it fetches — but with nothing loaded yet
 * there is nothing to ask, and reserving the space is the better guess: a card
 * that starts short and grows moves everything under it, while one that starts
 * tall and settles only gives room back.
 */
const reservesImageSeat = (posts: CommunityPostSummary[]) =>
  posts.length === 0 || posts.some((post) => post.imageUrl)

export interface F0CommunityPostsCarouselProps {
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
  /** How many placeholder tiles are drawn. Defaults to 2 — one screenful. */
  expectedItemsCount?: number
  /**
   * THE POSTS ARE A PAGE, not the whole feed. Pass this and the Next arrow stays
   * live past the last mounted tile — as does dragging past it: reaching the end
   * asks for the next page, and the new posts are appended to `posts` by whoever
   * owns them.
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

// `basis-full` under 480px of CARD (`@lg`), half above it — the same width at
// which the `Widget` frame itself decides it is wide.
const TILE_WIDTH = "basis-full @lg:basis-1/2"

const CommunityPostsSlides = ({
  posts,
  loading,
  expectedItemsCount,
}: {
  posts: CommunityPostSummary[]
  loading: boolean
  expectedItemsCount: number
}) => {
  const { isPageInFlight } = useCarouselPaging()

  const placeholders = loading || isPageInFlight ? expectedItemsCount : 0

  return (
    <CarouselContent aria-busy={loading || isPageInFlight || undefined}>
      {loading
        ? null
        : posts.map((post) => (
            <CarouselItem key={post.id} className={TILE_WIDTH}>
              <CommunityPostCard post={post} />
            </CarouselItem>
          ))}
      {Array.from({ length: placeholders }, (_, index) => (
        <CarouselItem key={`placeholder-${index}`} className={TILE_WIDTH}>
          <CommunityPostCardSkeleton withImage={reservesImageSeat(posts)} />
        </CarouselItem>
      ))}
    </CarouselContent>
  )
}

/**
 * F0CommunityPostsCarousel — the Communities widget's content: the latest posts as
 * TILES you page through, two at a time on a main-column card and one in
 * anything narrower.
 *
 * A WIDE-COLUMN WIDGET. Two tiles side by side is the whole reason this exists
 * rather than a `list` slot — a post needs a title, a few lines of its body and
 * its author to be worth previewing at all, and that does not fit a 396px rail.
 * Put it in the main column (`areas: ["main"]` in the catalog).
 *
 * THE HEIGHT IS DECLARED, NOT GROWN ({@link POST_CARD_HEIGHT}). Every tile is
 * 384px, so the widget is the same height on every page of the feed, and the
 * body is what gives: it takes whatever the cover, the title and the author line
 * leave and previews the lines that fit there.
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
 * for what this shows: a handful of tiles, each one a title and a few lines.
 *
 * It is `pagination` that keeps it a handful. A feed of two hundred posts is not
 * a longer carousel, it is a carousel that holds a PAGE and asks for the next
 * one when you reach the end — so what is mounted is bounded by how far the
 * reader actually walked rather than by how much the server has.
 */
export const F0CommunityPostsCarousel = ({
  posts,
  labels,
  loading = false,
  expectedItemsCount = 2,
  pagination,
}: F0CommunityPostsCarouselProps) => {
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
      paging={pagination}
    >
      <CommunityPostsSlides
        posts={posts}
        loading={loading}
        expectedItemsCount={expectedItemsCount}
      />
      <CarouselControls labels={labels} />
    </Carousel>
  )
}
