import { useEffect, useState } from "react"

import {
  defaultWidgets,
  starterQuestion,
  starterTopics,
  steps,
  type Step,
} from "./data"
export type Message = {
  who: "agent" | "you"
  text: string
  blocks?: string[]
  question?: string
}
export type State = {
  step: Step
  paused: boolean
  priorities: string[]
  widgets: string[]
  routines: string[]
  reports: string[]
  visits: number
  draft: string
  history: Message[]
  intent: { text: string; topics: string[] } | null
}
export const key = "home-v2-personal-agent-phase1"
export function initial(): State {
  return {
    step: "priorities",
    paused: false,
    priorities: [...starterTopics],
    widgets: [...defaultWidgets],
    routines: [],
    reports: [],
    visits: 0,
    draft: "",
    intent: null,
    history: [
      {
        who: "agent",
        text: "Soy tu agente personal. Mi objetivo es ayudarte a estar al día y quitarte trabajo. Como gestionas un equipo, he preparado este punto de partida. A la derecha tienes tus pendientes, disponibilidad y Communities, listos para usar.",
        blocks: ["Decisiones pendientes", "Communities"],
        question: starterQuestion,
      },
    ],
  }
}
function valid(value: unknown): value is State {
  if (!value || typeof value !== "object") return false
  const item = value as Partial<State>
  return (
    steps.includes(item.step as Step) &&
    typeof item.paused === "boolean" &&
    typeof item.visits === "number" &&
    typeof item.draft === "string" &&
    (item.intent == null ||
      (typeof item.intent === "object" &&
        typeof item.intent.text === "string" &&
        Array.isArray(item.intent.topics) &&
        item.intent.topics.every((topic) => typeof topic === "string"))) &&
    [item.priorities, item.widgets, item.routines, item.reports].every(
      (list) =>
        Array.isArray(list) && list.every((entry) => typeof entry === "string")
    ) &&
    Array.isArray(item.history) &&
    item.history.every(
      (entry) =>
        entry &&
        (entry.who === "agent" || entry.who === "you") &&
        typeof entry.text === "string" &&
        (!entry.blocks ||
          (Array.isArray(entry.blocks) &&
            entry.blocks.every((block) => typeof block === "string"))) &&
        (!entry.question || typeof entry.question === "string")
    )
  )
}
export function useSetup() {
  const [state, setState] = useState<State>(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(key) ?? "null")
      return valid(value)
        ? { ...value, intent: value.intent ?? null }
        : initial()
    } catch {
      return initial()
    }
  })
  const [storageError, setStorageError] = useState(false)
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
      setStorageError(false)
    } catch {
      setStorageError(true)
    }
  }, [state])
  return { state, setState, storageError }
}
