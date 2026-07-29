import { useEffect, useState } from "react"

import { Box, Text } from "@factorialco/deprecated-design-system"

import { BuildingBlock } from "./WorkflowBuildingBlocksBox"
import { useHoverState } from "./_stubs/hooks"
import { NodeUIType } from "./Node/types"

type ListProps = {
  blocks: BuildingBlock[]
  onSelect: (nodeType: NodeUIType) => void
  showTooltip?: boolean
  variant?: "default" | "compact"
}

type ItemProps = {
  block: BuildingBlock
  onSelect: (nodeType: NodeUIType) => void
  showTooltip: boolean
  variant: "default" | "compact"
  onHoverChange: (block: BuildingBlock | null) => void
}

const variantStyles = {
  default: {
    itemPaddingY: "s4" as const,
    itemPaddingX: "s6" as const,
    gap: "s12" as const,
    iconSize: 18,
    textSize: "100" as const,
  },
  compact: {
    itemPaddingY: "s6" as const,
    itemPaddingX: "s8" as const,
    gap: "s8" as const,
    iconSize: 16,
    textSize: "200" as const,
  },
}

const BuildingBlockListItem = ({
  block,
  onSelect,
  showTooltip,
  variant,
  onHoverChange,
}: ItemProps) => {
  const hover = useHoverState(false)
  const styles = variantStyles[variant]

  useEffect(() => {
    if (showTooltip) {
      onHoverChange(hover.isHovered ? block : null)
    }
  }, [showTooltip, hover.isHovered, block, onHoverChange])

  const iconBackground =
    variant === "compact"
      ? block.background
      : hover.isHovered
        ? block.background
        : "white"

  return (
    <Box
      key={block.key}
      {...hover.hoverProps}
      cursor="pointer"
      width="full"
      paddingY={styles.itemPaddingY}
      paddingX={styles.itemPaddingX}
      flexDirection="row"
      alignItems="center"
      gap={styles.gap}
      borderRadius={{ all: "abs008" }}
      onClick={(event: React.MouseEvent | MouseEvent) => {
        event.stopPropagation()
        onSelect(block.nodeType)
      }}
      role="menuitem"
    >
      <Box
        flexDirection="row"
        style={{
          backgroundColor: iconBackground,
          transition: "background-color 120ms ease-in-out",
        }}
        borderRadius={{ all: "abs006" }}
        width="s24"
        height="s24"
        alignItems="center"
        justifyContent="center"
      >
        <block.icon
          width={styles.iconSize}
          height={styles.iconSize}
          style={{ color: block.color, strokeWidth: 1 }}
          aria-hidden="true"
        />
      </Box>
      <Text size={styles.textSize} weight="medium" color="textPrimary">
        {block.title}
      </Text>
    </Box>
  )
}

export const BuildingBlocksList = ({
  blocks,
  onSelect,
  showTooltip = true,
  variant = "default",
}: ListProps) => {
  const [hoveringBlock, setHoveringBlock] = useState<BuildingBlock | null>(null)

  return (
    <>
      {blocks.map((block) => (
        <BuildingBlockListItem
          key={block.key}
          block={block}
          onSelect={onSelect}
          showTooltip={showTooltip}
          variant={variant}
          onHoverChange={setHoveringBlock}
        />
      ))}
      {showTooltip && (
        <Box
          borderRadius={{ all: "abs012" }}
          className="bg-f1-background-inverse"
          flexDirection="column"
          alignItems="flexStart"
          justifyContent="center"
          position="absolute"
          paddingY="s12"
          paddingX="s12"
          gap="s4"
          style={{
            width: "260px",
            transition: "all 150ms ease-in-out",
            opacity: hoveringBlock ? "1" : "0",
            zIndex: "100",
            left: "calc(100% + 20px)",
            top: "0",
          }}
        >
          <Text
            size="100"
            weight="medium"
            className="text-f1-foreground-inverse"
          >
            {hoveringBlock?.title ?? ""}
          </Text>
          <Text size="100" className="text-f1-foreground-inverse">
            {hoveringBlock?.description ?? ""}
          </Text>
        </Box>
      )}
    </>
  )
}
