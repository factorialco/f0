import type { ProfileId } from "../profileStore"
import type { CustomWidget } from "./model"

export type WidgetCreation = {
  profile: ProfileId
  step: number
  answers: string[]
  completed?: boolean
  cancelled?: boolean
  widgetId?: string
}
export const creationSteps = [
  {
    text: "What would you like your widget to show?",
    options: ["Pending team requests", "Hiring progress", "My upcoming work"],
  },
  {
    text: "Whose information should it include?",
    options: ["My information", "My team", "All employees"],
  },
  {
    text: "How would you like to see it?",
    options: ["A short list", "A key number", "A summary"],
  },
] as const
export function widgetQuestion(flow: WidgetCreation) {
  const step = creationSteps[Math.min(flow.step, creationSteps.length - 1)]
  return {
    intentKey: `widget:${flow.step}`,
    text: step.text,
    options: [...step.options],
  }
}
export function completeWidget(flow: WidgetCreation, id: string): CustomWidget {
  return {
    id,
    title: flow.answers[0].trim(),
    topic: flow.answers[0],
    context: flow.answers[1],
    format: flow.answers[2],
  }
}

/** Match existing F0 catalog icons to the requested content, including free text. */
export function customWidgetIconKey(widget: CustomWidget): string {
  const topic = widget.topic.toLowerCase()
  if (/hiring|recruit|candidate|contrat|selecci/.test(topic))
    return "recruitment"
  if (/request|approval|solicitud|aprob/.test(topic)) return "inbox"
  if (/pay|salary|budget|cost|nómina|salario|presupuesto/.test(topic))
    return "payslip"
  if (/holiday|vacation|time off|vacacion|ausencia/.test(topic))
    return "holidays"
  if (/document|file|archivo/.test(topic)) return "documents"
  if (/community|post|news|comunidad|noticia/.test(topic)) return "communities"
  if (/clock|hours|attendance|fichaje|horas/.test(topic)) return "clockin"
  if (/work|task|event|shift|schedule|trabajo|tarea|turno/.test(topic))
    return "events"
  if (/team|people|employee|equipo|empleado/.test(topic)) return "recruitment"
  return "insights"
}
