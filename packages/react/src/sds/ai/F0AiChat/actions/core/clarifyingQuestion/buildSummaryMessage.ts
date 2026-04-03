import type { ClarifyingSelectionMode } from "./types"

interface StepSummaryInput {
  question: string
  options: Array<{ id: string; label: string }>
  selectionMode?: ClarifyingSelectionMode
  selectedIds: string[]
  customText: string
  isCustomActive: boolean
}

interface SummaryTranslations {
  custom: string
  skipped: string
}

export const buildSummaryMessage = (
  steps: StepSummaryInput[],
  translations: SummaryTranslations
): string => {
  const parts: string[] = []

  for (const step of steps) {
    const labels = step.options
      .filter(({ id }) => step.selectedIds.includes(id))
      .map(({ label }) => label)

    const isSingle = (step.selectionMode ?? "single") === "single"
    const includeCustom = isSingle
      ? step.selectedIds.length === 0 && step.customText.trim().length > 0
      : step.isCustomActive && step.customText.trim().length > 0

    if (includeCustom) {
      labels.push(`(${translations.custom}) ${step.customText.trim()}`)
    }

    if (labels.length > 0) {
      const answers = labels.map((l) => `${l}`).join("\n")
      parts.push(`**${step.question}**\n${answers}`)
    } else {
      parts.push(`**${step.question}**\n(${translations.skipped})`)
    }
  }

  return parts.join("\n\n\n")
}
