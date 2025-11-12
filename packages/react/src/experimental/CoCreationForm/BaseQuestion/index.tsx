import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import {
  AcademicCap,
  Add,
  Check,
  CheckDouble,
  List,
  Numbers,
  Star,
  TextSize,
} from "@/icons/app"
import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"
import { BaseQuestionOnChangeParams, QuestionType } from "../types"

type OnAddNewQuestionParams = {
  type: QuestionType
  index: number
}

export type BaseQuestionProps = {
  id: string
  index: number
  title: string
  description?: string
  children: React.ReactNode
  onChange?: (params: BaseQuestionOnChangeParams) => void
  disabled?: boolean
  required?: boolean
  onAddNewQuestion?: (params: OnAddNewQuestionParams) => void
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const BaseQuestion = ({
  id,
  index,
  title,
  description,
  onChange,
  children,
  required,
  disabled,
  onAddNewQuestion,
}: BaseQuestionProps) => {
  const [isNewQuestionDropdownOpen, setIsNewQuestionDropdownOpen] =
    useState(false)

  const baseOnChangeParams: BaseQuestionOnChangeParams = useMemo(
    () => ({
      id,
      title,
      description,
      required,
    }),
    [id, title, description, required]
  )

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.({
        ...baseOnChangeParams,
        title: e.target.value,
      })
    },
    [baseOnChangeParams, onChange]
  )

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.({
        ...baseOnChangeParams,
        description: e.target.value,
      })
    },
    [baseOnChangeParams, onChange]
  )

  const handleAddNewQuestion = useCallback(
    (type: QuestionType) => {
      onAddNewQuestion?.({
        type,
        index,
      })
    },
    [onAddNewQuestion, index]
  )

  const newQuestionDropdownItems = useMemo<DropdownInternalProps["items"]>(
    () => [
      {
        label: "Section",
        icon: AcademicCap,
        onClick: () => handleAddNewQuestion("section"),
      },
      {
        type: "separator",
      },
      {
        label: "Rating",
        icon: Star,
        onClick: () => handleAddNewQuestion("rating"),
      },
      {
        label: "Multiple choice",
        icon: CheckDouble,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: "Single choice",
        icon: Check,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: "Text",
        icon: TextSize,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: "Long text",
        icon: List,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: "Numeric",
        icon: Numbers,
        onClick: () => handleAddNewQuestion("numeric"),
      },
    ],
    [handleAddNewQuestion]
  )

  return (
    <div className="group/question relative flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary px-3 py-4 hover:border-f1-border-hover">
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-row gap-2">
          <textarea
            value={title}
            onChange={handleChangeTitle}
            className="w-full resize-none px-2 py-1 text-lg font-semibold disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
            style={TEXT_AREA_STYLE}
          />
        </div>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          className="w-full resize-none px-2 text-f1-foreground-secondary disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
          style={TEXT_AREA_STYLE}
        />
      </div>
      {children}
      {disabled && (
        <div
          className={cn(
            "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
            isNewQuestionDropdownOpen && "opacity-100"
          )}
        >
          <Dropdown
            items={newQuestionDropdownItems}
            icon={Add}
            size="sm"
            open={isNewQuestionDropdownOpen}
            onOpenChange={setIsNewQuestionDropdownOpen}
            align="center"
          />
        </div>
      )}
    </div>
  )
}
