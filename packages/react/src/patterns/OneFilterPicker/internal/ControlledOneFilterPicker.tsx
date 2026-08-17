import type { ReactElement } from "react"

import type { FiltersDefinition } from "../types"

import {
  OneFilterPicker,
  type OneFilterPickerRootProps,
} from "../OneFilterPicker"
import { FilterPickerStateModeContext } from "./stateMode"

type ControlledOneFilterPickerProps<Definition extends FiltersDefinition> =
  OneFilterPickerRootProps<Definition> & { dataTestId?: string }

export function ControlledOneFilterPicker<Definition extends FiltersDefinition>(
  props: ControlledOneFilterPickerProps<Definition>
): ReactElement | null {
  return (
    <FilterPickerStateModeContext.Provider value="controlled">
      <OneFilterPicker {...props} />
    </FilterPickerStateModeContext.Provider>
  )
}

ControlledOneFilterPicker.displayName = "ControlledOneFilterPicker"
