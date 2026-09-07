"use client"

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import * as React from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ButtonInternalProps } from "@/components/F0Button/internal-types"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/providers/i18n"

/**
 * THE SHADOW BLEED, as classes.
 *
 * The viewport clips its slides, and a widget card's shadow is drawn OUTSIDE its
 * box — so the box is grown by `SPACE_FOR_WIDGET_SHADOW` (28px) on every side and
 * pulled back by the same amount, giving the shadow somewhere to land inside the
 * clip. The mask then fades that borrowed margin out, so a slide's shadow
 * disappears at the edge instead of being cut off square.
 *
 * ⚠️ THE NUMBERS ARE WRITTEN OUT, and that is forced rather than sloppy:
 * Tailwind's scanner never sees a class built from a variable, so `m-[${N}px]`
 * emits no CSS at all — the quiet kind of broken, since the markup still looks
 * right. `SPACE_FOR_WIDGET_SHADOW` remains the single source of truth and
 * `carousel.test.tsx` fails if these drift from it: 28px is `-m-7` / `p-7`, 56px
 * is the pair, 14px is the half.
 *
 * The borrowed band paints nothing but still hit-tests, so it takes no pointer
 * events; the track turns them back on for the slides in {@link CarouselContent}.
 * Embla's drag survives it — its listeners are on the viewport, but a drag
 * starts on a slide and the events reach it by bubbling.
 *
 * Exported for that test alone — nothing else should need it.
 */
export const CAROUSEL_SHADOW_BLEED = cn(
  "-m-7 h-[calc(100%_+_56px)] w-[calc(100%_+_56px)] p-7",
  "pointer-events-none",
  "[mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]",
  "[-webkit-mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]"
)

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  paging?: CarouselPaging
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  pagingState: CarouselPagingState
} & Omit<CarouselProps, "paging">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

/**
 * A carousel whose slides are ONE PAGE of a longer list.
 *
 * A carousel can only reason about the slides it holds, so on its own it says
 * "there is no next one" the moment it reaches the last one it was given — which
 * is wrong when the list continues on the server. This is the missing half of
 * that answer, and it is deliberately the shape `useData` already returns for an
 * infinite-scroll source (`paginationInfo.hasMore`, `isLoadingMore`, `loadMore`),
 * so wiring one to the other is passing three fields across.
 */
export type CarouselPaging = {
  /** Whether the source has records past the slides currently mounted. */
  hasMore: boolean
  /** A fetch for the next page is in flight. */
  isLoading?: boolean
  /** Fetch the next page and APPEND it to the slides. */
  onLoadMore: () => void
  /**
   * How many records the source holds ALTOGETHER, when it says — `useData`'s
   * `totalItems`. For anything that reports a position out loud ("3 of 11"):
   * without it the only number available is how many have been loaded, which
   * moves every time another page arrives.
   *
   * The carousel itself ignores it. Its dots describe the slides that exist, and
   * a dot for a page nobody has fetched would be a control that cannot be
   * pressed.
   */
  total?: number
}

export type CarouselPagingState = {
  canGoNext: boolean
  goNext: () => void
  isAwaitingPage: boolean
  isPageInFlight: boolean
}

/**
 * How many slides are IN THE DOM right now — React's view, not the carousel's
 * cached one, which lags a re-measure behind.
 */
const countSlides = (api: CarouselApi) =>
  api?.containerNode()?.childElementCount ?? 0

const DRAG_PAST_END_PERCENT = 5

/**
 * Makes the Next arrow tell the truth when the slides are a page.
 *
 * THREE WAYS THE NEXT PAGE IS ASKED FOR, and they cover each other:
 *
 * - PRESSING NEXT at the end of what is mounted. `goNext` scrolls if there is
 *   anywhere to scroll and fetches if there isn't, so the arrow always does
 *   something as long as the feed continues.
 * - DRAGGING past the end, which rubber-bands because the next slide does not
 *   exist yet. A pull past `DRAG_PAST_END_PERCENT` of the view fetches too.
 * - ARRIVING at the last snap, which fetches the page after it. So walking
 *   through a carousel stays smooth: the page you are about to need is usually
 *   already in flight by the time you ask for it.
 *
 * ARRIVAL, not render. The prefetch is bound to embla's `select` — a real
 * navigation — rather than run whenever the paging props change. That is what
 * makes it loop-proof without a bookkeeping ref: a source that answers
 * `hasMore: true` with no new records leaves you on the same snap, no `select`
 * fires, and nothing asks again. It also means a carousel nobody touched fetches
 * exactly the page it was given, which is the point of paging.
 */
