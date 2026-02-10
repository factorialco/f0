import { useState } from "react"

import { EntitySelect } from "@/experimental/Forms/EntitySelect"
import {
  EntityId,
  EntitySelectEntity,
} from "@/experimental/Forms/EntitySelect/types"
import { Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { EntitySelectQuestionProps } from "./types"

export type { EntitySelectQuestionProps } from "./types"

const DEFAULT_GROUP = {
  label: "All",
  value: "all",
  groupType: "avatar" as const,
}

export const EntitySelectQuestion = ({
  value,
  entities = [],
  groups,
  onLoadEntities,
  entityLabel,
  searchPlaceholder,
  ...baseQuestionComponentProps
}: EntitySelectQuestionProps) => {
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()
  const { t } = useI18n()

  const [selectedGroup, setSelectedGroup] = useState<string>("all")
  const [expandedElements, setExpandedElements] = useState<EntityId[]>([])

  const isSingle = baseQuestionComponentProps.type === "entity-select"

  const handleItemExpandedChange = (id: EntityId, expanded: boolean) => {
    if (expanded) {
      setExpandedElements([id, ...expandedElements])
    } else {
      setExpandedElements(expandedElements.filter((el) => el !== id))
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (open && onLoadEntities) {
      onLoadEntities()
    }
  }

  const handleSingleSelect = (entity: EntitySelectEntity | null) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "entity-select",
      value: entity?.id ?? null,
    })
  }

  const handleMultiSelect = (selected: EntitySelectEntity[]) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "entity-select-multi",
      value: selected.map((e) => e.id),
    })
  }

  const selectedEntities = entities.filter((entity) => {
    if (isSingle) {
      return entity.id === value
    }
    return Array.isArray(value) && value.includes(entity.id)
  })

  const entitiesWithExpanded = entities.map((entity) => ({
    ...entity,
    expanded: expandedElements.includes(entity.id),
  }))

  // In edit mode, show a placeholder preview
  if (isEditMode) {
    return (
      <BaseQuestion {...baseQuestionComponentProps}>
        <div className="flex items-center gap-2 rounded-md border border-dashed border-f1-border-secondary px-3 py-2.5 text-f1-foreground-secondary">
          <span className="text-sm">
            {entityLabel ??
              t("coCreationForm.entitySelectQuestion.placeholder")}
          </span>
        </div>
      </BaseQuestion>
    )
  }

  // Answer mode: render EntitySelect
  const entitySelectGroups = groups ?? [DEFAULT_GROUP]

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        {isSingle ? (
          <EntitySelect
            entities={entitiesWithExpanded}
            groups={entitySelectGroups}
            selectedGroup={selectedGroup}
            onGroupChange={(val) => setSelectedGroup(val ?? "all")}
            onItemExpandedChange={handleItemExpandedChange}
            onOpenChange={handleOpenChange}
            singleSelector
            onSelect={handleSingleSelect}
            selectedEntities={selectedEntities}
            label={t("coCreationForm.answer.label")}
            hideLabel
            placeholder={
              entityLabel ??
              t("coCreationForm.entitySelectQuestion.placeholder")
            }
            icon={Search}
            searchPlaceholder={searchPlaceholder ?? t("actions.search")}
            selectedItemsCopy={t("status.selected.plural")}
            notFoundTitle={t("select.noResults")}
            notFoundSubtitle=""
            size="md"
          />
        ) : (
          <EntitySelect
            entities={entitiesWithExpanded}
            groups={entitySelectGroups}
            selectedGroup={selectedGroup}
            onGroupChange={(val) => setSelectedGroup(val ?? "all")}
            onItemExpandedChange={handleItemExpandedChange}
            onOpenChange={handleOpenChange}
            singleSelector={undefined}
            onSelect={handleMultiSelect}
            selectedEntities={selectedEntities}
            label={t("coCreationForm.answer.label")}
            hideLabel
            placeholder={
              entityLabel ??
              t("coCreationForm.entitySelectQuestion.placeholder")
            }
            icon={Search}
            searchPlaceholder={searchPlaceholder ?? t("actions.search")}
            selectedItemsCopy={t("status.selected.plural")}
            selectAllLabel={t("actions.selectAll")}
            clearLabel={t("actions.clear")}
            selectedLabel={t("status.selected.singular")}
            notFoundTitle={t("select.noResults")}
            notFoundSubtitle=""
            size="md"
          />
        )}
      </div>
    </BaseQuestion>
  )
}
