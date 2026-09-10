import { startConversationWithContext } from "../one/conversationStore"
import { recordFor } from "./catalog"
import { candidates, phaseLabel } from "./recruitment"
import { documentRecords } from "./documents"
import { upcomingShifts } from "./shifts"

// Same widget data and original conversation entry, now invoked by the header.
export function askWidget(id: string) {
  let title = ""
  let value = ""
  let reply: string[] = []
  if (id === "payslip" || id === "holidays") {
    const record = recordFor(
      id === "payslip" ? "My payslip" : "My time off"
    )
    if (!record) return
    title = record.title
    value = record.value
    reply = record.explanation
  } else if (id === "recruitment") {
    title = "Recruitment"
    value = `${candidates.length} candidates`
    reply = candidates.map(
      (c) => `${c.name}: ${phaseLabel(c.phase)} · ${c.status.text}.`
    )
  } else if (id === "documents") {
    title = "Recent documents"
    value = `${documentRecords.length} documents`
    reply = [
      "These sample documents are shown in your widget. This prototype does not include file contents.",
      ...documentRecords.map((d) => `${d.name}: ${d.action} · ${d.when}.`),
    ]
  } else if (id === "shifts") {
    title = "My shifts"
    value = "3 upcoming shifts"
    reply = [
      "These are simulated schedules; no shifts have been changed.",
      ...upcomingShifts.map(
        (s) =>
          `${s.day}: ${s.startTime}–${s.endTime}, ${s.workplace}. Planned break: ${s.plannedBreak}.`
      ),
    ]
  } else return
  startConversationWithContext(
    { kind: "metric", title, stats: [{ label: "Summary", value }] },
    `Explain ${title.toLowerCase()}`,
    { reply }
  )
}
