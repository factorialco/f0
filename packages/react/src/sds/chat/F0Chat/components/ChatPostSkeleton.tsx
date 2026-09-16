import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

/** How many body lines a row promises, and whether it promises a cover. */
type PostShape = {
  title: string
  lines: string[]
  media?: boolean
}

// Uneven on purpose. A column of identical placeholders reads as a table being
// drawn; posts are written by different people at different lengths, and the
// skeleton is claiming a feed, not a grid.
const SHAPES: PostShape[] = [
  { title: "w-1/2", lines: ["w-full", "w-11/12", "w-2/3"] },
  { title: "w-2/3", lines: ["w-full", "w-4/5"], media: true },
  { title: "w-2/5", lines: ["w-full", "w-3/4"] },
  { title: "w-3/5", lines: ["w-full", "w-10/12", "w-1/2"] },
]

/**
 * One post placeholder, laid out like `CommunityPost` renders in the
 * transcript: `p-4`, an avatar centred on the two-line header beside it, then
 * the title, the body, and the reactions row.
 *
 * Deliberately NOT `CommunityPost.Skeleton`, which still draws the older shape
 * — a left avatar gutter with the whole post indented past it — while the card
 * itself moved the avatar into its header. Reusing it would swap one layout for
 * another the moment the posts arrived.
 */
const PostSkeleton = ({ title, lines, media }: PostShape): ReactNode => (
  <div className="@container flex w-full flex-col gap-3 p-4">
    <div className="flex flex-row items-center gap-3">
      <Skeleton className="size-8 shrink-0 rounded-full" />
      {/* Two lines, no gap between them: the author line and the date are one
          block, exactly as the card builds them. */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <Skeleton className="h-3 w-40 max-w-[70%] rounded-2xs" />
        <Skeleton className="h-3 w-20 rounded-2xs" />
      </div>
    </div>
    <Skeleton className={cn("h-4 rounded-2xs", title)} />
    <div className="flex flex-col gap-2">
      {lines.map((line) => (
        <Skeleton key={line} className={cn("h-3 rounded-2xs", line)} />
      ))}
    </div>
    {media ? (
      <Skeleton className="aspect-video w-full rounded-xl @[744px]:max-w-content" />
    ) : null}
    {/* Reactions and the comment button: pills, so the placeholder has the
        card's silhouette all the way down instead of ending on a paragraph. */}
    <div className="flex flex-row items-center gap-2">
      <Skeleton className="h-6 w-14 rounded-full" />
      <Skeleton className="h-6 w-24 rounded-full" />
    </div>
  </div>
)

/**
 * First-load placeholder for a COMMUNITY channel.
 *
 * A community transcript is a column of full-width posts divided by hairlines,
 * not a conversation, so the bubble skeleton promised the wrong thing entirely:
 * alternating sides and an avatar gutter, replaced a moment later by something
 * with neither. This mirrors `ChatPostRow` down to the full-bleed divider, so
 * what arrives is what was already there.
 */
export const ChatPostSkeleton = (): ReactNode => (
  <div
    aria-hidden
    data-testid="chat-post-skeleton"
    className="mx-auto flex w-full max-w-[calc(theme(maxWidth.content)+2rem)] flex-col px-4"
  >
    {SHAPES.map((shape, index) => (
      <div
        key={shape.title}
        className={cn(
          // `-mx-4` cancels the gutter so the hairline reaches both edges of
          // the panel, which is what the real rows do.
          "-mx-4 border-0 border-solid border-f1-border-secondary",
          index < SHAPES.length - 1 && "border-b"
        )}
      >
        <PostSkeleton {...shape} />
      </div>
    ))}
  </div>
)
