import { type ReactNode } from "react"

import { ReactFlowProvider, type NodeProps } from "@xyflow/react"

// deprecated-design-system uses vanilla-extract: its Box/Text emit atomic class
// names whose rules + theme CSS vars live in this stylesheet. Without it the node
// cards render unstyled (no border/background/padding). Must be imported once.
import "@factorialco/deprecated-design-system/dist/style.css"

import { CheckCircle, ThumbsUp, Organization } from "@/icons/app"

import { FlowNodeApproval } from "./Node/FlowNodeApproval"
import { FlowNodeConditionDefault } from "./Node/FlowNodeConditionDefault"
import { FlowNodeMultiAction } from "./Node/FlowNodeMultiAction"
import { FlowNodeSwitch } from "./Node/FlowNodeSwitch"
import { FlowNodeSwitchCondition } from "./Node/FlowNodeSwitchCondition"
import { FlowNodeTask } from "./Node/FlowNodeTask"
import { FlowNodeTerminate } from "./Node/FlowNodeTerminate"
import { FlowNodeTrigger } from "./Node/FlowNodeTrigger"
import { type NodeUI, type NodeUIType, type ParallelTask } from "./Node/types"
import { WorkflowContextProvider } from "./_stubs/WorkflowContext"
import { type BuildingBlock } from "./WorkflowBuildingBlocksBox"

/**
 * Renders the REAL Factorial workflow node renderers (copied verbatim into
 * ./Node/*) outside a full ReactFlow canvas. We synthesise the minimal
 * `NodeProps<NodeUI>` shape ReactFlow would pass and wrap everything in a
 * ReactFlowProvider + the stubbed WorkflowContext so the components render
 * identically to production.
 */

export type PreviewCategory =
  | "trigger"
  | "task"
  | "approvals"
  | "condition"
  | "conditionElse"
  | "conditionIf"
  | "terminate"
  | "multiAction"

const COMPONENTS: Record<
  PreviewCategory,
  (props: NodeProps<NodeUI>) => ReactNode
> = {
  trigger: FlowNodeTrigger,
  task: FlowNodeTask,
  approvals: FlowNodeApproval,
  condition: FlowNodeSwitch,
  conditionIf: FlowNodeSwitchCondition,
  conditionElse: FlowNodeConditionDefault,
  terminate: FlowNodeTerminate,
  multiAction: FlowNodeMultiAction,
}

// Building blocks drive the multi-action row icons/colours; mirrors the real editor.
const BUILDING_BLOCKS: BuildingBlock[] = [
  {
    key: "task",
    nodeType: "task",
    title: "Action",
    description: "A task to complete.",
    color: "#0075E1",
    background: "#CBE6FF",
    icon: CheckCircle,
  },
  {
    key: "approvals",
    nodeType: "approvals",
    title: "Approval",
    description: "A reviewer must approve.",
    color: "#6156ED",
    background: "#EBE9F4",
    icon: ThumbsUp,
  },
  {
    key: "condition",
    nodeType: "condition",
    title: "Condition",
    description: "Branch the flow.",
    color: "#007F8B",
    background: "#CDECEF",
    icon: Organization,
  },
]

export interface NodePreviewProps {
  category: PreviewCategory
  title?: string
  description?: string
  selected?: boolean
  isValid?: boolean
  /** For category="multiAction": the parallel sub-actions listed in the card. */
  parallelTasks?: Array<{
    type: ParallelTask["type"]
    title: string
    description: string
  }>
  /** For category="conditionIf": rendered comparison rows (left / operator / value). */
  comparison?: {
    priority?: number
    expressions: Array<{ left: string; operator: string; value: string }>
  }
  validationError?: string
}

const buildNodeProps = (props: NodePreviewProps): NodeProps<NodeUI> => {
  const {
    category,
    title = "",
    description = "",
    selected = false,
    isValid = true,
    parallelTasks = [],
    comparison,
    validationError,
  } = props

  const data: Record<string, unknown> = {
    title,
    description,
    isValid,
    validationError,
  }

  if (category === "multiAction") {
    data.parallelTasks = parallelTasks.map((t, i) => ({
      id: `task-${i}`,
      type: t.type,
      title: t.title,
      description: t.description,
      handler_name: "",
      payload: {},
      action_group: t.type,
    }))
  }

  if (category === "condition") {
    // FlowNodeSwitch reads data.comparisons to compute validity.
    data.comparisons = []
    // Treat the preview as a freshly placed (valid) node unless told otherwise.
    data.suppressInitialValidation = isValid
  }

  if (category === "conditionIf") {
    data.comparison = {
      label: "comparison_1",
      priority: comparison?.priority ?? 1,
      expression: {
        root: {
          operator: "and",
          expressions: (comparison?.expressions ?? []).map((e) => ({
            left: { name: e.left },
            operator: e.operator,
            right: { value: e.value },
          })),
        },
      },
    }
  }

  // The remaining NodeProps fields ReactFlow passes; minimal stubs are enough
  // for the renderers, which only read id / type / data / selected.
  return {
    id: `preview-${category}`,
    type: category as NodeUIType,
    data: data as NodeUI["data"],
    selected,
    dragging: false,
    isConnectable: false,
    positionAbsoluteX: 0,
    positionAbsoluteY: 0,
    width: undefined,
    height: undefined,
    sourcePosition: undefined,
    targetPosition: undefined,
    zIndex: 0,
    draggable: false,
    selectable: false,
    deletable: false,
  } as unknown as NodeProps<NodeUI>
}

export function NodePreview(props: NodePreviewProps) {
  const Component = COMPONENTS[props.category]
  const nodeProps = buildNodeProps(props)

  return (
    <ReactFlowProvider>
      <WorkflowContextProvider
        value={{
          buildingBlocks: BUILDING_BLOCKS,
          triggerConfig: {
            title: props.title ?? "",
            description: props.description ?? "",
          },
        }}
      >
        <Component {...nodeProps} />
      </WorkflowContextProvider>
    </ReactFlowProvider>
  )
}
