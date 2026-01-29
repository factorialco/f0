import { useFormContext } from "react-hook-form"

import { SectionHeader } from "@/experimental/Information/Headers/SectionHeader"

import { FIELD_GAP } from "../constants"
import { generateAnchorId, useF0FormContext } from "../context"
import { FieldRenderer } from "../fields/FieldRenderer"
import type { SwitchFieldDefinition } from "../fields/switch/types"
import { evaluateRenderIf } from "../fields/utils"
import type {
  FieldItem,
  RowDefinition,
  SectionDefinition,
  SectionRenderIf,
} from "../types"
import { RowRenderer } from "./RowRenderer"
import { SwitchGroupRenderer } from "./SwitchGroupRenderer"

interface SectionRendererProps {
  section: SectionDefinition
}

/**
 * Evaluate a section's renderIf condition which can be either
 * a RenderIfCondition object or a function
 */
function evaluateSectionRenderIf(
  renderIf: SectionRenderIf,
  values: Record<string, unknown>
): boolean {
  if (typeof renderIf === "function") {
    return renderIf(values)
  }
  return evaluateRenderIf(renderIf, values)
}

type RenderedItem =
  | { type: "field"; item: FieldItem }
  | { type: "row"; item: RowDefinition; index: number }
  | { type: "switchGroup"; fields: SwitchFieldDefinition[] }

/**
 * Groups contiguous switch fields together for rendering in a bordered container
 */
function groupContiguousSwitches(
  fields: (FieldItem | RowDefinition)[]
): RenderedItem[] {
  const result: RenderedItem[] = []
  let currentSwitchGroup: SwitchFieldDefinition[] = []

  const flushSwitchGroup = () => {
    if (currentSwitchGroup.length > 0) {
      result.push({ type: "switchGroup", fields: [...currentSwitchGroup] })
      currentSwitchGroup = []
    }
  }

  fields.forEach((item, index) => {
    if (item.type === "field" && item.field.type === "switch") {
      currentSwitchGroup.push(item.field as SwitchFieldDefinition)
    } else {
      flushSwitchGroup()
      if (item.type === "field") {
        result.push({ type: "field", item })
      } else if (item.type === "row") {
        result.push({ type: "row", item, index })
      }
    }
  })

  flushSwitchGroup()
  return result
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

  const { title, description, renderIf, fields } = section.section
  const sectionId = section.id

  // Check if section should be rendered based on renderIf condition
  if (renderIf && !evaluateSectionRenderIf(renderIf, values)) {
    return null
  }

  const groupedItems = groupContiguousSwitches(fields)

  // Generate anchor ID for the section
  const anchorId = generateAnchorId(formName, sectionId)

  return (
    <section id={anchorId} className="flex flex-col scroll-mt-4">
      <div className="[&>div]:px-0 [&>div]:border-0 py-5">
        <SectionHeader title={title} description={description ?? ""} />
      </div>
      <div className={`flex flex-col ${FIELD_GAP}`}>
        {groupedItems.map((item, index) => {
          if (item.type === "switchGroup") {
            return (
              <SwitchGroupRenderer
                key={`switch-group-${index}`}
                fields={item.fields}
                sectionId={sectionId}
              />
            )
          }
          if (item.type === "field") {
            return (
              <FieldRenderer
                key={item.item.field.id}
                field={item.item.field}
                sectionId={sectionId}
              />
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
