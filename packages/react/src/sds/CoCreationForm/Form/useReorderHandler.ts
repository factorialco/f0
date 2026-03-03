import { useCallback, useState } from "react"

import { FlatFormItem, injectSectionEnds, reconstructElements } from "./utils"

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

  const handleFlatReorder = useCallback(
    (reorderedItems: FlatFormItem[]) => {
      // Build a map of section-header id → original question ids.
      // flatItems includes section-end markers so we can correctly stop
      // at section boundaries.
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
        } else if (fi.type === "section-end") {
          currentSectionId = null
        } else if (currentSectionId) {
          originalSectionQuestions.get(currentSectionId)!.add(fi.id)
        }
      }

      // Determine which sections need their questions pinned:
      // - Locked sections always have their questions pinned.
      // - When a section header is dragged (the relative order of section
      //   headers changed), pin the moved sections so their questions follow.
      // - When only a question is dragged across sections, indices shift but
      //   the section header order stays the same → do NOT pin.
      const originalSectionOrder = flatItems
        .filter((fi) => fi.type === "section-header")
        .map((fi) => fi.id)
      const newSectionOrder = reorderedItems
        .filter((fi) => fi.type === "section-header")
        .map((fi) => fi.id)
      const sectionOrderChanged = originalSectionOrder.some(
        (id, i) => newSectionOrder[i] !== id
      )

      const oldIndexMap = new Map(
        flatItems
          .filter((fi) => fi.type !== "section-end")
          .map((fi, i) => [fi.id, i])
      )
      const pinnedSections = new Set<string>(lockedSectionIds)
      if (sectionOrderChanged) {
        for (const [i, item] of reorderedItems.entries()) {
          if (
            item.type === "section-header" &&
            oldIndexMap.get(item.id) !== i
          ) {
            pinnedSections.add(item.id)
          }
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

      // Build set of all question IDs that originally belonged to any section.
      const allInSectionQuestionIds = new Set<string>()
      for (const qIds of originalSectionQuestions.values()) {
        for (const qId of qIds) {
          allInSectionQuestionIds.add(qId)
        }
      }

      // Inject section-end markers using original membership.
      const withSectionEnds = injectSectionEnds(
        finalItems,
        allInSectionQuestionIds
      )

      // Detect if a section lost its last question (would become empty).
      const sectionWillBecomeEmpty = [
        ...originalSectionQuestions.entries(),
      ].some(([sectionId, originalQuestions]) => {
        if (originalQuestions.size === 0) return false
        // Find the section header index
        const headerIdx = withSectionEnds.findIndex((it) => it.id === sectionId)
        if (headerIdx === -1) return false
        const next = withSectionEnds[headerIdx + 1]
        // Empty if immediately followed by section-end (or nothing)
        return !next || next.type !== "question"
      })

      if (sectionWillBecomeEmpty) {
        setPendingReorder(withSectionEnds)
        setLastQuestionDialogOpen(true)
        return
      }

      onChange(reconstructElements(withSectionEnds))
    },
    [onChange, flatItems]
  )

  const handleConfirmLastQuestionMove = useCallback(() => {
    if (pendingReorder) {
      // Find which sections are now empty (header immediately followed by section-end)
      const emptySectionIds = new Set<string>()
      for (let i = 0; i < pendingReorder.length; i++) {
        const item = pendingReorder[i]
        if (item.type === "section-header") {
          const next = pendingReorder[i + 1]
          if (
            !next ||
            next.type === "section-end" ||
            next.type === "section-header"
          ) {
            emptySectionIds.add(item.section.id)
          }
        }
      }

      // Filter out empty section headers and their corresponding section-end items
      const withoutEmptySections = pendingReorder.filter((item) => {
        if (
          item.type === "section-header" &&
          emptySectionIds.has(item.section.id)
        ) {
          return false
        }
        if (
          item.type === "section-end" &&
          emptySectionIds.has(item.sectionId)
        ) {
          return false
        }
        return true
      })
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
  }
}
