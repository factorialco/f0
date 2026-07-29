import { Organization as OrganizationIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { FlowNodeBasic } from "./FlowNodeBasic"
import { NodeUI, isNodePropsCondition } from "./types"
import { isNodeUIConditionValid } from "./utils"

export const FlowNodeSwitch = (props: NodeProps<NodeUI>) => {
  if (!isNodePropsCondition(props)) return

  const shouldSuppressValidation =
    props.selected || props.data?.suppressInitialValidation
  const isValid = shouldSuppressValidation
    ? true
    : isNodeUIConditionValid(props)

  return (
    <FlowNodeBasic
      {...props}
      theme={{
        type: {
          icon: OrganizationIcon,
          background: "#CDECEF",
          title: i18n.t("workflows.node_type.condition.type"),
          color: "#007F8B",
          selectedColor: "#FFF",
          selectedBackground: "#69DAE5",
          paddingLeft: "4px",
        },
        container: {
          borderColor: "#CDECEF",
          selectedBorderColor: "#69DAE5",
          hoverBorderColor: "#8ADCE3",
        },
      }}
      data={{
        ...props.data,
        isValid,
      }}
    />
  )
}
