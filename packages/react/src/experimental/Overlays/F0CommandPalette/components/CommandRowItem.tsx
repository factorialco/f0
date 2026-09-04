import type { KeyboardEvent } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { ArrowRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { CommandRow } from "../internal-types"

type CommandRowItemProps = {
  row: CommandRow
  index: number
  active: boolean
  /** Which of this row's actions holds focus, or `null` while the input does. */
  focusedAction: number | null
  onActivate: () => void
  onHover: () => void
  /** Fires for a key pressed while one of the row's action pills holds focus. */
  onActionKeyDown: (event: KeyboardEvent, index: number, count: number) => void
  onActionFocus: (index: number) => void
}

/**
 * One row of the list.
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
  focusedAction,
  onActivate,
  onHover,
  onActionKeyDown,
  onActionFocus,
}: CommandRowItemProps) => {
  const i18n = useI18n()
  const rowActions = row.rowActions ?? []

  /**
   * Whether the trailing cluster is shown: on the row the reader is on (by
   * pointer or by keyboard — the row makes itself active on `mousemove`, so the
   * two are one state), or while one of its own pills holds focus, which is the
   * only way it is ever reached from the keyboard.
   */
  const revealed = active || focusedAction !== null

  const enterLabel = row.scopeRef
    ? i18n.t("commandPalette.row.open", { label: row.label })
    : i18n.t("commandPalette.row.run", { label: row.label })

  return (
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
        "relative flex w-full items-center gap-1.5 rounded-md p-2 text-left font-medium text-f1-foreground transition-colors",
        row.disabledReason ? "cursor-not-allowed opacity-55" : "cursor-pointer",
        // The keyboard's position and the pointer's hover paint the same, so
        // there is never a question of which row `Enter` will reach.
        active && !row.danger && "bg-f1-background-hover",
        // A destructive row reads as an ordinary row UNTIL you are on it, and
        // then the whole row turns. Permanent red text teaches the eye to skip a
        // line rather than read it, and makes a deliberate action look like an
        // error. The warning is not lost: the verb says it, the description says
        // it out loud, the row turns here, it is never preselected, and Enter
        // hands it to the consumer's own dialog rather than running it.
        row.danger &&
          active &&
          "bg-f1-background-critical shadow-[inset_0_0_0_1px_hsl(var(--critical-50)/0.18)]",
        // The assistant row closes the list, set apart by a hairline rather than
        // by a tint — a tinted band shouts over the results it is a fallback for.
        row.assistant &&
          "mt-2.5 before:absolute before:inset-x-2 before:-top-[5px] before:h-px before:bg-f1-border-secondary before:content-['']"
      )}
      onMouseMove={onHover}
      onClick={onActivate}
    >
      {/*
        A FLAT glyph, not an avatar tile. A bordered chip repeated a dozen times
        down a list reads as a dozen buttons competing with the labels. The
        avatar stays only where the mark is data — a person's face.
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

      <span className="flex min-w-0 flex-1 items-baseline gap-2 overflow-hidden">
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

      {/*
        The trailing cluster FLOATS over the row instead of sitting in the flex
        flow. Reserving a slot for it costs every row the width of its widest
        possible cluster, permanently — so the context truncated on every row to
        make room for buttons visible on one. Floating gives the text the full
        width and lets the cluster cover its tail on the row you are actually on,
        which is the trade the eye wants: at that moment you are looking at the
        buttons, not the prose.

        Absolute while hidden and IN FLOW once shown, so the text yields by
        exactly the width the buttons need on the one row being pointed at, and
        no row pays for them the rest of the time. The negative block margin
        keeps the taller buttons from shunting every row below them.

        Revealed off ONE React boolean rather than a `group-hover:` variant, and
        it has to be: `absolute` and `static` are the same Tailwind utility
        group, so a variant-prefixed `static` cannot beat an unprefixed
        `absolute` — tailwind-merge treats the two as unrelated and the emitted
        CSS order decides, which `absolute` wins. Nothing is lost, because the
        row sets itself active on `mousemove`: the pointer's position IS the
        keyboard's, which is why the two always painted the same anyway.
      */}
      <span
        className={cn(
          "inline-flex items-center gap-1 transition-opacity",
          revealed
            ? "pointer-events-auto static my-[-2px] translate-y-0 opacity-100"
            : "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-0"
        )}
      >
        {rowActions.map((action, actionIndex) => (
          <span
            key={action.key}
            // The handlers ride the wrapper, not the button: `F0Button` exposes
            // no `onFocus`/`onKeyDown`, and both events bubble, so the wrapper
            // catches them without the row reaching past the design system for a
            // raw element.
            data-row={index}
            data-action={actionIndex}
            className={cn(
              "inline-flex rounded-sm",
              // The palette's own keyboard position, mirrored from real DOM
              // focus — it has to show even where the browser would paint no
              // ring of its own.
              active &&
                focusedAction === actionIndex &&
                "ring-2 ring-f1-border-selected"
            )}
            onFocus={() => onActionFocus(actionIndex)}
            onKeyDown={(event) =>
              onActionKeyDown(event, actionIndex, rowActions.length)
            }
          >
            <F0Button
              variant="outline"
              size="sm"
              icon={action.icon}
              label={action.text ?? action.label}
              hideLabel={!action.text}
              tooltip={action.text ? undefined : action.label}
              // Never a document tab stop: the palette is one focus trap around
              // the input, and its own `Tab` handling is what reaches these.
              tabIndex={-1}
              onClick={(event) => {
                // The row is clickable too, and its click would navigate away
                // from the thing we just did.
                event.stopPropagation()
                action.run()
              }}
            />
          </span>
        ))}

        {/*
          The row's own Enter. Its glyph is the key that triggers it, so pointer
          and keyboard read as one affordance rather than two. Outline like its
          neighbours: a filled brand-red button beside a red "Wipe" label makes
          the same colour mean "run this" in one place and "this cannot be
          undone" in the other. A blocked row gets no button rather than a dead one.
        */}
        {row.disabledReason ? null : (
          <F0Button
            variant="outline"
            size="sm"
            /* i18n-exempt -- the Return key's own glyph, not prose */
            label="↵"
            aria-label={enterLabel}
            tabIndex={-1}
            onClick={(event) => {
              event.stopPropagation()
              onActivate()
            }}
          />
        )}
      </span>
    </div>
  )
}
