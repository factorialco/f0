import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"

import { Box, Text } from "@factorialco/deprecated-design-system"

import i18n from "./_stubs/i18n"
import { NodeUIType } from "./Node/types"

export type BuildingBlockType = "task" | "condition" | "approvals"

export type BuildingBlock = {
  key: BuildingBlockType
  nodeType: NodeUIType
  title: string
  description: string
  color: string
  background: string
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >
}

type Props = {
  buildingBlocks: BuildingBlock[]
}

export const WorkflowBuildingBlocksBox = ({ buildingBlocks }: Props) => {
  return (
    <Box
      className="absolute right-4 z-50 flex gap-3 items-start justify-center"
      style={{ top: "16px" }}
      background="white"
      border={{ all: { width: "s1", color: "grey300", style: "solid" } }}
      padding="s12"
      borderRadius={{ all: "abs012" }}
      width="s400"
    >
      <Text
        size="200"
        weight="semibold"
        color="textSecondary"
        className="uppercase"
      >
        {i18n.t("workflows.building_blocks.title")}
      </Text>

      {buildingBlocks.map((block) => (
        <Box
          cursor="pointer"
          key={block.key}
          width="full"
          padding="s12"
          borderRadius={{ all: "abs012" }}
          border={{ all: { width: "s1", color: "grey300", style: "solid" } }}
          flexDirection="row"
          alignItems="center"
          gap="s12"
        >
          <Box
            flexDirection="row"
            style={{ backgroundColor: block.background }}
            borderRadius={{ all: "abs012" }}
            width="s32"
            height="s32"
            alignItems="center"
            justifyContent="center"
          >
            <block.icon
              width={22}
              height={22}
              style={{ color: block.color, strokeWidth: 1.5 }}
            />
          </Box>
          <Box flexDirection="column">
            <Text size="200" weight="medium">
              {block.title}
            </Text>
            <Text size="100" color="grey700">
              {block.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
