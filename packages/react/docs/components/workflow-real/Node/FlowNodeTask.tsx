import { CheckCircle as CheckCircleIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { FlowNodeBasic } from "./FlowNodeBasic"
import { NodeUI } from "./types"

export const FlowNodeTask = (props: NodeProps<NodeUI>) => {
  return (
    <FlowNodeBasic
      theme={{
        type: {
          icon: CheckCircleIcon,
          background: "#CBE6FF",
          title: i18n.t("workflows.node_type.task.type"),
          color: "#0075E1",
          selectedColor: "#FFF",
          selectedBackground: "#47A7FF",
        },
        container: {
          borderColor: "#CBE6FF",
          selectedBorderColor: "#47A7FF",
          hoverBorderColor: "#79BFFF",
        },
      }}
      {...props}
    />
  )
}
