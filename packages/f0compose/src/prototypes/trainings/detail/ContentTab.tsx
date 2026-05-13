import {
  OneDataCollection,
  useDataCollectionSource,
  type GroupingDefinition,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Download, Pencil } from "@factorialco/f0-react/icons/app"

import { F0Box, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { useMemo } from "react"

import {
  contentModulesForTraining,
  type ContentBlock,
  type ContentBlockType,
  type Training,
} from "@/fixtures"

type Props = { training: Training }

type SyllabusItem = {
  id: string
  moduleId: string
  moduleTitle: string
  blockTitle: string
  blockType: ContentBlockType
  estimatedMinutes: number
  block: ContentBlock
}

const TYPE_LABEL: Record<ContentBlockType, string> = {
  page: "Page",
  video: "Video",
  quiz: "Quiz",
  scorm: "SCORM",
}

const TYPE_ICON: Record<ContentBlockType, string> = {
  page: "📄",
  video: "🎬",
  quiz: "❓",
  scorm: "📦",
}

export function ContentTab({ training }: Props) {
  const modules = contentModulesForTraining(training.id)
  const hasContentModules = modules.length > 0

  const moduleInfo = useMemo(
    () =>
      Object.fromEntries(
        modules.map((m) => [
          m.id,
          { title: m.title, blockCount: m.blocks.length },
        ])
      ),
    [modules]
  )

  const items: SyllabusItem[] = useMemo(
    () =>
      modules.flatMap((m) =>
        m.blocks.map((b) => ({
          id: b.id,
          moduleId: m.id,
          moduleTitle: m.title,
          blockTitle: b.title,
          blockType: b.type,
          estimatedMinutes: b.estimatedMinutes,
          block: b,
        }))
      ),
    [modules]
  )

  const grouping: GroupingDefinition<SyllabusItem> = {
    hideSelector: true,
    collapsible: true,
    mandatory: true,
    defaultOpenGroups: true,
    groupBy: {
      moduleId: {
        name: "Module",
        label: (groupId) => moduleInfo[String(groupId)]?.title ?? String(groupId),
        itemCount: (groupId) => moduleInfo[String(groupId)]?.blockCount ?? 0,
      },
    },
  }

  const source = useDataCollectionSource<SyllabusItem>(
    {
      currentGrouping: { field: "moduleId", order: "asc" },
      grouping,
      dataAdapter: {
        paginationType: "pages",
        perPage: 500,
        fetchData: () => ({
          type: "pages" as const,
          records: items,
          total: items.length,
          perPage: 500,
          currentPage: 1,
          pagesCount: 1,
        }),
      },
    },
    [training.id, items]
  )

  // Empty state — content creation options (matches upstream ContentCreationOptions)
  if (!hasContentModules) {
    return (
      <F0Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3xl"
        padding="5xl"
      >
        <F0Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="md"
        >
          <F0Heading
            content="Create your training content"
            variant="heading-large"
          />
          <F0Text
            content="Build it manually with our editor, import a SCORM package, or let One draft it for you."
            variant="description"
          />
        </F0Box>

        <div className="grid w-3/4 grid-cols-3 gap-4">
          <F0Card
            avatar={{
              type: "icon",
              icon: Add,
              "aria-label": "Start with One",
            }}
            title="Start with One"
            description="Let Factorial AI draft your course outline and content from a short prompt."
          />
          <F0Card
            avatar={{
              type: "icon",
              icon: Download,
              "aria-label": "Import SCORM package",
            }}
            title="Import SCORM package"
            description="Upload an existing SCORM 1.2 or 2004 package from your computer."
          />
          <F0Card
            avatar={{
              type: "icon",
              icon: Pencil,
              "aria-label": "Build manually",
            }}
            title="Build manually"
            description="Start from scratch in the content builder with pages, videos and quizzes."
          />
        </div>
      </F0Box>
    )
  }

  // Has content — heading + edit button + syllabus
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <div className="flex items-center justify-between">
        <F0Heading content="Course content" variant="heading" as="h2" />
      </div>

      <OneDataCollection
        id={`trainings/content-${training.id}/v1`}
        source={source}
        visualizations={[
          {
            type: "list",
            options: {
              itemDefinition: (item: SyllabusItem) => ({
                title: item.blockTitle,
                description: [
                  `${TYPE_LABEL[item.blockType]} • ${item.estimatedMinutes} min`,
                ],
                avatar: {
                  type: "emoji" as const,
                  emoji: TYPE_ICON[item.blockType],
                  "aria-label": TYPE_LABEL[item.blockType],
                },
              }),
              fields: [],
            },
          },
        ]}
      />
    </F0Box>
  )
}
