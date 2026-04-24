export type BotStatus = "active" | "paused" | "error"

export type RunStatus = "succeeded" | "failed" | "running"

export type Bot = {
  id: string
  name: string
  description: string
  status: BotStatus
  owner: string
  lastRunAt: Date
  totalRuns: number
  successRate: number
}

export type Run = {
  id: string
  botId: string
  status: RunStatus
  startedAt: Date
  finishedAt: Date | null
  durationMs: number | null
  input: string
  output: string
  logs: string
  errorMessage: string | null
}