const usePagingState = (
  api: CarouselApi,
  canScrollNext: boolean,
  scrollNext: () => void,
  paging?: CarouselPaging
): CarouselPagingState => {
  const hasMore = paging?.hasMore ?? false
  const isLoading = paging?.isLoading ?? false
  const onLoadMore = paging?.onLoadMore

  /**
   * THE MOVE THE READER ASKED FOR, still owed — and the only reason to show that
   * anything is loading at all.
   *
   * Pressing Next at the end of a page cannot scroll yet, because the slides do
   * not exist. So the press is remembered and finished the moment there is
   * somewhere to go: without it the carousel fetches, fills, and then just sits
   * there, having moved nothing in answer to an arrow.
   *
   * It is STATE rather than a ref because it is also the answer to "is anybody
   * waiting on this fetch". A page pulled in ahead of the reader — the prefetch
   * on arriving at the last page — is work nobody asked about, and announcing it
   * with a spinner invites them to wait for something that was never in their
   * way. Only a fetch somebody is standing on says so.
   */
  const [owedNext, setOwedNext] = React.useState(false)
  const [awaitedPage, setAwaitedPage] = React.useState(false)
  // Whether the load in flight is the one that just finished, so an owed move
  // that turned out to have nowhere to go stops waiting instead of hanging.
  const wasLoading = React.useRef(isLoading)
  /** How many slides there were when the move was asked for. */
  const slidesAtAsk = React.useRef(0)

  // The listeners are bound ONCE per carousel and read the paging state through
  // a ref: subscribing on every change of `hasMore`/`isLoading` would tear the
  // handlers down and rebuild them in the middle of the very fetch they started.
  const latest = React.useRef({ hasMore, isLoading, onLoadMore, owedNext })
  latest.current = { hasMore, isLoading, onLoadMore, owedNext }

  const askForNextPage = React.useCallback(() => {
    const { hasMore, isLoading, onLoadMore, owedNext } = latest.current
    if (!hasMore || !onLoadMore) return
    if (owedNext) return
    slidesAtAsk.current = countSlides(api)
    setOwedNext(true)
    setAwaitedPage(true)
    // Recorded whether or not we are the ones who ask: a press landing while a
    // page is already in flight must still move the row when it lands, and
    // asking twice for the same records is not the way to make that happen.
    if (!isLoading) onLoadMore()
  }, [api])

  React.useEffect(() => {
    if (!api) return

    const prefetchIfAtEnd = () => {
      const { hasMore, isLoading, onLoadMore } = latest.current
      if (!hasMore || isLoading || !onLoadMore) return
      const snaps = api.scrollSnapList().length
      if (api.selectedScrollSnap() < snaps - 1) return
      setAwaitedPage(false)
      onLoadMore()
    }

    let pulledPastEnd = false

    const watchPull = () => {
      const { dragHandler, limit, location, percentOfView } =
        api.internalEngine()
      if (!dragHandler.pointerDown()) return
      const pull = limit.min - location.get()
      if (pull < percentOfView.measure(DRAG_PAST_END_PERCENT)) return
      pulledPastEnd = true
    }

    const askIfPulledPastEnd = () => {
      if (!pulledPastEnd) return
      pulledPastEnd = false
      askForNextPage()
    }

    const forgetPull = () => {
      pulledPastEnd = false
    }

    api.on("select", prefetchIfAtEnd)
    api.on("scroll", watchPull)
    api.on("pointerDown", forgetPull)
    api.on("pointerUp", askIfPulledPastEnd)

    return () => {
      api.off("select", prefetchIfAtEnd)
      api.off("scroll", watchPull)
      api.off("pointerDown", forgetPull)
      api.off("pointerUp", askIfPulledPastEnd)
    }
  }, [api, askForNextPage])

  React.useEffect(() => {
    const settled = wasLoading.current && !isLoading
    wasLoading.current = isLoading
    if (settled) setAwaitedPage(false)
    if (!owedNext) return
    if (canScrollNext) {
      setOwedNext(false)
      scrollNext()
      return
    }
    /**
     * THE FETCH IS DONE, AND THE CAROUSEL HAS NOT CAUGHT UP.
     *
     * `isLoading` going false and the new slides arriving happen in one React
     * commit, but `canScrollNext` does not: it comes from the carousel
     * re-measuring itself, which is asynchronous. Clearing the owed move on
     * `settled` alone therefore cancelled it a beat before there was anywhere to
     * go — the page loaded, the arrow stopped spinning, and the row sat still.
     *
     * So the slide count decides. More slides than when we asked means the move
     * is still coming and this is just the gap before the measurement; the same
     * number means the fetch brought nothing and nobody should keep waiting.
     *
     * Counted off the DOM rather than asked of the carousel: at this exact
     * moment the carousel's own list is the stale thing being worked around, so
     * consulting it answers "still two" and cancels the move all over again.
     */
    if (settled && countSlides(api) <= slidesAtAsk.current) setOwedNext(false)
  }, [owedNext, canScrollNext, isLoading, scrollNext, api])

  return {
    canGoNext: canScrollNext || (hasMore && !isLoading),
    /** A fetch the reader is actually standing on. */
    isAwaitingPage: owedNext,
    isPageInFlight: awaitedPage && isLoading,
    goNext: () => {
      if (canScrollNext) {
        scrollNext()
        return
      }
      askForNextPage()
    },
  }
}

