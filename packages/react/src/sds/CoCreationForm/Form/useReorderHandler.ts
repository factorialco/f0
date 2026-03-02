import { useCallback, useMemo, useState } from "react"

import { FlatFormItem, reconstructElements } from "./utils"

type UseReorderHandlerParams = {
  flatItems: FlatFormItem[]
  onChange: (elements: ReturnType<typeof reconstructElements>) => void
}

export function useReorderHandler({
  flatItems,
  onChange,
}: UseReorderHandlerParams) {
  const [pendingReorder, setPendingReorder] = useState<FlatFormItem[] | null>(
    null
  )
  const [lastQuestionDialogOpen, setLastQuestionDialogOpen] = useState(false)

  const inSectionQuestionIds = useMemo(() => {
    const result = new Set<string>()
    let inSection = false
    for (const item of flatItems) {
      if (item.type === "section-header") {
        inSection = true
      } else if (inSection) {
        result.add(item.id)
      }
    }
    return result
  }, [flatItems])

  const handleFlatReorder = useCallback(
    (reorderedItems: FlatFormItem[]) => {
      // Build a map of section-header id → original question ids.
      const originalSectionQuestions = new Map<string, Set<string>>()
      const lockedSectionIds = new Set<string>()
      let currentSectionId: string | null = null
      for (const fi of flatItems) {
        if (fi.type === "section-header") {
          currentSectionId = fi.id
          originalSectionQuestions.set(fi.id, new Set())
          if (fi.section.locked) {
            lockedSectionIds.add(fi.id)
          }
        } else if (currentSectionId) {
          originalSectionQuestions.get(currentSectionId)!.add(fi.id)
        }
      }

      // Determine which sections need their questions pinned:
      // - Sections whose header moved (keep questions together)
      // - Locked sections (questions must not change)
      const oldIndexMap = new Map(flatItems.map((fi, i) => [fi.id, i]))
      const pinnedSections = new Set<string>(lockedSectionIds)
      for (const [i, item] of reorderedItems.entries()) {
        if (item.type === "section-header" && oldIndexMap.get(item.id) !== i) {
          pinnedSections.add(item.id)
        }
      }

      let finalItems: FlatFormItem[]
      if (pinnedSections.size > 0) {
        // Remove questions that belong to a pinned section from their current
        // positions in the reordered list, then re-insert them right after
        // their section header.
        const questionOwner = new Map<string, string>()
        for (const sectionId of pinnedSections) {
          const qIds = originalSectionQuestions.get(sectionId)
          if (qIds) {
            for (const qId of qIds) {
              questionOwner.set(qId, sectionId)
            }
          }
        }

        // Collect the questions for each pinned section and strip them out.
        const sectionQuestionItems = new Map<string, FlatFormItem[]>()
        for (const sId of pinnedSections) {
          sectionQuestionItems.set(sId, [])
        }

        const stripped: FlatFormItem[] = []
        for (const item of reorderedItems) {
          const owner = questionOwner.get(item.id)
          if (owner) {
            sectionQuestionItems.get(owner)!.push(item)
          } else {
            stripped.push(item)
          }
        }

        // Re-insert questions right after their section header.
        finalItems = []
        for (const item of stripped) {
          finalItems.push(item)
          if (item.type === "section-header" && pinnedSections.has(item.id)) {
            finalItems.push(...sectionQuestionItems.get(item.id)!)
          }
        }
      } else {
        finalItems = reorderedItems
      }

      // Eject any foreign questions that ended up inside a locked section.
      // They get placed right before the locked section header.
      const lockedSectionOwnedQuestions = new Map<string, Set<string>>()
      for (const sId of lockedSectionIds) {
        lockedSectionOwnedQuestions.set(
          sId,
          originalSectionQuestions.get(sId) ?? new Set()
        )
      }

      const ejected: FlatFormItem[] = []
      let currentLockedSectionId: string | null = null
      const cleaned: FlatFormItem[] = []

      for (const item of finalItems) {
        if (item.type === "section-header") {
          currentLockedSectionId = lockedSectionIds.has(item.id)
            ? item.id
            : null
          // Flush any ejected items right before this section header
          if (ejected.length > 0) {
            cleaned.push(...ejected.splice(0))
          }
          cleaned.push(item)
        } else if (
          currentLockedSectionId &&
          !lockedSectionOwnedQuestions.get(currentLockedSectionId)!.has(item.id)
        ) {
          // Foreign question inside a locked section — eject it
          ejected.push(item)
        } else {
          // Flush any ejected items before this non-locked-section question
          if (ejected.length > 0) {
            cleaned.push(...ejected.splice(0))
          }
          cleaned.push(item)
        }
      }
      // Flush any remaining ejected items at the end
      if (ejected.length > 0) {
        cleaned.push(...ejected)
      }

      // Detect if a section lost its last question (would become empty).
      // Build new section → question count map from cleaned items.
      const newSectionQuestionCount = new Map<string, number>()
      let trackingSectionId: string | null = null
      for (const item of cleaned) {
        if (item.type === "section-header") {
          trackingSectionId = item.id
          if (!newSectionQuestionCount.has(trackingSectionId)) {
            newSectionQuestionCount.set(trackingSectionId, 0)
          }
        } else if (trackingSectionId) {
          newSectionQuestionCount.set(
            trackingSectionId,
            (newSectionQuestionCount.get(trackingSectionId) ?? 0) + 1
          )
        }
      }

      const sectionWillBecomeEmpty = [
        ...originalSectionQuestions.entries(),
      ].some(
        ([sectionId, originalQuestions]) =>
          originalQuestions.size > 0 &&
          (newSectionQuestionCount.get(sectionId) ?? 0) === 0
      )

      if (sectionWillBecomeEmpty) {
        setPendingReorder(cleaned)
        setLastQuestionDialogOpen(true)
        return
      }

      onChange(reconstructElements(cleaned))
    },
    [onChange, flatItems]
  )

  const handleConfirmLastQuestionMove = useCallback(() => {
    if (pendingReorder) {
      // Remove empty section headers from the pending reorder
      const withoutEmptySections: FlatFormItem[] = []
      for (let i = 0; i < pendingReorder.length; i++) {
        const item = pendingReorder[i]
        if (item.type === "section-header") {
          const nextItem = pendingReorder[i + 1]
          const isLastItem = i === pendingReorder.length - 1
          if (isLastItem || !nextItem || nextItem.type === "section-header") {
            // Section with no questions — skip it
            continue
          }
        }
        withoutEmptySections.push(item)
      }
      onChange(reconstructElements(withoutEmptySections))
    }
    setLastQuestionDialogOpen(false)
    setPendingReorder(null)
  }, [pendingReorder, onChange])

  const handleCancelLastQuestionMove = useCallback(() => {
    setLastQuestionDialogOpen(false)
    setPendingReorder(null)
  }, [])

  return {
    handleFlatReorder,
    handleConfirmLastQuestionMove,
    handleCancelLastQuestionMove,
    lastQuestionDialogOpen,
    inSectionQuestionIds,
  }
}
