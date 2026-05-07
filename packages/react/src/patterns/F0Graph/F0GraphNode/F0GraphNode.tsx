import { AnimatePresence, motion } from "motion/react"
import {
  Children,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from "react"

import { cn, focusRing } from "@/lib/utils"

import type { F0GraphNodeProps } from "./types"

import { F0GraphNodeAvatar } from "./components/F0GraphNodeAvatar"
import { F0GraphNodeSubtitle } from "./components/F0GraphNodeSubtitle"
import { F0GraphNodeTitle } from "./components/F0GraphNodeTitle"
import { graphNodeContainerVariants } from "./variants"

function findSlot(
  children: ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>
): ReactElement | null {
  let found: ReactElement | null = null
  Children.forEach(children, (child) => {
    if (found) return
    if (isValidElement(child) && child.type === component) {
      found = child
    } else if (isValidElement(child) && child.props.children) {
      // Recurse into fragments and wrapper elements
      found = findSlot(child.props.children, component)
    }
  })
  return found
}

// CSS transition timing for pill (padding, border-width, transform)
const PILL_TRANSITION =
  "padding 200ms ease-out, border-width 200ms ease-out, transform 200ms ease-out"

// CSS transition timing for text column (width, margin, opacity)
const TEXT_COL_TRANSITION =
  "width 200ms ease-out, margin-left 200ms ease-out, opacity 150ms ease-out"

const F0GraphNodeBase = forwardRef<HTMLDivElement, F0GraphNodeProps>(
  (
    {
      variant = "detail",
      state = "default",
      expanded,
      level,
      hasChildren,
      childrenCount: _childrenCount,
      onExpandToggle,
      onClick,
      children,
    },
    ref
  ) => {
    const avatarSlot = findSlot(children, F0GraphNodeAvatar)
    const titleSlot = findSlot(children, F0GraphNodeTitle)
    const subtitleSlot = findSlot(children, F0GraphNodeSubtitle)
    // Track previous variant to detect dot↔compact transitions.
    // When dot is source or target, framer springs are bypassed and
    // CSS transitions on plain divs handle the visual change instead,
    // eliminating ~600 framer-motion animation instances per transition.
    const prevVariantRef = useRef(variant)
    const isDotTransition =
      prevVariantRef.current !== variant &&
      (variant === "dot" || prevVariantRef.current === "dot")

    // Stable key for AnimatePresence: during dot transitions, keep the
    // previous key so AnimatePresence doesn't trigger mount/unmount
    // on 200+ nodes simultaneously.
    const crossfadeKey = isDotTransition ? prevVariantRef.current : variant

    useEffect(() => {
      prevVariantRef.current = variant
    }, [variant])

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onClick?.()
      }
      if (e.key === "ArrowRight" && hasChildren && !expanded) {
        e.preventDefault()
        onExpandToggle?.()
      }
      if (e.key === "ArrowLeft" && hasChildren && expanded) {
        e.preventDefault()
        onExpandToggle?.()
      }
    }

    const isCompact = variant === "compact"
    const isDot = variant === "dot"

    return (
      <div
        ref={ref}
        role="treeitem"
        tabIndex={0}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-level={level}
        aria-selected={state === "selected"}
        data-zoom-level={variant}
        className={cn(
          graphNodeContainerVariants({ variant, state }),
          focusRing(
            !isDot
              ? "focus-visible:border-f1-border-hover focus-visible:ring-f1-border-hover"
              : undefined
          )
        )}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        {/* Pill — CSS transitions replace framer springs.
            Dot↔compact: 200ms ease-out on padding/border/transform.
            Detail↔compact: only paddingRight changes (16↔24, 8px delta),
            indistinguishable from the previous spring at this magnitude. */}
        <div
          className={cn(
            "inline-flex max-w-full items-center overflow-clip rounded-full border border-solid bg-f1-background backdrop-blur-[7px]",
            isDot ? "border-f1-border-secondary" : "border-f1-border",
            state !== "selected" &&
              !isDot &&
              "hover:border-f1-border-hover hover:bg-f1-background-hover",
            state === "selected" &&
              !isDot &&
              "border-[#07a2ad] shadow-[0px_0px_0px_2px_rgba(7,162,173,0.1)]",
            state === "selected" &&
              isDot &&
              "ring-2 ring-f1-special-ring border-f1-border-selected",
            state === "highlighted" && isDot && "ring-1 ring-f1-border-accent",
            state === "dimmed" && isDot && "opacity-40"
          )}
          style={{
            paddingTop: isDot ? 0 : 6,
            paddingBottom: isDot ? 0 : 6,
            paddingLeft: isDot ? 0 : 8,
            paddingRight: isDot ? 0 : isCompact ? 24 : 16,
            borderWidth: isDot ? 1.5 : 1,
            transform: `scale(${isDot ? 96 / 40 : 1})`,
            transformOrigin: "center center",
            minHeight: 40,
            transition: PILL_TRANSITION,
          }}
        >
          {/* Avatar — fixed 40×40; dot growth comes from pill scale */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <div className="flex items-center justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
              {avatarSlot}
            </div>
          </div>

          {/* Text column — always mounted, CSS-transitioned to zero width in dot */}
          <div
            style={{
              width: isDot ? 0 : 176,
              marginLeft: isDot ? 0 : 8,
              opacity: isDot ? 0 : 1,
              transition: TEXT_COL_TRANSITION,
            }}
            className="relative min-w-0 flex-1 self-stretch overflow-hidden whitespace-nowrap"
          >
            {/* Crossfade — AnimatePresence handles detail↔compact text swap.
                During dot transitions, crossfadeKey stays stable so
                AnimatePresence skips the mount/unmount cycle entirely. */}
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={crossfadeKey}
                initial={
                  isDotTransition
                    ? false
                    : { opacity: 0, filter: "blur(2.5px)" }
                }
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={
                  isDotTransition
                    ? { opacity: 0 }
                    : { opacity: 0, filter: "blur(2.5px)" }
                }
                transition={
                  isDotTransition
                    ? { duration: 0 }
                    : { duration: 0.14, ease: [0.23, 1, 0.32, 1] }
                }
                className="absolute inset-0 flex flex-col justify-center"
                style={
                  isDotTransition
                    ? undefined
                    : { willChange: "filter, opacity" }
                }
              >
                <p
                  className="w-full truncate tracking-[-0.07px] text-f1-foreground"
                  style={{
                    fontSize: isCompact ? 24 : 14,
                    lineHeight: isCompact ? "32px" : "20px",
                    fontWeight: 500,
                  }}
                >
                  {titleSlot?.props.children}
                </p>
                {!isCompact && !isDot && subtitleSlot && (
                  <p
                    className="w-full truncate tracking-[-0.07px] text-f1-foreground-secondary"
                    style={{
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: 400,
                    }}
                  >
                    {subtitleSlot.props.children}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }
)

F0GraphNodeBase.displayName = "F0GraphNode"

export const F0GraphNode = F0GraphNodeBase
