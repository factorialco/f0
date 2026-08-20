import type { ReactElement } from "react"

import type { FiltersDefinition } from "../types"

import { F0FilterPicker, type F0FilterPickerRootProps } from "../F0FilterPicker"
import { FilterPickerStateModeContext } from "./stateMode"

type ControlledF0FilterPickerProps<Definition extends FiltersDefinition> =
  F0FilterPickerRootProps<Definition> & { dataTestId?: string }

export function ControlledF0FilterPicker<Definition extends FiltersDefinition>(
  props: ControlledF0FilterPickerProps<Definition>
): ReactElement | null {
  return (
    <FilterPickerStateModeContext.Provider value="controlled">
      <F0FilterPicker {...props} />
    </FilterPickerStateModeContext.Provider>
  )
}

ControlledF0FilterPicker.displayName = "ControlledF0FilterPicker"
