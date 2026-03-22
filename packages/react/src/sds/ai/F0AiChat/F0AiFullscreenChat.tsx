import { useCopilotChatInternal } from "@copilotkit/react-core"

import { cn } from "@/lib/utils"

import { useRegisteredActions } from "./actions"
import { ChatTextarea } from "./components/input/ChatTextarea"
import { MessagesContainer } from "./components/messages/MessagesContainer"
import { useAiChat } from "./providers/AiChatStateProvider"

const FullscreenChatInput = () => {
  const { sendMessage, inProgress } = useAiChat()
  const { stopGeneration } = useCopilotChatInternal()

  const handleSend = async (text: string) => {
    sendMessage(text)
    return { id: "", role: "user" as const, content: text }
  }

  const handleStop = () => {
    stopGeneration()
  }

  return (
    <div className="w-full px-4 py-2">
      <ChatTextarea
        inProgress={inProgress}
        onSend={handleSend}
        onStop={handleStop}
      />
    </div>
  )
}

export const F0AiFullscreenChatComponent = () => {
  const { enabled } = useAiChat()

  useRegisteredActions()

  if (!enabled) {
    return null
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden overscroll-none bg-f1-background",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "[&_*]:[-webkit-tap-highlight-color:transparent]"
      )}
    >
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100% !important;
          width: 100% !important;
          margin: 0;
          padding: 0;
        }
        #root {
          height: 100% !important;
          width: 100% !important;
          overflow: hidden !important;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <MessagesContainer />
      </div>

      <div
        className={cn(
          "z-10 flex w-full shrink-0 flex-col touch-none border-t border-f1-border bg-f1-background",
          "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"
        )}
      >
        <FullscreenChatInput />
      </div>
    </div>
  )
}
