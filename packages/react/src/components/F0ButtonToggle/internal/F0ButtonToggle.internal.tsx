import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useMemo, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"

import { ButtonToggleColor } from "../types"
import { F0ButtonToggleInternalProps } from "./types.internal"

const buttonToggleVariants = cva({
  variants: {
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10",
    },
    variant: {
      expanded: "p-2",
      compact: "",
    },
    withBorder: {
      true: "border border-solid border-f1-border",
      false: "",
    },
    selected: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "expanded",
      size: "sm",
      class: "h-[52px] w-[63px] [&_.main]:h-4",
    },
    {
      variant: "expanded",
      size: "md",
      class: "h-[60px] w-[70px] [&_.main]:h-5",
    },
    // With border and selected
    {
      withBorder: true,
      selected: true,
      class: "border-f1-border-selected",
    },
  ],
  defaultVariants: { size: "md", variant: "compact" },
})

/**
 * What `color` looks like once the toggle is SELECTED: the colour's own fill and
 * glyph, over a border strong enough to hold the row when several coloured
 * toggles sit side by side. The fill follows `f1-background-selected` (0.1, 0.2
 * under the pointer) so a coloured answer sits at the weight F0 gives any
 * selected control; the border goes to 0.6, where `f1-border-selected` sits at
 * 0.4, because here it has to separate one answer from its neighbours.
 *
 * Written out per colour because Tailwind only generates the utilities it can
 * see as literal strings — the classes can't be composed from the token name.
 */
const selectedColorClasses: Record<ButtonToggleColor, string> = {
  accent: cn(
    "bg-[hsl(var(--accent-50)/0.1)] hover:bg-[hsl(var(--accent-50)/0.2)]",
    "border-[hsl(var(--accent-50)/0.6)]",
    "text-f1-icon-accent hover:text-f1-icon-accent"
  ),
  critical: cn(
    "bg-[hsl(var(--critical-50)/0.1)] hover:bg-[hsl(var(--critical-50)/0.2)]",
    "border-[hsl(var(--critical-50)/0.6)]",
    "text-f1-icon-critical hover:text-f1-icon-critical"
  ),
  warning: cn(
    "bg-[hsl(var(--warning-50)/0.1)] hover:bg-[hsl(var(--warning-50)/0.2)]",
    "border-[hsl(var(--warning-50)/0.6)]",
    "text-f1-icon-warning hover:text-f1-icon-warning"
  ),
  promote: cn(
    "bg-[hsl(var(--promote-50)/0.1)] hover:bg-[hsl(var(--promote-50)/0.2)]",
    "border-[hsl(var(--promote-50)/0.6)]",
    "text-f1-icon-promote hover:text-f1-icon-promote"
  ),
  info: cn(
    "bg-[hsl(var(--info-50)/0.1)] hover:bg-[hsl(var(--info-50)/0.2)]",
    "border-[hsl(var(--info-50)/0.6)]",
    "text-f1-icon-info hover:text-f1-icon-info"
  ),
  positive: cn(
    "bg-[hsl(var(--positive-50)/0.1)] hover:bg-[hsl(var(--positive-50)/0.2)]",
    "border-[hsl(var(--positive-50)/0.6)]",
    "text-f1-icon-positive hover:text-f1-icon-positive"
  ),
  "mood-super-negative": cn(
    "bg-[hsl(var(--mood-super-negative)/0.1)] hover:bg-[hsl(var(--mood-super-negative)/0.2)]",
    "border-[hsl(var(--mood-super-negative)/0.6)]",
    "text-f1-icon-mood-super-negative hover:text-f1-icon-mood-super-negative"
  ),
  "mood-negative": cn(
    "bg-[hsl(var(--mood-negative)/0.1)] hover:bg-[hsl(var(--mood-negative)/0.2)]",
    "border-[hsl(var(--mood-negative)/0.6)]",
    "text-f1-icon-mood-negative hover:text-f1-icon-mood-negative"
  ),
  "mood-neutral": cn(
    "bg-[hsl(var(--mood-neutral)/0.1)] hover:bg-[hsl(var(--mood-neutral)/0.2)]",
    "border-[hsl(var(--mood-neutral)/0.6)]",
    "text-f1-icon-mood-neutral hover:text-f1-icon-mood-neutral"
  ),
  "mood-positive": cn(
    "bg-[hsl(var(--mood-positive)/0.1)] hover:bg-[hsl(var(--mood-positive)/0.2)]",
    "border-[hsl(var(--mood-positive)/0.6)]",
    "text-f1-icon-mood-positive hover:text-f1-icon-mood-positive"
  ),
  "mood-super-positive": cn(
    "bg-[hsl(var(--mood-super-positive)/0.1)] hover:bg-[hsl(var(--mood-super-positive)/0.2)]",
    "border-[hsl(var(--mood-super-positive)/0.6)]",
    "text-f1-icon-mood-super-positive hover:text-f1-icon-mood-super-positive"
  ),
}

