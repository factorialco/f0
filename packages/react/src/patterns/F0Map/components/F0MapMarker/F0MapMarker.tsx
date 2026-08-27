import { forwardRef } from "react"

import type { WithDataTestIdProps } from "@/lib/data-testid"

import { Office } from "@/icons/app"

import {
  BaseMapMarker,
  countForegroundContrast,
  markerLabelPlacements,
  markerFillStyle,
  markerSizes,
  type BaseMapMarkerColor,
  type BaseMapMarkerColorStep,
  type BaseMapMarkerLabelPlacement,
  type BaseMapMarkerSize,
  type BaseMapMarkerVariantProps,
} from "../internal/BaseMapMarker"

/**
 * Product-semantic marker variants. Unlike the internal `BaseMapMarker` engine
 * (which exposes every knob), each of these owns its rendering so a given
 * concept looks and behaves consistently. Callers pick a variant and pass its
 * data; composing analytical patterns may override the density heat palette
 * with F0 color tokens.
 */
export const f0MapMarkerVariants = [
  "default",
  "workplace",
  "employee",
  "company",
  "stop",
  "density",
] as const
export type F0MapMarkerVariant = (typeof f0MapMarkerVariants)[number]

export const f0MapDensityLevels = ["low", "medium", "high"] as const
export type F0MapDensityLevel = (typeof f0MapDensityLevels)[number]
/** F0 categorical hues available to density markers. */
export type F0MapDensityColor = Exclude<BaseMapMarkerColor, "neutral" | "grey">
/** F0 token steps available to density markers. */
export type F0MapDensityColorStep = BaseMapMarkerColorStep
/** One token-constrained density-marker appearance. */
export interface F0MapDensityStyle {
  color: F0MapDensityColor
  colorStep: F0MapDensityColorStep
}
/** Low, medium, and high appearances shared by markers and their legend. */
export type F0MapDensityPalette = Record<F0MapDensityLevel, F0MapDensityStyle>
/** Default sequential Factorial red density palette. */
export const f0MapDensityPalette = {
  low: { color: "red", colorStep: 10 },
  medium: { color: "red", colorStep: 50 },
  high: { color: "red", colorStep: 70 },
} as const satisfies F0MapDensityPalette
export const f0MapDensityColors = {
  low: f0MapDensityPalette.low.color,
  medium: f0MapDensityPalette.medium.color,
  high: f0MapDensityPalette.high.color,
} as const satisfies Record<F0MapDensityLevel, BaseMapMarkerColor>
export const f0MapDensityColorSteps = {
  low: f0MapDensityPalette.low.colorStep,
  medium: f0MapDensityPalette.medium.colorStep,
  high: f0MapDensityPalette.high.colorStep,
} as const satisfies Record<F0MapDensityLevel, BaseMapMarkerColorStep>

/** CSS surface shared by density markers and their legends. */
export const f0MapDensitySurfaceStyle = (style: F0MapDensityStyle) =>
  markerFillStyle(style.color, style.colorStep)

const OPAQUE_DENSITY_STEPS = [50, 60, 70] as const

/**
 * Keeps a requested F0 density style token-only and readable. Opaque steps
 * whose fill cannot reach AA with either sanctioned F0 ink resolve to the
 * nearest accessible step of the same hue (preferring the darker step on a
 * tie). The theme-backed low-density tint is preserved as requested.
 */
export const resolveF0MapDensityStyle = (
  style: F0MapDensityStyle
): F0MapDensityStyle => {
  if (
    style.colorStep === 10 ||
    countForegroundContrast(style.color, style.colorStep) >= 4.5
  ) {
    return style
  }

  const colorStep = OPAQUE_DENSITY_STEPS.filter(
    (step) => countForegroundContrast(style.color, step) >= 4.5
  ).sort(
    (first, second) =>
      Math.abs(first - style.colorStep) - Math.abs(second - style.colorStep) ||
      second - first
  )[0]

  return { ...style, colorStep: colorStep ?? 70 }
}

// Public aliases for the engine types the props reference, so consumers can
// name them from the F0Map barrel (bundled d.ts generation breaks on types
// only reachable through internal relative paths - see src/f0.ts).
export const f0MapMarkerSizes = markerSizes
export type F0MapMarkerSize = BaseMapMarkerSize
export const f0MapMarkerLabelPlacements = markerLabelPlacements
export type F0MapMarkerLabelPlacement = BaseMapMarkerLabelPlacement

/** Fixed hue for every workplace pin, so all sites read the same. */
const WORKPLACE_COLOR: BaseMapMarkerColor = "malibu"
/** Fixed hue for route stops - matches the route/arc lines they punctuate. */
const STOP_COLOR: BaseMapMarkerColor = "radical"

