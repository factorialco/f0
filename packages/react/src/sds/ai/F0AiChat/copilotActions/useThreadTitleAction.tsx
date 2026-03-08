import { useCopilotAction } from "@copilotkit/react-core"
import { useRef } from "react"

import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Hook to register the threadTitle copilot action.
 *
 * The backend generates an AI-powered title for the conversation after
 * each assistant response and emits it via `emitFrontendTool` with
 * `toolName: "threadTitle"`. This action receives that payload and
 * updates the header button text in real-time.
 *
 * Uses `available: "frontend"` so it is only invoked from the backend
 * stream, never by the user.
 */
export const useThreadTitleAction = () => {
  const { setCurrentThreadTitle } = useAiChat()
  // Track the last title we set to avoid redundant state updates
  const lastTitleRef = useRef<string | null>(null)

  useCopilotAction({
    name: "threadTitle",
    description: "Update the conversation title in the chat header",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The AI-generated conversation title",
        required: true,
      },
    ],
    available: "frontend",
    render: (props) => {
      const title: string | undefined = props.args.title

      // Only update when we have a complete title and it differs from
      // what we already set, to avoid unnecessary re-renders
      if (
        title &&
        props.status !== "inProgress" &&
        title !== lastTitleRef.current
      ) {
        lastTitleRef.current = title
        setCurrentThreadTitle(title)
      }

      // Invisible action — no UI to render
      return <></>
    },
  })
}
