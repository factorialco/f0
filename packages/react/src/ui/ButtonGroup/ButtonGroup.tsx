import { type ReactNode, useEffect, useMemo, useRef } from "react"
import { useMediaQuery, useResizeObserver } from "usehooks-ts"

import { F0Button } from "@/components/F0Button"
import { type ButtonSize } from "@/components/F0Button/types"
import {
  F0ButtonDropdown,
  type F0ButtonDropdownProps,
} from "@/components/F0ButtonDropdown"
import { type IconType } from "@/components/F0Icon"
import {
  Dropdown,
  type DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { cn } from "@/lib/utils"
import { type NavTarget } from "@/ui/Action"
import { useOverflowCalculation } from "@/ui/OverflowList/useOverflowCalculation"

import { buttonGroupVariants } from "./variants"

/** Fields a primary/secondary action button exposes. Variant is fixed by role
 * (primary → solid `default`, secondary → `outline`); `size` is a group prop. */
export interface ButtonGroupButtonBase {
  /**
   * Stable identifier. Required (unlike index-keyed action lists elsewhere)
   * because width-overflow moves a button between the measurement copy, the
   * visible row, and the "⋯" menu — a stable key keeps it from remounting.
   */
  id: string
  /** Visible label; also the a11y name (pair with `hideLabel` for icon-only). */
  label: string
  icon?: IconType
  iconPosition?: "left" | "right"
  disabled?: boolean
  loading?: boolean
  hideLabel?: boolean
  tooltip?: string
  /**
   * Render as a destructive (red) action. Prefer guarding destructive actions in
   * the "⋯" menu via `otherActions`; reach for an inline critical button only
   * when the resource is cheap to recreate and a one-click delete is warranted.
   */
  critical?: boolean
}

/** A single clickable (or link) action. `onClick` and `href` are mutually exclusive. */
export type ButtonGroupButton = ButtonGroupButtonBase &
  (
    | { onClick: () => void; href?: never; target?: never }
    | { href: string; target?: NavTarget; onClick?: never }
  )

// `Omit` over a union collapses to its common keys, dropping mode-specific props
// like `value`/`trigger`; distribute it so each F0ButtonDropdown mode survives.
type DistributiveOmit<T, K extends keyof never> = T extends unknown
  ? Omit<T, K>
  : never

/** A split / dropdown button action, wrapping {@link F0ButtonDropdown}. Its
 * `variant` and `size` are owned by the group, so they're omitted here. */
export type ButtonGroupSplitAction = {
  id: string
  type: "split"
} & DistributiveOmit<F0ButtonDropdownProps, "size" | "variant">

/** A hairline divider between two logical groups of secondaries (row layout only). */
export type ButtonGroupInlineSeparator = { type: "separator" }

export type ButtonGroupSecondaryItem =
  | ButtonGroupButton
  | ButtonGroupSplitAction
  | ButtonGroupInlineSeparator

/** A single link rendered in place of secondary buttons (mirrors F0CardRow). */
export interface ButtonGroupSecondaryLink {
  label: string
  href: string
  target?: NavTarget
  disabled?: boolean
}

/** A constant size, or a responsive pair: `base` while stacked, `md` in the row. */
export type ButtonGroupSize = ButtonSize | { base: ButtonSize; md: ButtonSize }

/**
 * The pinned primary action. A button or split action that also accepts an
 * optional `variant`: `"outline"` renders it as an outline button while keeping
 * it pinned (never shed into the "⋯" menu). @default variant "default"
 */
export type ButtonGroupPrimaryAction = (
  | ButtonGroupButton
  | ButtonGroupSplitAction
) & {
  variant?: "default" | "outline"
}

export interface ButtonGroupProps {
  /**
   * The single primary action. A single object structurally guarantees ≤1 primary.
   * Set `variant: "outline"` to render it as an outline button while keeping it
   * pinned (never shed into the "⋯" menu) — for a lone CTA that shouldn't carry
   * full primary weight. @default variant "default"
   */
  primaryAction?: ButtonGroupPrimaryAction
  /** Secondary actions (buttons / split buttons / inline separators), or a single link. */
  secondaryActions?: ButtonGroupSecondaryItem[] | ButtonGroupSecondaryLink
  /** Extra actions, always reachable through the "⋯" menu (supports separators / critical). */
  otherActions?: DropdownItem[]
  /** Button + menu-trigger size. Responsive `{ base, md }` flips with `stack`. @default "md" */
  size?: ButtonGroupSize
  /** Pixel gap between items. @default 8 */
  gap?: number
  /** Row alignment. @default "end" */
  align?: "end" | "between"
  /** Stack into a column below the named viewport / container breakpoint. @default "none" */
  stack?: "none" | "sm" | "md" | "container-md"
  /** Stretch every item to full width while stacked. */
  fullWidthOnStack?: boolean
  /** Reverse the stacked column so the primary lands on top. */
  reverseOnStack?: boolean
  /**
   * When `false`, secondary buttons never shed into the "⋯" menu — they always
   * render inline (e.g. a confirm/reject pair that must never collapse).
   * `otherActions` still populate the menu when present. @default true
   */
  canOverflow?: boolean
  className?: string
}

const BREAKPOINT_PX = { sm: 640, md: 768, "container-md": 448 } as const

const isInlineSeparator = (
  item: ButtonGroupSecondaryItem
): item is ButtonGroupInlineSeparator =>
  "type" in item && item.type === "separator"

const isSplitAction = (
  item: ButtonGroupSecondaryItem | ButtonGroupButton | ButtonGroupSplitAction
): item is ButtonGroupSplitAction => "type" in item && item.type === "split"

const isPlainButton = (
  item: ButtonGroupSecondaryItem
): item is ButtonGroupButton => !("type" in item)

const renderActionButton = (
  action: ButtonGroupButton,
  size: ButtonSize,
  variant: "default" | "outline"
) => (
  <F0Button
    key={action.id}
    label={action.label}
    icon={action.icon}
    iconPosition={action.iconPosition}
    variant={action.critical ? "critical" : variant}
    size={size}
    disabled={action.disabled}
    loading={action.loading}
    hideLabel={action.hideLabel}
    tooltip={action.tooltip}
    {...(action.href != null
      ? { href: action.href, target: action.target }
      : { onClick: action.onClick })}
  />
)

const renderSplitButton = (
  action: ButtonGroupSplitAction,
  size: ButtonSize,
  variant: "default" | "outline"
) => {
  const { id, type: _type, ...rest } = action
  return (
    <F0ButtonDropdown
      key={id}
      {...(rest as F0ButtonDropdownProps)}
      size={size}
      variant={variant}
    />
  )
}

const renderSecondaryLink = (
  link: ButtonGroupSecondaryLink,
  size: ButtonSize
) => (
  <F0Button
    key="secondary-link"
    label={link.label}
    variant="outline"
    size={size}
    disabled={link.disabled}
    href={link.href}
    target={link.target}
  />
)

const renderPrimaryNode = (
  action: ButtonGroupPrimaryAction,
  size: ButtonSize
) => {
  const variant = action.variant ?? "default"
  return isSplitAction(action)
    ? renderSplitButton(action, size, variant)
    : renderActionButton(action, size, variant)
}

interface ButtonGroupBranchProps {
  primaryAction?: ButtonGroupPrimaryAction
  secondaryItems: ButtonGroupSecondaryItem[]
  secondaryLink?: ButtonGroupSecondaryLink
  otherActions: DropdownItem[]
  size: ButtonSize
  gap: number
  align: "end" | "between"
  canOverflow: boolean
}

/**
 * A data-driven, responsive action bar. Pass actions as props — `primaryAction`
 * (solid, pinned at the trailing edge), `secondaryActions` (outline buttons that
 * shed into a "⋯" menu when they don't fit), and `otherActions` (always in that
 * menu). Set `stack` to collapse into a full-width column below a breakpoint,
 * where the menu becomes a mobile drawer.
 *
 * Behavior notes:
 * - Split-button secondaries and the primary are pinned (never shed); plain
 *   secondaries shed first under width pressure.
 * - An inline `{ type: "separator" }` renders a hairline between two visible
 *   secondaries; as the last secondary it becomes the divider before the primary.
 *   Separators are hidden while stacked.
 *
 * The row and stacked branches are separate, keyed children: the stable outer
 * element keeps measuring the container width, while the overflow machinery
 * (which needs its DOM present when it initializes) mounts fresh with whichever
 * branch is active.
 */
export function ButtonGroup({
  primaryAction,
  secondaryActions,
  otherActions = [],
  size = "md",
  gap = 8,
  align = "end",
  stack = "none",
  fullWidthOnStack = false,
  reverseOnStack = false,
  canOverflow = true,
  className,
}: ButtonGroupProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const { width: containerWidth = 0 } = useResizeObserver({
    ref: rootRef,
    box: "border-box",
  })
  const viewportBreakpoint =
    stack === "sm" || stack === "md" ? BREAKPOINT_PX[stack] : BREAKPOINT_PX.md
  // SSR-safe: render the stacked branch first, reconcile on the client (avoids a
  // hydration mismatch). Matches the explicit-option convention used repo-wide.
  const isViewportRow = useMediaQuery(`(min-width: ${viewportBreakpoint}px)`, {
    initializeWithValue: false,
  })

  const isRowMode =
    stack === "none"
      ? true
      : stack === "container-md"
        ? containerWidth >= BREAKPOINT_PX["container-md"]
        : isViewportRow

  const sizeBase = typeof size === "string" ? size : size.base
  const sizeMd = typeof size === "string" ? size : size.md
  const resolvedSize: ButtonSize = isRowMode ? sizeMd : sizeBase

  const secondaryItems: ButtonGroupSecondaryItem[] = Array.isArray(
    secondaryActions
  )
    ? secondaryActions
    : []
  const secondaryLink =
    secondaryActions != null && !Array.isArray(secondaryActions)
      ? secondaryActions
      : undefined

  const branchProps: ButtonGroupBranchProps = {
    primaryAction,
    secondaryItems,
    secondaryLink,
    otherActions,
    size: resolvedSize,
    gap,
    align,
    canOverflow,
  }

  return (
    <div
      ref={rootRef}
      role="group"
      className={cn(
        isRowMode
          ? // Keep the pinned trailing items (splits, divider, primary) at their
            // natural width; only the first child — the flex-1 cluster — shrinks,
            // so the title truncates against it rather than squeezing the buttons.
            "flex w-full items-center [&>*:not(:first-child)]:shrink-0"
          : buttonGroupVariants({
              align,
              stack,
              fullWidthOnStack,
              reverseOnStack,
            }),
        className
      )}
      style={{ gap }}
    >
      {isRowMode ? (
        <ButtonGroupRow key="row" {...branchProps} />
      ) : (
        <ButtonGroupStacked key="stacked" {...branchProps} />
      )}
    </div>
  )
}

/** Stacked (column) branch: everything visible, the menu is a mobile drawer. */
function ButtonGroupStacked({
  primaryAction,
  secondaryItems,
  secondaryLink,
  otherActions,
  size,
}: ButtonGroupBranchProps) {
  const stackedSecondaries = secondaryItems
    .filter(
      (item): item is ButtonGroupButton | ButtonGroupSplitAction =>
        !isInlineSeparator(item)
    )
    .map((item) =>
      isSplitAction(item)
        ? renderSplitButton(item, size, "outline")
        : renderActionButton(item, size, "outline")
    )

  return (
    <>
      {otherActions.length > 0 && <MobileDropdown items={otherActions} />}
      {stackedSecondaries}
      {secondaryLink && renderSecondaryLink(secondaryLink, size)}
      {primaryAction && renderPrimaryNode(primaryAction, size)}
    </>
  )
}

/** Row branch: width-measured overflow of plain secondaries into a "⋯" Dropdown. */
function ButtonGroupRow({
  primaryAction,
  secondaryItems,
  secondaryLink,
  otherActions,
  size,
  gap,
  align,
  canOverflow,
}: ButtonGroupBranchProps) {
  // Only plain buttons are width-measured; splits + separators are pinned/excluded.
  // Memoized so the reference is stable across renders — a fresh array would
  // change useOverflowCalculation's callback identity and loop ("Maximum update
  // depth exceeded").
  const plainSecondaries = useMemo(
    () => secondaryItems.filter(isPlainButton),
    [secondaryItems]
  )

  const {
    containerRef,
    measurementContainerRef,
    customOverflowIndicatorRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(plainSecondaries, gap)

  // `inert` isn't a typed JSX prop in this React version, so set it on the
  // measurement copy imperatively — it removes the copy from focus + a11y.
  useEffect(() => {
    measurementContainerRef.current?.setAttribute("inert", "")
  }, [measurementContainerRef])

  // Before the first measurement, optimistically show everything to avoid a flash.
  // When `canOverflow` is false the group never sheds: every secondary stays
  // inline and nothing is measured away into the "⋯" menu.
  const shownPlain = !canOverflow
    ? plainSecondaries
    : isInitialized
      ? visibleItems
      : plainSecondaries
  const overflowedPlain = !canOverflow ? [] : isInitialized ? overflowItems : []
  const shownIds = new Set(shownPlain.map((action) => action.id))

  const primaryNode = primaryAction
    ? renderPrimaryNode(primaryAction, size)
    : null
  const splitSecondaries = secondaryItems.filter(isSplitAction)
  const lastItem = secondaryItems[secondaryItems.length - 1]
  const dividerBeforePinned =
    lastItem != null &&
    isInlineSeparator(lastItem) &&
    (splitSecondaries.length > 0 || primaryNode != null)

  // Cluster = plain secondaries (those that fit) interleaved with inline
  // separators; splits are pinned to the right alongside the primary.
  const clusterTokens: Array<
    { kind: "node"; node: ReactNode } | { kind: "sep"; key: string }
  > = []
  secondaryItems.forEach((item, index) => {
    if (isSplitAction(item)) return
    if (isInlineSeparator(item)) {
      clusterTokens.push({ kind: "sep", key: `sep-${index}` })
      return
    }
    if (shownIds.has(item.id)) {
      clusterTokens.push({
        kind: "node",
        node: renderActionButton(item, size, "outline"),
      })
    }
  })
  // Drop separators that aren't between two rendered nodes.
  const cleanedTokens = clusterTokens.filter(
    (token, index) =>
      token.kind === "node" ||
      (clusterTokens[index - 1]?.kind === "node" &&
        clusterTokens[index + 1]?.kind === "node")
  )

  const menuItems: DropdownItem[] = [
    ...overflowedPlain.map(
      (action): DropdownItem => ({
        label: action.label,
        icon: action.icon,
        onClick: action.onClick,
        href: action.href,
        critical: action.critical,
      })
    ),
    ...(overflowedPlain.length > 0 && otherActions.length > 0
      ? [{ type: "separator" } as DropdownItem]
      : []),
    ...otherActions,
  ]

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          // `[&>*]:shrink-0` keeps each rendered secondary, separator, link and
          // the "⋯" trigger at its natural width: the row overflows by shedding
          // into the menu, never by squeezing a button to nothing.
          "relative flex min-w-0 flex-1 items-center [&>*]:shrink-0",
          align === "end" && "justify-end"
        )}
        style={{ gap }}
      >
        {/* Hidden measurement copy, used to compute the visible/overflow split.
            Skipped when the group can't overflow — nothing is ever measured away. */}
        {canOverflow && (
          <div
            ref={measurementContainerRef}
            aria-hidden="true"
            className="pointer-events-none invisible absolute left-0 top-0 flex items-center whitespace-nowrap"
            style={{ gap }}
          >
            {plainSecondaries.map((action) =>
              renderActionButton(action, size, "outline")
            )}
          </div>
        )}

        {menuItems.length > 0 && (
          <div ref={customOverflowIndicatorRef}>
            <Dropdown items={menuItems} icon={Ellipsis} size={size} />
          </div>
        )}

        {cleanedTokens.map((token) =>
          token.kind === "sep" ? (
            <ButtonGroupSeparator key={token.key} />
          ) : (
            token.node
          )
        )}

        {secondaryLink && renderSecondaryLink(secondaryLink, size)}
      </div>

      {splitSecondaries.map((action) =>
        renderSplitButton(action, size, "outline")
      )}
      {dividerBeforePinned && <ButtonGroupSeparator />}
      {primaryNode}
    </>
  )
}

/**
 * Vertical hairline that divides logical groups inside a **row-layout**
 * `ButtonGroup`. Rendered for inline `{ type: "separator" }` entries; hidden
 * while the group is stacked into a column.
 */
export function ButtonGroupSeparator() {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className="h-4 w-px self-center bg-f1-border-secondary"
    />
  )
}
