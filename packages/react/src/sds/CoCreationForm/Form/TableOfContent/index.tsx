import { useCallback } from "react"

import { F0TableOfContentPopover } from "@/components/F0TableOfContentPopover/F0TableOfContentPopover"
import { useI18n } from "@/lib/providers/i18n"

import { useCoCreationFormContext } from "../../Context"
import { CoCreationFormElement } from "../../types"
import { useTableOfContentItems } from "./useTableOfContentItems"

export const TableOfContent = ({
  elements,
}: {
  elements: CoCreationFormElement[]
}) => {
  const { t } = useI18n()
  const { deleteElement, onDuplicateElement, isEditMode } =
    useCoCreationFormContext()

  const handleDuplicateElement = useCallback(
    (elementId: string) => {
      onDuplicateElement?.({ elementId, type: "section" })
    },
    [onDuplicateElement]
  )

  const handleDeleteElement = useCallback(
    (elementId: string) => {
      deleteElement(elementId)
    },
    [deleteElement]
  )

  const tocItems = useTableOfContentItems(elements, {
    untitledSectionLabel: t("coCreationForm.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: t("coCreationForm.labels.titlePlaceholder"),
    onDuplicateElement: handleDuplicateElement,
    onDeleteElement: handleDeleteElement,
    duplicateQuestionLabel: t("coCreationForm.actions.duplicateQuestion"),
    deleteQuestionLabel: t("coCreationForm.actions.deleteQuestion"),
    duplicateSectionLabel: t("coCreationForm.actions.duplicateSection"),
    deleteSectionLabel: t("coCreationForm.actions.deleteSection"),
    isEditMode,
  })

  return (
    <div className="sticky top-0 flex h-screen items-center">
      <F0TableOfContentPopover
        items={tocItems}
        barsAlign="left"
        size="md"
        collapsible
        showChildrenCounter
      />
    </div>
  )
}
