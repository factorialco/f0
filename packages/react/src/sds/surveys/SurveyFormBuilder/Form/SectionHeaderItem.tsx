import { Reorder, useDragControls } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

import { useSurveyFormBuilderContext } from "../Context"
import { useDragContext } from "../DragContext"
import { Question as QuestionComponent, QuestionProps } from "../Question"
import { Section as SectionComponent } from "../Section"
import { EndOfSectionDivider } from "./EndOfSectionDivider"
import { FlatFormItem } from "./utils"

export const SectionHeaderItem = ({
  item,
  className,
}: {
  item: FlatFormItem & { type: "section-header" }
  className?: string
}) => {
  const { isDragging, setIsDragging, setDraggedItemId, draggedItemId } =
    useDragContext()
  const dragControls = useDragControls()
  const { isEditMode } = useSurveyFormBuilderContext()

  const isDraggingThisSection = draggedItemId === item.section.id

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(item.section.id)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const dragEnabled = !!isEditMode && !item.section.locked

  return (
    <Reorder.Item
      value={item}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={false}
      dragControls={dragControls}
      layout="position"
      as="div"
      className={className}
    >
      <div className="w-full">
        <div className="group/element w-full">
          <div
            className={cn(
              "flex flex-row items-start gap-1 w-full",
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
            <SectionComponent {...item.section} hideQuestions />
          </div>

          {isDraggingThisSection &&
            (item.section.questions ?? []).length > 0 && (
              <div className="flex flex-col gap-4 w-full mt-4 ml-7">
                {(item.section.questions ?? []).map((q) => (
                  <QuestionComponent key={q.id} {...(q as QuestionProps)} />
                ))}
                <EndOfSectionDivider />
              </div>
            )}
        </div>
      </div>
    </Reorder.Item>
  )
}
