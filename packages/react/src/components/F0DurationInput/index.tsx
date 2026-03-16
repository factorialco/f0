import { withDataTestId } from "@/lib/data-testid"

import { Component } from "../../lib/component/component"
import { F0DurationInput as DurationInputComponent } from "./F0DurationInput"

export const F0DurationInput = withDataTestId(
  Component(
    {
      name: "F0DurationInput",
      type: "form",
    },
    DurationInputComponent
  )
)

export * from "./types"
export {
  secondsToFields,
  secondsToVisibleFields,
  fieldsToSeconds,
} from "./utils"
