import { F0Button } from "@/components/F0Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Delete, Ellipsis, LayersFront } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useCallback, useMemo, useState } from "react"
import { DragProvider } from "../SelectQuestion/DragContext"
import { QuestionElement } from "../types"
import { Item } from "./Item"
import { ActionType, OnChangeSectionParams, SectionProps } from "./types"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const Section = ({
  id,
  index,
  title,
  description,
  onChange,
  isEditMode,
  onAction,
  questions,
}: SectionProps) => {
  const [internalQuestions, setInternalQuestions] = useState<QuestionElement[]>(
    questions ?? []
  )

  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)

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

  const handleAction = useCallback(
    (type: ActionType) => {
      onAction?.({ sectionId: id, type, index })
    },
    [id, onAction, index]
  )

  const actions = useMemo(
    () => [
      {
        label: "Duplicate section",
        icon: LayersFront,
        onClick: () => handleAction("duplicate"),
      },
      {
        label: "Delete section",
        icon: Delete,
        onClick: () => handleAction("delete"),
        critical: true,
      },
    ],
    [handleAction]
  )

  return (
    <div className="group/section flex w-full flex-col gap-1 bg-f1-background">
      <div className="py-1 pl-5 pr-3">
        <div className="flex flex-row">
          <input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            disabled={!isEditMode}
            className="w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden"
          />
          {isEditMode && (
            <div
              className={cn(
                "opacity-0 group-hover/section:opacity-100",
                actionsDropdownOpen && "opacity-100"
              )}
            >
              <Dropdown
                items={actions}
                icon={Ellipsis}
                open={actionsDropdownOpen}
                onOpenChange={setActionsDropdownOpen}
                align="start"
              >
                <F0Button
                  icon={Ellipsis}
                  label="Actions"
                  size="md"
                  variant="ghost"
                  tooltip={false}
                  hideLabel
                />
              </Dropdown>
            </div>
          )}
        </div>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          disabled={!isEditMode}
          style={TEXT_AREA_STYLE}
          className="w-full resize-none text-f1-foreground-secondary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden"
        />
      </div>
      <DragProvider>
        <Reorder.Group
          axis="y"
          values={internalQuestions}
          onReorder={setInternalQuestions}
          as="div"
        >
          <div className="group/section-list flex flex-col gap-4">
            {internalQuestions?.map((question) => (
              <Item key={question.id} question={question} />
            ))}
          </div>
        </Reorder.Group>
      </DragProvider>
    </div>
  )
}
