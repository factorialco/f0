import { useEffect, useState } from "react"
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
  title: titleProp,
  description: descriptionProp,
  onChange,
  children,
}: BaseQuestionProps) => {
  const [title, setTitle] = useState(titleProp)
  const [description, setDescription] = useState(descriptionProp)

  useEffect(() => {
    setTitle(titleProp)
  }, [titleProp])

  useEffect(() => {
    setDescription(descriptionProp)
  }, [descriptionProp])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    onChange?.({
      id,
      title,
      description,
    })
  }, [id, title, description, onChange])

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary p-4">
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
