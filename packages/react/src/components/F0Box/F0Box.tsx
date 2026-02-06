import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import {
  backgroundVariants,
  borderDefaults,
  borderVariants,
  dimensionVariants,
  displayVariants,
  dividerVariants,
  flexDefaults,
  flexVariants,
  gridVariants,
  marginDefaults,
  marginVariants,
  overflowDefaults,
  overflowVariants,
  paddingDefaults,
  paddingVariants,
} from "./utils"
import {
  resolveResponsiveClasses,
  type Breakpoint,
  type ResponsiveStyleProps,
} from "./utils/responsive"

const boxVariants = cva({
  base: "",
  variants: {
    ...displayVariants,
    ...paddingVariants,
    ...marginVariants,
    ...flexVariants,
    ...gridVariants,
    ...dimensionVariants,
    ...backgroundVariants,
    ...borderVariants,
    ...overflowVariants,
    ...dividerVariants,
  },
  defaultVariants: {
    ...paddingDefaults,
    ...marginDefaults,
    ...flexDefaults,
    ...borderDefaults,
    ...overflowDefaults,
  },
})

type BoxVariantProps = VariantProps<typeof boxVariants>

export interface F0BoxProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<"div">,
      "display" | "width" | "height" | "border" | "className" | "style"
    >,
    BoxVariantProps {
  /** Responsive overrides applied from the `sm` breakpoint (≥640px) */
  sm?: ResponsiveStyleProps
  /** Responsive overrides applied from the `md` breakpoint (≥768px) */
  md?: ResponsiveStyleProps
  /** Responsive overrides applied from the `lg` breakpoint (≥1024px) */
  lg?: ResponsiveStyleProps
  /** Responsive overrides applied from the `xl` breakpoint (≥1280px) */
  xl?: ResponsiveStyleProps
}

const BREAKPOINTS: Breakpoint[] = ["sm", "md", "lg", "xl"]

export const F0Box = forwardRef<HTMLDivElement, F0BoxProps>(
  (
    {
      // Display
      display,
      // Padding
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      // Margin
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      // Gap
      gap,
      // Grid
      columns,
      rows,
      colSpan,
      colStart,
      rowSpan,
      // Dimensions
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      // Background
      background,
      // Border
      borderColor,
      border,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      borderRadius,
      borderRadiusTopLeft,
      borderRadiusTopRight,
      borderRadiusBottomLeft,
      borderRadiusBottomRight,
      // Overflow
      overflow,
      overflowX,
      overflowY,
      // Divider
      divider,
      dividerColor,
      // Flex
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      grow,
      shrink,
      // Responsive breakpoint overrides
      sm,
      md,
      lg,
      xl,
      ...rest
    },
    ref
  ) => {
    const hasBorder =
      (border && border !== "none") ||
      (borderTop && borderTop !== "none") ||
      (borderBottom && borderBottom !== "none") ||
      (borderLeft && borderLeft !== "none") ||
      (borderRight && borderRight !== "none")

    // Resolve responsive override classes for each breakpoint
    const breakpointOverrides = { sm, md, lg, xl }
    const responsiveClasses = BREAKPOINTS.map((bp) => {
      const props = breakpointOverrides[bp]
      return props ? resolveResponsiveClasses(bp, props) : ""
    })
      .filter(Boolean)
      .join(" ")

    return (
      <div
        ref={ref}
        className={cn(
          boxVariants({
            display,
            padding,
            paddingX,
            paddingY,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            margin,
            marginX,
            marginY,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            gap,
            columns,
            rows,
            colSpan,
            colStart,
            rowSpan,
            width,
            height,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
            background,
            borderColor,
            border,
            borderTop,
            borderBottom,
            borderLeft,
            borderRight,
            borderRadius,
            borderRadiusTopLeft,
            borderRadiusTopRight,
            borderRadiusBottomLeft,
            borderRadiusBottomRight,
            overflow,
            overflowX,
            overflowY,
            divider,
            dividerColor,
            alignItems,
            justifyContent,
            flexDirection,
            flexWrap,
            grow,
            shrink,
          }),
          responsiveClasses,
          hasBorder && !borderColor && "border-f1-border",
          divider && !dividerColor && "divide-f1-border"
        )}
        {...rest}
      />
    )
  }
)

F0Box.displayName = "F0Box"
