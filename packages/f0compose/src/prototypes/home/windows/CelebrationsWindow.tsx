import { F0Icon } from "@factorialco/f0-react"
import { ArrowRight } from "@factorialco/f0-react/icons/app"
import { useRef } from "react"

import { avatarFor } from "@/fixtures/helpers"

type Celebration = {
  id: string
  name: string
  label: string
  emoji: string
  /** Tint painted over the white card, straight from the Figma design. */
  tint: string
  month: string
  day: string
}

// Matches the Celebrations window from the "Home - Vision" Figma file
// (node 1044:8161): birthdays and work anniversaries as a card carousel.
const celebrations: Celebration[] = [
  {
    id: "leslie",
    name: "Leslie Alexander",
    label: "Birthday",
    emoji: "🎂",
    tint: "rgba(80, 116, 136, 0.3)",
    month: "JUL",
    day: "10",
  },
  {
    id: "bessie",
    name: "Bessie Cooper",
    label: "First day",
    emoji: "💼",
    tint: "rgba(125, 58, 50, 0.3)",
    month: "JUL",
    day: "10",
  },
  {
    id: "esther",
    name: "Esther Howard",
    label: "First day",
    emoji: "💼",
    tint: "rgba(196, 158, 44, 0.3)",
    month: "JUL",
    day: "10",
  },
]

/** 40px mini calendar: month in highlight red over the day. */
function AvatarDate({ month, day }: { month: string; day: string }) {
  return (
    <span className="flex size-10 shrink-0 flex-col items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
      <span className="text-[10px] font-semibold uppercase leading-[10px] text-f1-special-highlight">
        {month}
      </span>
      <span className="text-lg font-medium text-f1-foreground">{day}</span>
    </span>
  )
}

function CelebrationCard({ celebration }: { celebration: Celebration }) {
  return (
    <div className="flex w-[190px] shrink-0 flex-col overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background">
      <div className="p-1">
        <div
          className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl"
          style={{ backgroundColor: celebration.tint }}
        >
          <img
            src={avatarFor(celebration.id)}
            alt=""
            className="size-20 rounded-full border-4 border-solid border-[#fff] object-cover"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 p-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-base font-medium text-f1-foreground">
            {celebration.name}
          </span>
          <span className="flex items-center gap-1 text-base text-f1-foreground-secondary">
            {celebration.label}
            <span className="text-[16px] leading-none">{celebration.emoji}</span>
          </span>
        </div>
        <AvatarDate month={celebration.month} day={celebration.day} />
      </div>
    </div>
  )
}

export function CelebrationsWindow() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Instant scroll: "smooth" programmatic scrolling is silently dropped in
  // some embedded-browser environments, so don't depend on it.
  const scrollNext = () => {
    scrollerRef.current?.scrollBy({ left: 202 })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="home-window-scroll flex gap-3 overflow-x-auto px-3 pb-3 pt-1"
      >
        {celebrations.map((celebration) => (
          <CelebrationCard key={celebration.id} celebration={celebration} />
        ))}
      </div>
      <button
        onClick={scrollNext}
        aria-label="Show more celebrations"
        className="f0c-pressable absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_6px_-1px_rgba(13,22,37,0.08)]"
      >
        <F0Icon icon={ArrowRight} size="sm" color="default" />
      </button>
    </div>
  )
}
