import { useCopilotAction } from "@copilotkit/react-core"

import { InsightCard } from "./InsightCard"
import { getInsightSaveHandler } from "./InsightSaveContext"
import type { InsightCardProps } from "./types"

/**
 * Hook to register the insight copilot action.
 *
 * The agent triggers this frontend tool when it wants to surface a
 * data insight inline in the chat. It sends a title, an optional
 * highlight metric (value + label), optional markdown detail
 * content, the original question, the app section, and optionally
 * the queryData params for future refresh.
 *
 * The save callback is read at render time from the module-level
 * store (set via `setInsightSaveHandler` from page components).
 * When present, the card will display a save/pin button.
 */
export const useInsightAction = () => {
  useCopilotAction({
    name: "displayInsight",
    description:
      "Display a data insight card in the chat. Use this when the user asks for a summary, count, metric, or any data-driven insight that can be shown as a highlight value with optional detail.",
    parameters: [
      {
        name: "title",
        type: "string",
        description:
          "Short title for the insight shown in the collapsible header (e.g. 'Training completion', 'Headcount overview')",
        required: true,
      },
      {
        name: "question",
        type: "string",
        description:
          "The original user question that generated this insight (e.g. 'How many trainings are pending?')",
        required: true,
      },
      {
        name: "section",
        type: "string",
        description:
          "App section this insight belongs to, derived from the loaded skill (e.g. 'trainings', 'people', 'timeAway')",
        required: true,
      },
      {
        name: "highlightValue",
        type: "string",
        description:
          "The key metric value displayed prominently (e.g. '12', '85%', '$4,200')",
        required: false,
      },
      {
        name: "highlightLabel",
        type: "string",
        description:
          "Label describing the highlight value (e.g. 'trainings pending', 'completion rate')",
        required: false,
      },
      {
        name: "content",
        type: "string",
        description:
          "Markdown-formatted detail text rendered below the highlight. Supports bold, lists, tables, etc.",
        required: false,
      },
      {
        name: "queryDataParams",
        type: "string",
        description:
          "JSON-stringified queryData parameters (fetch + query) for refreshing this insight later. The agent should serialize the params used in the preceding queryData call.",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<{
        title: string
        question: string
        section: string
        highlightValue: string
        highlightLabel: string
        content: string
        queryDataParams: string
      }>

      // In CopilotKit v1.51+, ToolCallRenderer always passes "inProgress"
      // for frontend-only actions (no handler → no completion). Only guard
      // against missing args while they stream in.
      if (!args.title) {
        return <></>
      }

      let parsedQueryDataParams: InsightCardProps["queryDataParams"]
      if (args.queryDataParams) {
        try {
          parsedQueryDataParams = JSON.parse(args.queryDataParams)
        } catch {
          // Ignore malformed JSON
        }
      }

      // Read the save handler at render time — this picks up the
      // current page's handler without needing React context.
      const onSave = getInsightSaveHandler()

      const insightProps: InsightCardProps = {
        title: args.title,
        question: args.question,
        section: args.section,
        highlight:
          args.highlightValue && args.highlightLabel
            ? { value: args.highlightValue, label: args.highlightLabel }
            : undefined,
        content: args.content,
        queryDataParams: parsedQueryDataParams,
        onSave,
      }

      return <InsightCard {...insightProps} />
    },
  })
}