/**
 * And what it looks like UNSELECTED: a muted glyph rather than the default
 * near-black one. A coloured toggle only speaks up once it is chosen — five
 * coloured glyphs at once would be decoration, not an answer.
 */
const unselectedColorClasses = "text-f1-icon"

const labelSizeVariants = cva({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
})

export const F0ButtonToggleInternal = forwardRef<
  HTMLButtonElement,
  F0ButtonToggleInternalProps
>(
  (
    {
      onSelectedChange,
      selected,
      label,
      disabled = false,
      icon,
      size = "md",
      variant = "compact",
      tooltip,
      color,
      withBorder = false,
      className: externalClassName,
      defaultSelected = false,
      ...props
    },
    ref
  ) => {
    const singleIcon = !Array.isArray(icon)
    const [iconOff, iconOn] = singleIcon ? [icon, icon] : icon

    const singleLabel = !Array.isArray(label)
    const [labelOff, labelOn] = singleLabel ? [label, label] : label

    const animationProps = useMemo(
      () =>
        singleIcon
          ? undefined
          : {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.6 },
              transition: { duration: 0.25, ease: "easeOut" },
            },
      [singleIcon]
    )

    const [localSelected, setLocalSelected] = useState(defaultSelected)

    // The state can be controlled or uncontrolled
    // If it is controlled, we use the selected prop and onSelectedChange prop
    // If it is uncontrolled, we use the localSelected state and setLocalSelected function
    const isControlled = selected !== undefined
    const state = {
      selected: isControlled ? selected : localSelected,
      onSelectedChange: isControlled ? onSelectedChange : setLocalSelected,
    }

    const localLabel = state.selected ? labelOn : labelOff

    const localSize = useMemo(() => {
      if (variant === "expanded" && size === "lg") {
        console.warn(
          "F0ButtonToggle: lg size is not supported for expanded variant"
        )
        return "md"
      }
      return size
    }, [size, variant])

    // Same shape `Action` accepts: a bare string is the description on its own.
    const tooltipProps =
      typeof tooltip === "object"
        ? tooltip
        : tooltip
          ? { description: tooltip }
          : undefined

    const root = (
      <TogglePrimitive.Root
        ref={ref}
        pressed={state.selected}
        onPressedChange={state.onSelectedChange}
        disabled={disabled}
        aria-label={localLabel}
        title={localLabel}
        className={cn(
          "aspect-square px-0",
          "flex flex-col items-center justify-center gap-2",
          focusRing(),
          actionVariants({ variant: state.selected ? "selected" : "ghost" }),
          buttonSizeVariants({ size: localSize }),
          buttonToggleVariants({
            size: localSize,
            variant,
            withBorder,
            selected: state.selected,
          }),
          // After the variants, whose selected teal it replaces; before the
          // consumer's own class, which still has the last word.
          color &&
            (state.selected
              ? selectedColorClasses[color]
              : unselectedColorClasses),
          externalClassName
        )}
        {...props}
        // Deliberately after the spread: when a tooltip wraps this button, Radix
        // hands the trigger's own open/closed `data-state` down through
        // `asChild`, which would otherwise overwrite the pressed state that
        // consumers and tests read off the button.
        data-state={state.selected ? "on" : "off"}
      >
        <AnimatePresence initial={false}>
          <div className="main relative flex flex-col items-center justify-center">
            {state.selected ? (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-on"
                {...animationProps}
              >
                <F0Icon icon={iconOn} size={localSize} />
              </motion.div>
            ) : (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-off"
                {...animationProps}
              >
                <F0Icon icon={iconOff} size={localSize} />
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        {variant === "expanded" && (
          <AnimatePresence initial={false}>
            <span
              className={cn(
                "max-w-full truncate",
                labelSizeVariants({ size: localSize })
              )}
            >
              {localLabel}
            </span>
          </AnimatePresence>
        )}
      </TogglePrimitive.Root>
    )

    if (!tooltipProps) {
      return root
    }

    // `TooltipInternal` strips the native `title` off the button so the browser
    // doesn't draw its own bubble next to this one; `aria-label` keeps the name.
    return <TooltipInternal {...tooltipProps}>{root}</TooltipInternal>
  }
)

F0ButtonToggleInternal.displayName = "F0ButtonToggleInternal"
