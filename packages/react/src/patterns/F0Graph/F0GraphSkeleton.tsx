import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

// Node card geometry — kept in sync with the real graph node so the placeholder
// lines up with the tree that replaces it.
const CARD_WIDTH = 256
const CARD_GAP = 40
const CORNER = 8

export interface F0GraphSkeletonProps {
  /** Number of child placeholders rendered below the root. */
  childrenCount?: number
  /** Render the metadata pill under each card (mirrors `reserveTagRow`). */
  showTags?: boolean
  className?: string
}

/** A single node-card placeholder: avatar + name/role lines, like a real node. */
const SkeletonNodeCard = () => (
  <div className="flex h-[52px] w-64 items-center gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex flex-1 flex-col gap-1.5">
      <Skeleton className="h-3 w-28 rounded" />
      <Skeleton className="h-2.5 w-20 rounded" />
    </div>
  </div>
)

const SkeletonTagPill = () => <Skeleton className="h-5 w-20 rounded-full" />

const SkeletonExpander = () => <Skeleton className="h-7 w-10 rounded-lg" />

// Connecting bus (riser + horizontal bus + per-child droppers) sized to the
// children row: width = n·CARD_WIDTH + (n−1)·CARD_GAP. The first/last children
// connect through the rounded bus endpoints; middle children get a dropper.
const SkeletonConnectors = ({ childrenCount }: { childrenCount: number }) => {
  const width = childrenCount * CARD_WIDTH + (childrenCount - 1) * CARD_GAP
  const center = width / 2

  // Single child: a straight riser from parent to child.
  if (childrenCount === 1) {
    return (
      <svg
        width={width}
        height={40}
        viewBox={`0 0 ${width} 40`}
        fill="none"
        aria-hidden
      >
        <path
          d={`M${center} 0 V40`}
          className="stroke-f1-border-secondary"
          strokeWidth={1.5}
        />
      </svg>
    )
  }

  const childCenter = (i: number) =>
    i * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2
  const first = childCenter(0)
  const last = childCenter(childrenCount - 1)

  const bus =
    `M${first} 40 V28 Q${first} 20 ${first + CORNER} 20 ` +
    `H${last - CORNER} Q${last} 20 ${last} 28 V40`
  const middleDroppers = Array.from({ length: childrenCount - 2 }, (_, i) =>
    childCenter(i + 1)
  )

  return (
    <svg
      width={width}
      height={40}
      viewBox={`0 0 ${width} 40`}
      fill="none"
      aria-hidden
    >
      <path
        d={`M${center} 0 V20`}
        className="stroke-f1-border-secondary"
        strokeWidth={1.5}
      />
      <path d={bus} className="stroke-f1-border-secondary" strokeWidth={1.5} />
      {middleDroppers.map((x) => (
        <path
          key={x}
          d={`M${x} 20 V40`}
          className="stroke-f1-border-secondary"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  )
}

/**
 * Loading placeholder that mirrors the org tree about to appear: a root node
 * with its metadata pill, the connecting bus, and a row of child nodes (each
 * with a pill and an expander), so the skeleton matches the real shape.
 */
export const F0GraphSkeleton = ({
  childrenCount = 3,
  showTags = true,
  className,
}: F0GraphSkeletonProps) => (
  <div
    aria-busy="true"
    aria-live="polite"
    className={cn(
      "flex h-full min-h-0 flex-1 flex-col items-center justify-center pb-4",
      className
    )}
  >
    <div className="flex flex-col items-center gap-2">
      <SkeletonNodeCard />
      {showTags && <SkeletonTagPill />}
    </div>

    {childrenCount > 0 && (
      <>
        <SkeletonConnectors childrenCount={childrenCount} />

        <div className="flex items-start gap-10">
          {Array.from({ length: childrenCount }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <SkeletonNodeCard />
              {showTags && <SkeletonTagPill />}
              <SkeletonExpander />
            </div>
          ))}
        </div>
      </>
    )}
  </div>
)
