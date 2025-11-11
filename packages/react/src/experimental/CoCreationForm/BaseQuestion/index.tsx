import { useCallback } from "react"
import { BaseQuestionOnChangeParams } from "../types"

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  onChange?: (params: BaseQuestionOnChangeParams) => void
  disabled?: boolean
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>

export const BaseQuestion = ({
  id,
  title,
  description,
  onChange,
  children,
}: BaseQuestionProps) => {
  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.({
        id,
        title: e.target.value,
        description,
      })
    },
    [id, description, onChange]
  )

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.({
        id,
        title,
        description: e.target.value,
      })
    },
    [id, title, onChange]
  )

  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 border-solid border-f1-border-secondary p-4">
      <div className="flex flex-col gap-0.5">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          className="w-full shrink px-2 py-1 text-lg font-semibold disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
        />
        <input
          type="text"
          value={description}
          onChange={handleChangeDescription}
          className="w-full shrink px-2 text-f1-foreground-secondary disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
        />
      </div>
      {children}
    </div>
  )
}
