import type { Meta, StoryObj } from "@storybook/react-vite"

import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"

import { Layout } from "@/layouts/Layout"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import { bots } from "./mock-data"
import type { Bot, BotStatus } from "./types"

const statusLabel: Record<BotStatus, string> = {
  active: "Active",
  paused: "Paused",
  error: "Error",
}

const statusToValueDisplay: Record<
  BotStatus,
  "positive" | "neutral" | "critical"
> = {
  active: "positive",
  paused: "neutral",
  error: "critical",
}

function timeAgo(date: Date): string {
  const diffMin = Math.round((Date.now() - date.getTime()) / 60000)
  if (diffMin < 60) return `${diffMin}m ago`
  const diffH = Math.round(diffMin / 60)
  if (diffH < 24) return `${diffH}h ago`
  const diffD = Math.round(diffH / 24)
  return `${diffD}d ago`
}

function BotsListScreen() {
  const dataSource = useDataCollectionSource<Bot>({
    filters: {
      status: {
        type: "in" as const,
        label: "Status",
        options: {
          options: [
            { label: statusLabel.active, value: "active" },
            { label: statusLabel.paused, value: "paused" },
            { label: statusLabel.error, value: "error" },
          ],
        },
      },
    },
    sortings: {
      name: { label: "Name" },
      lastRunAt: { label: "Last run" },
      successRate: { label: "Success rate" },
    },
    search: { enabled: true },
    dataAdapter: {
      fetchData: ({ filters, sortings, search }) => {
        let records: Bot[] = [...bots]
        const statusFilter = filters?.status as BotStatus[] | undefined
        if (statusFilter && statusFilter.length > 0) {
          records = records.filter((b) => statusFilter.includes(b.status))
        }
        if (search) {
          const q = search.toLowerCase()
          records = records.filter(
            (b) =>
              b.name.toLowerCase().includes(q) ||
              b.description.toLowerCase().includes(q) ||
              b.owner.toLowerCase().includes(q)
          )
        }
        if (sortings && sortings.length > 0) {
          const { field, order } = sortings[0]
          const dir = order === "desc" ? -1 : 1
          if (field === "name") {
            records.sort((a, b) => a.name.localeCompare(b.name) * dir)
          } else if (field === "lastRunAt") {
            records.sort(
              (a, b) => (a.lastRunAt.getTime() - b.lastRunAt.getTime()) * dir
            )
          } else if (field === "successRate") {
            records.sort((a, b) => (a.successRate - b.successRate) * dir)
          }
        }
        return Promise.resolve({ records })
      },
    },
    itemActions: (bot: Bot) => [
      {
        label: bot.status === "paused" ? "Resume" : "Pause",
        onClick: () => console.log(`Toggle ${bot.name}`),
      },
      {
        label: "Run now",
        onClick: () => console.log(`Run ${bot.name}`),
      },
      { type: "separator" },
      {
        label: "Edit",
        onClick: () => console.log(`Edit ${bot.name}`),
      },
    ],
    primaryActions: () => ({
      label: "New bot",
      onClick: () => console.log("New bot"),
    }),
  })

  return (
    <Layout.Page>
      <Layout.BlockContent
        title="Bots"
        description="All automated workflows in your workspace."
      >
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (bot: Bot) => bot.name,
                    sorting: "name",
                  },
                  {
                    label: "Description",
                    render: (bot: Bot) => bot.description,
                  },
                  {
                    label: "Status",
                    render: (bot: Bot) => ({
                      type: "status",
                      value: {
                        status: statusToValueDisplay[bot.status],
                        label: statusLabel[bot.status],
                      },
                    }),
                  },
                  {
                    label: "Owner",
                    render: (bot: Bot) => bot.owner,
                  },
                  {
                    label: "Total runs",
                    render: (bot: Bot) => bot.totalRuns,
                    align: "right",
                  },
                  {
                    label: "Success rate",
                    render: (bot: Bot) =>
                      `${Math.round(bot.successRate * 100)}%`,
                    align: "right",
                    sorting: "successRate",
                  },
                  {
                    label: "Last run",
                    render: (bot: Bot) => timeAgo(bot.lastRunAt),
                    sorting: "lastRunAt",
                  },
                ],
              },
            },
          ]}
        />
      </Layout.BlockContent>
    </Layout.Page>
  )
}

const meta = {
  title: "Playground/Bots/Bots List",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Module page listing all bots. OneDataCollection (table visualization) is the default record view: handles filters, search, sorting, and item actions out of the box. Per page-composition.mdx §7a, this is the canonical block for any record set.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ApplicationFrame sidebar={null}>
      <NavigationPage>
        <BotsListScreen />
      </NavigationPage>
    </ApplicationFrame>
  ),
}
