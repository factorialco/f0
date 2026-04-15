import type { ReactNode } from "react"

import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

import { FormCard } from "../../canvas/entities/form/FormCard"

/**
 * Standalone component that renders a FormCard when the registry has
 * an active form with card metadata (cardTitle / cardDescription).
 *
 * Unlike `useCoAgentStateRender`, this component is driven by the
 * frontend registry state and renders immediately when `setActiveForm`
 * is called — no backend agent run required.
 */
export function ActiveFormCard(): ReactNode {
  const registry = useF0AiFormRegistry()
  const form = registry?.activeForm

  if (!form) return null

  const cardTitle = form.cardTitle
  const cardDescription = form.cardDescription

  const hasBeenFilled = (registry?.getFillVersion(form.formName) ?? 0) > 0

  if (!cardTitle || !cardDescription || !hasBeenFilled) return null

  return (
    <div className="mt-2 w-full">
      <FormCard
        formName={form.formName}
        formDescription={form.description}
        module={form.module}
        cardTitle={cardTitle}
        cardDescription={cardDescription}
        fieldDescriptions={form.fieldDescriptions}
        formValues={form.formValues}
      />
    </div>
  )
}
