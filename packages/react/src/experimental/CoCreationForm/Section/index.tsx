import { F0Button } from "@/components/F0Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Delete, Ellipsis, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useMemo, useState } from "react"
import { useCoCreationFormContext } from "../Context"
import { DragProvider } from "../DragContext"
import { OnChangeSectionParams, QuestionElement } from "../types"
import { Item } from "./Item"
import { SectionProps } from "./types"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const Section = ({
  id,
  title,
  description,
  questions = [],
}: SectionProps) => {
  const { onSectionChange, isEditMode, deleteElement, onDuplicateElement } =
    useCoCreationFormContext()

  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)
  const { t } = useI18n()

  const baseOnChangeParams: OnChangeSectionParams = useMemo(
    () => ({
      id,
      title,
      description,
    }),
    [id, title, description]
  )

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSectionChange?.({ ...baseOnChangeParams, title: event.target.value })
  }

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onSectionChange?.({
      ...baseOnChangeParams,
      description: event.target.value,
    })
  }

  const handleReorderQuestions = (newQuestions: QuestionElement[]) => {
    onSectionChange?.({ ...baseOnChangeParams, questions: newQuestions })
  }

  const handleDuplicateSection = () => {
    onDuplicateElement?.({ elementId: id, type: "section" })
  }

  const handleDeleteSection = () => {
    deleteElement(id)
  }

  const actions = [
    {
      label: t("coCreationForm.actions.duplicateSection"),
      icon: LayersFront,
      onClick: handleDuplicateSection,
    },
    {
      label: t("coCreationForm.actions.deleteSection"),
      icon: Delete,
      onClick: handleDeleteSection,
      critical: true,
    },
  ]

  return (
    <div className="group/section flex w-full flex-col gap-1 bg-f1-background">
      <div className="py-1 pl-5 pr-3">
        <div className="flex flex-row">
          <input
            type="text"
            aria-label={t("coCreationForm.labels.title")}
            value={title}
            placeholder={t("coCreationForm.labels.sectionTitlePlaceholder")}
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
                  label={t("coCreationForm.actions.actions")}
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
          aria-label={t("coCreationForm.labels.description")}
          placeholder={t("coCreationForm.labels.sectionDescriptionPlaceholder")}
          onChange={handleChangeDescription}
          disabled={!isEditMode}
          style={TEXT_AREA_STYLE}
          className="w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden"
        />
      </div>
      <DragProvider>
        <Reorder.Group
          axis="y"
          values={questions}
          onReorder={handleReorderQuestions}
          as="div"
        >
          <div className="group/section-list flex flex-col gap-4">
            {questions.map((question) => (
              <Item key={question.id} question={question} />
            ))}
          </div>
        </Reorder.Group>
      </DragProvider>
    </div>
  )
}
