"use client"

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import * as React from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ButtonInternalProps } from "@/components/F0Button/internal-types"
import { SPACE_FOR_WIDGET_SHADOW } from "@/experimental/Navigation/Carousel/DynamicCarousel"
import { ArrowLeft, ArrowRight } from "@/icons/app"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

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
  const maskImageStyle = `linear-gradient(to right, transparent 0px, transparent ${SPACE_FOR_WIDGET_SHADOW / 2}px, black ${SPACE_FOR_WIDGET_SHADOW}px, black calc(100% - ${SPACE_FOR_WIDGET_SHADOW}px), transparent calc(100% - ${SPACE_FOR_WIDGET_SHADOW / 2}px), transparent 100%)`

  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
        margin: `-${SPACE_FOR_WIDGET_SHADOW}px`,
        padding: `${SPACE_FOR_WIDGET_SHADOW}px`,
        height: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
        width: `calc(100% + ${SPACE_FOR_WIDGET_SHADOW * 2}px)`,
        maskImage: maskImageStyle,
        WebkitMaskImage: maskImageStyle,
      }}
    >
      <div
        ref={ref}
        className={cn(
          "flex",
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
        label="Previous"
        icon={ArrowLeft}
        hideLabel
      />
    </div>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, ButtonInternalProps>(
  ({ className, variant = "outline", ...props }, ref) => {
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
          label="Next"
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
          className="flex w-full gap-0 overflow-x-scroll"
          style={{
            scrollbarWidth: "none",
            overscrollBehavior: "none",
          }}
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

export {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
}
