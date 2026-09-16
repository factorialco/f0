import { motion, Reorder } from "motion/react"
import { useEffect, useMemo, type ReactNode } from "react"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"
import ApplyingChangesTag from "../ApplyingChangesTag"
import { SurveyFormBuilderProvider } from "../Context"
import { DragProvider, useDragContext } from "../DragContext"
import { SurveyFormBuilderElement, SurveyFormBuilderProps } from "../types"
import { AddButton } from "./AddButton"
import { LastQuestionDialog } from "./LastQuestionDialog"
import { QuestionItem } from "./QuestionItem"
import { SectionHeaderItem } from "./SectionHeaderItem"
import { TableOfContent } from "./TableOfContent"
import { useReorderHandler } from "./useReorderHandler"
import {
  computeSectionEndIds,
  type FlatFormItem,
  flattenElements,
} from "./utils"

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

/**
 * The items a locked section swallows: its header, then every question that
 * belonged to it. The reorderable list is flat, so the section's extent is
 * whatever run of in-section questions follows its header.
 */
const lockedSectionItems = (
  items: FlatFormItem[],
  headerIndex: number,
  inSectionQuestionIds: Set<string>
): FlatFormItem[] => {
  const group: FlatFormItem[] = [items[headerIndex]]
  let next = headerIndex + 1
  while (
    next < items.length &&
    items[next].type === "question" &&
    inSectionQuestionIds.has(items[next].id)
  ) {
    group.push(items[next])
    next++
  }
  return group
}

/**
 * A locked section: one muted grey rounded panel around its header and all of
 * its questions. The right padding mirrors the drag-and-drop gutter reserved
 * on the left, so the cards sit symmetrically in the panel.
 */
const LockedSection = ({
  items,
  first,
}: {
  /** The header, then its questions — see {@link lockedSectionItems}. */
  items: FlatFormItem[]
  /** It opens the list, so it takes no top margin. */
  first: boolean
}) => (
  <div
    className={cn(
      "rounded-2xl bg-f1-background-secondary pb-8 pt-4",
      first ? "" : "mt-8"
    )}
  >
    {items.map((item, index) => {
      if (item.type === "section-header") {
        return <SectionHeaderItem key={item.id} item={item} className="" />
      }
      if (item.type === "question") {
        // The grey panel delimits the section, so the "end of section" divider
        // is suppressed here. The first question sits closer to the header,
        // which has no inline description beneath it.
        return (
          <QuestionItem
            key={item.id}
            item={item}
            showEndOfSection={false}
            className={index === 1 ? "mt-2" : "mt-4"}
          />
        )
      }
      return null
    })}
  </div>
)

/**
 * The flat list of cards: a locked section as one panel, everything else on
 * its own.
 */
const ReorderableItems = ({
  items,
  lockedSectionIds,
  inSectionQuestionIds,
  sectionEndIds,
}: {
  items: FlatFormItem[]
  lockedSectionIds: Set<string>
  /** Every question id that belongs to some section. */
  inSectionQuestionIds: Set<string>
  /** The questions that close a section, and so draw its divider. */
  sectionEndIds: Set<string>
}) => {
  const nodes: ReactNode[] = []

  let index = 0
  while (index < items.length) {
    const item = items[index]

    if (
      item.type === "section-header" &&
      lockedSectionIds.has(item.section.id)
    ) {
      const group = lockedSectionItems(items, index, inSectionQuestionIds)
      nodes.push(
        <LockedSection
          key={`locked-${item.section.id}`}
          items={group}
          first={index === 0}
        />
      )
      index += group.length
      continue
    }

    const gapClass =
      index === 0 ? "" : inSectionQuestionIds.has(item.id) ? "mt-4" : "mt-8"

    if (item.type === "section-header") {
      nodes.push(
        <SectionHeaderItem key={item.id} item={item} className={gapClass} />
      )
    } else if (item.type === "question") {
      nodes.push(
        <QuestionItem
          key={item.id}
          item={item}
          showEndOfSection={sectionEndIds.has(item.id)}
          className={gapClass}
        />
      )
    }
    index++
  }

  return <>{nodes}</>
}

const _SurveyFormBuilder = ({
  elements: elementsProp,
  disabled,
  onChange,
  disallowOptionalQuestions,
  allowedQuestionTypes,
  applyingChanges,
  useUpload,
  datasets,
  placeholders,
  labels,
  skipDefaultSection,
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

  const lockedSectionIds = useMemo(() => {
    const result = new Set<string>()
    for (const element of elements) {
      if (element.type === "section" && element.section.locked) {
        result.add(element.section.id)
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
      datasets={datasets}
      placeholders={placeholders}
      labels={labels}
      skipDefaultSection={skipDefaultSection}
    >
      <DragProvider>
        <DragSelectGuard>
          {showTableOfContent ? (
            <TableOfContent elements={elements} onChange={onChange} />
          ) : null}
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
                  <ReorderableItems
                    items={reorderableItems}
                    lockedSectionIds={lockedSectionIds}
                    inSectionQuestionIds={inSectionQuestionIds}
                    sectionEndIds={sectionEndIds}
                  />
                </div>
              </Reorder.Group>
              {shouldShowAddButton ? <AddButton /> : null}
            </motion.div>
            {applyingChanges ? (
              <motion.div
                className="sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <ApplyingChangesTag />
              </motion.div>
            ) : null}
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
