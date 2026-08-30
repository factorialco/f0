import { forwardRef, type ForwardedRef } from "react"

import { experimentalComponent } from "@/lib/experimental"
import { OneFilterPicker } from "@/patterns/OneFilterPicker"

import type { F0SelectProps } from "./types"

import { ActiveFiltersChips } from "./components/ActiveFiltersChips"
import { F0SelectInternal } from "./F0Select"

export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const ConfiguredF0SelectComponent = forwardRef(function ConfiguredF0Select<
  T extends string = string,
  R = unknown,
>(props: F0SelectProps<T, R>, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <F0SelectInternal
      {...props}
      ref={ref}
      OneFilterPickerComponent={OneFilterPicker}
      ActiveFiltersChipsComponent={ActiveFiltersChips}
    />
  )
})

ConfiguredF0SelectComponent.displayName = "ConfiguredF0Select"

const ConfiguredF0Select = ConfiguredF0SelectComponent as <
  T extends string = string,
  R = unknown,
>(
  props: F0SelectProps<T, R> & {
    ref?: React.Ref<HTMLButtonElement>
  }
) => React.ReactElement

export const F0Select = experimentalComponent("F0Select", ConfiguredF0Select)
