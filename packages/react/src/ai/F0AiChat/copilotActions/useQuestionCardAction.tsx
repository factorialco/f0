import { useCopilotAction } from "@copilotkit/react-core"

import {
  F0QuestionCardMultiStep,
  type F0QuestionCardOption,
  type F0QuestionCardStep,
} from "../../F0UpsellKit/F0QuestionCard"
import { useAiChat } from "../providers/AiChatStateProvider"
import { QuestionCardArgs } from "./types"

interface QuestionCardWithSendProps {
  args: QuestionCardArgs
  steps: F0QuestionCardStep[]
}

function QuestionCardWithSend({ args, steps }: QuestionCardWithSendProps) {
  const { sendMessage } = useAiChat()
  const showSkip = args.skipLabel != null && args.skipLabel !== ""
  const sendAsMessage = args.sendAsMessage === true

  return (
    <F0QuestionCardMultiStep
      steps={steps}
      sendAsMessage={sendAsMessage}
      onSendMessage={sendAsMessage ? (msg) => sendMessage(msg) : undefined}
      onSkip={showSkip ? () => {} : undefined}
    />
  )
}

/**
 * Hook to register the question card copilot action.
 * Renders a card that asks a question with multiple-choice checkboxes, pagination, Skip and Next, when the backend requests it.
 * When sendAsMessage is true, clicking Next sends the selected option label(s) as a new user message to trigger the next workflow turn.
 *
 * **How to call the action**
 *
 * The action is triggered by your AI backend when it returns a tool/action call with name `"questionCard"` and the following args.
 *
 * Single-step (one question):
 * @example
 * // Backend/LLM returns an action call with:
 * { "name": "questionCard", "args": {
 *   "question": "What would you like help with?",
 *   "options": [
 *     { "id": "a", "label": "Product setup" },
 *     { "id": "b", "label": "Billing" },
 *     { "id": "c", "label": "Integrations" }
 *   ],
 *   "nextLabel": "Next",
 *   "skipLabel": "Skip",
 *   "sendAsMessage": true
 * }}
 *
 * Multi-step (Prev/Next switch between steps):
 * @example
 * // Backend/LLM returns an action call with:
 * { "name": "questionCard", "args": {
 *   "steps": [
 *     { "question": "First question?", "options": [{ "id": "1", "label": "A" }, { "id": "2", "label": "B" }] },
 *     { "question": "Second question?", "options": [{ "id": "x", "label": "X" }, { "id": "y", "label": "Y" }] }
 *   ],
 *   "sendAsMessage": true
 * }}
 */
export const useQuestionCardAction = () => {
  useCopilotAction({
    name: "questionCard",
    description:
      "Display a question card that asks the user a question with multiple checkbox options, pagination (e.g. 1/n), Skip and Next buttons. Use before answering to gather user input. When sendAsMessage is true, Next sends the selected label(s) as a user message to trigger the next workflow turn.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Optional card title (e.g. 'AI Card Title')",
        required: false,
      },
      {
        name: "question",
        type: "string",
        description:
          "Question text shown above the options (used when steps is not provided)",
        required: false,
      },
      {
        name: "options",
        type: "object[]",
        description:
          "Checkbox options. Each object: { id: string, label: string }. Required when steps is not used. User can select one or more.",
        required: false,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique id for the option",
            required: true,
          },
          {
            name: "label",
            type: "string",
            description: "Label text next to the checkbox",
            required: true,
          },
        ],
      },
      {
        name: "steps",
        type: "object[]",
        description:
          "Multi-step: array of { question: string, options: { id, label }[] }. When provided, pagination works and Prev/Next switch between steps.",
        required: false,
        attributes: [
          {
            name: "question",
            type: "string",
            description: "Question text for this step",
            required: true,
          },
          {
            name: "options",
            type: "object[]",
            description:
              "Checkbox options for this step: { id: string, label: string }[]",
            required: true,
            attributes: [
              { name: "id", type: "string", required: true },
              { name: "label", type: "string", required: true },
            ],
          },
        ],
      },
      {
        name: "currentStep",
        type: "number",
        description:
          "Current step (1-based) for pagination display (e.g. 1 for '1/n')",
        required: false,
      },
      {
        name: "totalSteps",
        type: "number",
        description: "Total number of steps for pagination (e.g. 3 for '1/3')",
        required: false,
      },
      {
        name: "nextLabel",
        type: "string",
        description: "Label for the Next button (default 'Next')",
        required: false,
      },
      {
        name: "skipLabel",
        type: "string",
        description:
          "Label for the Skip button (default 'Skip'). Omit Skip by not sending skipLabel if your backend does not support it.",
        required: false,
      },
      {
        name: "sendAsMessage",
        type: "boolean",
        description:
          "When true, clicking Next sends the selected option label(s) as a new user chat message, triggering a new workflow turn (e.g. AI recommends the module).",
        required: false,
      },
    ],
    available: "disabled",
    render: (props) => {
      const args = props.args as QuestionCardArgs
      const mapOptions = (
        opts: { id: string; label: string }[]
      ): F0QuestionCardOption[] =>
        opts?.map((o) => ({ id: o.id, label: o.label })) ?? []
      const steps: F0QuestionCardStep[] =
        args.steps && args.steps.length > 0
          ? args.steps.map((step) => ({
              question: step.question,
              options: mapOptions(step.options ?? []),
            }))
          : args.question != null && args.options != null
            ? [
                {
                  question: args.question,
                  options: mapOptions(args.options),
                },
              ]
            : []
      return <QuestionCardWithSend args={args} steps={steps} />
    },
  })
}
