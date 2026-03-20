import type { ReactNode } from "react"

import { F0Button } from "@/components/F0Button"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useDashboardCanvas } from "./DashboardContext"

export function DashboardActions(): ReactNode {
  const { editMode, setEditMode, handleSave, handleDiscard } =
    useDashboardCanvas()
  const translations = useI18n()

  if (editMode) {
    return (
      <>
        <F0Button
          variant="outline"
          label={translations.ai.discardChanges}
          onClick={handleDiscard}
          size="md"
        />
        <F0Button
          label={translations.ai.saveChanges}
          onClick={handleSave}
          size="md"
        />
      </>
    )
  }

  return (
    <F0Button
      variant="outline"
      icon={Pencil}
      size="md"
      onClick={() => setEditMode(true)}
      label="Edit"
    />
  )
}
