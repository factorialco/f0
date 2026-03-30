import { useCopilotChatInternal } from "@copilotkit/react-core"

import { cn } from "@/lib/utils"

import { useRegisteredActions } from "./actions"
import { ChatTextarea } from "./components/input/ChatTextarea"
import { CanvasPanel } from "./components/layout/CanvasPanel"
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
  const { enabled, canvasContent, visualizationMode } = useAiChat()

  const isCanvasMode = visualizationMode === "canvas"

  useRegisteredActions()

  if (!enabled) {
    return null
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden overscroll-none",
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

      {isCanvasMode && canvasContent && (
        <div className={cn("pointer-events-none overflow-y-scroll")}>
          <CanvasPanel />
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <MessagesContainer noShadows />
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
