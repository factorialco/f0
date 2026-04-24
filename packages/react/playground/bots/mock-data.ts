import type { Bot, BotStatus, Run, RunStatus } from "./types"

const now = Date.now()
const min = 60 * 1000
const hour = 60 * min
const day = 24 * hour

const botNames = [
  "Onboarding Sync",
  "Time-off Reminder",
  "Payroll Closer",
  "Document Indexer",
  "Slack Digest",
  "Calendar Sync",
  "Receipt OCR",
  "Compliance Auditor",
]

const botStatuses: BotStatus[] = ["active", "paused", "error"]

const ownerNames = [
  "Marta Pérez",
  "Lucas Romero",
  "Aiko Tanaka",
  "Noah Bennett",
]

export const bots: Bot[] = botNames.map((name, i) => ({
  id: `bot-${i + 1}`,
  name,
  description: `Automates the ${name.toLowerCase()} workflow.`,
  status: botStatuses[i % botStatuses.length],
  owner: ownerNames[i % ownerNames.length],
  lastRunAt: new Date(now - i * 3 * hour),
  totalRuns: 120 + i * 17,
  successRate: 0.7 + (i % 3) * 0.1,
}))

const runStatuses: RunStatus[] = [
  "succeeded",
  "succeeded",
  "succeeded",
  "failed",
  "running",
  "succeeded",
  "failed",
  "succeeded",
]

const sampleOutputs: Record<RunStatus, string> = {
  succeeded: JSON.stringify(
    {
      processed: 42,
      skipped: 3,
      durationMs: 1842,
    },
    null,
    2
  ),
  failed: JSON.stringify(
    {
      error: "Upstream API returned 503",
      attemptedAt: new Date().toISOString(),
    },
    null,
    2
  ),
  running:
    "// Streaming output…\n[12:01:03] starting batch\n[12:01:04] item 1/N",
}

const sampleLogs: Record<RunStatus, string> = {
  succeeded:
    "[INFO] Job started\n[INFO] Loaded 45 records\n[INFO] Pushed 42 to destination\n[INFO] Job completed in 1.84s",
  failed:
    "[INFO] Job started\n[INFO] Loaded 45 records\n[ERROR] Upstream API 503\n[ERROR] Retry exhausted after 3 attempts",
  running:
    "[INFO] Job started\n[INFO] Loaded 45 records\n[INFO] Processing item 1…",
}

export function buildRuns(botId: string, count = 25): Run[] {
  return Array.from({ length: count }).map((_, i) => {
    const status = runStatuses[i % runStatuses.length]
    const startedAt = new Date(now - i * 4 * hour - i * 12 * min)
    const finishedAt =
      status === "running" ? null : new Date(startedAt.getTime() + 1840 + i * 7)
    return {
      id: `${botId}-run-${i + 1}`,
      botId,
      status,
      startedAt,
      finishedAt,
      durationMs:
        status === "running"
          ? null
          : finishedAt!.getTime() - startedAt.getTime(),
      input: JSON.stringify({ trigger: "schedule", batch: i }, null, 2),
      output: sampleOutputs[status],
      logs: sampleLogs[status],
      errorMessage: status === "failed" ? "Upstream API returned 503" : null,
    }
  })
}

export function getBot(botId: string): Bot | undefined {
  return bots.find((b) => b.id === botId)
}

export const featuredBot: Bot = bots[0]
export const featuredRuns: Run[] = buildRuns(featuredBot.id, 25)

export const dayMs = day
