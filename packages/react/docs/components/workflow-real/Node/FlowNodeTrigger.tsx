import { Lightbulb as LightbulbIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { useWorkflowContext } from "../_stubs/WorkflowContext"
import { FlowNodeBasic } from "./FlowNodeBasic"
import { NodeUI } from "./types"

export const FlowNodeTrigger = (props: NodeProps<NodeUI>) => {
  const workflowContext = useWorkflowContext()

  return (
    <FlowNodeBasic
      theme={{
        type: {
          icon: LightbulbIcon,
          background: "#FFD7DF",
          title: i18n.t("workflows.node_type.trigger.type"),
          color: "#AD0023",
          selectedColor: "#FFF",
          selectedBackground: "#FF7A95",
        },
        container: {
          borderColor: "#FFD7DF",
          selectedBorderColor: "#FF7A95",
          hoverBorderColor: "#FFB7C5",
        },
      }}
      {...props}
      data={{
        ...props.data,
        title: workflowContext.triggerConfig.title || props.data.title,
        description:
          workflowContext.triggerConfig.description || props.data.description,
      }}
    />
  )
}
