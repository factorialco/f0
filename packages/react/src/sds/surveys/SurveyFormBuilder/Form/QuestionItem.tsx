import { Reorder, useDragControls } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

import { useSurveyFormBuilderContext } from "../Context"
import { useDragContext } from "../DragContext"
import {
  Question as QuestionComponent,
  QuestionProps,
} from "../QuestionTypes/Question"
import { EndOfSectionDivider } from "./EndOfSectionDivider"
import { FlatFormItem } from "./utils"

type QuestionItemProps = {
  item: FlatFormItem & { type: "question" }
  showEndOfSection: boolean
  className?: string
}

export const QuestionItem = ({
  item,
  showEndOfSection,
  className,
}: QuestionItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId, draggedItemId } =
    useDragContext()
  const dragControls = useDragControls()

  const { disabled, answering, getSectionContainingQuestion } =
    useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(item.question.id)
  const parentSectionIsBeingDragged =
    !!containingSection && draggedItemId === containingSection.id

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(item.question.id)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const questionLocked = item.question.locked || containingSection?.locked
  const dragEnabled = !disabled && !answering && !questionLocked

  return (
    <Reorder.Item
      value={item}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={false}
      dragControls={dragControls}
      layout="position"
      as="div"
      className={cn(
        className,
        parentSectionIsBeingDragged && "invisible h-0 overflow-hidden"
      )}
    >
      <div className="w-full">
        <div
          className={cn(
            "group/element flex flex-row items-start gap-1",
            isDragging && "cursor-grabbing"
          )}
        >
          {!disabled && !answering && (
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
          <QuestionComponent
            {...({
              ...item.question,
            } as QuestionProps)}
          />
        </div>
      </div>
      {showEndOfSection && <EndOfSectionDivider />}
    </Reorder.Item>
  )
}
