import {
  type NodeProps,
  type Edge as ReactFlowEdge,
  type Node as ReactFlowNode,
} from "@xyflow/react"

import type { WorkflowContainerFragment } from "../_stubs/graphql"
import type {
  BackendActionNodeData,
  BackendSwitchComparison,
  BackendSwitchNodeData,
} from "../_stubs/backend-types"

export type ActionGroupType = "task" | "approvals"

/** One task inside a Multi Action (parallel) block. Same shape as task/approval node data for form reuse. */
export type ParallelTask = {
  id: string
  type: ActionGroupType
  title: string
  description: string
  handler_name: string
  payload: Record<string, unknown>
  action_group: ActionGroupType
}

export type NodeUIType =
  | "trigger"
  | "condition"
  | "conditionIf"
  | "conditionElse"
  | "terminate"
  | "multiAction"
  | ActionGroupType

export interface BasicNodeUIData extends Record<string, unknown> {
  title: string
  description: string
  isValid: boolean
  validationError?: string
  suppressInitialValidation?: boolean
  nodeAttachment?: React.ReactNode
  workflowNodeFiles?: WorkflowContainerFragment["workflowNodeFiles"]
}

type BasicNodeUI = ReactFlowNode<BasicNodeUIData, NodeUIType>

export type NodeUICondition = BasicNodeUI & {
  type: "condition"
  data: BasicNodeUIData & Omit<BackendSwitchNodeData, "_type">
}

export type NodeUITrigger = BasicNodeUI & {
  type: "trigger"
  data: BasicNodeUIData
}

export type NodeUITask = BasicNodeUI & {
  type: "task"
  data: BasicNodeUIData & Omit<BackendActionNodeData, "_type">
}
export type NodeUIApproval = BasicNodeUI & {
  type: "approvals"
  data: BasicNodeUIData & Omit<BackendActionNodeData, "_type">
}

export type NodeUIConditionIf = BasicNodeUI & {
  type: "conditionIf"
  data: BasicNodeUIData & {
    comparison: BackendSwitchComparison
  }
}
export type NodeUIConditionElse = BasicNodeUI & {
  type: "conditionElse"
  data: BasicNodeUIData
}

export type NodeUITerminate = BasicNodeUI & {
  type: "terminate"
  data: BasicNodeUIData & {
    workflow_output?: Record<string, unknown>
  }
}

export type NodeUIMultiAction = BasicNodeUI & {
  type: "multiAction"
  data: BasicNodeUIData & {
    parallelTasks: ParallelTask[]
    forkIdentifier?: string
    joinIdentifier?: string
  }
}

export type NodeUIAction = NodeUITask | NodeUIApproval

export type NodeUI =
  | NodeUITrigger
  | NodeUITask
  | NodeUIApproval
  | NodeUICondition
  | NodeUIConditionIf
  | NodeUIConditionElse
  | NodeUITerminate
  | NodeUIMultiAction

export type EdgeUI = ReactFlowEdge

// type guards
export const isNodePropsCondition = (
  props: NodeProps<NodeUI>
): props is NodeProps<NodeUICondition> => {
  return props.type === "condition"
}
export const isNodePropsConditionIf = (
  props: NodeProps<NodeUI>
): props is NodeProps<NodeUIConditionIf> => {
  return props.type === "conditionIf"
}

export const isNodePropsMultiAction = (
  props: NodeProps<NodeUI>
): props is NodeProps<NodeUIMultiAction> => {
  return props.type === "multiAction"
}

export const isNodeUICondition = (
  node: NodeUI | undefined
): node is NodeUICondition => {
  return !!node && node.type === "condition"
}

export const isNodeUIConditionIfOrElse = (
  node: NodeUI | undefined
): node is NodeUIConditionIf | NodeUIConditionElse => {
  return (
    !!node && (node.type === "conditionIf" || node.type === "conditionElse")
  )
}

export const isNodeUIMultiAction = (
  node: NodeUI | undefined
): node is NodeUIMultiAction => {
  return !!node && node.type === "multiAction"
}

export const isNodeUITask = (
  node: NodeUITask | NodeUIApproval
): node is NodeUITask => {
  return node.type === "task"
}

export const isValidActionGroup = (value: string): value is ActionGroupType => {
  return value === "task" || value === "approvals"
}
