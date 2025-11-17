import { F0Icon } from "@/components/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useState } from "react"
import { CoCreationFormProvider, useCoCreationFormContext } from "../Context"
import { DragProvider, useDragContext } from "../DragContext"
import { Question as QuestionComponent } from "../Question"
import { Section as SectionComponent } from "../Section"
import { CoCreationFormElement, CoCreationFormProps } from "../types"

type ItemProps = {
  element: CoCreationFormElement
}

const Item = ({ element }: ItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId } = useDragContext()

  const {
    onQuestionAction,
    onSectionAction,
    onQuestionChange,
    onSectionChange,
    onAddNewElement,
    isEditMode,
  } = useCoCreationFormContext()

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

  return (
    <Reorder.Item
      value={element}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={!!isEditMode}
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
                !isDragging && "cursor-grab"
              )}
            >
              <F0Icon icon={Handle} size="sm" />
            </div>
          )}
          {element.type === "section" && (
            <SectionComponent
              {...element.section}
              isEditMode={isEditMode}
              onAction={onSectionAction}
              onChange={onSectionChange}
            />
          )}
          {element.type === "question" && (
            <QuestionComponent
              {...element.question}
              isEditMode={isEditMode}
              onAction={onQuestionAction}
              onChange={onQuestionChange}
              onAddNewElement={onAddNewElement}
            />
          )}
        </div>
      </div>
    </Reorder.Item>
  )
}

export const CoCreationForm = ({
  elements,
  isEditMode,
  ...callbacks
}: CoCreationFormProps) => {
  const [internalElements, setInternalElements] =
    useState<CoCreationFormElement[]>(elements)

  return (
    <CoCreationFormProvider isEditMode={isEditMode} {...callbacks}>
      <DragProvider>
        <Reorder.Group
          axis="y"
          values={internalElements}
          onReorder={setInternalElements}
          as="div"
        >
          <div className="flex flex-col gap-8">
            {internalElements.map((element) => (
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
    </CoCreationFormProvider>
  )
}
