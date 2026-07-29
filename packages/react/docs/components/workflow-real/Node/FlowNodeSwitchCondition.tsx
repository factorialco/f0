import { useMemo, useState } from "react"

import { Box, Skeleton, Text } from "@factorialco/deprecated-design-system"
import { Organization as OrganizationIcon } from "@/icons/app"
import { NodeProps } from "@xyflow/react"

import i18n from "../_stubs/i18n"
import { And } from "../Partials/And"
import { Operator } from "../Partials/Operator"
import type {
  EntityResolution,
  VariableSelectorConfig,
} from "../_stubs/VariableSelectorTypes"
import { useWorkflowContext } from "../_stubs/WorkflowContext"
import { useUpstreamFormVariables } from "../_stubs/hooks"

import { NodeUI, isNodePropsConditionIf } from "./types"

function parseValueToIds(value: string): string[] {
  if (!value) return []

  if (value.startsWith("[")) {
    try {
      const parsed = JSON.parse(value)
      if (Array.isArray(parsed)) {
        return parsed.map(String)
      }
    } catch {
      // Not valid JSON, treat as single value
    }
  }

  return [value]
}

function formatListWithOr(items: string[]): string {
  if (items.length === 0) return ""
  if (items.length === 1) return items[0] ?? ""
  if (items.length === 2)
    return `${items[0]} ${i18n.t("common.or")} ${items[1]}`

  const allButLast = items.slice(0, -1).join(", ")
  const last = items[items.length - 1]
  return `${allButLast} ${i18n.t("common.or")} ${last}`
}

function formatDisplayValue(
  value: string,
  selectorConfig: VariableSelectorConfig | undefined,
  entityResolution: EntityResolution
): string {
  if (!selectorConfig) return value

  if (selectorConfig.type === "people_group_target") {
    return selectorConfig.formatDisplayValue(value, entityResolution)
  }

  if (selectorConfig.type === "entity") {
    const ids = parseValueToIds(value)
    const resolutionMap = entityResolution[selectorConfig.entity]
    const names = ids.map((id) => resolutionMap?.[id] || id)
    return formatListWithOr(names) || value
  }

  if (value.startsWith("[")) {
    try {
      const parsed: unknown = JSON.parse(value)
      if (Array.isArray(parsed)) {
        return formatListWithOr(parsed.map(String))
      }
    } catch {
      // Not valid JSON, return as-is
    }
  }

  return value
}

export const FlowNodeSwitchCondition = (props: NodeProps<NodeUI>) => {
  const { variablesConfig, variablesLoading, entityResolution, edgesUI } =
    useWorkflowContext()
  const [isHovered, setIsHovered] = useState(false)

  const parentConditionNodeId = useMemo(
    () => edgesUI.find((edge) => edge.target === props.id)?.source ?? "",
    [edgesUI, props.id]
  )
  const upstreamFormTasks = useUpstreamFormVariables(parentConditionNodeId)

  const upstreamLabelMap = useMemo(() => {
    const map: Record<string, string> = {}
    for (const task of upstreamFormTasks) {
      for (const field of task.formFields) {
        map[`form__${field.invariantId}`] = field.label || field.elementId
      }
    }
    return map
  }, [upstreamFormTasks])

  if (!isNodePropsConditionIf(props)) return
  const comparison = props.data.comparison
  if (!comparison) return null

  const expressions = comparison.expression?.root?.expressions ?? []
  const showVariableLoadingSkeleton = variablesLoading && expressions.length > 0

  return (
    <Box
      position="relative"
      flexDirection="row"
      width="s360"
      alignItems="flexStart"
      justifyContent="spaceBetween"
      borderRadius={{ all: "abs012" }}
      background="white"
      border={{ all: { style: "solid", color: "grey400", width: "s2" } }}
      style={{ borderColor: isHovered ? "#8ADCE3" : "#CDECEF" }}
      padding="s12"
      gap="s8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        className="nowheel nopan"
        flexDirection="column"
        alignItems="flexStart"
        justifyContent="center"
        gap="s8"
      >
        {showVariableLoadingSkeleton ? (
          <>
            <Skeleton width="s96" height="s8" />
            <Skeleton width="s64" height="s8" />
            <Skeleton width="s80" height="s8" />
          </>
        ) : (
          <>
            {expressions.length === 0 && (
              <Box flexDirection="row" gap="s4">
                <Text color="textCritical" weight="medium" size="200">
                  {i18n.t("workflows.node_type.condition.no_expressions")}
                </Text>
              </Box>
            )}
            {expressions.map((expression: any, index: number) => {
              const selectorConfig = variablesConfig[expression.left.name]
              const leftName =
                selectorConfig?.label ||
                upstreamLabelMap[expression.left.name] ||
                expression.left.name.charAt(0).toUpperCase() +
                  expression.left.name.slice(1)

              const unit =
                selectorConfig?.type === "number"
                  ? selectorConfig.unit
                  : undefined

              const displayValue = formatDisplayValue(
                expression.right.value,
                selectorConfig,
                entityResolution
              )

              return (
                <Box
                  flexDirection="row"
                  flexWrap="wrap"
                  gap="s4"
                  style={{ maxWidth: "290px" }}
                  key={index}
                >
                  {index !== 0 &&
                    comparison.expression?.root?.operator === "and" && <And />}
                  <Text color="textPrimary" weight="medium" size="200">
                    {leftName}
                  </Text>
                  <Operator operator={expression.operator} />
                  <Text weight="medium" size="200">
                    {displayValue}
                    {unit && ` ${unit}`}
                  </Text>
                </Box>
              )
            })}
          </>
        )}
      </Box>

      <Box
        position="absolute"
        paddingX="s4"
        paddingY="s2"
        height="min-content"
        borderRadius={{ all: "abs010" }}
        border={{ all: { style: "solid", color: "grey400", width: "s1" } }}
        flexDirection="row"
        alignItems="center"
        gap="s2"
        style={{ top: "12px", right: "12px" }}
      >
        <OrganizationIcon width={16} height={16} color="textPrimary" />
        <Text size="100" color="textPrimary" weight="medium">
          {comparison.priority}
        </Text>
      </Box>
    </Box>
  )
}
