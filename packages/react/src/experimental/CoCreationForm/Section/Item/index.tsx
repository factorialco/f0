import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useCoCreationFormContext } from "../../Context"
import { useDragContext } from "../../DragContext"
import { Question, QuestionProps } from "../../Question"
import { QuestionElement } from "../../types"

type ItemProps = {
  question: QuestionElement
}

export const Item = ({ question }: ItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId } = useDragContext()

  const { isEditMode } = useCoCreationFormContext()

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(question.id)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  return (
    <Reorder.Item
      value={question}
      as="div"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      layout="position"
    >
      <div
        className={cn(
          "group/question-element flex cursor-grab flex-row items-start gap-1",
          isDragging && "cursor-grabbing"
        )}
        style={{ marginLeft: isEditMode ? -27 : 0 }}
      >
        {!!isEditMode && (
          <div
            className={cn(
              "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
              !isDragging && "cursor-grab"
            )}
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
