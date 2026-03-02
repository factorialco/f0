import { motion, Reorder } from "motion/react"
import { useEffect, useMemo } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import ApplyingChangesTag from "../ApplyingChangesTag"
import { CoCreationFormProvider } from "../Context"
import { DragProvider } from "../DragContext"
import { CoCreationFormElement, CoCreationFormProps } from "../types"
import { AddButton } from "./AddButton"
import { LastQuestionDialog } from "./LastQuestionDialog"
import { QuestionItem } from "./QuestionItem"
import { SectionHeaderItem } from "./SectionHeaderItem"
import { TableOfContent } from "./TableOfContent"
import { useReorderHandler } from "./useReorderHandler"
import { computeSectionEndIds, flattenElements } from "./utils"

// Re-export utilities and types for consumers (including tests)
export {
  flattenElements,
  reconstructElements,
  computeSectionEndIds,
} from "./utils"
export type { FlatFormItem } from "./utils"

const _CoCreationForm = ({
  elements: elementsProp,
  isEditMode,
  onChange,
  disallowOptionalQuestions,
  allowedQuestionTypes,
  applyingChanges,
}: CoCreationFormProps) => {
  const shouldShowAddButton =
    isEditMode &&
    (!elementsProp?.length || elementsProp?.at(-1)?.type === "section")

  const elements = useMemo<CoCreationFormElement[]>(
    () =>
      elementsProp.map((element) => {
        if (element.type === "question") {
          return {
            ...element,
            question: {
              ...element.question,
              required: disallowOptionalQuestions
                ? true
                : element.question.required,
            },
          }
        }

        if (element.type === "section") {
          return {
            ...element,
            section: {
              ...element.section,
              questions: element.section.questions?.map((question) => ({
                ...question,
                required: disallowOptionalQuestions ? true : question.required,
              })),
            },
          }
        }

        return element
      }),
    [elementsProp, disallowOptionalQuestions]
  )

  const flatItems = useMemo(() => flattenElements(elements), [elements])
  const sectionEndIds = useMemo(
    () => computeSectionEndIds(flatItems),
    [flatItems]
  )

  const {
    handleFlatReorder,
    handleConfirmLastQuestionMove,
    handleCancelLastQuestionMove,
    lastQuestionDialogOpen,
    inSectionQuestionIds,
  } = useReorderHandler({ flatItems, onChange })

  useEffect(() => {
    if (applyingChanges) {
      const activeElement = document.activeElement as HTMLElement
      // Don't blur one-ai-input elements
      if (
        activeElement &&
        activeElement.getAttribute("name") !== "one-ai-input"
      ) {
        activeElement.blur()
      }
    }
  }, [applyingChanges])

  const showTableOfContent = !!elements.length

  return (
    <CoCreationFormProvider
      isEditMode={isEditMode}
      elements={elements}
      onChange={onChange}
      disallowOptionalQuestions={disallowOptionalQuestions}
      allowedQuestionTypes={allowedQuestionTypes}
    >
      <div className="flex flex-row gap-2">
        {showTableOfContent && (
          <TableOfContent elements={elements} onChange={onChange} />
        )}
        <div className="relative flex-1">
          <motion.div
            className={cn(
              "flex flex-col gap-6",
              applyingChanges && "pointer-events-none"
            )}
            initial={{ filter: "blur(0px)" }}
            animate={{ filter: applyingChanges ? "blur(2px)" : "none" }}
            exit={{ filter: "blur(0px)" }}
          >
            <DragProvider>
              <Reorder.Group
                axis="y"
                values={flatItems}
                onReorder={handleFlatReorder}
                as="div"
              >
                <div className="flex flex-col">
                  {flatItems.map((item, index) => {
                    const gapClass =
                      index === 0
                        ? ""
                        : inSectionQuestionIds.has(item.id)
                          ? "mt-4"
                          : "mt-8"

                    if (item.type === "section-header") {
                      return (
                        <SectionHeaderItem
                          key={item.id}
                          item={item}
                          className={gapClass}
                        />
                      )
                    }
                    return (
                      <QuestionItem
                        key={item.id}
                        item={item}
                        showEndOfSection={sectionEndIds.has(item.id)}
                        className={gapClass}
                      />
                    )
                  })}
                </div>
              </Reorder.Group>
            </DragProvider>
            {shouldShowAddButton && <AddButton />}
          </motion.div>
          {applyingChanges && (
            <motion.div
              className="sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ApplyingChangesTag />
            </motion.div>
          )}
        </div>
      </div>
      <LastQuestionDialog
        open={lastQuestionDialogOpen}
        onConfirm={handleConfirmLastQuestionMove}
        onCancel={handleCancelLastQuestionMove}
      />
    </CoCreationFormProvider>
  )
}

export const CoCreationForm = withDataTestId(_CoCreationForm)
