import React from "react"
import { useFormContext } from "react-hook-form"

import { F0Button } from "@/components/F0Button"
import { SectionHeader } from "@/experimental/Information/Headers/SectionHeader"
import { cn } from "@/lib/utils"

import type { F0SwitchField } from "../fields/switch/types"
import type { F0Field } from "../fields/types"
import type { FieldItem, RowDefinition, SectionDefinition } from "../types"

import { FIELD_GAP } from "../constants"
import { generateAnchorId, useF0FormContext } from "../context"
import { CardSelectDepsContext } from "../fields/cardSelect/CardSelectDepsContext"
import { FieldRenderer } from "../fields/FieldRenderer"
import { evaluateRenderIf } from "../fields/utils"
import { RowRenderer } from "./RowRenderer"
import { SwitchGroupRenderer } from "./SwitchGroupRenderer"

interface SectionRendererProps {
  section: SectionDefinition
}

type RenderedItem =
  | {
      type: "field"
      item: FieldItem
      cardSelectDependentFields?: Map<string, (F0Field | RowDefinition)[]>
    }
  | { type: "row"; item: RowDefinition; index: number }
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
 * Checks if a field has an object-form renderIf that targets a specific switch
 * being true.
 */
function isDependentOnSwitch(
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
function isDependentOnCardSelect(
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
 * Groups contiguous switch fields together for rendering in a bordered container.
 * Absorbs subsequent dependent fields into the switch group.
 */
function groupContiguousSwitches(
  fields: (FieldItem | RowDefinition)[]
): RenderedItem[] {
  const result: RenderedItem[] = []
  let i = 0

  while (i < fields.length) {
    const item = fields[i]

    if (item.type === "field" && item.field.type === "switch") {
      const switchGroup: F0SwitchField[] = []
      if (item.field.grouped === false) {
        switchGroup.push(item.field as F0SwitchField)
        i++
      } else {
        while (
          i < fields.length &&
          fields[i].type === "field" &&
          (fields[i] as FieldItem).field.type === "switch" &&
          ((fields[i] as FieldItem).field as F0SwitchField).grouped !== false
        ) {
          switchGroup.push((fields[i] as FieldItem).field as F0SwitchField)
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

      while (i < fields.length) {
        const next = fields[i]
        if (next.type === "field" && next.field.type !== "switch") {
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
        if (item.field.type === "cardSelect") {
          const cardSelectIds = new Set([item.field.id])
          const deps = new Map<string, (F0Field | RowDefinition)[]>()
          i++
          while (i < fields.length) {
            const next = fields[i]
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
      } else {
        i++
      }
    }
  }

  return result
}

function buildCardSelectContentMap(
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

/**
 * SectionRenderer component that renders a form section with title,
 * description, and nested fields/groups.
 * Supports conditional rendering for the entire section.
 * Automatically groups contiguous switch fields in a bordered container.
 */
export function SectionRenderer({ section }: SectionRendererProps) {
  const form = useFormContext()
  const values = form.watch()
  const { formName } = useF0FormContext()

  const { title, description, withInset, renderIf, action, fields } =
    section.section
  const sectionId = section.id

  // Check if section should be rendered based on renderIf condition
  if (renderIf && !evaluateRenderIf(renderIf, values)) {
    return null
  }

  const groupedItems = groupContiguousSwitches(fields)

  // Generate anchor ID for the section
  const anchorId = generateAnchorId(formName, sectionId)

  return (
    <section id={anchorId} className="flex scroll-mt-4 flex-col">
      <div
        className={cn(
          "flex items-start justify-between py-5",
          withInset && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        )}
      >
        <SectionHeader title={title} description={description ?? ""} />
        {action && (
          <F0Button
            label={action.label}
            icon={action.icon}
            onClick={action.onClick}
            href={action.href}
            variant="outline"
            size="md"
          />
        )}
      </div>
      <div className={`flex flex-col ${FIELD_GAP}`}>
        {groupedItems.map((item, index) => {
          if (item.type === "switchGroup") {
            return (
              <SwitchGroupRenderer
                key={`switch-group-${index}`}
                fields={item.fields}
                dependentFields={item.dependentFields}
                cardSelectDependentFields={item.cardSelectDependentFields}
                sectionId={sectionId}
              />
            )
          }
          if (item.type === "field") {
            const fieldContent = item.cardSelectDependentFields ? (
              <CardSelectDepsContext.Provider
                value={buildCardSelectContentMap(
                  item.cardSelectDependentFields,
                  sectionId
                )}
              >
                <FieldRenderer
                  key={item.item.field.id}
                  field={item.item.field}
                  sectionId={sectionId}
                />
              </CardSelectDepsContext.Provider>
            ) : (
              <FieldRenderer
                key={item.item.field.id}
                field={item.item.field}
                sectionId={sectionId}
              />
            )
            return (
              <React.Fragment key={item.item.field.id}>
                {fieldContent}
              </React.Fragment>
            )
          }
          if (item.type === "row") {
            return (
              <RowRenderer
                key={`row-${item.index}`}
                row={item.item}
                sectionId={sectionId}
              />
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
