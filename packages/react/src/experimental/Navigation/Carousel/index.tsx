import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import React from "react"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"
import {
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCarousel,
  type CarouselPaging,
} from "@/ui/carousel"

import { DynamicCarousel } from "./DynamicCarousel"
import {
  type CarouselBreakpoints,
  carouselItemVariants,
  type ColumnNumber,
  type PeekVariant,
} from "./types"

interface CarouselProps {
  children: React.ReactNode
  showArrows?: boolean
  showDots?: boolean
  /**
   * WHERE THE ARROWS GO.
   *
   * - `"overlay"` (the default) — pinned to the carousel's sides and revealed on
   *   hover. Right for a full-bleed gallery, where the slides are the page.
   * - `"bottom"` — a row UNDER the slides, an arrow on each end with the dots
   *   between them, always visible and always the same width. Use it whenever
   *   the carousel sits inside something else — a widget, a card, a panel: side
   *   overlays hang over whatever is beside the container, and a hover-only
   *   control is one a touch user never finds.
   *
   * `"bottom"` puts the dots in that row, so `showDots` still decides whether
   * there are any.
   */
  arrowsPlacement?: "overlay" | "bottom"
  /** The arrows' accessible names. Defaults to "Previous" / "Next". */
  arrowLabels?: { previous?: string; next?: string }
  /**
   * The slides are ONE PAGE of a longer list. Reaching the end then fetches the
   * rest instead of going dead — see {@link CarouselPaging}, and append the new
   * records to `children` as they arrive.
   *
   * DRAGGING past the last slide asks for the next page whatever the arrows are
   * doing: it is the reader's own gesture, and nothing about it is hidden. The
   * ARROW that fetches, though, is `arrowsPlacement: "bottom"`'s only — the
   * overlay arrows are a hover affordance over the slides, and a fetch you can't
   * see you triggered is worse than no fetch at all.
   */
  paging?: CarouselPaging
  autoplay?: boolean
  delay?: number
  columns?: CarouselBreakpoints
  showPeek?: boolean
  doubleColumns?: {
    index: number
    sizes: (keyof CarouselBreakpoints)[]
  }[]
}

function getVariantValue(
  value: ColumnNumber | undefined,
  showPeek: boolean,
  isDoubleColumn?: boolean
): ColumnNumber | PeekVariant {
  if (isDoubleColumn) {
    const doubleValue = ((value || 1) / 2) as ColumnNumber
    return showPeek ? (`peek${doubleValue}` as PeekVariant) : doubleValue
  }

  return showPeek ? (`peek${value || 1}` as PeekVariant) : value || 1
}

const _Carousel = ({
  children,
  columns,
  showArrows = true,
  showDots = true,
  arrowsPlacement = "overlay",
  arrowLabels,
  paging,
  autoplay = false,
  delay = 3000,
  showPeek = false,
  doubleColumns,
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)
  // The arrows are in the flow, under the slides — which changes the column's
  // spacing as well as where they are drawn.
  const inRow = showArrows && arrowsPlacement === "bottom"

  const plugin = React.useRef(
    autoplay ? Autoplay({ delay: delay, stopOnInteraction: true }) : undefined
  )

  const handleMouseEnter = () => {
    if (plugin.current) {
      plugin.current.stop()
    }
  }

  const handleMouseLeave = () => {
    if (plugin.current) {
      plugin.current.play()
    }
  }

  if (!columns) {
    return <DynamicCarousel>{children}</DynamicCarousel>
  }

  return (
    <ShadCarousel
      className="flex w-full flex-col gap-3 @container"
      opts={{
        align: !showPeek ? "start" : "center",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: false,
      }}
      plugins={[plugin.current, WheelGesturesPlugin()].filter(Boolean)}
      paging={paging}
      onMouseEnter={autoplay ? handleMouseEnter : undefined}
      onMouseLeave={autoplay ? handleMouseLeave : undefined}
    >
      {/* The paging row brings its OWN space above it (`pt-4`), so the column's
          gap is the overlay layout's alone — two of them would be 36px of air
          under the slides. */}
      <div className={cn("flex flex-col", !inRow && "gap-5")}>
        <div className="relative">
          <CarouselContent>
            {React.Children.map(childrenArray, (child, index) => {
              const doubleColumn = doubleColumns?.find(
                (column) => column.index === index
              )

              return (
                <CarouselItem
                  key={index}
                  className={carouselItemVariants({
                    default: getVariantValue(columns.default, showPeek),
                    xs: getVariantValue(
                      columns.xs,
                      showPeek,
                      doubleColumn?.sizes?.includes("xs")
                    ),
                    sm: getVariantValue(
                      columns.sm,
                      showPeek,
                      doubleColumn?.sizes?.includes("sm")
                    ),
                    md: getVariantValue(
                      columns.md,
                      showPeek,
                      doubleColumn?.sizes?.includes("md")
                    ),
                    lg: getVariantValue(
                      columns.lg,
                      showPeek,
                      doubleColumn?.sizes?.includes("lg")
                    ),
                    peek: showPeek,
                  })}
                >
                  {child}
                </CarouselItem>
              )
            })}
          </CarouselContent>
          {showArrows && !inRow && (
            <>
              <CarouselPrevious label={arrowLabels?.previous ?? "Previous"} />
              <CarouselNext label={arrowLabels?.next ?? "Next"} />
            </>
          )}
        </div>
        {inRow ? (
          <CarouselControls labels={arrowLabels} showDots={showDots} />
        ) : (
          showDots && <CarouselDots />
        )}
      </div>
    </ShadCarousel>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Carousel = withDataTestId(
  experimentalComponent("Carousel", _Carousel)
)
