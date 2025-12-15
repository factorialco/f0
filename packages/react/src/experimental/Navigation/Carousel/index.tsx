import {
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCarousel,
} from "@/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import React from "react"
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

export const Carousel = ({
  children,
  columns,
  showArrows = true,
  showDots = true,
  autoplay = false,
  delay = 3000,
  showPeek = false,
  doubleColumns,
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children)

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
      onMouseEnter={autoplay ? handleMouseEnter : undefined}
      onMouseLeave={autoplay ? handleMouseLeave : undefined}
    >
      <div className="flex flex-col gap-5">
        <div className="relative">
          <CarouselContent>
            {React.Children.map(childrenArray, (child, index) => {
              const doubleColumn = doubleColumns?.find((column) => column.index === index)

              return (
                <CarouselItem
                  key={index}
                  className={carouselItemVariants({
                    default: getVariantValue(columns.default, showPeek),
                    xs: getVariantValue(columns.xs, showPeek, doubleColumn?.sizes?.includes("xs")),
                    sm: getVariantValue(columns.sm, showPeek, doubleColumn?.sizes?.includes("sm")),
                    md: getVariantValue(columns.md, showPeek, doubleColumn?.sizes?.includes("md")),
                    lg: getVariantValue(columns.lg, showPeek, doubleColumn?.sizes?.includes("lg")),
                    peek: showPeek,
                  })}
                >
                  {child}
                </CarouselItem>
              )
            })}
          </CarouselContent>
          {showArrows && (
            <>
              <CarouselPrevious label="Previous" />
              <CarouselNext label="Next" />
            </>
          )}
        </div>
        {showDots && <CarouselDots />}
      </div>
    </ShadCarousel>
  )
}
