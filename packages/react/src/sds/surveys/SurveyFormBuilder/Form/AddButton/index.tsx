import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { AcademicCap, Add, Check, CheckDouble } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { useQuestionTypes } from "../../constants"
import { useSurveyFormBuilderContext } from "../../Context"
import { QuestionType } from "../../types"

export const AddButton = () => {
  const { disabled, answering, onAddNewElement, isQuestionTypeAllowed } =
    useSurveyFormBuilderContext()
  const [open, setOpen] = useState(false)

  const questionTypes = useQuestionTypes()
  const { t } = useI18n()

  const handleAddNewQuestion = (type: QuestionType, datasetKey?: string) => {
    onAddNewElement?.({ type, datasetKey })
  }

  const handleAddNewSection = () => {
    onAddNewElement?.({ type: "section" })
  }

  const regularTypes = questionTypes.filter((qt) => !qt.datasetKey)
  const datasetKeys = Array.from(
    new Set(
      questionTypes
        .filter((qt) => !!qt.datasetKey)
        .map((qt) => qt.datasetKey as string)
    )
  )

  if (disabled || answering) return null

  return (
    <div className="ml-6 flex justify-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <F0Button
            icon={Add}
            label={t("surveyFormBuilder.actions.addQuestion")}
            size="md"
            variant="outline"
            hideLabel
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-80">
          <DropdownMenuItem onClick={handleAddNewSection}>
            <div className="flex w-full flex-row items-center gap-2">
              <F0Icon icon={AcademicCap} color="default" />
              <span className="flex-1 text-base font-medium">
                {t("surveyFormBuilder.questionTypes.section")}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {regularTypes.map((qt) => (
            <DropdownMenuItem
              key={qt.questionType}
              onClick={() => handleAddNewQuestion(qt.questionType)}
            >
              <div className="flex w-full flex-row items-center gap-2">
                <F0Icon icon={qt.icon} color="default" />
                <span className="flex-1 text-base font-medium">{qt.label}</span>
              </div>
            </DropdownMenuItem>
          ))}
          {datasetKeys.length > 0 && (
            <>
              <DropdownMenuSeparator />
              {datasetKeys.map((dk) => {
                const entry = questionTypes.find(
                  (qt) =>
                    qt.datasetKey === dk &&
                    qt.questionType === "dropdown-single"
                )
                return (
                  <DropdownMenuSub key={dk}>
                    <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
                      <div className="flex w-full flex-row items-center gap-2">
                        {entry && <F0Icon icon={entry.icon} color="default" />}
                        <span className="flex-1 text-base font-medium">
                          {entry?.label ?? dk}
                        </span>
                      </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {isQuestionTypeAllowed("dropdown-single") && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleAddNewQuestion("dropdown-single", dk)
                            }
                          >
                            <div className="flex w-full flex-row items-center gap-2">
                              <F0Icon icon={Check} color="default" />
                              <span className="flex-1">
                                {t("surveyFormBuilder.labels.singleSelection")}
                              </span>
                            </div>
                          </DropdownMenuItem>
                        )}
                        {isQuestionTypeAllowed("dropdown-multi") && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleAddNewQuestion("dropdown-multi", dk)
                            }
                          >
                            <div className="flex w-full flex-row items-center gap-2">
                              <F0Icon icon={CheckDouble} color="default" />
                              <span className="flex-1">
                                {t("surveyFormBuilder.labels.multiSelection")}
                              </span>
                            </div>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                )
              })}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
