import { useCallback, useMemo } from "react"
import { BaseQuestionOnChangeParams } from "../types"

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  onChange?: (params: BaseQuestionOnChangeParams) => void
  disabled?: boolean
  required?: boolean
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
  title,
  description,
  onChange,
  children,
  required,
}: BaseQuestionProps) => {
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

  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 border-solid border-f1-border-secondary p-4">
      <div className="flex flex-col gap-0.5">
        <textarea
          value={title}
          onChange={handleChangeTitle}
          className="w-full resize-none px-2 py-1 text-lg font-semibold disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
          style={TEXT_AREA_STYLE}
        />
        <textarea
          value={description}
          onChange={handleChangeDescription}
          className="w-full resize-none px-2 text-f1-foreground-secondary disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
          style={TEXT_AREA_STYLE}
        />
      </div>
      {children}
    </div>
  )
}
