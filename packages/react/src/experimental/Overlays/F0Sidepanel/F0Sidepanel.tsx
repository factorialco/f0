import { F0SidepanelInternal } from "./F0SidepanelInternal"
import { F0SidepanelProps } from "./types"

export const F0Sidepanel = (props: F0SidepanelProps) => (
  <F0SidepanelInternal {...props} />
)

F0Sidepanel.displayName = "F0Sidepanel"
