import { CSSProperties, Fragment, ReactNode, useRef } from "react"
import { useResizeObserver } from "usehooks-ts"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { ClockBack, Cross } from "@/icons/app"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { StatusVariant } from "@/components/tags/F0TagStatus"
import {
  Collapse,
  collapseProgress,
  fade,
  isScrollLinked,
  lerp,
  px,
} from "@/experimental/Information/Headers/BaseHeader/collapse"
import { Description } from "@/experimental/Information/Headers/BaseHeader/Description"
import {
  Metadata,
  MetadataAction,
  MetadataProps,
} from "@/experimental/Information/Headers/Metadata"
import {
  PrimaryAction,
  PrimaryActionButton,
  PrimaryDropdownAction,
  SecondaryAction,
} from "@/experimental/Information/utils"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export type HeaderSecondaryButtonAction = SecondaryAction & {
  hideLabel?: boolean
}

export type HeaderSecondaryDropdownAction = PrimaryDropdownAction<string> & {
  variant?: "outline"
}

export type HeaderSecondaryAction =
  | HeaderSecondaryButtonAction
  | HeaderSecondaryDropdownAction

interface BaseHeaderProps {
  title: string
  deactivated?: boolean
  avatar?:
    | {
        type: "generic"
        name: string
        src?: string
      }
    | AvatarVariant

  description?: string
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  otherActions?: (DropdownItem & { isVisible?: boolean })[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
    actions?: MetadataAction[]
  }
  metadata?: MetadataProps["items"]
  metadataRowGap?: MetadataProps["rowGap"]
  /**
   * Condenses the header to its identity: the metadata fades and collapses
   * away, the avatar drops two sizes, and the title and role step down a size
   * each.
   *
   * Pass a number between 0 and 1 to drive it from scroll position, which is
   * what `F0ResourcePage` does: the sizes then follow the scroll exactly, so
   * nothing under the header lags behind it. `true` is the same as 1, for a
   * header that is simply shown condensed, and it tweens instead.
   */
  collapsed?: Collapse
  /** Renders a 1px bottom border at the very bottom of the header. */
  showBottomBorder?: boolean
  /** When set, renders a history button in the header actions that calls this on click. */
  onHistoryClick?: () => void
  /** When set, renders a close button in the header actions that calls this on click. */
  onClose?: () => void
}

const isVisible = (action: { isVisible?: boolean }) =>
  action.isVisible !== false

