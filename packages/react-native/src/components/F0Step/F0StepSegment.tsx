import React from "react"
import { View } from "react-native"

import { f0StepRootVariants, f0StepVariants } from "./F0Step.styles"
import type { F0StepSegmentProps } from "./F0Step.types"

/**
 * F0StepSegment - Internal visual segment used by `F0Step`.
 *
 * Renders a single semantic step state without owning layout or interaction.
 *
 * @internal
 */
const F0StepSegment = React.memo(function F0StepSegment({
  state,
  testID,
}: F0StepSegmentProps) {
  return (
    <View testID={testID} className={f0StepRootVariants()}>
      <View className={f0StepVariants({ state })} />
    </View>
  )
})

F0StepSegment.displayName = "F0StepSegment"

export { F0StepSegment }
