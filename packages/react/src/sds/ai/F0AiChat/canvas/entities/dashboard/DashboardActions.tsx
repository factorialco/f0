import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useDashboardCanvas } from "./DashboardContext"

/** Hide edit controls when the parent container is narrower than this. */
const NARROW_THRESHOLD = 600

export function DashboardActions(): ReactNode {
  const { editMode, setEditMode, handleSave, handleDiscard } =
    useDashboardCanvas()
  const translations = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    const el = ref.current?.parentElement
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsNarrow(entry.contentRect.width < NARROW_THRESHOLD)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (isNarrow) {
    return <div ref={ref} />
  }

  if (editMode) {
    return (
      <div ref={ref} className="flex gap-2">
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
      </div>
    )
  }

  return (
    <div ref={ref}>
      <F0Button
        variant="outline"
        icon={Pencil}
        size="md"
        onClick={() => setEditMode(true)}
        label="Edit"
      />
    </div>
  )
}
