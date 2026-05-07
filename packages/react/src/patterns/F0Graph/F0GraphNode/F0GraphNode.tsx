import { AnimatePresence, motion } from "motion/react"
import {
  Children,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  forwardRef,
  isValidElement,
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
    // Reserved for future metadata pills (salary, teams, workplace, tenure)

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

    // ── Unified branch: dot + compact + detail ──
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
        <motion.div
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
          initial={false}
          animate={{
            paddingTop: isDot ? 0 : 6,
            paddingBottom: isDot ? 0 : 6,
            paddingLeft: isDot ? 0 : 8,
            paddingRight: isDot ? 0 : isCompact ? 24 : 16,
            borderWidth: isDot ? 1.5 : 1,
            scale: isDot ? 96 / 40 : 1,
          }}
          style={{ minHeight: 40, transformOrigin: "center center" }}
          transition={{
            type: "spring",
            duration: 0.18,
            bounce: 0.15,
          }}
        >
          {/* Avatar — fixed 40×40; dot growth comes from pill scale */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <div className="flex items-center justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
              {avatarSlot}
            </div>
          </div>

          {/* Text column — always mounted, animated to zero width in dot */}
          <motion.div
            initial={false}
            animate={{
              width: isDot ? 0 : 176,
              marginLeft: isDot ? 0 : 8,
              opacity: isDot ? 0 : 1,
            }}
            transition={{
              width: {
                type: "spring",
                duration: 0.18,
                bounce: 0.15,
              },
              marginLeft: {
                type: "spring",
                duration: 0.18,
                bounce: 0.15,
              },
              opacity: { duration: 0.1 },
            }}
            className="relative min-w-0 flex-1 self-stretch whitespace-nowrap"
          >
            {/* Single-swap crossfade: each variant renders its own
                absolutely-positioned, self-centering text block.
                No layout coupling between states — title can't shift. */}
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={variant}
                initial={{ opacity: 0, filter: "blur(2.5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(2.5px)" }}
                transition={{
                  duration: 0.14,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute inset-0 flex flex-col justify-center"
                style={{ willChange: "filter, opacity" }}
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
          </motion.div>
        </motion.div>
      </div>
    )
  }
)

F0GraphNodeBase.displayName = "F0GraphNode"

export const F0GraphNode = F0GraphNodeBase
