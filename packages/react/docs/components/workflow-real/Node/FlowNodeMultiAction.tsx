import {
  type MouseEvent,
  type SVGProps,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"

import { Box, Text } from "@factorialco/deprecated-design-system"
import { F0Button } from "@/components/F0Button"
import { Add as AddIcon, Group as GroupIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { BuildingBlocksList } from "../BuildingBlocksList"
import { useWorkflowContext } from "../_stubs/WorkflowContext"
import useClickOutside, { useHoverState } from "../_stubs/hooks"

import { BasicNodeTheme, getStyle } from "./styles"
import { type NodeUI, isNodePropsMultiAction } from "./types"

const DROPDOWN_MIN_WIDTH = 160
const DROPDOWN_Z_INDEX = 10000

const animatePlaceholderIn = (el: HTMLDivElement | null) => {
  el?.animate(
    [
      { opacity: 0, transform: "translateY(-8px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 220, easing: "ease-out" }
  )
}

const getMultiActionTheme = (typeTitle: string): BasicNodeTheme => ({
  type: {
    icon: GroupIcon,
    background: "#FDEBD0",
    title: typeTitle,
    color: "#E67E22",
    selectedColor: "#FFF",
    selectedBackground: "#E67E22",
  },
  container: {
    borderColor: "#FDEBD0",
    selectedBorderColor: "#E67E22",
    hoverBorderColor: "#F5D5A8",
  },
})

export const FlowNodeMultiAction = (props: NodeProps<NodeUI>) => {
  const {
    buildingBlocks,
    setNodesUI,
    setMultiActionEditingTaskId,
    setMultiActionDraft,
    multiActionDraft,
  } = useWorkflowContext()
  const containerHover = useHoverState(false)

  const multiActionTheme = useMemo(
    () => getMultiActionTheme(i18n.t("workflows.node_type.multi_action.type")),
    []
  )

  const blocksForEmptyState = useMemo(
    () => buildingBlocks.filter((block) => block.key !== "condition"),
    [buildingBlocks]
  )

  const handleBlockClick = useCallback(
    (nodeType: string, nodeId: string) => {
      if (nodeType === "task" || nodeType === "approvals") {
        setNodesUI((prev: any[]) =>
          prev.map((n) => ({ ...n, selected: n.id === nodeId }))
        )
        setMultiActionDraft({
          nodeId,
          type: nodeType,
          taskId: crypto.randomUUID(),
        })
      }
    },
    [setNodesUI, setMultiActionDraft]
  )

  const handleTaskClick = useCallback(
    (
      e: MouseEvent | PointerEvent | globalThis.MouseEvent,
      taskId: string,
      nodeId: string
    ) => {
      e.stopPropagation()
      setNodesUI((prev: any[]) =>
        prev.map((n) => ({ ...n, selected: n.id === nodeId }))
      )
      setMultiActionEditingTaskId(taskId)
    },
    [setNodesUI, setMultiActionEditingTaskId]
  )

  const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number
    left: number
  } | null>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const dropdownMenuRef = useRef<HTMLDivElement>(null)
  const clickOutsideRefs = useMemo(() => [buttonRef, dropdownMenuRef], [])

  useLayoutEffect(() => {
    if (!dropdownOpen || !buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    setDropdownPosition({
      top: rect.bottom + 4,
      left: rect.left,
    })
  }, [dropdownOpen])

  useClickOutside(clickOutsideRefs, () => setDropdownOpen(false))

  if (!isNodePropsMultiAction(props)) return null

  const { data, id: nodeId } = props
  const { typeStyle, typeIconStyle, typeTitleStyle, containerStyle } = getStyle(
    props.selected ?? false,
    data.isValid,
    multiActionTheme,
    containerHover.isHovered
  )
  const TypeIcon = multiActionTheme.type.icon
  const hasTasks = data.parallelTasks.length > 0

  const draftForThisNode =
    multiActionDraft?.nodeId === nodeId ? multiActionDraft : null
  const draftBlock = draftForThisNode
    ? blocksForEmptyState.find((b) => b.nodeType === draftForThisNode.type)
    : null
  const DraftIcon = draftBlock?.icon ?? GroupIcon
  const draftIconColor = draftBlock?.color ?? "#6B7280"
  const draftLabel =
    draftForThisNode?.type === "approvals"
      ? i18n.t("workflows.node_type.approval.default.title")
      : i18n.t("workflows.node_type.task.default.title")

  const placeholderCard = draftForThisNode ? (
    <Box
      key="multi-action-placeholder"
      ref={animatePlaceholderIn}
      flexDirection="row"
      width="full"
      padding="s8"
      borderRadius={{ all: "abs008" }}
      gap="s8"
      alignItems="flexStart"
      border={{ all: { style: "dashed", color: "grey400", width: "s1" } }}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <DraftIcon
        width="20"
        height="20"
        style={{
          color: draftIconColor,
          strokeWidth: "1",
          flexShrink: "0",
          opacity: 0.6,
        }}
      />
      <Box
        flexDirection="column"
        width="full"
        gap="s2"
        style={{ minWidth: "0" }}
      >
        <Text size="200" weight="medium" color="grey600">
          {draftLabel}
        </Text>
        <Text size="100" color="grey500">
          {i18n.t("workflows.node_type.multi_action.configuring")}
        </Text>
      </Box>
    </Box>
  ) : null

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
        <TypeIcon width={18} height={18} style={{ ...typeIconStyle }} />
        <Box style={{ color: typeTitleStyle.color }}>
          {multiActionTheme.type.title}
        </Box>
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
        {...containerHover.hoverProps}
      >
        <Box
          flexDirection="column"
          alignItems="flexStart"
          justifyContent="center"
          width="full"
          gap="s8"
          padding="s12"
        >
          <Box flexDirection="column" width="full" gap="s4">
            <Text size="300" weight="medium" color="textPrimary">
              {data.title}
            </Text>
            <Text size="100" color="grey700">
              {data.description.length > 100
                ? `${data.description.slice(0, 100)}...`
                : data.description}
            </Text>
          </Box>

          <Box
            width="full"
            style={{
              height: "1px",
              backgroundColor: "var(--f1-border-secondary, #E2E2E5)",
            }}
          />

          {!hasTasks ? (
            draftForThisNode ? (
              <Box flexDirection="column" width="full" style={{ gap: "10px" }}>
                {placeholderCard}
              </Box>
            ) : (
              <Box flexDirection="column" width="full" style={{ gap: "10px" }}>
                {blocksForEmptyState.map((block) => {
                  const BlockIcon = block.icon
                  const IconWithColor = (
                    iconProps: SVGProps<SVGSVGElement>
                  ) => (
                    <BlockIcon
                      {...iconProps}
                      style={{
                        ...(iconProps.style &&
                        typeof iconProps.style === "object" &&
                        !Array.isArray(iconProps.style)
                          ? iconProps.style
                          : {}),
                        color: block.color,
                      }}
                    />
                  )
                  return (
                    <F0Button
                      key={block.key}
                      variant="outline"
                      size="sm"
                      icon={IconWithColor}
                      label={block.title}
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation()
                        handleBlockClick(block.nodeType, nodeId)
                      }}
                      style={{ justifyContent: "flex-start" }}
                    />
                  )
                })}
              </Box>
            )
          ) : (
            <Box flexDirection="column" width="full" style={{ gap: "10px" }}>
              {data.parallelTasks.map((task) => {
                const block = blocksForEmptyState.find(
                  (b) => b.nodeType === task.type
                )
                const TaskOrApprovalIcon = block?.icon ?? GroupIcon
                const iconColor = block?.color ?? "#6B7280"
                const isHoveredRow = hoveredTaskId === task.id
                return (
                  <Box
                    key={task.id}
                    flexDirection="row"
                    width="full"
                    padding="s8"
                    borderRadius={{ all: "abs008" }}
                    gap="s8"
                    alignItems="flexStart"
                    style={{
                      backgroundColor: isHoveredRow ? "#F7F7F7" : "transparent",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredTaskId(task.id)}
                    onMouseLeave={() => setHoveredTaskId(null)}
                    onClick={(e) => handleTaskClick(e, task.id, nodeId)}
                  >
                    <TaskOrApprovalIcon
                      width="20"
                      height="20"
                      style={{
                        color: iconColor,
                        strokeWidth: "1",
                        flexShrink: "0",
                      }}
                    />
                    <Box
                      flexDirection="column"
                      width="full"
                      gap="s2"
                      style={{ minWidth: "0" }}
                    >
                      <Text size="200" weight="medium" color="textPrimary">
                        {task.title ||
                          i18n.t("workflows.node_type.task.default.title")}
                      </Text>
                      <Text size="100" color="grey700">
                        {task.description ||
                          i18n.t(
                            "workflows.node_type.task.default.description"
                          )}
                      </Text>
                    </Box>
                  </Box>
                )
              })}

              {placeholderCard}

              <Box
                position="relative"
                ref={buttonRef}
                style={{ alignSelf: "flex-start" }}
              >
                <F0Button
                  variant="outline"
                  size="md"
                  icon={AddIcon}
                  label={i18n.t("workflows.sidepanel.multi_action.new_action")}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation()
                    setDropdownOpen((prev) => !prev)
                  }}
                />
                {dropdownOpen &&
                  dropdownPosition &&
                  createPortal(
                    <Box
                      ref={dropdownMenuRef}
                      background="white"
                      border={{
                        all: { color: "grey400", style: "solid", width: "s1" },
                      }}
                      borderRadius={{ all: "abs012" }}
                      paddingY="s4"
                      paddingX="s4"
                      flexDirection="column"
                      gap="s2"
                      style={{
                        position: "fixed",
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                        minWidth: `${DROPDOWN_MIN_WIDTH}px`,
                        zIndex: `${DROPDOWN_Z_INDEX}`,
                      }}
                      onClick={(e: MouseEvent) => e.stopPropagation()}
                    >
                      <BuildingBlocksList
                        blocks={blocksForEmptyState}
                        onSelect={(nodeType) => {
                          if (nodeType === "task" || nodeType === "approvals") {
                            handleBlockClick(nodeType, nodeId)
                            setDropdownOpen(false)
                          }
                        }}
                        showTooltip={false}
                        variant="compact"
                      />
                    </Box>,
                    document.body
                  )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
