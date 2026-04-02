import React from "react"

import type { F0SwitchField } from "./fields/switch/types"
import type { F0Field } from "./fields/types"
import type {
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"

import { RowRenderer } from "./components/RowRenderer"
import { FieldRenderer } from "./fields/FieldRenderer"

/**
 * Checks if a field has an object-form renderIf that targets a specific switch
 * being true.
 */
export function isDependentOnSwitch(
  field: F0Field,
  switchIds: Set<string>
): string | null {
  const renderIf = field.renderIf
  if (!renderIf || typeof renderIf === "function") return null
  if (
    "fieldId" in renderIf &&
    "equalsTo" in renderIf &&
    renderIf.equalsTo === true &&
    switchIds.has(renderIf.fieldId)
  ) {
    return renderIf.fieldId
  }
  return null
}

/**
 * Checks if a field has an object-form renderIf that targets a specific
 * cardSelect field with a string equalsTo value.
 */
export function isDependentOnCardSelect(
  field: F0Field,
  cardSelectIds: Set<string>
): { fieldId: string; equalsTo: string } | null {
  const renderIf = field.renderIf
  if (!renderIf || typeof renderIf === "function") return null
  if (
    "fieldId" in renderIf &&
    "equalsTo" in renderIf &&
    typeof renderIf.equalsTo === "string" &&
    cardSelectIds.has(renderIf.fieldId)
  ) {
    return { fieldId: renderIf.fieldId, equalsTo: renderIf.equalsTo }
  }
  return null
}

/**
 * Builds a Map from option value → ReactNode for CardSelectDepsContext.
 * Used for both standalone cardSelect fields and those inside switch groups.
 */
export function buildCardSelectContentMap(
  deps: Map<string, (F0Field | RowDefinition)[]>,
  sectionId?: string
): Map<string, React.ReactNode> {
  const contentMap = new Map<string, React.ReactNode>()
  for (const [equalsTo, items] of deps) {
    contentMap.set(
      equalsTo,
      <div key={equalsTo} className="flex flex-col gap-4">
        {items.map((dep) =>
          "type" in dep && dep.type === "row" ? (
            <RowRenderer
              key={dep.fields.map((f) => f.id).join("-")}
              row={dep}
              sectionId={sectionId}
            />
          ) : (
            <FieldRenderer
              key={(dep as F0Field).id}
              field={dep as F0Field}
              sectionId={sectionId}
            />
          )
        )}
      </div>
    )
  }
  return contentMap
}

export type GroupedItem =
  | {
      type: "field"
      item: FieldItem
      cardSelectDependentFields?: Map<string, (F0Field | RowDefinition)[]>
    }
  | { type: "row"; item: RowDefinition; index: number }
  | { type: "section"; item: SectionDefinition }
  | {
      type: "switchGroup"
      fields: F0SwitchField[]
      dependentFields?: Map<string, (F0Field | RowDefinition)[]>
      cardSelectDependentFields?: Map<
        string,
        Map<string, (F0Field | RowDefinition)[]>
      >
    }

/**
 * Groups contiguous switch fields together for rendering in a bordered container.
 * Absorbs subsequent dependent fields (including cardSelect chains) into the switch group.
 * Also handles standalone cardSelect fields that absorb their own dependents.
 *
 * Only declarative (object-form) renderIf conditions are detected — function-form
 * renderIf cannot be statically analysed and will render as regular fields.
 */
export function groupContiguousSwitches(
  definition: FormDefinitionItem[]
): GroupedItem[] {
  const result: GroupedItem[] = []
  let i = 0

  while (i < definition.length) {
    const item = definition[i]

    if (item.type === "field" && item.field.type === "switch") {
      // Collect contiguous switches (grouped: false breaks the chain into solo groups)
      const switchGroup: F0SwitchField[] = []
      if (item.field.grouped === false) {
        // Solo switch — don't merge with neighbors
        switchGroup.push(item.field as F0SwitchField)
        i++
      } else {
        while (
          i < definition.length &&
          definition[i].type === "field" &&
          (definition[i] as FieldItem).field.type === "switch" &&
          ((definition[i] as FieldItem).field as F0SwitchField).grouped !==
            false
        ) {
          switchGroup.push((definition[i] as FieldItem).field as F0SwitchField)
          i++
        }
      }

      const switchIds = new Set(switchGroup.map((f) => f.id))
      const dependentFields = new Map<string, (F0Field | RowDefinition)[]>()
      const cardSelectIds = new Set<string>()
      const cardSelectDependentFields = new Map<
        string,
        Map<string, (F0Field | RowDefinition)[]>
      >()

      // Absorb subsequent fields/rows that depend on a switch or cardSelect in this group
      while (i < definition.length) {
        const next = definition[i]
        if (next.type === "field" && next.field.type !== "switch") {
          // Check switch dependency first
          const parentSwitchId = isDependentOnSwitch(next.field, switchIds)
          if (parentSwitchId) {
            if (next.field.type === "cardSelect") {
              cardSelectIds.add(next.field.id)
            }
            const existing = dependentFields.get(parentSwitchId) ?? []
            existing.push(next.field)
            dependentFields.set(parentSwitchId, existing)
            i++
            continue
          }
          // Check cardSelect dependency
          const cardSelectDep = isDependentOnCardSelect(
            next.field,
            cardSelectIds
          )
          if (cardSelectDep) {
            if (!cardSelectDependentFields.has(cardSelectDep.fieldId)) {
              cardSelectDependentFields.set(cardSelectDep.fieldId, new Map())
            }
            const valueMap = cardSelectDependentFields.get(
              cardSelectDep.fieldId
            )!
            const existing = valueMap.get(cardSelectDep.equalsTo) ?? []
            existing.push(next.field)
            valueMap.set(cardSelectDep.equalsTo, existing)
            i++
            continue
          }
          break
        } else if (next.type === "row") {
          // Absorb the row if ALL its fields depend on the same switch
          const rowParents = next.fields.map((f) =>
            isDependentOnSwitch(f, switchIds)
          )
          const firstParent = rowParents[0]
          if (firstParent && rowParents.every((p) => p === firstParent)) {
            const existing = dependentFields.get(firstParent) ?? []
            existing.push(next)
            dependentFields.set(firstParent, existing)
            i++
            continue
          }
          // Check if all fields depend on the same cardSelect value
          const rowCardDeps = next.fields.map((f) =>
            isDependentOnCardSelect(f, cardSelectIds)
          )
          const firstCardDep = rowCardDeps[0]
          if (
            firstCardDep &&
            rowCardDeps.every(
              (d) =>
                d &&
                d.fieldId === firstCardDep.fieldId &&
                d.equalsTo === firstCardDep.equalsTo
            )
          ) {
            if (!cardSelectDependentFields.has(firstCardDep.fieldId)) {
              cardSelectDependentFields.set(firstCardDep.fieldId, new Map())
            }
            const valueMap = cardSelectDependentFields.get(
              firstCardDep.fieldId
            )!
            const existing = valueMap.get(firstCardDep.equalsTo) ?? []
            existing.push(next)
            valueMap.set(firstCardDep.equalsTo, existing)
            i++
            continue
          }
          break
        } else {
          break
        }
      }

      result.push({
        type: "switchGroup",
        fields: switchGroup,
        dependentFields: dependentFields.size > 0 ? dependentFields : undefined,
        cardSelectDependentFields:
          cardSelectDependentFields.size > 0
            ? cardSelectDependentFields
            : undefined,
      })
    } else {
      if (item.type === "field") {
        // Standalone cardSelect: absorb subsequent dependent fields
        if (item.field.type === "cardSelect") {
          const cardSelectId = item.field.id
          const cardSelectIds = new Set([cardSelectId])
          const deps = new Map<string, (F0Field | RowDefinition)[]>()
          i++
          while (i < definition.length) {
            const next = definition[i]
            if (next.type === "field") {
              const dep = isDependentOnCardSelect(next.field, cardSelectIds)
              if (dep) {
                const existing = deps.get(dep.equalsTo) ?? []
                existing.push(next.field)
                deps.set(dep.equalsTo, existing)
                i++
                continue
              }
            } else if (next.type === "row") {
              const rowDeps = next.fields.map((f) =>
                isDependentOnCardSelect(f, cardSelectIds)
              )
              const first = rowDeps[0]
              if (
                first &&
                rowDeps.every(
                  (d) =>
                    d &&
                    d.fieldId === first.fieldId &&
                    d.equalsTo === first.equalsTo
                )
              ) {
                const existing = deps.get(first.equalsTo) ?? []
                existing.push(next)
                deps.set(first.equalsTo, existing)
                i++
                continue
              }
            }
            break
          }
          result.push({
            type: "field",
            item,
            cardSelectDependentFields: deps.size > 0 ? deps : undefined,
          })
        } else {
          result.push({ type: "field", item })
          i++
        }
      } else if (item.type === "row") {
        result.push({ type: "row", item, index: i })
        i++
      } else if (item.type === "section") {
        result.push({ type: "section", item })
        i++
      } else {
        i++
      }
    }
  }

  return result
}
