import { F0Icon } from "@factorialco/f0-react"
import { Celebration } from "@factorialco/f0-react/dist/experimental"
import { ArrowRight } from "@factorialco/f0-react/icons/app"
import { useRef } from "react"

import { avatarFor } from "@/fixtures/helpers"

/**
 * Anniversaries, rendered by f0's OWN `Celebration` card (Angel,
 * 2026-09-15): production's celebrations widget uses it, confetti,
 * reaction picker and all, so the card no longer has to be redrawn here.
 */
type CelebrationItem = {
  id: string
  firstName: string
  lastName: string
  type: "birthday" | "anniversary" | "first-day"
  typeLabel: string
  date: Date
}

const celebrations: CelebrationItem[] = [
  {
    id: "leslie",
    firstName: "Leslie",
    lastName: "Alexander",
    type: "birthday",
    typeLabel: "Birthday",
    date: new Date(2026, 6, 10),
  },
  {
    id: "bessie",
    firstName: "Bessie",
    lastName: "Cooper",
    type: "first-day",
    typeLabel: "First day",
    date: new Date(2026, 6, 10),
  },
  {
    id: "esther",
    firstName: "Esther",
    lastName: "Howard",
    type: "anniversary",
    typeLabel: "3 years",
    date: new Date(2026, 6, 10),
  },
]

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
          <div key={celebration.id} className="w-[190px] shrink-0">
            <Celebration
              link="#"
              firstName={celebration.firstName}
              lastName={celebration.lastName}
              src={avatarFor(celebration.id)}
              type={celebration.type}
              typeLabel={celebration.typeLabel}
              date={celebration.date}
            />
          </div>
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
