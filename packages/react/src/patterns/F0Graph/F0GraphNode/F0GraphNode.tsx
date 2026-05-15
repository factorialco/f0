import { NodeToolbar, Position } from "@xyflow/react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  type KeyboardEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0GraphNodeProps } from "./types"

import { useF0GraphRenderConfigInternal } from "../contexts"
import { F0GraphNodeTags } from "./F0GraphNodeTags"
import { graphNodeContainerVariants } from "./variants"

// Composite-only transitions. Layout-affecting properties (padding,
// border-width, width, margin) snap once per variant change instead
// of animating, so per-frame reflow across N nodes is avoided. The
// visual smoothness of dot↔compact comes entirely from transform +
// opacity, which run on the compositor.
const CHROME_TRANSITION = "opacity 120ms ease-out"
const AVATAR_TRANSITION = "transform 120ms ease-out"
const TEXT_COL_TRANSITION = "opacity 84ms ease-out"

const F0GraphNodeBase = forwardRef<HTMLDivElement, F0GraphNodeProps>(
  (
    {
      variant = "detail",
      state = "default",
      expanded,
      level,
      tabIndex: tabIndexProp = 0,
      setSize,
      posInSet,
      hasChildren,
      childrenCount: _childrenCount,
      onExpandToggle,
      onClick,
      nodeRef,
      nodeId,
      ariaOwns,
      avatar,
      title,
      subtitle,
      tags,
      visibleTagTypes,
      tagLabels,
      actions,
      loading,
    },
    ref
  ) => {
    // Combine forwarded ref with nodeRef callback
    const combinedRef = useCallback(
      (el: HTMLDivElement | null) => {
        // Forward ref
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = el
        }
        // Register with focus system
        nodeRef?.(el)
      },
      [ref, nodeRef]
    )
    const prefersReducedMotion = useReducedMotion()
    // When the graph has many rendered nodes, F0Graph signals via the
    // render-config context that we should snap variant changes instead
    // of animating thousands of pills simultaneously. Treated as a
    // motion-disabling signal alongside `prefers-reduced-motion`.
    const renderCfg = useF0GraphRenderConfigInternal()
    const noMotion = prefersReducedMotion || renderCfg?.largeGraph === true
    // Track previous variant to detect dot↔compact transitions.
    // The ref is updated only AFTER the transition window (200ms) closes,
    // so any unrelated re-render mid-transition does not flip
    // isDotTransition to false and trigger a duplicate AnimatePresence
    // wave on the title text crossfade.
    const prevVariantRef = useRef(variant)
    const isDotTransition =
      prevVariantRef.current !== variant &&
      (variant === "dot" || prevVariantRef.current === "dot")

    // Stable key for AnimatePresence: during dot transitions, keep the
    // previous key so AnimatePresence doesn't trigger mount/unmount
    // on 200+ nodes simultaneously.
    const crossfadeKey = isDotTransition ? prevVariantRef.current : variant

    useEffect(() => {
      const timeout = window.setTimeout(() => {
        prevVariantRef.current = variant
      }, 132)
      return () => {
        window.clearTimeout(timeout)
      }
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
    const isDetail = variant === "detail"
    const filteredTags = tags
      ? visibleTagTypes
        ? tags.filter((t) => visibleTagTypes.has(t.type))
        : tags
      : undefined
    const tagsVisible = isDetail && !!filteredTags && filteredTags.length > 0

    return (
      <div
        ref={combinedRef}
        id={nodeId ? `f0-graph-node-${nodeId}` : undefined}
        role="treeitem"
        tabIndex={tabIndexProp}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-level={level}
        aria-setsize={setSize}
        aria-posinset={posInSet}
        aria-selected={state === "selected"}
        aria-owns={ariaOwns || undefined}
        data-zoom-level={variant}
        className={cn(
          graphNodeContainerVariants({ variant, state }),
          "flex-col gap-1.5",
          "group outline-none"
        )}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        {/* Pill wrapper — variant-driven layout box for xyflow.
            Padding/dimensions snap once on variant change (no transition),
            so per-frame reflow is avoided. The visual smoothness comes from
            the chrome layer (opacity) and the avatar (transform: scale)
            below — both composite-only properties.

            Avatar position relative to wrapper top-left is constant
            (paddingLeft 8, paddingTop 6) in every variant, so it does not
            visually jump when the wrapper width snaps. */}
        <div
          className={cn(
            "group/pill relative inline-flex max-w-full flex-col items-stretch rounded-full",
            "outline-none",
            // Selection / highlight rings stay on the wrapper so they wrap
            // the layout box (which matches the visible compact/detail pill).
            // For dot variant the ring is moved to the avatar (see below).
            !isDot &&
              state === "selected" &&
              "ring-2 ring-f1-background-selected ring-offset-0",
            !isDot && state === "highlighted" && "ring-1 ring-f1-border-accent",
            // Dimmed visually applies to the whole wrapper only in dot
            // (matches previous behaviour).
            state === "dimmed" && isDot && "opacity-40",
            "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"
          )}
          style={{
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: isDot ? 8 : isCompact ? 24 : 16,
            minHeight: 40,
            // Isolate reflow so a node's layout snap does not invalidate
            // ancestors or siblings. `paint` is intentionally omitted —
            // it would clip the scaled-up dot avatar (transform: scale 2.4)
            // and the selection ring to the pill's 40px-tall box.
            contain: "layout",
          }}
        >
          {/* Chrome layer — pill bg + border. Opacity-only animation
              between dot (invisible) and compact/detail (visible). No
              transform, no layout properties — pure compositor work. */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 rounded-full border border-solid bg-f1-background",
              // Backdrop-blur is only enabled in compact/detail. In dot the
              // chrome is invisible (opacity 0), but Chrome/Safari still
              // rasterize the backdrop filter every frame for every node \u2014
              // disabling it for dot avoids that hidden cost at scale.
              // During the dot transition we KEEP the blur class so the
              // chrome fades out WITH its blur intact — removing it
              // immediately causes a visible flicker (white pill with no
              // blur visible for the duration of the opacity transition).
              (!isDot || isDotTransition) && "backdrop-blur-[7px]",
              isDot ? "border-f1-border-secondary" : "border-f1-border",
              state !== "selected" &&
                !isDot &&
                "group-hover/pill:border-f1-border-hover group-hover/pill:bg-f1-background-hover",
              state === "selected" && "border-f1-border-selected-bold"
            )}
            style={{
              borderWidth: isDot ? 1.5 : 1,
              opacity: isDot ? 0 : 1,
              transition: noMotion ? "none" : CHROME_TRANSITION,
              // Promote to its own composite layer up-front so the first
              // frame of dot↔compact doesn't pay a layer-creation cost.
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          />

          {/* Content row — sits above the chrome. Position: relative so
              avatar/text render on top of the absolutely-positioned chrome. */}
          <div className="relative inline-flex items-center">
            {/* Avatar — fixed 40×40 in layout. Scales 1↔2.4 via transform
                (composite-only) for the dot↔compact growth. In dot the
                selection/highlight ring lives on this element so it scales
                along with the avatar. */}
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
                isDot &&
                  state === "selected" &&
                  "ring-2 ring-f1-background-selected ring-offset-0",
                isDot &&
                  state === "highlighted" &&
                  "ring-1 ring-f1-border-accent"
              )}
              style={{
                transform: `translateZ(0) scale(${isDot ? 96 / 40 : 1})`,
                transformOrigin: "center center",
                transition: noMotion ? "none" : AVATAR_TRANSITION,
                // Hint the compositor that this element will animate
                // transform — keeps it on its own layer between transitions.
                willChange: "transform",
              }}
            >
              {/* Inner clip — forces every F0Avatar variant (person,
                  team, company, flag, file, emoji, icon) to render as a
                  full circle. The outer wrapper also has rounded-full
                  but its scale + willChange transform can defeat the
                  clip in some browsers; this immediate parent guarantees
                  the circular mask. */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                {loading ? (
                  <Skeleton className="h-10 w-10 rounded-full" />
                ) : (
                  avatar && <F0Avatar size="lg" avatar={avatar} />
                )}
              </div>
            </div>

            {/* Text column — width/margin snap once per variant; only
                opacity animates. The 60ms enter delay lets the chrome
                lead so text reveals into a visible pill. */}
            <div
              style={{
                width: isDot ? 0 : 176,
                marginLeft: isDot ? 0 : 8,
                opacity: isDot ? 0 : 1,
                transition: noMotion ? "none" : TEXT_COL_TRANSITION,
                transitionDelay: noMotion ? "0ms" : isDot ? "0ms" : "36ms",
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
                    isDotTransition || noMotion
                      ? false
                      : { opacity: 0, filter: "blur(2.5px)" }
                  }
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={
                    isDotTransition || noMotion
                      ? { opacity: 0 }
                      : { opacity: 0, filter: "blur(2.5px)" }
                  }
                  transition={
                    isDotTransition || noMotion
                      ? { duration: 0 }
                      : { duration: 0.084, ease: [0.23, 1, 0.32, 1] }
                  }
                  className="absolute inset-0 flex flex-col justify-center"
                  style={
                    isDotTransition || noMotion
                      ? undefined
                      : { willChange: "filter, opacity" }
                  }
                >
                  {loading ? (
                    <div className="flex flex-col justify-center gap-1.5">
                      <Skeleton
                        className="rounded-xs"
                        style={{
                          height: isCompact ? 20 : 12,
                          width: isCompact ? 120 : 96,
                        }}
                      />
                      {!isCompact && !isDot && (
                        <Skeleton
                          className="rounded-xs"
                          style={{ height: 12, width: 64 }}
                        />
                      )}
                    </div>
                  ) : (
                    <>
                      <p
                        className="w-full truncate tracking-[-0.07px] text-f1-foreground"
                        style={{
                          fontSize: isCompact ? 24 : 14,
                          lineHeight: isCompact ? "32px" : "20px",
                          fontWeight: 500,
                        }}
                      >
                        {title}
                      </p>
                      {!isCompact && !isDot && subtitle && (
                        <p
                          className="w-full truncate tracking-[-0.07px] text-f1-foreground-secondary"
                          style={{
                            fontSize: 14,
                            lineHeight: "20px",
                            fontWeight: 400,
                          }}
                        >
                          {subtitle}
                        </p>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {isDetail && actions && (
          <NodeToolbar
            nodeId={nodeId}
            isVisible={state === "selected"}
            position={Position.Top}
            align="center"
            offset={8}
          >
            <div className="flex items-center gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md">
              {actions}
            </div>
          </NodeToolbar>
        )}

        {tagsVisible && (
          <motion.div
            key="tags"
            initial={noMotion ? false : { opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={
              noMotion
                ? { duration: 0 }
                : { duration: 0.12, ease: [0.23, 1, 0.32, 1] }
            }
            className="max-w-[256px]"
          >
            <F0GraphNodeTags tags={filteredTags!} labels={tagLabels} />
          </motion.div>
        )}
      </div>
    )
  }
)

F0GraphNodeBase.displayName = "F0GraphNode"

export const F0GraphNode = F0GraphNodeBase
