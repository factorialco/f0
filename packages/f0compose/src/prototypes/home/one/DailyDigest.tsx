import { F0Icon } from "@factorialco/f0-react"
import { type IconType } from "@factorialco/f0-react"
import {
  Calendar,
  CheckCircleLine,
  PalmTree,
  Timer,
} from "@factorialco/f0-react/icons/app"

/**
 * The digest itself, a screen below the composer (Angel, 2026-09-15): a
 * header and four boxes, two by two. It sits outside the viewport on
 * purpose, so Home still opens on the input alone and the digest is
 * something you go down to.
 */
const BOXES: {
  icon: IconType
  title: string
  value: string
  lines: string[]
}[] = [
  {
    icon: Calendar,
    title: "Today",
    value: "3 meetings",
    lines: [
      "10:00 · Product weekly",
      "12:30 · 1:1 with Alberto",
      "16:00 · Design review",
    ],
  },
  {
    icon: CheckCircleLine,
    title: "Waiting on you",
    value: "6 requests",
    lines: ["3 time off requests", "2 expense reports", "1 contract renewal"],
  },
  {
    icon: PalmTree,
    title: "Away this week",
    value: "4 people",
    lines: [
      "Marie Curie · until Thu",
      "Ada Lovelace · Fri",
      "2 more in Design",
    ],
  },
  {
    icon: Timer,
    title: "Your hours",
    value: "31h 20m",
    lines: [
      "8h 40m left this week",
      "No overtime logged",
      "2 days clocked out early",
    ],
  },
]

export function DailyDigest() {
  return (
    <>
      {/* The gap that keeps the digest off the first screen lives OUTSIDE
          the section: inside it, scrolling to the digest landed on 42vh of
          its own padding (Angel, 2026-09-15). */}
      <div aria-hidden className="h-[42vh] w-full shrink-0" />
      <section
        data-home-digest
        aria-label="Daily digest"
        className="flex w-[712px] max-w-full shrink-0 flex-col gap-4 pb-16"
      >
        <header className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-f1-foreground">
            Your daily digest
          </h2>
          <p className="text-base text-f1-foreground-secondary">
            Tuesday 22 July · what One would tell you if you asked.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BOXES.map((box) => (
            <article
              key={box.title}
              className="flex flex-col gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center text-f1-icon">
                  <F0Icon icon={box.icon} size="md" color="currentColor" />
                </span>
                <span className="text-base font-medium text-f1-foreground">
                  {box.title}
                </span>
              </div>
              <span className="text-xl font-semibold text-f1-foreground">
                {box.value}
              </span>
              <ul className="flex flex-col gap-1">
                {box.lines.map((line) => (
                  <li
                    key={line}
                    className="text-base text-f1-foreground-secondary"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
