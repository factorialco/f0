import { motion, Reorder, useDragControls } from "motion/react"
import { useEffect, useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

import ApplyingChangesTag from "../ApplyingChangesTag"
import { CoCreationFormProvider, useCoCreationFormContext } from "../Context"
import { DragProvider, useDragContext } from "../DragContext"
import { Question as QuestionComponent, QuestionProps } from "../Question"
import { Section as SectionComponent } from "../Section"
import { CoCreationFormElement, CoCreationFormProps } from "../types"
import { AddButton } from "./AddButton"

type ItemProps = {
  element: CoCreationFormElement
}

const Item = ({ element }: ItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId } = useDragContext()
  const dragControls = useDragControls()

  const { isEditMode, getSectionContainingQuestion } =
    useCoCreationFormContext()

  const containingSection =
    element.type === "question"
      ? getSectionContainingQuestion(element.question.id)
      : undefined

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(
      element.type === "section" ? element.section.id : element.question.id
    )
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const elementLocked =
    element.type === "section"
      ? element.section.locked
      : element.question.locked || containingSection?.locked

  const dragEnabled = !!isEditMode && !elementLocked

  return (
    <Reorder.Item
      value={element}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={false}
      dragControls={dragControls}
      layout="position"
      as="div"
    >
      <div className="w-full">
        <div
          className={cn(
            "group/element flex flex-row items-start gap-1",
            isDragging && "cursor-grabbing"
          )}
        >
          {!!isEditMode && (
            <div
              className={cn(
                "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                !isDragging && "cursor-grab",
                !dragEnabled && "cursor-not-allowed"
              )}
              onPointerDown={(e) => {
                if (dragEnabled) {
                  dragControls.start(e)
                }
              }}
            >
              <F0Icon icon={Handle} size="sm" />
            </div>
          )}
          {element.type === "section" && (
            <SectionComponent {...element.section} />
          )}
          {element.type === "question" && (
            <QuestionComponent
              {...({
                ...element.question,
              } as QuestionProps)}
            />
          )}
        </div>
      </div>
    </Reorder.Item>
  )
}

export const CoCreationForm = ({
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

  return (
    <CoCreationFormProvider
      isEditMode={isEditMode}
      elements={elements}
      onChange={onChange}
      disallowOptionalQuestions={disallowOptionalQuestions}
      allowedQuestionTypes={allowedQuestionTypes}
    >
      <div className="relative">
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
              values={elements}
              onReorder={onChange}
              as="div"
            >
              <div className="flex flex-col gap-8">
                {elements.map((element) => (
                  <Item
                    key={
                      element.type === "section"
                        ? element.section.id
                        : element.question.id
                    }
                    element={element}
                  />
                ))}
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
    </CoCreationFormProvider>
  )
}
