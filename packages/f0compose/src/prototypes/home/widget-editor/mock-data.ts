import type { CustomWidget } from "./model"

// Simulated widget results. The definition selects a view, never production data.
const samples = {
  requests: {
    value: "12",
    label: "Pending requests",
    summary:
      "12 requests are waiting for review. 8 are time off requests and 4 are expense claims.",
    rows: ["8 time off requests", "4 expense claims", "Next review: today"],
  },
  hiring: {
    value: "5",
    label: "Active candidates",
    summary:
      "5 candidates are moving through the hiring process, with one assessment waiting for review.",
    rows: [
      "2 interviews scheduled",
      "1 assessment to review",
      "2 applications to review",
    ],
  },
  work: {
    value: "3",
    label: "Upcoming items",
    summary:
      "You have 3 items coming up: a team review, a project check-in and a planning session.",
    rows: [
      "Team review · Today",
      "Project check-in · Tomorrow",
      "Planning session · Friday",
    ],
  },
}
export function sampleFor(widget: CustomWidget) {
  return /request|solicitud/i.test(widget.topic)
    ? samples.requests
    : /hiring|recruit|candidate/i.test(widget.topic)
      ? samples.hiring
      : /work|upcoming|tarea/i.test(widget.topic)
        ? samples.work
        : {
            value: "3",
            label: widget.topic,
            summary: `Preview of ${widget.topic.toLowerCase()} for ${widget.context.toLowerCase()}. Three example entries are shown until real data is connected.`,
            rows: ["Example entry 1", "Example entry 2", "Example entry 3"],
          }
}
