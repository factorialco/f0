import { useMemo } from "react"

import type { IconType } from "@/components/F0Icon"
import { Pin } from "@/icons/app"

import { TreeSelector, type TreeSelectorItem } from "./TreeSelector"

/**
 * A place you can clock in from, and — optionally — the places INSIDE it.
 *
 * Up to two or three levels is what this is for: location → workplace → work
 * area (Office → Barcelona → Llucuna A-3). Selection is always a LEAF: a location
 * with `sublocations` is clocked into through one of them, one without is clocked
 * into directly. The icon is usually only worth setting at the top (Office, Home,
 * Business trip) — deeper levels inherit the nearest one above them.
 */
export type ClockInLocation = {
  id: string
  name: string
  icon?: IconType
  /** The level below. When present, this location itself is not selectable. */
  sublocations?: ClockInLocation[]
}

export interface LocationSelectorProps {
  locations: ClockInLocation[]
  locationId?: string
  onChangeLocationId: (locationId: string) => void
  /** The picker's label, also the empty trigger's placeholder. */
  label: string
  /** Placeholder for the search box. Falls back to F0Select's own wording. */
  searchPlaceholder?: string
  /** When false the picker offers a clear affordance. */
  required?: boolean
  disabled?: boolean
}

/** `sublocations` is this domain's word for the tree's `children`. */
export const toLocationTree = (
  locations: ClockInLocation[]
): TreeSelectorItem[] =>
  locations.map((location) => ({
    id: location.id,
    name: location.name,
    icon: location.icon,
    children: location.sublocations?.length
      ? toLocationTree(location.sublocations)
      : undefined,
  }))

/**
 * The `horizontal-bar` variant's location control: a `TreeSelector` over
 * `locations`, so a Home tile can't be handed a node that breaks the controls
 * line — and so a nested location list is picked the same way a nested project
 * list is.
 *
 * A select rather than the `F0ButtonDropdown` this started as: a select already
 * carries everything this control needs and a button dropdown carries none of it
 * — the location's own icon on the trigger, a clear affordance when the location
 * isn't required, the "label + selection" hover tooltip, and the group headings a
 * two- or three-level list needs.
 *
 * The trigger shows the selected location's own glyph, and a pin until there is
 * one — through the field's icon slot, the same one the project picker uses, so
 * the two sit at the same offset beside each other.
 */
export function LocationSelector({
  locations,
  locationId,
  onChangeLocationId,
  label,
  searchPlaceholder,
  required = true,
  disabled,
}: LocationSelectorProps) {
  const items = useMemo(() => toLocationTree(locations), [locations])

  return (
    <TreeSelector
      items={items}
      value={locationId}
      onChange={onChangeLocationId}
      label={label}
      searchPlaceholder={searchPlaceholder}
      // Stands in until a location is picked; after that the location's own glyph
      // takes the slot.
      fieldIcon={Pin}
      required={required}
      disabled={disabled}
    />
  )
}
