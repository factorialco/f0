import type { KeyboardEvent } from "react"

import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { CommandRow } from "../internal-types"

type CommandRowActionsProps = {
  row: CommandRow
  index: number
  /** Distance from the top of the scroll container to the row's vertical centre. */
  top: number
  /** Which pill holds focus, or `null` while the input does. */
  focusedAction: number | null
  onActivate: () => void
  onActionKeyDown: (event: KeyboardEvent, index: number, count: number) => void
  onActionFocus: (index: number) => void
}

/**
 * The active row's trailing controls — its own actions, then its Enter.
 *
 * RENDERED OUTSIDE THE LISTBOX, positioned over the row it belongs to, and that
 * is a hard accessibility constraint rather than a layout choice. A `role=
 * "listbox"` may only own `option` and `group` children (`aria-required-children`,
 * WCAG 1.3.1), and a focusable control inside a `role="option"` is
 * `nested-interactive` (WCAG 4.1.2) — which `tabindex="-1"` does not exempt,
 * since assistive technology can still reach it. Buttons anywhere inside the
 * list fail one rule or the other.
 *
 * Sitting outside is also what lets them stay REAL buttons, with real accessible
 * names, activated natively by `Enter` and `Space`, instead of painted-on
 * affordances only a pointer could use.
 *
 * It lives inside the SCROLL CONTAINER and is positioned against it, so it
 * travels with the list on scroll without a single scroll listener.
 */
export const CommandRowActions = ({
  row,
  index,
  top,
  focusedAction,
  onActivate,
  onActionKeyDown,
  onActionFocus,
}: CommandRowActionsProps) => {
  const i18n = useI18n()
  const rowActions = row.rowActions ?? []

  const enterLabel = row.scopeRef
    ? i18n.t("commandPalette.row.open", { label: row.label })
    : i18n.t("commandPalette.row.run", { label: row.label })

  return (
    <span
      className="absolute right-3.5 inline-flex -translate-y-1/2 items-center gap-1"
      style={{ top }}
    >
      {rowActions.map((action, actionIndex) => (
        <span
          key={action.key}
          // The handlers ride the wrapper, not the button: `F0Button` exposes no
          // `onFocus`/`onKeyDown`, and both events bubble, so the wrapper catches
          // them without reaching past the design system for a raw element.
          data-row={index}
          data-action={actionIndex}
          className={cn(
            "inline-flex rounded-sm",
            // The palette's own keyboard position, mirrored from real DOM focus —
            // it has to show even where the browser would paint no ring of its own.
            focusedAction === actionIndex && "ring-2 ring-f1-border-selected"
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
            // Never a document tab stop: the palette is one focus trap around the
            // input, and its own `Tab` handling is what reaches these.
            tabIndex={-1}
            onClick={action.run}
          />
        </span>
      ))}

      {/*
        The row's own Enter. Its glyph is the key that triggers it, so pointer and
        keyboard read as one affordance rather than two. Outline like its
        neighbours: a filled brand-red button beside a red "Wipe" label makes the
        same colour mean "run this" in one place and "this cannot be undone" in
        the other. A blocked row gets no button rather than a dead one.
      */}
      {row.disabledReason ? null : (
        <F0Button
          variant="outline"
          size="sm"
          /* i18n-exempt -- the Return key's own glyph, not prose */
          label="↵"
          aria-label={enterLabel}
          tabIndex={-1}
          onClick={onActivate}
        />
      )}
    </span>
  )
}