export function BaseHeader({
  title,
  avatar,
  deactivated,
  description,
  primaryAction,
  secondaryActions = [],
  otherActions = [],
  status,
  metadata = [],
  metadataRowGap = "none",
  collapsed = false,
  showBottomBorder = false,
  onHistoryClick,
  onClose,
}: BaseHeaderProps) {
  const i18n = useI18n()
  const allMetadata: BaseHeaderProps["metadata"] = [
    status && {
      label: status.label,
      value: {
        type: "status" as const,
        label: status.text,
        variant: status.variant,
      },
      actions: status.actions,
      hideLabel: true,
    },
    ...metadata,
  ]

  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isVisible)
  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0

  const isPrimaryDropdownAction = (
    action: PrimaryAction | undefined
  ): action is PrimaryDropdownAction<string> => {
    return !!action && "items" in action
  }

  const isPrimaryActionButton = (
    action: PrimaryAction | undefined
  ): action is PrimaryActionButton => {
    return !!action && "label" in action && !("items" in action)
  }

  const getSecondaryActionKey = (
    action: HeaderSecondaryAction,
    index: number
  ) => {
    const actionKey = isSecondaryDropdownAction(action)
      ? `${action.value ?? "default"}-${action.items.map((item) => item.value).join("-")}`
      : action.label

    return `${actionKey}-${index}`
  }

  const progress = collapseProgress(collapsed)
  /*
   * Scroll-linked, there is no transition at all. Every size here is a function
   * of `progress`, so one scroll event sets all of them in the same commit and
   * they land on the same frame by construction. Easing them was worse than the
   * uneven scroll it was meant to smooth: `transform` animates on the
   * compositor while `font-size`, `width` and `height` animate on the main
   * thread, so the avatar's scale and the box holding it drifted apart under
   * load and the avatar rode out over the title.
   *
   * Switched by a boolean there is no gesture to keep up with and nothing to
   * stay in step with frame by frame, so that case still tweens.
   */
  const tween = isScrollLinked(collapsed)
    ? undefined
    : "transition-[font-size,line-height,gap,padding,margin,grid-template-rows,opacity,width,height,transform,top] duration-150 ease-out motion-reduce:transition-none"

  const identityRef = useRef<HTMLDivElement>(null)
  const { height: identityHeight } = useResizeObserver({ ref: identityRef })
  const avatarSize = lerp(56, 32, progress)
  /*
   * Condensed, the name and the role read as one line of identity and the
   * avatar reads as the bullet on it, so it centres on the pair rather than
   * hanging from the top of the name. Open it hangs from the top, which is
   * where a 56px avatar belongs against a 22px title.
   *
   * The identity column's height is measured because CSS cannot express this
   * offset on its own: a percentage `top` resolves against the containing
   * block, which is the whole row and not the column, and comes to nothing
   * when that height is content-driven. The measurement is a frame behind
   * while the text sizes are changing, but the height it tracks moves a few
   * pixels across the entire gesture, so the lag is invisible.
   */
  const avatarOffset =
    Math.max(0, ((identityHeight ?? 0) - avatarSize) / 2) * progress

  return (
    <div
      style={{ paddingBottom: px(lerp(20, 12, progress)) }}
      className={cn(
        // No `gap` between the identity row and the metadata: the metadata row
        // owns that spacing as padding, so it can animate away with the row
        // instead of leaving a gap behind when the header condenses.
        "resource-header px-page flex flex-col pt-3",
        tween,
        // `border-0` zeroes all sides first so this renders bottom-only even in apps that
        // don't load the Tailwind preflight border reset (otherwise `border-solid` would
        // light up all four sides at the CSS-initial `medium` width).
        showBottomBorder &&
          "border-0 border-b border-solid border-f1-border-secondary"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start justify-start gap-4 md:flex-row",
          !description && "md:items-center"
        )}
      >
        <div
          className={cn(
            "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",
            !description && "md:items-center"
          )}
        >
          {avatar && (
            // Rendered at `xl` and scaled down to `md`'s 32px rather than
            // swapped between sizes: a size step is a class change, which can
            // only jump or tween, and both of those lag the scroll. The box
            // shrinks with the scale, so the layout follows.
            <div
              style={
                {
                  width: px(avatarSize),
                  height: px(avatarSize),
                  "--avatar-offset": px(avatarOffset),
                } as CSSProperties
              }
              // The centring only lands from `md` up, where the avatar and the
              // identity sit side by side. Stacked below that the avatar is
              // above the text and there is nothing to centre against.
              className={cn(
                "flex shrink-0 items-start md:translate-y-[var(--avatar-offset)]",
                tween
              )}
            >
              <div
                style={{
                  transform: `scale(${lerp(1, 32 / 56, progress)})`,
                  transformOrigin: "top left",
                }}
                className={tween}
              >
                <F0Avatar
                  avatar={{
                    ...(avatar.type === "generic"
                      ? { ...avatar, type: "company" }
                      : avatar),
                  }}
                  size="xl"
                />
              </div>
            </div>
          )}
          <div
            ref={identityRef}
            // Condensed, the name and the role read as one line of identity, so
            // the gap between them closes.
            style={{ gap: px(lerp(4, 0, progress)) }}
            className={cn("flex flex-col", tween)}
          >
            <span
              // From the large heading type down to the heading type.
              style={{
                fontSize: px(lerp(22, 16, progress)),
                lineHeight: px(lerp(28, 24, progress)),
              }}
              className={cn(
                "font-semibold",
                tween,
                deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
              )}
            >
              {title}
            </span>
            {description && (
              <Description
                description={description}
                progress={progress}
                tween={tween}
              />
            )}
          </div>
        </div>

        {allMetadata.length > 0 && (
          <Collapsible
            progress={progress}
            tween={tween}
            // Stacked on mobile, so collapsing the row leaves the flex gap on
            // both sides of it. The negative margin eats the spare one.
            style={{ marginTop: px(lerp(0, -16, progress)) }}
            className="md:hidden"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Metadata items={allMetadata} rowGap={metadataRowGap} />
            </div>
          </Collapsible>
        )}

        <div className="flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden">
          {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0ButtonDropdown
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}

          {visibleSecondaryActions.map((action, index) => (
            <Fragment key={getSecondaryActionKey(action, index)}>
              <div className="w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full">
                {isSecondaryDropdownAction(action) ? (
                  <F0ButtonDropdown
                    items={action.items}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    value={action.value}
                    size="lg"
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                ) : (
                  <F0Button
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    size="lg"
                    hideLabel={action.hideLabel}
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                )}
              </div>
            </Fragment>
          ))}

          {visibleOtherActions.length > 0 && (
            <div className="w-full [&>*]:w-full [&_button]:w-full">
              <MobileDropdown items={visibleOtherActions} />
            </div>
          )}
          {onHistoryClick && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0Button
                label={i18n.actions.history}
                icon={ClockBack}
                variant="outline"
                size="lg"
                onClick={onHistoryClick}
              />
            </div>
          )}
          {onClose && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0Button
                label={i18n.actions.close}
                icon={Cross}
                variant="outline"
                size="lg"
                onClick={onClose}
              />
            </div>
          )}
        </div>

        <div className="-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto">
          {onHistoryClick && (
            <div className="hidden md:block">
              <F0Button
                label={i18n.actions.history}
                hideLabel
                icon={ClockBack}
                variant="outline"
                onClick={onHistoryClick}
              />
            </div>
          )}
          {visibleOtherActions.length > 0 && (
            <div>
              <Dropdown items={visibleOtherActions} />
            </div>
          )}
          {visibleSecondaryActions.map((action, index) => (
            <Fragment key={getSecondaryActionKey(action, index)}>
              <div className="hidden md:block">
                {isSecondaryDropdownAction(action) ? (
                  <F0ButtonDropdown
                    items={action.items}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    value={action.value}
                    size="md"
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                ) : (
                  <F0Button
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    hideLabel={action.hideLabel}
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                )}
              </div>
            </Fragment>
          ))}
          {isPrimaryActionVisible &&
            (hasSecondaryActions || hasOtherActions) && (
              <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
            )}
          {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
            <div className="hidden md:block">
              <F0Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="hidden md:block">
              <F0ButtonDropdown
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="md"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
          {onClose && (
            <>
              <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
              <div className="hidden md:block">
                <F0Button
                  label={i18n.actions.close}
                  hideLabel
                  icon={Cross}
                  variant="outline"
                  onClick={onClose}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {allMetadata.length > 0 && (
        <Collapsible
          progress={progress}
          tween={tween}
          // The spacing that used to be the root's `gap-3`, so it goes away
          // with the row rather than after it.
          style={{ paddingTop: px(lerp(12, 0, progress)) }}
          className="hidden md:grid"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Metadata items={allMetadata} rowGap={metadataRowGap} />
          </div>
        </Collapsible>
      )}
    </div>
  )
}

/**
 * Collapses its content to nothing and back over `progress`, without anyone
 * having to know how tall the content is: an interpolated `fr` row does it, the
 * same trick as the sidebar's tab labels but read continuously rather than
 * switched. A `max-height` would need the number.
 */
function Collapsible({
  progress,
  tween,
  style,
  className,
  children,
}: {
  progress: number
  tween?: string
  style?: CSSProperties
  className?: string
  children: ReactNode
}) {
  /*
   * The row clips at its bottom edge as it closes, and while the opacity fade
   * below covers the end of the collapse, a row still readable on the way
   * there would be sliced by a straight line. So the pixels above the clip
   * fade to transparent through a mask, the same gradient trick the carousels
   * use on their scroll edges. The band ramps in over the first quarter of
   * the collapse rather than appearing at once, so the fully open row is not
   * masked at all and the first tick of scrolling does not pop.
   */
  const maskBand = px(lerp(0, 24, Math.min(1, progress * 4)))
  const mask = `linear-gradient(to bottom, black calc(100% - ${maskBand}), transparent 100%)`

  return (
    <div
      style={{ ...style, gridTemplateRows: `${1 - progress}fr` }}
      className={cn("grid", tween, className)}
      // Nothing inside is reachable once it is closed, by keyboard or by
      // screen reader, and it is still there to open back up.
      aria-hidden={progress === 1 || undefined}
    >
      <div
        // Faded out ahead of the collapse finishing, so the last few pixels of
        // the row do not read as text being sliced off.
        style={{
          opacity: fade(progress),
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
        className={cn("min-h-0 overflow-hidden", tween)}
      >
        {children}
      </div>
    </div>
  )
}

export const isSecondaryDropdownAction = (
  action: HeaderSecondaryAction
): action is HeaderSecondaryDropdownAction => {
  return "items" in action
}
