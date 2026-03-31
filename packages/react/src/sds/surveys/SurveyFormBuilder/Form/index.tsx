import { motion, Reorder } from "motion/react"
import { useEffect, useMemo } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import ApplyingChangesTag from "../ApplyingChangesTag"
import { SurveyFormBuilderProvider } from "../Context"
import { DragProvider } from "../DragContext"
import { useDragContext } from "../DragContext"
import { SurveyFormBuilderElement, SurveyFormBuilderProps } from "../types"
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
  injectSectionEnds,
} from "./utils"
export type { FlatFormItem } from "./utils"

/**
 * Applies `select-none` to its children while a drag is in progress,
 * preventing accidental text selection in inputs and textareas.
 */
function DragSelectGuard({ children }: { children: React.ReactNode }) {
  const { isDragging } = useDragContext()
  return (
    <div className={cn("relative @container", isDragging && "select-none")}>
      {children}
    </div>
  )
}

const _SurveyFormBuilder = ({
  elements: elementsProp,
  disabled,
  onChange,
  disallowOptionalQuestions,
  allowedQuestionTypes,
  applyingChanges,
  useUpload,
}: SurveyFormBuilderProps) => {
  const shouldShowAddButton = !disabled

  const elements = useMemo<SurveyFormBuilderElement[]>(
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

  // Items without section-end markers — used for Reorder.Group which
  // requires every value to have a matching Reorder.Item child.
  const reorderableItems = useMemo(
    () => flatItems.filter((item) => item.type !== "section-end"),
    [flatItems]
  )

  const sectionEndIds = useMemo(
    () => computeSectionEndIds(elements),
    [elements]
  )

  const inSectionQuestionIds = useMemo(() => {
    const result = new Set<string>()
    for (const element of elements) {
      if (element.type === "section") {
        for (const q of element.section.questions ?? []) {
          result.add(`question-${q.id}`)
        }
      }
    }
    return result
  }, [elements])

  const {
    handleFlatReorder,
    handleConfirmLastQuestionMove,
    handleCancelLastQuestionMove,
    lastQuestionDialogOpen,
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
    <SurveyFormBuilderProvider
      disabled={disabled}
      elements={elements}
      onChange={onChange}
      disallowOptionalQuestions={disallowOptionalQuestions}
      allowedQuestionTypes={allowedQuestionTypes}
      useUpload={useUpload}
    >
      <DragProvider>
        <DragSelectGuard>
          {showTableOfContent && (
            <TableOfContent elements={elements} onChange={onChange} />
          )}
          <div className="relative flex flex-1 flex-col">
            <motion.div
              className={cn(
                "flex w-full max-w-[750px] self-center flex-col gap-6",
                applyingChanges && "pointer-events-none"
              )}
              initial={{ filter: "blur(0px)" }}
              animate={{ filter: applyingChanges ? "blur(2px)" : "none" }}
              exit={{ filter: "blur(0px)" }}
            >
              <Reorder.Group
                axis="y"
                values={reorderableItems}
                onReorder={handleFlatReorder}
                as="div"
              >
                <div className="flex flex-col">
                  {reorderableItems.map((item, index) => {
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
        </DragSelectGuard>
      </DragProvider>
      <LastQuestionDialog
        open={lastQuestionDialogOpen}
        onConfirm={handleConfirmLastQuestionMove}
        onCancel={handleCancelLastQuestionMove}
      />
    </SurveyFormBuilderProvider>
  )
}

export const SurveyFormBuilder = withDataTestId(_SurveyFormBuilder)
