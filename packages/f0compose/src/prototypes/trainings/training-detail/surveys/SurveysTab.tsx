import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { ExternalLink } from "@factorialco/f0-react/icons/app"

import {
  trainingSurveys,
  type SurveyType,
  type TrainingSurvey,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

interface Props {
  trainingId: string
}

const surveyTypeLabel: Record<SurveyType, string> = {
  satisfaction: "Satisfaction",
  effectiveness: "Effectiveness",
  knowledge: "Knowledge test",
  custom: "Custom",
}

const surveyTypeColor = {
  satisfaction: "viridian",
  effectiveness: "indigo",
  knowledge: "yellow",
  custom: "camel",
} as const

export function SurveysTab({ trainingId }: Props) {
  const surveys = trainingSurveys.filter((s) => s.trainingId === trainingId)

  const source = useDataCollectionSource<TrainingSurvey>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        title: { label: "Title" },
        completionRate: { label: "Completion rate" },
      },
      itemActions: () => [
        {
          label: "View responses",
          icon: ExternalLink,
          onClick: () => {},
        },
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = surveys.filter((s) =>
            term === "" ? true : s.title.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (s, field) => {
            switch (field) {
              case "title":
                return s.title.toLowerCase()
              case "completionRate":
                return s.completionRate
              default:
                return null
            }
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
    },
    [trainingId]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                id: "title",
                label: "Survey",
                sorting: "title",
                render: (s: TrainingSurvey) => s.title,
              },
              {
                id: "type",
                label: "Type",
                render: (s: TrainingSurvey) => ({
                  type: "dotTag" as const,
                  value: {
                    label: surveyTypeLabel[s.type],
                    color: surveyTypeColor[s.type],
                  },
                }),
              },
              {
                id: "responses",
                label: "Responses",
                render: (s: TrainingSurvey) => s.responsesCount,
              },
              {
                id: "completionRate",
                label: "Completion",
                sorting: "completionRate",
                render: (s: TrainingSurvey) => ({
                  type: "progressBar" as const,
                  value: {
                    value: s.completionRate,
                    max: 100,
                    label: `${s.completionRate}%`,
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}
