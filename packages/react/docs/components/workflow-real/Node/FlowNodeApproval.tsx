import { ThumbsUp as Icon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { FlowNodeBasic } from "./FlowNodeBasic"
import { NodeUI } from "./types"

export const FlowNodeApproval = (props: NodeProps<NodeUI>) => {
  return (
    <FlowNodeBasic
      theme={{
        type: {
          icon: Icon,
          background: "#EBE9F4",
          title: i18n.t("workflows.node_type.approval.type"),
          color: "#6156ED",
          selectedColor: "#FFF",
          selectedBackground: "#877FED",
        },
        container: {
          borderColor: "#D4D1F8",
          selectedBorderColor: "#877FED",
          hoverBorderColor: "#BBB6F8",
        },
      }}
      {...props}
    />
  )
}
