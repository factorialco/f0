/**
 * Local i18n stub for the Storybook docs preview of the real workflow nodes.
 *
 * The real nodes call `i18n.t('workflows.node_type.task.type')` etc. to get the
 * badge LABELS and a few small strings. We provide a small lookup map for the
 * keys the copied components actually read, plus a friendly fallback that turns
 * an unknown dotted key into a readable string (last segment, title-cased) so
 * the UI never shows raw i18n keys.
 */

const KNOWN: Record<string, string> = {
  // Badge type labels
  "workflows.node_type.trigger.type": "Trigger",
  "workflows.node_type.task.type": "Action",
  "workflows.node_type.approval.type": "Approval",
  "workflows.node_type.multi_action.type": "Multi-action",
  "workflows.node_type.condition.type": "Condition",
  "workflows.node_type.terminate.type": "End",

  // Default titles / descriptions
  "workflows.node_type.task.default.title": "New action",
  "workflows.node_type.task.default.description": "Configure this action.",
  "workflows.node_type.approval.default.title": "New approval",
  "workflows.node_type.approval.default.description":
    "Configure this approval.",
  "workflows.node_type.multi_action.title": "Multi-action",
  "workflows.node_type.multi_action.description":
    "Run several actions and approvals in parallel.",
  "workflows.node_type.multi_action.configuring": "Configuring…",
  "workflows.node_type.terminate.default.description":
    "Terminates the flow with an outcome.",
  "workflows.node_type.condition.default.title": "Condition",
  "workflows.node_type.condition.default.description":
    "Branches the flow based on a comparison.",
  "workflows.node_type.condition_if.title": "If",
  "workflows.node_type.condition_if.description":
    "Path taken when the condition matches.",
  "workflows.node_type.condition_else.title": "Else",
  "workflows.node_type.condition_else.description": "Default path.",

  // Condition partials / else node
  "workflows.node_type.condition.types.else.title": "In any other case",
  "workflows.node_type.condition.else": "Else",
  "workflows.node_type.condition.and": "AND",
  "workflows.node_type.condition.no_expressions": "No conditions set",

  // Operators
  "workflows.node_type.condition.operations.lt": "is less than",
  "workflows.node_type.condition.operations.lte": "is less than or equal to",
  "workflows.node_type.condition.operations.gt": "is greater than",
  "workflows.node_type.condition.operations.gte": "is greater than or equal to",
  "workflows.node_type.condition.operations.eq": "is",
  "workflows.node_type.condition.operations.neq": "is not",
  "workflows.node_type.condition.operations.one_of": "is one of",
  "workflows.node_type.condition.operations.not_one_of": "is not one of",
  "workflows.node_type.condition.operations.in_people_group": "is in group",
  "workflows.node_type.condition.operations.not_in_people_group":
    "is not in group",

  // Misc
  "workflows.general.error": "Error",
  "workflows.validation.incomplete_block": "This block is incomplete.",
  "workflows.building_blocks.title": "Building blocks",
  "workflows.sidepanel.multi_action.new_action": "New action",
  "common.or": "or",
}

const friendlyFallback = (key: string): string => {
  const last = key.split(".").pop() ?? key
  const spaced = last.replace(/_/g, " ")
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

const i18n = {
  t: (key: string, _opts?: unknown): string =>
    KNOWN[key] ?? friendlyFallback(key),
}

export default i18n
