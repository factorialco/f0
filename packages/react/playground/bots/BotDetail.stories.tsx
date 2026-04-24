import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import { Layout } from "@/layouts/Layout"
import { F0Box } from "@/lib/F0Box"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import { featuredBot, featuredRuns } from "./mock-data"
import type { Run, RunStatus } from "./types"

const runLabel: Record<RunStatus, string> = {
  succeeded: "Succeeded",
  failed: "Failed",
  running: "Running",
}

const runToValueDisplay: Record<RunStatus, "positive" | "info" | "critical"> = {
  succeeded: "positive",
  failed: "critical",
  running: "info",
}

function formatDuration(ms: number | null): string {
  if (ms == null) return "—"
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(2)}s`
}

function formatTime(date: Date): string {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function RunDetail({ run }: { run: Run }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" alignItems="center" gap="sm" flexWrap="wrap">
        <span className="text-sm font-semibold text-f1-foreground">
          Run #{run.id.split("-").pop()}
        </span>
        <span className="text-sm text-f1-foreground-secondary">
          {runLabel[run.status]} · {formatDuration(run.durationMs)} ·{" "}
          {formatTime(run.startedAt)}
        </span>
      </F0Box>

      {run.errorMessage && (
        <F0Box padding="md" borderRadius="md" background="critical">
          <span className="text-sm font-medium text-f1-foreground-critical">
            {run.errorMessage}
          </span>
        </F0Box>
      )}

      <F0Box display="flex" flexDirection="column" gap="sm">
        <span className="text-sm font-semibold text-f1-foreground">Input</span>
        <pre className="overflow-auto rounded-md bg-f1-background-secondary p-3 text-xs text-f1-foreground">
          {run.input}
        </pre>
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <span className="text-sm font-semibold text-f1-foreground">Output</span>
        <pre className="overflow-auto rounded-md bg-f1-background-secondary p-3 text-xs text-f1-foreground">
          {run.output}
        </pre>
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <span className="text-sm font-semibold text-f1-foreground">Logs</span>
        <pre className="overflow-auto rounded-md bg-f1-background-secondary p-3 text-xs text-f1-foreground">
          {run.logs}
        </pre>
      </F0Box>
    </F0Box>
  )
}

function BotDetailScreen() {
  const [selectedRunId, setSelectedRunId] = useState(featuredRuns[0].id)
  const selectedRun =
    featuredRuns.find((r) => r.id === selectedRunId) ?? featuredRuns[0]

  const runsSource = useDataCollectionSource<Run>({
    filters: {
      status: {
        type: "in" as const,
        label: "Status",
        options: {
          options: [
            { label: runLabel.succeeded, value: "succeeded" },
            { label: runLabel.failed, value: "failed" },
            { label: runLabel.running, value: "running" },
          ],
        },
      },
    },
    sortings: {
      startedAt: { label: "Started" },
      duration: { label: "Duration" },
    },
    dataAdapter: {
      fetchData: ({ filters, sortings }) => {
        let records: Run[] = [...featuredRuns]
        const statusFilter = filters?.status as RunStatus[] | undefined
        if (statusFilter && statusFilter.length > 0) {
          records = records.filter((r) => statusFilter.includes(r.status))
        }
        if (sortings && sortings.length > 0) {
          const { field, order } = sortings[0]
          const dir = order === "desc" ? -1 : 1
          if (field === "startedAt") {
            records.sort(
              (a, b) => (a.startedAt.getTime() - b.startedAt.getTime()) * dir
            )
          } else if (field === "duration") {
            records.sort(
              (a, b) => ((a.durationMs ?? 0) - (b.durationMs ?? 0)) * dir
            )
          }
        }
        return Promise.resolve({ records })
      },
    },
    itemOnClick: (run: Run) => () => setSelectedRunId(run.id),
  })

  return (
    <>
      <ResourceHeader
        title={featuredBot.name}
        description={featuredBot.description}
        status={{
          label: "Status",
          text:
            featuredBot.status === "active"
              ? "Active"
              : featuredBot.status === "error"
                ? "Error"
                : "Paused",
          variant:
            featuredBot.status === "active"
              ? "positive"
              : featuredBot.status === "error"
                ? "critical"
                : "neutral",
        }}
        metadata={[
          {
            label: "Owner",
            value: { type: "text", content: featuredBot.owner },
          },
          {
            label: "Total runs",
            value: { type: "text", content: String(featuredBot.totalRuns) },
          },
          {
            label: "Success rate",
            value: {
              type: "text",
              content: `${Math.round(featuredBot.successRate * 100)}%`,
            },
          },
        ]}
        primaryAction={{ label: "Run now", onClick: () => {} }}
        secondaryActions={[
          { label: "Edit", onClick: () => {} },
          { label: "Pause", onClick: () => {} },
        ]}
      />

      <Layout.Page
        variant="main-aside"
        aside={
          <Layout.Block>
            {selectedRun ? (
              <RunDetail run={selectedRun} />
            ) : (
              <span className="text-sm text-f1-foreground-secondary">
                Select a run to inspect its result.
              </span>
            )}
          </Layout.Block>
        }
      >
        <Layout.BlockContent
          title="Runs"
          description="History of executions for this bot. Pick a run to inspect input, output, and logs."
        >
          <OneDataCollection
            source={runsSource}
            visualizations={[
              {
                type: "list",
                options: {
                  itemDefinition: (run: Run) => ({
                    title: `Run #${run.id.split("-").pop()}`,
                    description: [
                      `${runLabel[run.status]} · ${formatDuration(run.durationMs)}`,
                      formatTime(run.startedAt),
                    ],
                  }),
                  fields: [
                    {
                      label: "Status",
                      render: (run: Run) => ({
                        type: "status",
                        value: {
                          status: runToValueDisplay[run.status],
                          label: runLabel[run.status],
                        },
                      }),
                    },
                    {
                      label: "Duration",
                      render: (run: Run) => formatDuration(run.durationMs),
                      sorting: "duration",
                    },
                  ],
                },
              },
            ]}
          />
        </Layout.BlockContent>
      </Layout.Page>
    </>
  )
}

const meta = {
  title: "Playground/Bots/Bot Detail",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Resource page for a single bot, Open Claw style. Composition: ResourceHeader (sibling) → Layout.Page main-aside → main: OneDataCollection list visualization for runs (handles its own filters and sorting) → aside: full detail of the selected run. Click a run row to load it in the aside.",
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
        <BotDetailScreen />
      </NavigationPage>
    </ApplicationFrame>
  ),
}
