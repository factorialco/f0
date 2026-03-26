import type { F0TimelineRowMultitaskProps, F0TimelineRowProps } from "./types"

import { MultitaskRow } from "./components/MultitaskRow"
import { TaskRow } from "./components/TaskRow"

const isMultitask = (
  props: F0TimelineRowProps
): props is F0TimelineRowMultitaskProps => "items" in props

export const F0TimelineRow = (props: F0TimelineRowProps) =>
  isMultitask(props) ? (
    <MultitaskRow props={props} />
  ) : (
    <TaskRow props={props} />
  )