const useCarouselPaging = (): CarouselPagingState => useCarousel().pagingState

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      paging,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const pagingState = usePagingState(api, canScrollNext, scrollNext, paging)

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          pagingState,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("group/carousel relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className={cn(
        "overflow-hidden",
        CAROUSEL_SHADOW_BLEED,
        // The viewport scrolls but never shows a bar: embla drives it, and a
        // native one over the slides is chrome nobody asked for. Firefox reads
        // the first, old Edge the second.
        "[scrollbar-width:none] [-ms-overflow-style:none]"
      )}
    >
      <div
        ref={ref}
        className={cn(
          "flex",
          // The slides take the pointer; the bleed band around them does not
          // (see `CAROUSEL_SHADOW_BLEED`).
          "pointer-events-auto",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  ButtonInternalProps
>(({ className, variant = "outline", ...props }, ref) => {
  const i18n = useI18n()
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <div
      className={cn(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !canScrollPrev && "opacity-0 group-hover/carousel:opacity-0",
        orientation === "horizontal"
          ? "-left-3 top-1/2 -translate-y-1/2"
          : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      )}
    >
      <ButtonInternal
        compact
        ref={ref}
        size="sm"
        variant={variant}
        className={cn("absolute opacity-100 transition-all", className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
        label={i18n.navigation.previous}
        icon={ArrowLeft}
        hideLabel
      />
    </div>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, ButtonInternalProps>(
  ({ className, variant = "outline", ...props }, ref) => {
    const i18n = useI18n()
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <div
        className={cn(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !canScrollNext && "opacity-0 group-hover/carousel:opacity-0",
          orientation === "horizontal"
            ? "-right-3 top-1/2 -translate-y-1/2"
            : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        )}
      >
        <ButtonInternal
          ref={ref}
          size="sm"
          variant={variant}
          compact
          className={cn("absolute opacity-100 transition-all", className)}
          disabled={!canScrollNext}
          onClick={scrollNext}
          {...props}
          label={i18n.navigation.next}
          icon={ArrowRight}
          hideLabel
        />
      </div>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const { api } = useCarousel()
  const [, setUpdate] = React.useState(false)
  const dotsContainerRef = React.useRef<HTMLDivElement>(null)

  const forceUpdate = React.useCallback(() => {
    setUpdate((prev) => !prev)
  }, [])

  React.useEffect(() => {
    if (api) {
      api.on("select", forceUpdate)
      api.on("reInit", forceUpdate)

      return () => {
        api.off("select", forceUpdate)
        api.off("reInit", forceUpdate)
      }
    }
  }, [api, forceUpdate])

  const numberOfSlides = api?.scrollSnapList().length || 0
  const currentSlide = api?.selectedScrollSnap() || 0

  React.useEffect(() => {
    if (!dotsContainerRef.current) return

    const container = dotsContainerRef.current
    const dotWidth = 16

    const scrollTo =
      currentSlide * dotWidth - container.clientWidth / 2 + dotWidth / 2

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    })
  }, [currentSlide])

  // Prevent user scrolling
  React.useEffect(() => {
    const container = dotsContainerRef.current
    if (!container) return

    const preventScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
    }

    container.addEventListener("wheel", preventScroll, { passive: false })
    container.addEventListener("touchmove", preventScroll, { passive: false })

    return () => {
      container.removeEventListener("wheel", preventScroll)
      container.removeEventListener("touchmove", preventScroll)
    }
  }, [])

  if (numberOfSlides <= 1) {
    return null
  }

  const maxDots = numberOfSlides > 5 ? 5 : numberOfSlides
  const allDots = Array.from({ length: numberOfSlides }, (_, i) => i)
  const visibleDotsWidth = Math.min(maxDots, numberOfSlides) * 16

  const getScale = (index: number) => {
    if (maxDots === numberOfSlides) return null // No scaling when showing all dots

    const distance = Math.abs(index - currentSlide)

    if (distance === 0) return "scale-100"
    if (distance === 1) return "scale-100"
    if (distance === 2)
      return currentSlide === 0 || currentSlide === numberOfSlides - 1
        ? "scale-100"
        : "scale-75"
    if (distance === 3)
      return currentSlide === 0 || currentSlide === numberOfSlides - 1
        ? "scale-75"
        : "scale-50"
    if (distance >= 4) return "scale-50"
  }

  return (
    <div ref={ref} className={cn("flex justify-center", props.className)}>
      <div
        className="relative overflow-hidden"
        style={{ width: `${visibleDotsWidth}px` }}
      >
        <div
          ref={dotsContainerRef}
          className="flex w-full gap-0 overflow-x-scroll [overscroll-behavior:none] [scrollbar-width:none]"
          tabIndex={0}
          aria-label="Carousel pagination"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault()
              api?.scrollPrev()
            } else if (e.key === "ArrowRight") {
              e.preventDefault()
              api?.scrollNext()
            }
          }}
        >
          {allDots.map((i) => (
            <button
              key={i}
              className="group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentSlide ? "true" : undefined}
              onClick={() => api?.scrollTo(i)}
              tabIndex={-1}
            >
              <div
                className={cn(
                  "h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]",
                  i === currentSlide &&
                    "rounded-[3px] opacity-100 group-hover/dot:opacity-100",
                  getScale(i)
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

/**
 * THE PAGING ROW: an arrow on each end, the dots between them, under the slides.
 *
 * The alternative to `CarouselPrevious`/`CarouselNext`, which are absolutely
 * positioned overlays on the carousel's SIDES, revealed on hover. That is right
 * for a full-bleed gallery and wrong everywhere a carousel sits inside something
 * else — a widget, a card, a panel: a control that only exists while the pointer
 * is over it is a control a touch user never finds, and one hanging off the left
 * edge of a card hangs over whatever is beside it.
 *
 * IN THE FLOW instead, and always there. Both arrows keep their corners whether
 * or not there is anywhere to go — disabled rather than removed, so the row
 * doesn't change width under the pointer — and the dots take the middle, which
 * is `CarouselDots` unchanged (it hides itself when there is only one page).
 *
 * The `pt-4` is the row's own: it belongs to the gap ABOVE the controls rather
 * than to the slides' bottom margin, so a carousel that has no controls has no
 * space under it either.
 */
const CarouselControls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * The arrows' accessible names and tooltips. There is no visible text in
     * this row, so these are the only words in it.
     */
    labels?: { previous?: string; next?: string }
    /** Whether the dots sit between the arrows. Defaults to true. */
    showDots?: boolean
  }
>(({ className, labels, showDots = true, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()
  const { canGoNext, goNext, isAwaitingPage } = useCarouselPaging()

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row items-center justify-between gap-2 pt-4",
        className
      )}
      {...props}
    >
      <ButtonInternal
        size="md"
        variant="outline"
        icon={ChevronLeft}
        label={labels?.previous ?? "Previous"}
        hideLabel
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      />
      {/* `grow`, so the dots are centered on the ROW rather than on what is left
          of it — the arrows are the same width, so today the two are the same
          thing, and this survives one of them growing. */}
      {showDots ? <CarouselDots className="grow" /> : null}
      <ButtonInternal
        size="md"
        variant="outline"
        icon={ChevronRight}
        label={labels?.next ?? "Next"}
        hideLabel
        // The spinner sits on the control that caused the wait, rather than on
        // the slides: the row you are looking at has not gone anywhere. And ONLY
        // when somebody is waiting — a page pulled in ahead of the reader should
        // pass unnoticed, not advertise itself.
        loading={isAwaitingPage}
        disabled={!canGoNext}
        onClick={goNext}
      />
    </div>
  )
})
CarouselControls.displayName = "CarouselControls"

export {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarouselPaging,
  type CarouselApi,
}
