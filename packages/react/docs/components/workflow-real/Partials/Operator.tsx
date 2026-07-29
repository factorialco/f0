import { Text } from "@factorialco/deprecated-design-system"

import i18n from "../_stubs/i18n"
import type { WorkflowsValueObjectsConditionAstTermsRelationalOperatorEnum } from "../_stubs/graphql"

type Props = {
  operator: WorkflowsValueObjectsConditionAstTermsRelationalOperatorEnum
}

export const Operator = ({ operator }: Props) => {
  switch (operator) {
    case "lt":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.lt`)}
        </Text>
      )
    case "lte":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.lte`)}
        </Text>
      )
    case "gt":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.gt`)}
        </Text>
      )
    case "gte":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.gte`)}
        </Text>
      )
    case "neq":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.neq`)}
        </Text>
      )
    case "eq":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.eq`)}
        </Text>
      )
    case "one_of":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.one_of`)}
        </Text>
      )
    case "not_one_of":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.not_one_of`)}
        </Text>
      )
    case "in_people_group":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(`workflows.node_type.condition.operations.in_people_group`)}
        </Text>
      )
    case "not_in_people_group":
      return (
        <Text whiteSpace="nowrap" size="200">
          {i18n.t(
            `workflows.node_type.condition.operations.not_in_people_group`
          )}
        </Text>
      )
  }
}
