import { useCallback, useMemo } from "react"

type OnChangeSectionParams = {
  id: string
  title: string
  description?: string
}

type SectionProps = {
  id: string
  title: string
  description?: string
  onChange?: (params: OnChangeSectionParams) => void
  children: React.ReactNode
}

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const Section = ({
  id,
  title,
  description,
  onChange,
  children,
}: SectionProps) => {
  const baseOnChangeParams: OnChangeSectionParams = useMemo(
    () => ({
      id,
      title,
      description,
    }),
    [id, title, description]
  )

  const handleChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.({ ...baseOnChangeParams, title: event.target.value })
    },
    [baseOnChangeParams, onChange]
  )

  const handleChangeDescription = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.({ ...baseOnChangeParams, description: event.target.value })
    },
    [baseOnChangeParams, onChange]
  )

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 px-5 py-1">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          className="w-full text-lg font-semibold disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
        />
        <textarea
          value={description}
          onChange={handleChangeDescription}
          style={TEXT_AREA_STYLE}
          className="w-full resize-none text-f1-foreground-secondary disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"
        />
      </div>
      {children}
    </div>
  )
}
