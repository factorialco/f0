import { useState } from "react"

import { Box, Text } from "@factorialco/deprecated-design-system"
import { Organization as OrganizationIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { NodeUI } from "./types"

export const FlowNodeConditionDefault = (_: NodeProps<NodeUI>) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      flexDirection="row"
      width="s360"
      alignItems="flexStart"
      justifyContent="spaceBetween"
      borderRadius={{ all: "abs012" }}
      background="white"
      border={{ all: { style: "solid", color: "grey400", width: "s2" } }}
      style={{ borderColor: isHovered ? "#8ADCE3" : "#CDECEF" }}
      padding="s12"
      gap="s8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        flexDirection="column"
        alignItems="flexStart"
        justifyContent="center"
        gap="s8"
      >
        <Box flexDirection="row" gap="s4">
          <Text color="textPrimary" weight="medium" size="200">
            {i18n.t("workflows.node_type.condition.types.else.title")}
          </Text>
        </Box>
      </Box>

      <Box
        paddingX="s4"
        paddingY="s2"
        height="min-content"
        borderRadius={{ all: "abs010" }}
        border={{ all: { style: "solid", color: "grey400", width: "s1" } }}
        flexDirection="row"
        alignItems="center"
        gap="s2"
      >
        <OrganizationIcon width={16} height={16} color="textPrimary" />
        <Text size="100" color="textPrimary" weight="medium">
          {i18n.t("workflows.node_type.condition.else")}
        </Text>
      </Box>
    </Box>
  )
}
