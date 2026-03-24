import type { ChatThread } from "./useChatHistory"
import type { DateGroup, ThreadGroup } from "./types"

export function getDateGroup(dateString: string): DateGroup {
  const date = new Date(dateString)
  const now = new Date()

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const yesterdayStart = new Date(todayStart)
  yesterdayStart.setDate(yesterdayStart.getDate() - 1)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  if (date >= todayStart) return "today"
  if (date >= yesterdayStart) return "yesterday"
  if (date >= monthStart) return "thisMonth"
  return "older"
}

export function groupThreadsByDate(threads: ChatThread[]): ThreadGroup[] {
  const groups: Record<DateGroup, ChatThread[]> = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: [],
  }

  for (const thread of threads) {
    const group = getDateGroup(thread.updatedAt)
    groups[group].push(thread)
  }

  const order: DateGroup[] = ["today", "yesterday", "thisMonth", "older"]
  return order
    .filter((key) => groups[key].length > 0)
    .map((key) => ({ key, threads: groups[key] }))
}
