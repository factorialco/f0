import type {
  F0TimelineRowMultitaskProps,
  F0TimelineRowNestedtaskProps,
  F0TimelineRowProps,
} from "./types"

import { MultitaskRow } from "./components/MultitaskRow"
import { NestedtaskRow } from "./components/NestedtaskRow"
import { TaskRow } from "./components/TaskRow"

const isNestedtask = (
  props: F0TimelineRowProps
): props is F0TimelineRowNestedtaskProps =>
  ("items" in props || "content" in props) &&
  "icon" in props &&
  props.icon !== undefined

const isMultitask = (
  props: F0TimelineRowProps
): props is F0TimelineRowMultitaskProps =>
  "items" in props && !("icon" in props && props.icon !== undefined)

export const F0TimelineRow = (props: F0TimelineRowProps) => {
  if (isNestedtask(props)) return <NestedtaskRow props={props} />
  if (isMultitask(props)) return <MultitaskRow props={props} />
  return <TaskRow props={props} />
}
