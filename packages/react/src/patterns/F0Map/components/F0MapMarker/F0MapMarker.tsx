import { forwardRef } from "react"

import { Office } from "@/icons/app"
import type { WithDataTestIdProps } from "@/lib/data-testid"

import {
  BaseMapMarker,
  markerLabelPlacements,
  markerSizes,
  type BaseMapMarkerColor,
  type BaseMapMarkerLabelPlacement,
  type BaseMapMarkerSize,
  type BaseMapMarkerVariantProps,
} from "../internal/BaseMapMarker"

/**
 * Product-semantic marker variants. Unlike the internal `BaseMapMarker` engine
 * (which exposes every knob), each of these fixes its own color and rendering
 * so a given concept looks and behaves the same everywhere on the map. Callers
 * pick a variant and pass only its data.
 */
export const f0MapMarkerVariants = [
  "default",
  "workplace",
  "employee",
  "company",
  "stop",
] as const
export type F0MapMarkerVariant = (typeof f0MapMarkerVariants)[number]

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
 */
export type F0MapMarkerVariantProps =
  | { variant: "default" }
  | { variant: "workplace" }
  | { variant: "employee"; firstName: string; lastName: string; src?: string }
  | { variant: "company"; name: string; src?: string }
  | { variant: "stop"; letter: string }

export type F0MapMarkerProps = F0MapMarkerBaseProps & F0MapMarkerVariantProps

/** Resolves a semantic variant to the engine's variant + its fixed color. */
const toBase = (
  props: F0MapMarkerVariantProps
): { variant: BaseMapMarkerVariantProps; color?: BaseMapMarkerColor } => {
  switch (props.variant) {
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
    const { variant, color } = toBase(props)
    return (
      <BaseMapMarker
        ref={ref}
        {...variant}
        color={color}
        size={props.size}
        selected={props.selected}
        collapsed={props.collapsed}
        label={props.label}
        showLabel={props.showLabel}
        labelPlacement={props.labelPlacement}
        onClick={props.onClick}
        ariaLabel={props.ariaLabel}
        dataTestId={props.dataTestId}
        className={props.className}
      />
    )
  }
)

F0MapMarkerBase.displayName = "F0MapMarker"

export const F0MapMarker = F0MapMarkerBase
