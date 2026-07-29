import { useMemo } from "react"

import { Box, Text } from "@factorialco/deprecated-design-system"
import CrossedCircle from "@/icons/app/CrossedCircle"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { FlowNodeBasic } from "./FlowNodeBasic"
import { NodeUI, NodeUITerminate } from "./types"

const formatValue = (value: unknown): string => {
  if (value === null) return "null"
  if (value === undefined) return "undefined"
  if (typeof value === "boolean") return value ? "true" : "false"
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  if (Array.isArray(value)) return `[${value.length} items]`
  if (typeof value === "object") return "{...}"
  return String(value)
}

const isTerminateNode = (
  props: NodeProps<NodeUI>
): props is NodeProps<NodeUITerminate> => {
  return props.type === "terminate"
}

const OutputList = ({ output }: { output: Record<string, unknown> }) => {
  const entries = Object.entries(output)

  if (entries.length === 0) return null

  return (
    <Box
      flexDirection="column"
      gap="s4"
      padding="s12"
      width="full"
      style={{
        borderTop: "1px solid #E8E8E8",
        backgroundColor: "#FAFAFA",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      {entries.map(([key, value]) => (
        <Box key={key} flexDirection="row" alignItems="center" gap="s8">
          <Box
            paddingX="s6"
            paddingY="s2"
            borderRadius={{ all: "abs004" }}
            style={{ backgroundColor: "#E8E8E8" }}
          >
            <Text size="100" weight="medium" color="grey700">
              {key}
            </Text>
          </Box>
          <Text size="100" color="grey700">
            {formatValue(value)}
          </Text>
        </Box>
      ))}
    </Box>
  )
}

export const FlowNodeTerminate = (props: NodeProps<NodeUI>) => {
  const { description, outputAttachment } = useMemo(() => {
    if (isTerminateNode(props) && props.data.workflow_output) {
      const output = props.data.workflow_output
      const hasOutput = Object.keys(output).length > 0

      if (hasOutput) {
        return {
          description: i18n.t(
            "workflows.node_type.terminate.default.description"
          ),
          outputAttachment: <OutputList output={output} />,
        }
      }
    }
    return {
      description: i18n.t("workflows.node_type.terminate.default.description"),
      outputAttachment: undefined,
    }
  }, [props])

  return (
    <FlowNodeBasic
      theme={{
        type: {
          icon: CrossedCircle,
          background: "#E8E8E8",
          title: i18n.t("workflows.node_type.terminate.type"),
          color: "#525252",
          selectedColor: "#FFF",
          selectedBackground: "#757575",
        },
        container: {
          borderColor: "#E8E8E8",
          selectedBorderColor: "#757575",
          hoverBorderColor: "#BDBDBD",
        },
      }}
      {...props}
      data={{
        ...props.data,
        description,
        nodeAttachment: outputAttachment,
      }}
    />
  )
}
