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
 * Args for demo card action
 */
export interface DemoCardArgs {
  moduleName: string
  description: string
  /** Optional URL for the action button (e.g. demo or docs link) */
  actionHref?: string
  /** Optional media URL for the preview area (image or video; type is inferred from URL) */
  previewMediaUrl?: string
}

/**
 * Avatar item for book a meeting card action
 */
export interface BookAMeetingCardActionAvatar {
  firstName: string
  lastName: string
  src?: string
}

/**
 * Args for book a meeting card action
 */
export interface BookAMeetingCardArgs {
  title: string
  schedule: string
  actionLabel: string
  /** Optional URL for the action button (e.g. booking page) */
  actionHref?: string
  /** Link target when actionHref is set (e.g. "_blank") */
  actionTarget?: "_blank" | "_self" | "_parent" | "_top"
  /** List of expert avatars (firstName, lastName, optional src). Shows +N when length > maxAvatars. */
  avatars?: BookAMeetingCardActionAvatar[]
  /** Max avatars to show before +N counter; default 3 */
  maxAvatars?: number
}

/**
 * Option for question card action (checkbox with label)
 */
export interface QuestionCardActionOption {
  id: string
  label: string
}

/**
 * One step in a multi-step question card
 */
export interface QuestionCardStep {
  question: string
  options: QuestionCardActionOption[]
}

/**
 * Args for question card action.
 * Use either (question + options) for a single step, or steps[] for multiple steps.
 */
export interface QuestionCardArgs {
  /** Optional card title (e.g. "AI Card Title") */
  title?: string
  /** Question text above the options (used when steps is not provided) */
  question?: string
  /** Checkbox options (id, label). Used when steps is not provided. User can select one or more. */
  options?: QuestionCardActionOption[]
  /** Multi-step: array of { question, options }. When provided, pagination works and step content is driven by this. */
  steps?: QuestionCardStep[]
  /** Current step (1-based) for pagination, e.g. "1/n" (only used when steps is not provided) */
  currentStep?: number
  /** Total steps for pagination (only used when steps is not provided) */
  totalSteps?: number
  /** Label for the Next button (default "Next") */
  nextLabel?: string
  /** Label for the Skip button (default "Skip") */
  skipLabel?: string
  /** When true, clicking Next sends the selected option label(s) as a new user message to trigger the next workflow turn */
  sendAsMessage?: boolean
}

/**
 * Args for module card action
 */
export interface ModuleCardArgs {
  /** Module id for the icon (e.g. company_projects, benefits, projects) */
  module: string
  /** Card title (e.g. "Projects") */
  moduleName: string
  /** Description text below the title */
  description: string
  /** Optional URL for the action button (redirect) */
  actionHref?: string
}

/**
 * FAQ item for FAQ card action
 */
export interface FAQCardItem {
  /** Unique identifier for the FAQ item */
  id: string
  /** The question text */
  question: string
  /** The answer text */
  answer: string
}

/**
 * Args for FAQ card action
 */
export interface FAQCardArgs {
  /** Title shown in the card header (default: "Questions before getting started") */
  title?: string
  /** Array of FAQ items to display */
  items: FAQCardItem[]
  /** Initially expanded item ID */
  defaultExpandedId?: string
  /** Whether multiple items can be expanded at once (default: false) */
  allowMultiple?: boolean
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
