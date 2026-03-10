import { useCopilotAction } from "@copilotkit/react-core"

import { F0ChatChart } from "../../F0ChatChart"
import type {
  ChatChartBarConfig,
  ChatChartLineConfig,
} from "../../F0ChatChart/types"

/** Subset of chart configs supported by this CopilotKit action (bar + line) */
type DisplayChartArgs = Partial<ChatChartBarConfig | ChatChartLineConfig>

/**
 * Hook to register the displayChart copilot action.
 *
 * The agent triggers this frontend tool when it determines a chart is
 * the best way to visualize query results. It sends the chart type,
 * configuration, and pre-transformed data series. The component renders
 * an interactive chart inside a card widget in the chat.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it via
 * `emitFrontendTool` from the `displayChart` proxy tool.
 */
export const useDisplayChartAction = () => {
  useCopilotAction({
    name: "displayChart",
    description:
      "Display an interactive chart (bar or line) inside the chat. The agent sends pre-transformed data series and chart configuration.",
    parameters: [
      {
        name: "type",
        type: "string",
        description: 'Chart type: "bar" or "line"',
        required: true,
      },
      {
        name: "title",
        type: "string",
        description:
          "Chart title displayed in the card header, in the user's language",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "Optional description displayed below the title",
        required: false,
      },
      {
        name: "categories",
        type: "string[]",
        description:
          "Labels for the category axis (one per data point). E.g. month names, department names.",
        required: true,
      },
      {
        name: "series",
        type: "object[]",
        description:
          "One or more data series to render. Each has a name and data array.",
        required: true,
        attributes: [
          {
            name: "name",
            type: "string",
            description: "Display name used in the tooltip",
            required: true,
          },
          {
            name: "data",
            type: "number[]",
            description: "Numeric data points — one per category",
            required: true,
          },
        ],
      },
      // -- Bar-specific options --
      {
        name: "stacked",
        type: "boolean",
        description:
          "Stack all series into a single bar per category (bar charts only). Defaults to false.",
        required: false,
      },
      // -- Line-specific options --
      {
        name: "lineType",
        type: "string",
        description:
          'Line interpolation: "linear", "smooth", or "step" (line charts only). Defaults to "linear".',
        required: false,
      },
      {
        name: "showArea",
        type: "boolean",
        description:
          "Show gradient area fill below lines (line charts only). Defaults to true.",
        required: false,
      },
      {
        name: "showDots",
        type: "boolean",
        description:
          "Show data point dots on the lines (line charts only). Defaults to false.",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as DisplayChartArgs

      // Bail out if essential data is missing (streaming not yet complete)
      if (!args.type || !args.title || !args.categories || !args.series) {
        return <></>
      }

      const chartProps = args as ChatChartBarConfig | ChatChartLineConfig
      return <F0ChatChart {...chartProps} />
    },
  })
}
