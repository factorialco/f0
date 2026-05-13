import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { F0Box } from "@factorialco/f0-react"

import {
  answersForTraining,
  surveyTemplates,
  type SurveyTemplate,
  type Training,
} from "@/fixtures"

import { FormsModals, type FormAction } from "./FormsModals"

type Props = { training: Training }

type FormItem = {
  id: string
  title: string
  status: "draft" | "active"
  formType: "satisfaction" | "knowledge" | "feedback"
  answeredCount: number
  sentCount: number
  template: SurveyTemplate
}

type ModalState = {
  action: FormAction
  template?: SurveyTemplate | null
}

function buildForms(training: Training): FormItem[] {
  const linkedTemplates = surveyTemplates.slice(0, 3)
  const answers = answersForTraining(training.id)
  return linkedTemplates.map((t, idx) => {
    const tplAnswers = answers.filter((a) => a.templateId === t.id)
    return {
      id: `form-${t.id}`,
      title: t.name,
      status: idx === 0 ? "draft" : "active",
      formType: t.category,
      answeredCount: tplAnswers.filter((a) => a.status === "submitted").length,
      sentCount: tplAnswers.length,
      template: t,
    }
  })
}

const TYPE_LABEL: Record<FormItem["formType"], string> = {
  satisfaction: "Satisfaction",
  knowledge: "Knowledge check",
  feedback: "Feedback",
}

export function FormsTab({ training }: Props) {
  const allForms = buildForms(training)
  const [modal, setModal] = useState<ModalState>({ action: null })
  const open = (state: ModalState) => setModal(state)
  const close = () => setModal({ action: null })

  const source = useDataCollectionSource<FormItem>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { label: "Draft", value: "draft" },
              { label: "Active", value: "active" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as FormItem["status"][])
            : []
          const filtered = allForms.filter((f) => {
            if (term !== "" && !f.title.toLowerCase().includes(term)) return false
            if (wantedStatus.length > 0 && !wantedStatus.includes(f.status))
              return false
            return true
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = filtered.slice(start, start + perPage)
          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New survey",
        icon: Add,
        onClick: () => open({ action: "attach-survey" }),
      }),
      itemOnClick: (item) => () => open({ action: "preview-template", template: item.template }),
      itemActions: (item) =>
        item.status === "draft"
          ? [
              {
                label: "Delete",
                icon: Delete,
                onClick: () =>
                  open({ action: "detach-template", template: item.template }),
              },
            ]
          : [],
    },
    [training.id]
  )

  return (
    <>
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Box display="flex" flexDirection="column" gap="lg">
          <OneDataCollection
            id={`trainings/all_forms-${training.id}/v1`}
            source={source}
            emptyStates={{
              "no-data": {
                emoji: "📋",
                title: "No surveys yet",
                description:
                  "Create a survey to collect feedback from participants once the training ends.",
                actions: [
                  {
                    label: "New survey",
                    icon: Add,
                    onClick: () => open({ action: "attach-survey" }),
                    variant: "outline",
                  },
                ],
              },
            }}
            visualizations={[
              {
                type: "table",
                options: {
                  frozenColumns: 1,
                  columns: [
                    {
                      label: "Name",
                      render: (item: FormItem) => ({
                        type: "text" as const,
                        value: item.title,
                      }),
                    },
                    {
                      label: "Status",
                      render: (item: FormItem) => ({
                        type: "status" as const,
                        value: {
                          label: item.status === "draft" ? "Draft" : "Published",
                          status: item.status === "draft" ? "neutral" : "positive",
                        },
                      }),
                    },
                    {
                      label: "Type",
                      render: (item: FormItem) => ({
                        type: "text" as const,
                        value: TYPE_LABEL[item.formType],
                      }),
                    },
                    {
                      label: "Participation rate",
                      render: (item: FormItem) => {
                        const percentage =
                          item.sentCount > 0
                            ? Number(
                                (
                                  (item.answeredCount / item.sentCount) *
                                  100
                                ).toFixed(1)
                              )
                            : 0
                        return {
                          type: "percentage" as const,
                          value: { label: `${percentage}%`, percentage },
                        }
                      },
                    },
                  ],
                },
              },
            ]}
          />
        </F0Box>
      </F0Box>

      <FormsModals
        action={modal.action}
        training={training}
        template={modal.template}
        answer={null}
        onClose={close}
      />
    </>
  )
}
