import { CarouselPaging } from '../../../../ui/carousel';
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
    id: string;
    title: string;
    /**
     * The post's body as the editor stored it (an HTML string), clamped to the
     * lines the tile has room for — see {@link PostBody}, and note that a post
     * with no cover therefore previews more of itself than one with a picture.
     * Whatever links it contains are NOT clickable here: the
     * whole tile is one target (see {@link CommunityPostCard}), and a link inside
     * a link is neither valid nor operable.
     */
    description?: string;
    /**
     * The post's cover image, above the title.
     *
     * ALWAYS DRAWN AT {@link POST_IMAGE_RATIO} — the tile gives it the full width
     * of its column and takes its height from that ratio, cropping (`object-cover`)
     * whatever doesn't fit. A carousel is a ROW: a tile that sized itself to its
     * own image would put every title on a different line and move them all when
     * the page turned. So the frame is fixed and the picture fits into it.
     */
    imageUrl?: string;
    author?: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
    };
    createdAt: Date;
    /**
     * The counters under the author, ALREADY IN WORDS — "742 visits", "23
     * comments". Strings rather than numbers because the plural, the thousands
     * separator and the noun are all the app's locale, not this component's; the
     * same reason `CommunityPost` takes them this way.
     */
    counters?: {
        visits?: string;
        comments?: string;
    };
    /** Where the post lives. A `url` makes the tile a real anchor. */
    href?: string;
    onClick?: () => void;
}
export interface F0CommunityPostsCarouselProps {
    posts: CommunityPostSummary[];
    /**
     * The controls' words — the two arrows' accessible names. There is no visible
     * text in this component's chrome, so these are what a screen reader reads and
     * what the tooltips say.
     */
    labels: {
        previous: string;
        next: string;
    };
    /**
     * Waiting on the FIRST posts: the same carousel with placeholder tiles in it,
     * so the widget is the height it will be once they land. How MANY it draws is
     * `expectedItemsCount`.
     *
     * This is the initial load only. A LATER page is `pagination`, and it does not
     * blank the tiles you are already reading.
     */
    loading?: boolean;
    /** How many placeholder tiles are drawn. Defaults to 2 — one screenful. */
    expectedItemsCount?: number;
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
    pagination?: CarouselPaging;
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
export declare const F0CommunityPostsCarousel: ({ posts, labels, loading, expectedItemsCount, pagination, }: F0CommunityPostsCarouselProps) => import("react").JSX.Element;
