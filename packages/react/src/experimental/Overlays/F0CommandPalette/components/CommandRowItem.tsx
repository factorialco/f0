import type { KeyboardEvent } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon } from "@/components/F0Icon"
import { ArrowRight } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { CommandRow } from "../internal-types"

type CommandRowItemProps = {
  row: CommandRow
  index: number
  active: boolean
  /** Whether the trailing cluster is currently drawn over this row. */
  clustered: boolean

  phone: boolean
  onActivate: () => void
  onHover: () => void
  onKeyDown: (event: KeyboardEvent) => void
}

/**
 * One row of the list — and ONLY the row: its trailing controls are rendered
 * outside the listbox by `CommandRowActions`, for the accessibility reasons
 * documented there.
 *
 * Label and context share ONE line, the context trailing the title in a
 * secondary tone. Pushing the context to the far right leaves a gutter of dead
 * space down the middle of every row, and the eye has to cross it to pair a
 * result with the thing that identifies it.
 */
/**
 * The space a result will occupy, while its provider is still answering.
 *
 * NOT a `role="option"`, and that is the point: a placeholder is not something
 * to choose. Leaving it out of the option list is what keeps the listbox
 * honest — a screen reader is told the list is busy by `aria-busy` and how many
 * options it has by the options themselves, never by a bar that is about to
 * become one. The palette's arrows step over it for the same reason.
 *
 * Two bars, at the glyph's position and the label's, so the shape of what is
 * coming is already on screen and the row does not jump when it lands.
 */
const SkeletonRow = ({ phone }: { phone: boolean }) => (
  <div
    aria-hidden
    className={cn(
      "flex w-full items-center gap-1.5 p-2",
      phone && "min-h-12 gap-2.5 px-2 py-3"
    )}
  >
    <Skeleton
      className={cn("shrink-0 rounded-full", phone ? "h-6 w-6" : "h-5 w-5")}
    />
    <Skeleton className="h-3 w-[38%] max-w-56" />
  </div>
)

export const CommandRowItem = ({
  row,
  index,
  active,
  clustered,
  phone,
  onActivate,
  onHover,
  onKeyDown,
}: CommandRowItemProps) =>
  row.skeleton ? (
    <SkeletonRow phone={phone} />
  ) : (
    <div
      id={`f0-command-option-${index}`}
      data-index={index}
      role="option"
      aria-selected={active}
      aria-disabled={row.disabledReason ? true : undefined}
      // The whole row in one string: a screen reader should hear the result, the
      // thing that identifies it and the reason it cannot run as one announcement,
      // not as three unrelated fragments. Deduplicated, because a blocked row
      // carries its reason in the hint slot too — joining both read it out twice.
      aria-label={[
        ...new Set([row.label, row.hint, row.disabledReason].filter(Boolean)),
      ].join(", ")}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      className={cn(
        "flex w-full items-center gap-1.5 rounded-md p-2 text-left font-medium text-f1-foreground transition-colors",

        focusRing(),

        phone && "min-h-12 gap-2.5 px-2 py-3",
        row.disabledReason ? "cursor-not-allowed opacity-55" : "cursor-pointer",
        // The keyboard's position and the pointer's hover paint the same, so there
        // is never a question of which row `Enter` will reach.
        active && !row.danger && "bg-f1-background-hover",
        // A destructive row reads as an ordinary row UNTIL you are on it, and then
        // the whole row turns. Permanent red text teaches the eye to skip a line
        // rather than read it, and makes a deliberate action look like an error.
        // The warning is not lost: the verb says it, the description says it out
        // loud, the row turns here, it is never preselected, and Enter hands it to
        // the consumer's own dialog rather than running it.
        row.danger &&
          active &&
          "bg-f1-background-critical shadow-[inset_0_0_0_1px_hsl(var(--critical-50)/0.18)]",

        row.assistant && "mt-1"
      )}
      onMouseMove={onHover}
      onClick={onActivate}
    >
      {/*
      A FLAT glyph, not an avatar tile. A bordered chip repeated a dozen times
      down a list reads as a dozen buttons competing with the labels. The avatar
      stays only where the mark is data — a person's face.
    */}
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          phone ? "h-6 w-6" : "h-5 w-5"
        )}
      >
        {row.avatar ? (
          <F0AvatarPerson
            firstName={row.avatar.firstName}
            lastName={row.avatar.lastName}
            src={row.avatar.src}
            size={phone ? "sm" : "xs"}
          />
        ) : (
          <F0Icon icon={row.icon ?? ArrowRight} size={phone ? "lg" : "md"} />
        )}
      </span>

      {/*
      The cluster overlays the row's right edge rather than reserving a slot in
      it: reserving one costs EVERY row the width of its widest possible cluster,
      permanently, so the context truncates on every row to make room for buttons
      visible on one. Overlaying gives the text the full width and covers its tail
      only on the row being looked at — the trade the eye wants, since at that
      moment you are looking at the buttons, not the prose.

      The mask is what keeps that legible: the text fades out under the cluster
      instead of colliding with it. It has to be a mask and not a backdrop — the
      panel is frosted, so anything opaque enough to cover text would read as a
      white slab floating in the row.
    */}
      <span
        className={cn(
          "flex min-w-0 flex-1 overflow-hidden",

          phone ? "flex-col items-start gap-0.5" : "items-baseline gap-2",
          clustered &&
            "[mask-image:linear-gradient(to_right,#000_calc(100%-96px),transparent_100%)]"
        )}
      >
        <span
          className={cn(
            "min-w-0 truncate text-base",

            phone ? "w-full" : "shrink-0"
          )}
        >
          {row.label}
        </span>
        {row.badge ? (
          <span className="shrink-0 rounded-xs border border-solid border-f1-border-secondary px-1.5 py-px text-xs text-f1-foreground-secondary">
            {row.badge}
          </span>
        ) : null}
        {row.hint ? (
          <span
            className={cn(
              "min-w-0 truncate text-base font-normal text-f1-foreground-secondary transition-opacity",
              active ? "opacity-100" : "opacity-70"
            )}
          >
            {row.hint}
          </span>
        ) : null}
      </span>
    </div>
  )
