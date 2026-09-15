import type { IconType } from "@factorialco/f0-react"

import { F0Button, F0Icon } from "@factorialco/f0-react"
import { Counter } from "@factorialco/f0-react/dist/experimental"
import { ChevronRight, Ellipsis } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * The monorepo's Home widget card, ported (Angel, 2026-09-15).
 *
 * Production builds these widgets as declarative specs and hands them to
 * f0's `NewHomeLayout`, whose card is `sds/Home/SlotWidget` over the
 * newer `experimental/Widgets/Widget`. Neither is in the f0 this branch
 * builds against, so the card itself is copied here from f0 `main`
 * (packages/react/src/experimental/Widgets/Widget/index.tsx and
 * sds/Home/SlotWidget/index.tsx), class for class, minus the parts the
 * prototype has no use for: privacy mode, drag handles, skeletons, the
 * AI button and the info flip.
 *
 * Delete this the day f0compose builds against an f0 that ships them.
 */

/**
 * Past this width the card grows its title and its footer button. 480px,
 * so the rail (396px) stays exactly as it is.
 */
const WIDE_WIDGET_PX = 480

/**
 * Measured rather than asked for with a container query, because two of
 * the things that react to it are PROPS rather than classes.
 * `clientWidth`, not a bounding rect: a rect is multiplied by any
 * ancestor's `transform: scale()`.
 */
function useIsWide(ref: React.RefObject<HTMLElement | null>) {
  const [isWide, setIsWide] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === "undefined") return
    const measure = () => setIsWide(element.clientWidth >= WIDE_WIDGET_PX)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])
  return isWide
}

/**
 * The TITLE AS A LINK: title text plus a chevron in one target that
 * behaves like a ghost button. The negative margin with the matching
 * padding keeps the title on the line it sits on when it is NOT a link,
 * so the header does not shift between the two.
 */
const TITLE_LINK_CLASS =
  "-mx-1.5 inline-flex min-w-0 cursor-pointer items-center gap-1 rounded-sm border-none bg-transparent px-1.5 py-0.5 text-left text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"

export type HomeWidgetLink = {
  title: string
  icon?: IconType
  onClick?: () => void
}

export type HomeWidgetAction = {
  label: string
  onClick?: () => void
}

export function HomeWidget({
  title,
  count,
  link,
  actions,
  action,
  fullHeight,
  children,
}: {
  title: string
  count?: number
  /** Makes the TITLE the way in: text plus a chevron, one target. */
  link?: HomeWidgetLink
  /** The header's overflow menu, its top-right corner. */
  actions?: HomeWidgetAction[]
  /** The way OUT, as a named footer button. */
  action?: HomeWidgetAction
  fullHeight?: boolean
  children: ReactNode
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isWide = useIsWide(cardRef)
  const [menuOpen, setMenuOpen] = useState(false)

  // `text-lg font-semibold` IS the design's wide title, token for token.
  const titleClass = `truncate ${isWide ? "text-lg font-semibold" : "text-base font-medium"}`

  return (
    <div
      ref={cardRef}
      role="article"
      className={`relative flex flex-col items-stretch gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4 shadow-[0_1px_2px_0_rgba(13,22,37,0.04)] ${
        fullHeight ? "h-full" : ""
      }`}
    >
      <div className="-mr-1 -mt-1 flex flex-row flex-nowrap items-center justify-between gap-2">
        <div className="flex min-h-6 min-w-0 grow flex-row items-center gap-1">
          {link ? (
            <button
              type="button"
              onClick={link.onClick}
              aria-label={link.title}
              className={TITLE_LINK_CLASS}
            >
              <span className={titleClass}>{title}</span>
              {/* No colour of its own: `currentColor` makes it exactly the
                  title's, so the two read as ONE label. */}
              <F0Icon
                size="sm"
                icon={link.icon ?? ChevronRight}
                color="currentColor"
              />
            </button>
          ) : (
            <span className={`${titleClass} text-f1-foreground`}>{title}</span>
          )}
          {count !== undefined && (
            <div className="ml-0.5">
              <Counter value={count} />
            </div>
          )}
        </div>
        <div className="relative flex flex-row items-center gap-3">
          {actions && actions.length > 0 && (
            <>
              <F0Button
                icon={Ellipsis}
                label="Actions"
                variant="ghost"
                size="sm"
                hideLabel
                onClick={() => setMenuOpen((open) => !open)}
              />
              {menuOpen && (
                <div className="absolute right-0 top-8 z-20 flex min-w-[180px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_8px_28px_-8px_rgba(13,22,37,0.18)]">
                  {actions.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setMenuOpen(false)
                        item.onClick?.()
                      }}
                      className="flex cursor-pointer items-center rounded-sm border-none bg-transparent px-2 py-1.5 text-left text-base text-f1-foreground hover:bg-f1-background-secondary"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4">{children}</div>

      {action && (
        // `-ml-0.5 mt-2`: a row-based slot bleeds 8px past the card's
        // content box, so the frame's gap above the footer is already
        // spent and the rows start 8px to the button's left.
        <div className="-ml-0.5 mt-2 flex items-center gap-2">
          <F0Button
            variant={isWide ? "outline" : "neutral"}
            size={isWide ? "md" : "sm"}
            label={action.label}
            onClick={action.onClick}
          />
        </div>
      )}
    </div>
  )
}