interface F0MapMarkerBaseProps extends WithDataTestIdProps {
  /**
   * Marker size. Map-managed: `F0Map` bumps it up a step at high zoom (where
   * POI names appear). Not meant to be set by hand. Defaults to `"md"`.
   */
  size?: F0MapMarkerSize
  /** Active state (map-managed): grows and drops the pin indicator. */
  selected?: boolean
  /** Collapse to just the dot (map-managed): folds out of a selected neighbour's way. */
  collapsed?: boolean
  /** Text label (e.g. the site or person name). */
  label?: string
  /** Toggle the label without removing it. Defaults to `true`. */
  showLabel?: boolean
  /** Label side. Map-managed: `F0Map`'s collision pass sets this. */
  labelPlacement?: F0MapMarkerLabelPlacement
  onClick?: () => void
  ariaLabel?: string
  /**
   * Render the pin outside the tab order and hidden from assistive tech while
   * keeping it mouse-clickable (map-managed: the map relies on its operable
   * `F0MapList` instead of the canvas pins). Defaults to `false`.
   */
  presentational?: boolean
  /** @private */
  className?: string
}

/**
 * The data each semantic variant needs. Appearance is fixed by the variant:
 *  - `default`: a plain pin, no icon or avatar (the generic marker).
 *  - `workplace`: a building glyph on a fixed brand hue (all sites match).
 *  - `employee` / `company`: an avatar whose color is its own identity color
 *    (grey when a photo replaces the colored chip).
 *  - `stop`: a route stop - a single letter (A, B, C...) on the same fixed
 *    hue as the route/arc lines it punctuates.
 *  - `density`: an aggregated location count on a stepped Factorial heat scale;
 *    a composing pattern may supply another F0 palette style.
 */
export type F0MapMarkerVariantProps =
  | { variant: "default" }
  | { variant: "workplace" }
  | { variant: "employee"; firstName: string; lastName: string; src?: string }
  | { variant: "company"; name: string; src?: string }
  | { variant: "stop"; letter: string }
  | {
      variant: "density"
      value: number
      level: F0MapDensityLevel
      /** Optional F0 palette style supplied by a composing pattern. */
      style?: F0MapDensityStyle
    }

export type F0MapMarkerProps = F0MapMarkerBaseProps & F0MapMarkerVariantProps

/** Keep visual and accessible density values on the same normalized scale. */
export const formatF0MapDensityValue = (value: number): string => {
  const normalized = Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0
  return normalized > 99 ? "99+" : String(normalized)
}

/** Resolves a semantic variant to the engine's variant + its fixed color. */
const toBase = (
  props: F0MapMarkerVariantProps
): {
  variant: BaseMapMarkerVariantProps
  color?: BaseMapMarkerColor
  colorStep?: BaseMapMarkerColorStep
} => {
  switch (props.variant) {
    case "density": {
      const style = resolveF0MapDensityStyle(
        props.style ?? f0MapDensityPalette[props.level]
      )
      return {
        variant: {
          variant: "count",
          count: formatF0MapDensityValue(props.value),
        },
        color: style.color,
        colorStep: style.colorStep,
      }
    }
    case "employee":
      return {
        variant: {
          variant: "person",
          firstName: props.firstName,
          lastName: props.lastName,
          src: props.src,
        },
      }
    case "company":
      return {
        variant: { variant: "company", name: props.name, src: props.src },
      }
    case "workplace":
      return {
        variant: { variant: "icon", icon: Office },
        color: WORKPLACE_COLOR,
      }
    case "stop":
      return {
        variant: { variant: "letter", letter: props.letter },
        color: STOP_COLOR,
      }
    case "default":
    default:
      // A plain pin: the color variant with the engine's default hue.
      return { variant: { variant: "color" } }
  }
}

const F0MapMarkerBase = forwardRef<HTMLButtonElement, F0MapMarkerProps>(
  function F0MapMarker(props, ref) {
    const { variant, color, colorStep } = toBase(props)
    return (
      <BaseMapMarker
        ref={ref}
        {...variant}
        color={color}
        colorStep={colorStep}
        size={props.size}
        selected={props.selected}
        collapsed={props.collapsed}
        label={props.label}
        showLabel={props.showLabel}
        labelPlacement={props.labelPlacement}
        onClick={props.onClick}
        ariaLabel={props.ariaLabel}
        presentational={props.presentational}
        dataTestId={props.dataTestId}
        className={props.className}
      />
    )
  }
)

F0MapMarkerBase.displayName = "F0MapMarker"

export const F0MapMarker = F0MapMarkerBase
