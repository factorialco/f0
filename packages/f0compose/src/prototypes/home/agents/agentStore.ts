import { useSyncExternalStore } from "react"

import type { AgentTemplate } from "./agentsData"
import type { RunEntry } from "./agentThreads"

import { AGENT_TEMPLATES, entriesFor } from "./agentsData"

/**
 * The agents you have created. A module store, for the same reason
 * `conversationStore` is one: the nav panel and the canvas are sibling
 * React trees under FactorialShell, so they cannot share component state.
 *
 * Persisted, so the Agents screen keeps the state Oskar left it in —
 * which matters because the WHOLE POINT of the three frames is that the
 * screen changes shape once an agent exists (empty brief → conversation →
 * list).
 *
 * The flip side is that a SHARED link shows whoever opens it their own
 * leftovers rather than the empty state, so `?reset=1` on any prototype
 * URL wipes the lot (see `resetPrototype` in Home.tsx). A first-time
 * visitor always starts empty — nothing seeds an agent, `createAgent` only
 * runs from a click.
 */

export type Agent = {
  id: string
  templateId: string
  name: string
  emoji: string
  description: string
  createdAt: number
}

/**
 * The agent's most recent run. An agent's THREAD is its activity log
 * (per Oskar's mock-content brief), so this is derived from the run
 * entries rather than stored as a separate field — the `activity` string
 * that used to live on the agent was exactly the "log aparte" the brief
 * rules out.
 */
export function latestRun(agent: Agent): RunEntry | undefined {
  return entriesFor(agent.templateId)[0]
}

type AgentState = { agents: Agent[] }

const STORAGE_KEY = "f0compose:home:agents"

function loadPersisted(): Agent[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Agent[]) : []
  } catch {
    return []
  }
}

let state: AgentState = { agents: loadPersisted() }
const listeners = new Set<() => void>()

function emit(next: AgentState) {
  state = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.agents))
  } catch {
    // Quota/serialization failures only cost persistence, not the session.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useAgents(): Agent[] {
  return useSyncExternalStore(
    subscribe,
    () => state.agents,
    () => state.agents
  )
}

/** Read the list outside React (the nav panel's handlers do). */
export function getAgents(): Agent[] {
  return state.agents
}

export function agentById(id: string | undefined): Agent | undefined {
  return id ? state.agents.find((a) => a.id === id) : undefined
}

let nextId = 1

/**
 * Create an agent from a template. Creating it is what the FIRST brief
 * does (Figma 2741:466470 already shows the agent named in the navbar and
 * listed in the nav panel while the conversation that configures it is
 * still going) — so the agent exists from the moment you hit send, and
 * the conversation is how you shape it, not a gate before it.
 *
 * Re-briefing a template you already have returns the SAME agent instead
 * of a duplicate: the list is "your agents", and two Chief of Staff cards
 * with the same description would just look like a bug.
 */
export function createAgent(template: AgentTemplate): Agent {
  const existing = state.agents.find((a) => a.templateId === template.id)
  if (existing) return existing
  const agent: Agent = {
    id: `agent-${template.id}-${nextId++}`,
    templateId: template.id,
    name: template.name,
    emoji: template.emoji,
    description: template.description,
    createdAt: Date.now(),
  }
  emit({ agents: [...state.agents, agent] })
  return agent
}

/** Rename from the card's "⋮" menu. Empty names are ignored, the same
 *  rule `renameConversation` follows. */
export function renameAgent(id: string, name: string) {
  const trimmed = name.trim()
  if (!trimmed) return
  emit({
    agents: state.agents.map((a) =>
      a.id === id ? { ...a, name: trimmed } : a
    ),
  })
}

/** Change the agent's emoji from the same menu. */
export function setAgentEmoji(id: string, emoji: string) {
  emit({
    agents: state.agents.map((a) => (a.id === id ? { ...a, emoji } : a)),
  })
}

export function deleteAgent(id: string) {
  emit({ agents: state.agents.filter((a) => a.id !== id) })
}

/** Back to the empty state — the first of the three frames. */
export function clearAgents() {
  emit({ agents: [] })
}

/** Templates you have not created yet, for the empty state's grid. */
export function availableTemplates(agents: Agent[]): AgentTemplate[] {
  const taken = new Set(agents.map((a) => a.templateId))
  return AGENT_TEMPLATES.filter((t) => !taken.has(t.id))
}
