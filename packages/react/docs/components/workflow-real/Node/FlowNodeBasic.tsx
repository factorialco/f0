import { useState } from "react"

import { Box, Text } from "@factorialco/deprecated-design-system"
import { NodeProps } from "@xyflow/react"

import { Warning as WarningIcon } from "@/icons/app"

import i18n from "../_stubs/i18n"
import { BasicNodeTheme, getStyle } from "./styles"
import { NodeUI } from "./types"

type Props = NodeProps<NodeUI> & {
  theme: BasicNodeTheme
}

export const FlowNodeBasic = ({ data, theme, ...props }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const { typeStyle, typeIconStyle, typeTitleStyle, containerStyle } = getStyle(
    props.selected || false,
    data.isValid,
    theme,
    isHovered
  )

  return (
    <Box flexDirection="column" gap="s4">
      <Box
        paddingY="s2"
        width="fit-content"
        borderRadius={{ all: "abs008" }}
        paddingLeft="s2"
        paddingRight="s4"
        flexDirection="row"
        alignItems="center"
        gap="s2"
        style={typeStyle}
      >
        <theme.type.icon width={18} height={18} style={{ ...typeIconStyle }} />
        <Box style={{ color: typeTitleStyle.color }}>{theme.type.title}</Box>
      </Box>
      <Box
        width="s360"
        flexDirection="column"
        alignItems="flexStart"
        justifyContent="center"
        borderRadius={{ all: "abs012" }}
        background="white"
        border={{ all: { style: "solid", color: "grey400", width: "s2" } }}
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          flexDirection="column"
          alignItems="flexStart"
          justifyContent="center"
          width="full"
          gap="s8"
          padding="s12"
        >
          <Box
            flexDirection="row"
            width="full"
            alignItems="center"
            justifyContent="spaceBetween"
            gap="s1"
          >
            <Text size="300" weight="medium" color="textPrimary">
              {data.title}
            </Text>
            {!data.isValid && (
              <span
                title={
                  data.validationError ||
                  i18n.t("workflows.validation.incomplete_block")
                }
              >
                <Box
                  paddingLeft="s2"
                  paddingRight="s4"
                  paddingY="s2"
                  height="min-content"
                  borderRadius={{ all: "abs010" }}
                  background="radicalRed1200"
                  border={{
                    all: {
                      style: "solid",
                      color: "radicalRed1200",
                      width: "s1",
                    },
                  }}
                  flexDirection="row"
                  alignItems="center"
                  gap="s2"
                >
                  <WarningIcon width={16} height={16} color="white" />
                  <Text size="100" color="white" weight="medium">
                    {i18n.t("workflows.general.error")}
                  </Text>
                </Box>
              </span>
            )}
          </Box>
          <Text size="100" color="grey700">
            {data.description.length > 100
              ? `${data.description.slice(0, 100)}...`
              : data.description}
          </Text>
        </Box>

        {data.nodeAttachment && data.nodeAttachment}
      </Box>
    </Box>
  )
}
