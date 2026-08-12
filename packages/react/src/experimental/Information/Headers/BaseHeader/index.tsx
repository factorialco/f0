import { CSSProperties, Fragment, useRef } from "react"
import { useResizeObserver } from "usehooks-ts"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
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
import { useHeaderCollapse } from "@/lib/providers/headerCollapse"
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
   * Renders the header condensed: the metadata closes away, the avatar drops two
   * sizes, and the name and role each step down a size.
   *
   * For a header with no scrolling page around it, such as one in a dialog.
   * Inside `Page` the header already condenses as the reader scrolls, and this
   * is not how that is controlled: passing `false` does not switch it off, and
   * there is deliberately no way to do so. Every resource page in the product
   * condenses over the same distance, and nothing here can change that.
   */
  collapsed?: boolean
  /** Renders a 1px bottom border at the very bottom of the header. */
  showBottomBorder?: boolean
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
  collapsed,
  showBottomBorder = false,
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

  /*
   * How far to condense. A container that owns both the header's position and
   * the page's scrolling provides this, which today means `Navigation/Page`.
   *
   * `collapsed` can only ever add to it. Reading `false` as an override would
   * hand every page an opt-out, and the reason the number arrives by context
   * rather than as a prop is that no page should be able to condense
   * differently from any other.
   */
  const scrollProgress = useHeaderCollapse()
  const collapse: Collapse = collapsed === true ? true : scrollProgress
  const progress = collapseProgress(collapse)

  /*
   * Following a scroll, there is no transition at all. Every size below is a
   * function of `progress`, so one scroll event sets all of them in the same
   * commit and they land on the same frame by construction. Easing them was
   * worse than the uneven scroll it was meant to smooth: `transform` animates on
   * the compositor while `font-size`, `width` and `height` animate on the main
   * thread, so the avatar's scale and the box holding it drifted apart under
   * load and the avatar rode out over the title.
   *
   * Switched by the prop there is no gesture to keep up with and nothing to stay
   * in step with frame by frame, so that case tweens.
   */
  const tween = isScrollLinked(collapse)
    ? undefined
    : "transition-[font-size,line-height,gap,padding,opacity,width,height,transform] duration-150 ease-out motion-reduce:transition-none"

  const identityRef = useRef<HTMLDivElement>(null)
  const { height: identityHeight } = useResizeObserver({ ref: identityRef })
  const metadataRef = useRef<HTMLDivElement>(null)
  const { height: metadataHeight } = useResizeObserver({ ref: metadataRef })

  const avatarSize = lerp(56, 32, progress)
  /*
   * Condensed, the name and the role read as one line of identity and the avatar
   * reads as the bullet on it, so it centres on the pair rather than hanging from
   * the top of the name. Open it hangs from the top, which is where a 56px avatar
   * belongs against a 22px title.
   *
   * The identity column's height is measured because CSS cannot express this
   * offset on its own: a percentage `top` resolves against the containing block,
   * which is the whole row and not the column, and comes to nothing when that
   * height is content-driven. The measurement is a frame behind while the text
   * sizes are changing, but the height it tracks moves a few pixels across the
   * entire gesture, so the lag is invisible.
   */
  const avatarOffset =
    Math.max(0, ((identityHeight ?? 0) - avatarSize) / 2) * progress

  /*
   * Whether anything is actually condensed yet.
   *
   * Nothing below is expressed inline until this is true, and at rest the header
   * renders the same classes it always did. That is not tidiness, it is the only
   * way the promise holds that a hundred existing call sites are untouched:
   *
   *   - The type classes carry more than a size. `text-2xl` and `text-lg` also set
   *     `letter-spacing`, and they size in rem so the header follows the root font
   *     size. An inline `fontSize` in px silently drops both.
   *   - Inline styles outrank the cascade. `F0Dialog` and the drawers cancel this
   *     header's padding with `[&_.resource-header]:p-0`, which beats a class and
   *     loses to an inline style, so an unconditional inline padding would put it
   *     back.
   *   - `xl` is not 56px for every avatar variant, so an explicit box is only safe
   *     once we are the ones deciding the size.
   *   - A `transform`, even `scale(1)`, makes an element a stacking context and a
   *     containing block for absolutely positioned descendants.
   */
  const condensing = progress > 0

  return (
    <div
      style={
        condensing ? { paddingBottom: px(lerp(20, 12, progress)) } : undefined
      }
      className={cn(
        "resource-header px-page flex flex-col pt-3",
        // While condensing, the 12px between the identity row and the metadata
        // moves onto the metadata row as padding so it can close along with the
        // row instead of leaving a hole behind. At rest it stays a `gap` here,
        // which is exactly what shipped.
        !condensing && "gap-3 pb-5",
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
            // Rendered at `xl` and scaled down to `md`'s 32px rather than swapped
            // between sizes: a size step is a class change, which can only jump
            // or tween, and both of those lag the scroll. The box shrinks with
            // the scale, so the layout follows.
            <div
              style={
                condensing
                  ? ({
                      width: px(avatarSize),
                      height: px(avatarSize),
                      "--avatar-offset": px(avatarOffset),
                    } as CSSProperties)
                  : undefined
              }
              // The centring only lands from `md` up, where the avatar and the
              // identity sit side by side. Stacked below that the avatar is above
              // the text and there is nothing to centre against.
              className={cn(
                "flex items-start",
                condensing && "shrink-0 md:translate-y-[var(--avatar-offset)]",
                tween
              )}
            >
              <div
                style={
                  condensing
                    ? {
                        transform: `scale(${lerp(1, 32 / 56, progress)})`,
                        transformOrigin: "top left",
                      }
                    : undefined
                }
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
            style={condensing ? { gap: px(lerp(4, 0, progress)) } : undefined}
            className={cn("flex flex-col", !condensing && "gap-1", tween)}
          >
            <span
              // From the large heading type down to the heading type. Inline only
              // while condensing, so at rest `text-2xl` keeps its letter-spacing
              // and its rem sizing.
              style={
                condensing
                  ? {
                      fontSize: px(lerp(22, 16, progress)),
                      lineHeight: px(lerp(28, 24, progress)),
                    }
                  : undefined
              }
              className={cn(
                "font-semibold",
                !condensing && "text-2xl",
                tween,
                deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
              )}
            >
              {title}
            </span>
            {description && (
              <Description
                description={description}
                progress={condensing ? progress : undefined}
                tween={tween}
              />
            )}
          </div>
        </div>

        {allMetadata.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
            <Metadata items={allMetadata} rowGap={metadataRowGap} />
          </div>
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
        <div
          style={
            condensing
              ? {
                  // The 12px that was the header's own `gap` at rest, now closing
                  // along with the row it belongs to.
                  paddingTop: px(lerp(12, 0, progress)),
                  opacity: fade(progress),
                  // The measured height is the content's; the applied height
                  // includes the padding above it, so the padding is added back
                  // in or the row jumps by 12px and slices its own text on the
                  // first pixel of scroll. Left unset until something has been
                  // measured, since treating "not measured yet" as zero would
                  // close the row for a frame.
                  ...(metadataHeight !== undefined
                    ? {
                        boxSizing: "border-box" as const,
                        height: px(lerp(metadataHeight + 12, 0, progress)),
                        overflow: "hidden",
                      }
                    : {}),
                }
              : undefined
          }
          className={cn(
            "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
            tween
          )}
        >
          {/* Measured here rather than on the row above, whose height is the one
              being animated. */}
          <div ref={metadataRef}>
            <Metadata items={allMetadata} rowGap={metadataRowGap} />
          </div>
        </div>
      )}
    </div>
  )
}

export const isSecondaryDropdownAction = (
  action: HeaderSecondaryAction
): action is HeaderSecondaryDropdownAction => {
  return "items" in action
}
