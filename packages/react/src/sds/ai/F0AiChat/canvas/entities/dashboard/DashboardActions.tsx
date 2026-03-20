import { breakpoints } from "@factorialco/f0-core"
import type { ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"

import { F0Button } from "@/components/F0Button"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useDashboardCanvas } from "./DashboardContext"

export function DashboardActions(): ReactNode {
  const { editMode, setEditMode, handleSave, handleDiscard } =
    useDashboardCanvas()
  const translations = useI18n()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  if (isSmallScreen) {
    return null
  }

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
