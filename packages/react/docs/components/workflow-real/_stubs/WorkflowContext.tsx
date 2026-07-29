/**
 * Local stub of `modules/workflows/contexts/WorkflowContext`.
 *
 * The copied node renderers call `useWorkflowContext()` to read a handful of
 * fields. For the static Storybook preview we return safe defaults so render
 * never crashes. Values can be overridden per-preview via <WorkflowContextProvider>.
 */
import { createContext, useContext, type ReactNode } from "react"

import type { BuildingBlock } from "../components/WorkflowBuildingBlocksBox"

export type TriggerConfig = { title: string; description: string }
export type EntityResolution = Record<string, Record<string, string>>

export type WorkflowContextValue = {
  buildingBlocks: BuildingBlock[]
  nodesUI: any[]
  setNodesUI: (updater: any) => void
  edgesUI: any[]
  triggerConfig: TriggerConfig
  variablesConfig: Record<string, any>
  variablesLoading: boolean
  entityResolution: EntityResolution
  multiActionDraft: {
    nodeId: string
    type: "task" | "approvals"
    taskId: string
  } | null
  setMultiActionDraft: (draft: any) => void
  multiActionEditingTaskId: string | null
  setMultiActionEditingTaskId: (id: string | null) => void
}

const defaultValue: WorkflowContextValue = {
  buildingBlocks: [],
  nodesUI: [],
  setNodesUI: () => {},
  edgesUI: [],
  triggerConfig: { title: "", description: "" },
  variablesConfig: {},
  variablesLoading: false,
  entityResolution: {},
  multiActionDraft: null,
  setMultiActionDraft: () => {},
  multiActionEditingTaskId: null,
  setMultiActionEditingTaskId: () => {},
}

const WorkflowContext = createContext<WorkflowContextValue>(defaultValue)

export const WorkflowContextProvider = ({
  value,
  children,
}: {
  value?: Partial<WorkflowContextValue>
  children: ReactNode
}) => (
  <WorkflowContext.Provider value={{ ...defaultValue, ...value }}>
    {children}
  </WorkflowContext.Provider>
)

export const useWorkflowContext = (): WorkflowContextValue =>
  useContext(WorkflowContext)
