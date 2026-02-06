import { RenderFunctionStatus } from "@copilotkit/react-core"

/**
 * Base render props for copilot actions
 */
export interface CopilotActionRenderProps<TArgs = Record<string, unknown>> {
  status: RenderFunctionStatus
  args: TArgs
  result?: Record<string, unknown>
}

/**
 * Args for orchestrator thinking action
 */
export interface OrchestratorThinkingArgs {
  message: string
}

/**
 * Result for orchestrator thinking action
 */
export interface OrchestratorThinkingResult {
  inGroup?: boolean
}

/**
 * Source object for message sources action
 */
export interface MessageSourceItem {
  title: string
  link: string
  icon?: string
  targetBlank?: boolean
}

/**
 * Args for message sources action
 */
export interface MessageSourcesArgs {
  sources: MessageSourceItem[]
}

/**
 * Configuration for a copilot action
 */
export interface CopilotActionConfig<TArgs = Record<string, unknown>> {
  name: string
  description: string
  parameters: CopilotActionParameter[]
  available?: "enabled" | "disabled"
  render?: (props: CopilotActionRenderProps<TArgs>) => React.ReactNode
}

/**
 * Parameter definition for copilot action
 */
export interface CopilotActionParameter {
  name: string
  type?: string
  description: string
  required?: boolean
  default?: unknown
  attributes?: CopilotActionParameterAttribute[]
}

/**
 * Attribute for nested parameter
 */
export interface CopilotActionParameterAttribute {
  name: string
  type: string
  description: string
  required?: boolean
  default?: unknown
}
