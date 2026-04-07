import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import React from "react"

import Sparkles from "@/icons/app/Sparkles"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCarousel,
} from "@/ui/carousel"

import { SavedInsightCard } from "./SavedInsightCard"
import { useInsightTranslations } from "./useInsightTranslations"
import type { InsightCarouselProps } from "./types"

/**
 * Empty-state card shown as the last slot in the carousel (or the only
 * slot when there are no saved insights). Prompts the user to open the
 * ONE chat and ask for a new insight.
 */
const EmptyInsightCard = ({ onClick }: { onClick?: () => void }) => {
  const insightT = useInsightTranslations()

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-f1-border-secondary bg-f1-background-secondary p-6 text-center">
      <F0Icon icon={Sparkles} size="lg" />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-f1-foreground">
          {insightT.emptyTitle}
        </span>
        <span className="text-xs text-f1-foreground-secondary">
          {insightT.emptyDescription}
        </span>
      </div>
      {onClick && (
        <F0Button
          label={insightT.emptyAction}
          variant="outline"
          size="sm"
          icon={Sparkles}
          onClick={onClick}
        />
      )}
    </div>
  )
}

/**
 * Carousel of saved insight cards.
 *
 * Displays up to 4 cards side by side. When there are more than 4, carousel
 * navigation arrows appear to scroll through the rest. An empty-state CTA
 * card is always appended as the last slot, prompting the user to create
 * a new insight via the ONE chat.
 */
export const InsightCarousel = ({
  insights,
  onCreateNew,
}: InsightCarouselProps) => {
  const items = [
    ...insights.map((insight) => (
      <SavedInsightCard key={insight.id} {...insight} />
    )),
    <EmptyInsightCard key="__empty" onClick={onCreateNew} />,
  ]

  return (
    <ShadCarousel
      className="flex w-full flex-col gap-3 @container"
      opts={{
        align: "start",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: "trimSnaps",
      }}
      plugins={[WheelGesturesPlugin()]}
    >
      <div className="flex flex-col gap-5">
        <div className="relative">
          <CarouselContent>
            {items.map((child, index) => (
              <CarouselItem
                key={index}
                className="basis-full @sm:basis-1/2 @lg:basis-1/3 @xl:basis-1/4"
              >
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious label="Previous" />
          <CarouselNext label="Next" />
        </div>
      </div>
    </ShadCarousel>
  )
}
