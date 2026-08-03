import { F0AvatarPerson } from "@factorialco/f0-react"

import { avatarFor } from "@/fixtures/helpers"

function InsightCard({
  category,
  headline,
  flush = false,
  children,
}: {
  category: string
  headline: string
  /** Content escapes the card padding (e.g. the full-bleed chart). */
  flush?: boolean
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
      <div className="flex flex-col gap-1 px-4 pt-4">
        <span className="text-sm font-medium text-f1-foreground-secondary">
          {category}
        </span>
        <span className="text-lg font-semibold text-f1-foreground">
          {headline}
        </span>
      </div>
      <div className={flush ? "" : "px-4 pb-4"}>{children}</div>
    </div>
  )
}

function TurnoverChart() {
  // Gently rising noisy line with a fading fill, bleeding to the card
  // edges — mirrors the Retention insight in the Figma design.
  const points =
    "0,34 20,32 40,33 60,30 80,31 100,29 120,30 140,27 160,28 180,25 200,26 220,22 240,23 260,19 280,16 300,10"
  return (
    <div className="relative mt-3">
      <span className="absolute right-2 top-[-4px] rounded-full border border-solid border-f1-border-critical bg-f1-background px-2 py-0.5 text-sm font-medium text-f1-foreground-critical">
        +22%
      </span>
      <svg viewBox="0 0 300 40" className="block h-14 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="turnover-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E51943" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#E51943" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`${points} 300,40 0,40`} fill="url(#turnover-fill)" />
        <polyline
          points={points}
          fill="none"
          stroke="#E51943"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

function AvatarStack({ seeds, extra }: { seeds: string[]; extra?: number }) {
  return (
    <div className="mt-3 flex items-center">
      {seeds.map((seed, i) => (
        <div key={seed} className={i === 0 ? "" : "-ml-1.5"}>
          <F0AvatarPerson
            firstName={seed}
            lastName="."
            src={avatarFor(seed)}
            size="sm"
          />
        </div>
      ))}
      {extra !== undefined && (
        <span className="-ml-1.5 flex size-6 items-center justify-center rounded-full bg-f1-background-secondary text-sm font-medium text-f1-foreground-secondary">
          +{extra}
        </span>
      )}
    </div>
  )
}

export function InsightsWindow() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <InsightCard
        category="Retention"
        headline="Turnover up 22% in Sales this quarter"
        flush
      >
        <TurnoverChart />
      </InsightCard>
      <InsightCard category="Time" headline="6 people consistently over 45h/week">
        <AvatarStack seeds={["ot-1", "ot-2", "ot-3"]} extra={3} />
      </InsightCard>
      <InsightCard
        category="Performance"
        headline="3 managers haven't completed Q1 reviews"
      >
        <AvatarStack seeds={["rv-1", "rv-2", "rv-3"]} />
      </InsightCard>
    </div>
  )
}
