import { useFormContext } from "react-hook-form"

import { FieldRenderer } from "../fields/FieldRenderer"
import { evaluateRenderIf } from "../fields/utils"
import type { SectionDefinition, SectionRenderIf } from "../types"
import { GroupRenderer } from "./GroupRenderer"

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

/**
 * SectionRenderer component that renders a form section with title,
 * description, and nested fields/groups.
 * Supports conditional rendering for the entire section.
 */
export function SectionRenderer({ section }: SectionRendererProps) {
  const form = useFormContext()
  const values = form.watch()

  const { title, description, renderIf, fields } = section.section

  // Check if section should be rendered based on renderIf condition
  if (renderIf && !evaluateSectionRenderIf(renderIf, values)) {
    return null
  }

  return (
    <fieldset className="flex flex-col gap-4 rounded-lg border border-f1-border-secondary p-4">
      <legend className="px-2">
        <span className="text-base font-semibold text-f1-foreground">
          {title}
        </span>
      </legend>
      {description && (
        <p className="-mt-2 text-sm text-f1-foreground-secondary">
          {description}
        </p>
      )}
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => {
          if (item.type === "field") {
            return <FieldRenderer key={item.field.id} field={item.field} />
          }
          if (item.type === "group") {
            return <GroupRenderer key={`group-${index}`} group={item.group} />
          }
          return null
        })}
      </div>
    </fieldset>
  )
}
