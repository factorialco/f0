import { F0Link } from "@/components/F0Link"
import { Image } from "@/components/Utilities/Image"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { cn, focusRing } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/ui/Card"
import { Skeleton } from "@/ui/skeleton"
import { type ReactNode, forwardRef, useRef } from "react"
import { OneEllipsis } from "../OneEllipsis/OneEllipsis"
import {
  CardActions,
  type CardPrimaryAction,
  type CardSecondaryAction,
  type CardSecondaryLink,
} from "./components/CardActions"
import { CardAvatar, type CardAvatarVariant } from "./components/CardAvatar"
import { CardMetadata } from "./components/CardMetadata"
import { CardOptions } from "./components/CardOptions"
import { type CardMetadata as CardMetadataType } from "./types"

export interface CardInternalProps {
  /**
   * Whether the card has a compact layout
   */
  compact?: boolean

  /**
   * The avatar to display in the card
   */
  avatar?: CardAvatarVariant

  /**
   * Whether the card has an image
   */
  image?: string

  /**
   * The title of the card
   */
  title?: string

  /**
   * The description of the card
   */
  description?: string

  /**
   * Metadata items to display in the card
   */
  metadata?: CardMetadataType[]

  /**
   * The children to display in the card
   */
  children?: ReactNode

  /**
   * The link to navigate to when the card is clicked
   */
  link?: string

  /**
   * The primary action that displays a primary button in the card footer
   */
  primaryAction?: CardPrimaryAction

  /**
   * The secondary actions - either an array of button actions or a single link
   */
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink

  /**
   * Actions to display in the dropdown menu inside the card content
   */
  otherActions?: DropdownItem[]

  /**
   * Whether the card is selectable
   */
  selectable?: boolean

  /**
   * Whether the card is selected
   */
  selected?: boolean

  /**
   * The callback to handle the selection of the card
   */
  onSelect?: (selected: boolean) => void

  /**
   * The callback to handle the click of the card
   */
  onClick?: () => void

  /**
   * Force vertical metadata for compact layout
   * Private prop
   */
  forceVerticalMetadata?: boolean

  /**
   * Whether the card should have a full height
   */
  fullHeight?: boolean

  /**
   * When true, disables the full-card overlay link so parent components
   * can manage drag-and-drop while still allowing click navigation via onClick
   */
  disableOverlayLink?: boolean
}

export const CardInternal = forwardRef<HTMLDivElement, CardInternalProps>(
  function CardInternal(
    {
      compact = false,
      avatar,
      image,
      title,
      description,
      metadata,
      children,
      link,
      primaryAction,
      secondaryActions,
      otherActions,
      selectable = false,
      selected = false,
      onSelect,
      onClick,
      forceVerticalMetadata = false,
      fullHeight = false,
      disableOverlayLink = false,
    },
    ref
  ) {
    const linkRef = useRef<HTMLAnchorElement>(null)

    const emulateLinkClick = (
      e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
    ) => {
      linkRef?.current?.click()
      onClick?.()
      e.preventDefault()
      e.stopPropagation()
    }
    return (
      <Card
        className={cn(
          "group relative bg-f1-background shadow-none transition-all",
          compact && "p-3",
          fullHeight && "h-full",
          (selectable || (otherActions && otherActions.length > 0)) &&
            !selected &&
            "hover:border-f1-border",
          link &&
            "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md",
          selected &&
            "border-f1-border-selected bg-f1-background-selected-secondary"
        )}
        onClick={onClick}
        data-testid="card"
        ref={ref}
      >
        {link && !disableOverlayLink && (
          <F0Link
            href={link}
            variant="unstyled"
            className={cn("z-1 absolute inset-0 block rounded-xl", focusRing())}
            aria-label={title}
            ref={linkRef}
          >
            &nbsp;
          </F0Link>
        )}

        {image && (
          <div
            className={cn(
              "relative -mx-3 -mt-3 mb-4 h-32 overflow-hidden rounded-md",
              compact && "-mx-2 -mt-2 mb-3"
            )}
          >
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
            <CardOptions
              otherActions={otherActions}
              selectable={selectable}
              selected={selected}
              onSelect={onSelect}
              title={title}
              overlay
            />
          </div>
        )}

        <div className="flex grow flex-col gap-2">
          <div className="flex flex-row items-start justify-between gap-1">
            <CardHeader
              {...(!disableOverlayLink
                ? {
                    onClick: (e) => {
                      emulateLinkClick(e)
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        emulateLinkClick(e)
                      }
                    },
                    role: "button",
                    "aria-label": title,
                  }
                : {})}
              className={cn(
                "relative flex-col gap-0 p-0",
                image && !compact && "pt-3",
                compact && "flex-row items-center gap-2"
              )}
            >
              {avatar && (
                <CardAvatar
                  avatar={avatar}
                  overlay={!!image}
                  compact={compact}
                />
              )}
              <div className={cn("flex flex-col gap-0")}>
                <CardTitle
                  className={cn(
                    "text-lg font-semibold text-f1-foreground",
                    compact && "line-clamp-1 text-base"
                  )}
                >
                  {title}
                </CardTitle>
                {description && (
                  <CardSubtitle
                    className={cn("text-base text-f1-foreground-secondary")}
                  >
                    <OneEllipsis lines={compact ? 2 : 3}>
                      {description}
                    </OneEllipsis>
                  </CardSubtitle>
                )}
              </div>
            </CardHeader>
            {!image && (
              <CardOptions
                otherActions={otherActions}
                selectable={selectable}
                selected={selected}
                onSelect={onSelect}
                title={title}
              />
            )}
          </div>
          {(metadata || children) && (
            <CardContent className="pointer-events-none">
              {metadata && (
                <div
                  className={cn(
                    "flex flex-col gap-0.5",
                    compact && "gap-x-3 gap-y-0",
                    forceVerticalMetadata && "flex-col gap-y-0.5"
                  )}
                >
                  {metadata.map((item, index) => (
                    <CardMetadata key={index} metadata={item} />
                  ))}
                </div>
              )}
              {children}
            </CardContent>
          )}
        </div>
        <CardActions
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          compact={compact}
        />
      </Card>
    )
  }
)

export const CardSkeleton = ({ compact = false }: { compact?: boolean }) => {
  return (
    <Card
      className={cn(
        "group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none",
        compact && "p-3"
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <CardHeader
        className={cn(
          "flex flex-col gap-2.5 p-0",
          compact && "flex-row items-center gap-2"
        )}
      >
        <Skeleton
          className={cn("h-10 w-10 rounded-full", compact && "h-6 w-6")}
        />
        <div
          className={cn(
            "flex flex-col gap-0",
            compact && "flex-row items-center gap-1.5"
          )}
        >
          <CardTitle className="flex h-6 items-center">
            <Skeleton className={cn("h-4 w-20 rounded-md", compact && "h-3")} />
          </CardTitle>
          <CardSubtitle className="flex h-5 items-center">
            <Skeleton className="h-3 w-12 rounded-md" />
          </CardSubtitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex h-6 items-center gap-1.5">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-3 w-full max-w-20 rounded-md" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
