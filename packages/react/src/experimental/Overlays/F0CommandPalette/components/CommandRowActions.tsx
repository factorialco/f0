import type { KeyboardEvent } from "react"
import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import type { CommandRow } from "../internal-types"
import type { CommandPaletteLabels } from "../types"

type CommandRowActionsProps = {
  labels: CommandPaletteLabels
  row: CommandRow
  index: number
  /** Distance from the top of the scroll container to the row's vertical centre. */
  top: number

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
  labels,
  row,
  index,
  top,
  focusedAction,
  onActionKeyDown,
  onActionFocus,
  onActivate,
}: CommandRowActionsProps) => {
  const rowActions = row.rowActions ?? []

  const clusterSize = rowActions.length + (row.disabledReason ? 0 : 1)

  const enterVerb = row.assistant
    ? labels.row.verb.ask
    : row.scopeRef
      ? labels.row.verb.open
      : labels.row.verb.run

  const enterLabel = row.assistant
    ? labels.row.ask(row.label)
    : row.scopeRef
      ? labels.row.open(row.label)
      : labels.row.run(row.label)

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
            onActionKeyDown(event, actionIndex, clusterSize)
          }
        >
          <F0Button
            variant="outline"
            size="sm"
            icon={action.icon}
            label={action.text ?? action.label}
            hideLabel={!action.text}
            aria-label={action.label}
            tooltip={action.text ? undefined : (action.tip ?? action.label)}
            tabIndex={-1}
            onClick={action.run}
          />
        </span>
      ))}

      {/*
        The row's own Enter. Its glyph is the key that triggers it, so pointer
        and keyboard read as one affordance rather than two. A blocked row gets
        no button at all rather than a dead one.

        ON A DESTRUCTIVE ROW IT IS `critical`, and this reverses an earlier call
        worth explaining rather than quietly flipping. The old note said a filled
        red button beside a red `Wipe` made the same colour mean "run this" in
        one place and "this is irreversible" in the other — and it was right
        about `variant="default"`, which in this theme IS brand red. Two
        different reds meaning two different things in one row is exactly the
        collision it described.

        `critical` removes the collision instead of dodging it, and it turns out
        to be quiet by design: F0 renders it `bg-f1-background-secondary` +
        `text-f1-foreground-critical` at rest — the same neutral chip as its
        neighbours, wearing a red glyph — and only fills to
        `background-critical-bold` under hover and press. So the row reads as one
        destructive unit (red icon, red verb, red `↵`) without a red slab
        competing with the label, and the button goes loud exactly at the moment
        the pointer is on the thing that cannot be undone. Every other row keeps
        `outline`.
      */}
      {row.disabledReason ? null : (
        <span
          data-row={index}
          data-action={rowActions.length}
          className={cn(
            "inline-flex rounded-sm",
            focusedAction === rowActions.length &&
              "ring-2 ring-f1-border-selected"
          )}
          onFocus={() => onActionFocus(rowActions.length)}
          onKeyDown={(event) =>
            onActionKeyDown(event, rowActions.length, clusterSize)
          }
        >
          <F0Button
            variant={row.danger ? "critical" : "outline"}
            size="sm"
            label="↵"
            aria-label={enterLabel}
            tooltip={enterVerb}
            tabIndex={-1}
            onClick={onActivate}
          />
        </span>
      )}
    </span>
  )
}
