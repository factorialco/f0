import { Reorder, useDragControls } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

import { useSurveyFormBuilderContext } from "../../Context"
import { useDragContext } from "../../DragContext"
import { Question, QuestionProps } from "../../QuestionTypes/Question"
import { QuestionElement } from "../../types"

type ItemProps = {
  question: QuestionElement
}

export const Item = ({ question }: ItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId } = useDragContext()
  const dragControls = useDragControls()

  const { disabled, answering, getSectionContainingQuestion } =
    useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(question.id)

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(question.id)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const questionLocked = question.locked || containingSection?.locked

  const dragEnabled = !disabled && !answering && !questionLocked

  return (
    <Reorder.Item
      value={question}
      as="div"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={false}
      dragControls={dragControls}
      layout="position"
    >
      <div
        className={cn(
          "group/question-element flex flex-row items-start gap-1",
          isDragging && "cursor-grabbing"
        )}
        style={{ marginLeft: disabled || answering ? 0 : -27 }}
      >
        {!disabled && !answering && (
          <div
            className={cn(
              "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
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
        <Question
          {...({
            ...question,
          } as QuestionProps)}
        />
      </div>
    </Reorder.Item>
  )
}
