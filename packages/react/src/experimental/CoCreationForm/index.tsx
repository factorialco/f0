import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useState } from "react"
import { Question as QuestionComponent, QuestionProps } from "./Question"
import { Section as SectionComponent } from "./Section"
import { SectionProps } from "./Section/types"
import { DragProvider, useDragContext } from "./SelectQuestion/DragContext"

type Section = Omit<SectionProps, "onAction" | "onChange">
type Question = Omit<QuestionProps, "onAction" | "onChange" | "onAddNewElement">

type CoCreationFormElement =
  | { type: "section"; section: Section }
  | { type: "question"; question: Question }

type CoCreationFormProps = {
  elements: CoCreationFormElement[]
  isEditMode?: boolean
  onQuestionAction?: QuestionProps["onAction"]
  onSectionAction?: SectionProps["onAction"]
  onQuestionChange?: QuestionProps["onChange"]
  onSectionChange?: SectionProps["onChange"]
  onAddNewElement?: QuestionProps["onAddNewElement"]
}

type ItemProps = {
  element: CoCreationFormElement
  index: number
  isEditMode?: boolean
} & Pick<
  CoCreationFormProps,
  | "onQuestionAction"
  | "onSectionAction"
  | "onQuestionChange"
  | "onSectionChange"
  | "onAddNewElement"
>

const Item = ({
  element,
  index,
  isEditMode,
  onQuestionAction,
  onSectionAction,
  onQuestionChange,
  onSectionChange,
  onAddNewElement,
}: ItemProps) => {
  const { isDragging, setIsDragging, setDraggedItemId } = useDragContext()

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
      <div
        className={cn(
          "w-full",
          element.type === "section" ? "mb-2" : "mb-4",
          element.type === "section" && index !== 0 && "mt-8"
        )}
      >
        <div
          className={cn(
            "group/element flex flex-row items-start gap-1",
            isDragging && "cursor-grabbing"
          )}
        >
          {!!isEditMode && (
            <div className="mt-2 flex aspect-square w-6 scale-75 cursor-grab items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40">
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
  onQuestionAction,
  onSectionAction,
  onQuestionChange,
  onSectionChange,
  onAddNewElement,
}: CoCreationFormProps) => {
  const [internalElements, setInternalElements] =
    useState<CoCreationFormElement[]>(elements)

  return (
    <DragProvider>
      <Reorder.Group
        axis="y"
        values={internalElements}
        onReorder={setInternalElements}
        as="div"
      >
        {internalElements.map((element, index) => (
          <Item
            key={
              element.type === "section"
                ? element.section.id
                : element.question.id
            }
            index={index}
            element={element}
            isEditMode={isEditMode}
            onQuestionAction={onQuestionAction}
            onSectionAction={onSectionAction}
            onQuestionChange={onQuestionChange}
            onSectionChange={onSectionChange}
            onAddNewElement={onAddNewElement}
          />
        ))}
      </Reorder.Group>
    </DragProvider>
  )
}
