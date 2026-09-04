import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon } from "@/components/F0Icon"
import { ArrowRight } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { CommandRow } from "../internal-types"

type CommandRowItemProps = {
  row: CommandRow
  index: number
  active: boolean
  /** Whether the trailing cluster is currently drawn over this row. */
  clustered: boolean
  onActivate: () => void
  onHover: () => void
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
export const CommandRowItem = ({
  row,
  index,
  active,
  clustered,
  onActivate,
  onHover,
}: CommandRowItemProps) => (
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
    className={cn(
      "flex w-full items-center gap-1.5 rounded-md p-2 text-left font-medium text-f1-foreground transition-colors",
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
      // The assistant row closes the list, set apart by a hairline rather than by
      // a tint — a tinted band shouts over the results it is a fallback for.
      row.assistant &&
        "relative mt-2.5 before:absolute before:inset-x-2 before:-top-[5px] before:h-px before:bg-f1-border-secondary before:content-['']"
    )}
    onMouseMove={onHover}
    onClick={onActivate}
  >
    {/*
      A FLAT glyph, not an avatar tile. A bordered chip repeated a dozen times
      down a list reads as a dozen buttons competing with the labels. The avatar
      stays only where the mark is data — a person's face.
    */}
    <span className="flex h-5 w-5 shrink-0 items-center justify-center">
      {row.avatar ? (
        <F0AvatarPerson
          firstName={row.avatar.firstName}
          lastName={row.avatar.lastName}
          src={row.avatar.src}
          size="xs"
        />
      ) : (
        <F0Icon icon={row.icon ?? ArrowRight} size="md" />
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
        "flex min-w-0 flex-1 items-baseline gap-2 overflow-hidden",
        clustered &&
          "[mask-image:linear-gradient(to_right,#000_calc(100%-96px),transparent_100%)]"
      )}
    >
      <span className="min-w-0 shrink-0 truncate text-base">{row.label}</span>
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
