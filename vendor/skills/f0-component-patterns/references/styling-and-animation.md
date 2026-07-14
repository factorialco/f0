# Styling and Animation Patterns

## CVA (Class Variance Authority)

Import from `"cva"` (not `"class-variance-authority"`).

### Basic CVA with compoundVariants

```tsx
// src/components/F0ButtonToggle/internal/F0ButtonToggle.internal.tsx
import { cva, type VariantProps } from "cva"

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
    {
      withBorder: true,
      selected: true,
      class: "border-f1-border-selected",
    },
  ],
  defaultVariants: { size: "md", variant: "compact" },
})
```

### Array Shorthand in compoundVariants

Match multiple variant values with a single rule:

```tsx
// src/components/F0Dialog/F0DialogInternal.tsx
const dialogContentClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl",
    },
    width: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]",
    },
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg", "xl"], // array shorthand
      class: "max-w-full",
    },
  ],
  defaultVariants: { variant: "center" },
})
```

### VariantProps Extraction

Extract prop types from CVA definitions:

```tsx
// src/ui/Spinner/index.tsx
import { cva, type VariantProps } from "cva"

const spinnerVariants = cva({
  base: "flex select-none items-center justify-center text-f1-foreground-secondary",
  variants: {
    size: {
      small: "h-4 w-4 [&_circle]:stroke-[4]",
      medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
      large: "h-12 w-12 [&_circle]:stroke-2",
    },
  },
  defaultVariants: { size: "medium" },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}
```

Dedicated type alias approach:

```tsx
// src/ui/Action/internal-types.ts
import { VariantProps } from "cva"
import { actionVariants } from "./variants"

export type ActionVariantProps = VariantProps<typeof actionVariants>
```

## cn() Utility

Use `cn()` from `@/lib/utils` for all className composition (wraps `clsx` + `twMerge`):

```tsx
// Boolean conditions
cn("base", isActive && "active-class")

// Ternary
cn(size === "sm" ? "p-2" : "p-4")

// Combined with CVA
cn(variants({ size }), "extra-class")

// Combined with focusRing()
cn(variantClasses, sizeClasses, focusRing(), className)

// Real example from F0ButtonToggle
className={cn(
  "aspect-square px-0",
  "flex flex-col items-center justify-center gap-2",
  focusRing(),
  actionVariants({ variant: state.selected ? "selected" : "ghost" }),
  buttonSizeVariants({ size: localSize }),
  buttonToggleVariants({ size: localSize, variant, withBorder, selected: state.selected })
)}
```

## focusRing() Utility

Use `focusRing()` from `@/lib/utils` on all focusable elements. It applies `focus-visible:ring-1 focus-visible:ring-f1-special-ring`:

```tsx
// src/ui/Action/Action.tsx
className: cn(variantClasses, sizeClasses, focusRing(), className)

// src/components/F0Card/CardInternal.tsx
className={cn("z-1 absolute inset-0 block rounded-xl", focusRing())}

// With inset modifier
focusRing("focus-visible:ring-inset")
```

## Design Tokens

All design tokens use the `f1-` prefix in Tailwind classes:

| Category   | Classes                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Foreground | `text-f1-foreground`, `-secondary`, `-info`, `-warning`, `-critical`, `-positive`, `-disabled`            |
| Background | `bg-f1-background`, `-secondary`, `-tertiary`, `-info`, `-warning`, `-critical`, `-positive`, `-selected` |
| Border     | `border-f1-border`, `-secondary`, `-hover`, `-selected`, `-critical`                                      |
| Icons      | `text-f1-icon`, `-secondary`, `-bold`, `-critical`, `-info`                                               |
| Focus ring | `ring-f1-special-ring`                                                                                    |

## Container Queries

Use `@container` class on the wrapper and `@xs:`, `@md:` breakpoints for responsive children:

```tsx
// src/components/F0Alert/F0Alert.tsx
<div ref={containerRef} className="@container">
  <div className={alertVariants({ variant })}>
    <div
      className={cn(
        "flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"
      )}
    >
      {/* content */}
      {(action || link) && (
        <div
          className={cn(
            "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"
          )}
        >
          {/* actions */}
        </div>
      )}
    </div>
  </div>
</div>
```

```tsx
// src/layouts/HomeLayout/index.tsx
<div ref={ref} className="@container">
  <div className="flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden">
```

## Animation Strategy

### CSS Transitions (simple interactions)

```tsx
className = "transition-colors duration-150"
className = "transition-all duration-200"
```

### Framer Motion with useReducedMotion

Always check `useReducedMotion()` from `@/lib/a11y` and set `duration: 0` when true:

```tsx
// src/sds/ai/F0AiCollapsibleMessage/F0AiCollapsibleMessage.tsx
import { useReducedMotion } from "@/lib/a11y"

const shouldReduceMotion = useReducedMotion()

<motion.div
  initial={false}
  animate={{
    height: isExpanded ? "auto" : 0,
    opacity: isExpanded ? 1 : 0,
    visibility: isExpanded ? "visible" : "hidden",
  }}
  transition={{
    duration: shouldReduceMotion ? 0 : 0.15,
    ease: [0.165, 0.84, 0.44, 1],
  }}
  className="flex flex-col gap-2"
>
```

Complex multi-property transitions:

```tsx
// src/components/Navigation/Sidebar/Sidebar.tsx
const shouldReduceMotion = useReducedMotion()

const transition = {
  x: {
    ease:
      sidebarState !== "locked"
        ? isSmallScreen
          ? [0.25, 0.46, 0.45, 0.94]
          : [0.175, 0.885, 0.32, 1.1]
        : [0, 0, 0.58, 1],
    duration: shouldReduceMotion
      ? 0
      : sidebarState !== "locked" && !isSmallScreen
        ? 0.3
        : 0.2,
  },
  top: { duration: shouldReduceMotion ? 0 : 0.1 },
  left: { duration: shouldReduceMotion ? 0 : 0.1 },
  default: { duration: shouldReduceMotion ? 0 : 0.2 },
}
```

### useReducedMotion Hook Definition

```tsx
// src/lib/a11y.tsx
import { useMediaQuery } from "usehooks-ts"

export const useReducedMotion = () => {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    { initializeWithValue: true, defaultValue: false }
  )
  return prefersReducedMotion
}
```

### AnimatePresence for Enter/Exit

```tsx
import { AnimatePresence, motion } from "framer-motion"

;<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

### motion.create() for Wrapping Components

```tsx
import { motion } from "framer-motion"

const MotionDiv = motion.create("div")
```

### Tests Disable Animations Globally

```tsx
// In test setup
import { MotionGlobalConfig } from "framer-motion"
MotionGlobalConfig.skipAnimations = true
```

## Inline Styles

Only for truly dynamic values that can't be expressed as Tailwind classes:

```tsx
// Hex colors from data
style={{ backgroundColor: color }}

// Dynamic dimensions
style={{ width: `${percentage}%` }}
```
