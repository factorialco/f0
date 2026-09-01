import { F0AvatarList, F0Button, F0Icon } from "@factorialco/f0-react"
import { InfoCircle, Warning } from "@factorialco/f0-react/icons/app"

import { avatarFor } from "@/fixtures/helpers"

import { HEADCOUNT } from "../fixtures"
import { startConversationInPanel } from "../one/conversationStore"
import { OneFill } from "../one/OneFillIcon"
import { Sparkline } from "../Sparkline"

/**
 * The two banners above the People table (Figma 2730:461174).
 *
 * Both are "Inline Banner": a 16px-radius hairline card with a 44px
 * header, no fill of its own (the #FCFCFC canvas shows through, which is
 * what the frame draws). The LEFT one carries One's button — the X/Grok
 * pattern the Insights widget already uses, except here the answer opens
 * in the split conversation panel beside the screen rather than taking
 * the canvas over.
 */

function BannerCard({
  title,
  action,
  children,
}: {
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  // overflow-hidden so nothing escapes the 16px corners when the canvas is
  // squeezed below its floor (three 26px figures in a ~200px card).
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-xl border border-solid border-f1-border-secondary pb-3">
      <div className="flex w-full items-center justify-between py-3 pl-4 pr-3">
        <span className="truncate text-base font-medium text-f1-foreground">
          {title}
        </span>
        {action}
      </div>
      {children}
    </div>
  )
}

/**
 * Total employees — Total / Joiners / Leavers over the headcount trend.
 *
 * Same fixture the Insights widget's banner reads (`HEADCOUNT`) and the
 * same `Sparkline`, so the two cards cannot drift apart; this one adds
 * the design's area fill and the frame's larger 26px figures.
 */
function HeadcountBanner() {
  return (
    <BannerCard
      title={HEADCOUNT.title}
      action={
        /* f0's GHOST button (per Oskar, 2026-09-01 — it was outline
           first): `size="sm"` IS the frame's 24px box on an 8px radius,
           and the glyph is the monochrome One mark, not `F0OneIcon`'s
           animated brand gradient. Ghost paints its icon the same
           `text-f1-icon` grey outline does, so the mark stays black for
           the reason OneFillIcon documents — its fill is pinned to a
           token rather than inheriting currentColor. */
        <F0Button
          variant="ghost"
          size="sm"
          icon={OneFill}
          hideLabel
          label={`Ask One about ${HEADCOUNT.title}`}
          onClick={() =>
            startConversationInPanel(
              {
                kind: "metric",
                title: HEADCOUNT.title,
                stats: HEADCOUNT.stats,
                series: HEADCOUNT.series,
              },
              // The question the click stands for: it drives intent
              // matching and is never shown as typed text. Derived from the
              // title so the two can never disagree.
              `Analyse ${HEADCOUNT.title}`
            )
          }
        />
      }
    >
      <div className="flex w-full items-start justify-between gap-3 px-4 pb-4">
        {HEADCOUNT.stats.map((stat) => (
          <div key={stat.label} className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="truncate text-base text-f1-foreground-secondary">
              {stat.label}
            </span>
            {/* Deliberately NOT truncated: "2.7…" is worse than a number
                that runs into the gap, and a headline figure is the last
                thing that should lose digits. The gap above plus the
                card's overflow-hidden keep neighbours from touching. */}
            <span className="whitespace-nowrap text-3xl font-semibold text-f1-foreground">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      {/* text-f1-icon-selected is the teal in the design (rgb 6,128,137) —
          the same colour the Insights banner's line uses. */}
      <div className="w-full px-4 text-f1-icon-selected">
        <Sparkline series={HEADCOUNT.series} className="h-10 w-full" area />
      </div>
    </BannerCard>
  )
}

/** The two access states, with the faces behind each count. */
const ACCESS_ROWS = [
  {
    id: "pending",
    icon: InfoCircle,
    tone: "info" as const,
    title: "Pending to accept",
    subtitle: "472 people",
    seeds: ["pa-1", "pa-2"],
    remaining: 467,
  },
  {
    id: "uninvited",
    icon: Warning,
    tone: "warning" as const,
    title: "Uninvited",
    subtitle: "472 people",
    seeds: ["un-1", "un-2"],
    remaining: 863,
  },
]

const TONE_CLASSES = {
  info: "bg-f1-background-info border-f1-border-info text-f1-icon-info",
  warning:
    "bg-f1-background-warning border-f1-border-warning text-f1-icon-warning",
}

/**
 * Total employees (right) — the onboarding funnel as two "Post — Feed
 * cards" rows: a tinted 32px glyph box, title + count, then the faces.
 *
 * The third avatar deliberately has no `src`, so F0Avatar falls back to
 * initials the way the frame's purple "BR" chip does, and the "+n" chip
 * is F0AvatarList's own `remainingCount` counter rather than a hand-rolled
 * pill.
 */
function AccessBanner() {
  return (
    <BannerCard title="Total employees">
      <div className="flex w-full flex-1 flex-col justify-center gap-4 px-4 pb-4">
        {ACCESS_ROWS.map((row) => (
          <div
            key={row.id}
            className="flex w-full items-center gap-3 overflow-hidden rounded-md"
          >
            <div
              className={`flex size-8 shrink-0 items-center justify-center rounded border border-solid ${TONE_CLASSES[row.tone]}`}
            >
              <F0Icon icon={row.icon} size="md" />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="truncate text-base font-medium text-f1-foreground">
                  {row.title}
                </span>
                <span className="truncate text-sm font-medium text-f1-foreground-tertiary">
                  {row.subtitle}
                </span>
              </div>
              <div className="shrink-0">
                <F0AvatarList
                  type="person"
                  size="md"
                  max={3}
                  remainingCount={row.remaining}
                  noTooltip
                  avatars={[
                    ...row.seeds.map((seed) => ({
                      firstName: seed,
                      lastName: ".",
                      src: avatarFor(seed),
                    })),
                    { firstName: "Bruno", lastName: "Ramos" },
                  ]}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </BannerCard>
  )
}

export function PeopleBanners() {
  return (
    // items-stretch, so the right card matches whatever height the left
    // one hugs to (the frame pins the left at 176 and stretches the right).
    <div className="flex w-full items-stretch gap-2.5 px-6 py-5">
      <HeadcountBanner />
      <AccessBanner />
    </div>
  )
}
