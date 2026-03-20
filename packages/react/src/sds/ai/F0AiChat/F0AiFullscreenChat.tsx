import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

import { ChatTextarea } from "./components/ChatTextarea"
import { MessagesContainer } from "./components/MessagesContainer"
import { useDefaultCopilotActions } from "./copilotActions"
import { useAiChat } from "./providers/AiChatStateProvider"

const FullscreenChatInput = () => {
  const { sendMessage, inProgress } = useAiChat()
  const { interrupt } = useCopilotChatInternal()

  const handleSend = async (text: string) => {
    sendMessage(text)
    return {
      id: "",
      role: "user" as const,
      content: text,
    }
  }

  const handleStop = () => {
    if (interrupt && typeof interrupt !== "string") {
      const stopButton = document.querySelector(
        '[aria-label*="Stop"]'
      ) as HTMLButtonElement
      if (stopButton) {
        stopButton.click()
      }
    }
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
  const inputContainerRef = useRef<HTMLDivElement>(null)

  useDefaultCopilotActions()

  useEffect(() => {
    const el = inputContainerRef.current
    if (!el) return

    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault()
      }
    }

    el.addEventListener("touchmove", handleTouchMove, { passive: false })
    return () => {
      el.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
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
      ::-webkit-scrollbar {
        display: none !important;
      }
      * {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
        -webkit-tap-highlight-color: transparent;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <div
      className="bg-white"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        overscrollBehavior: "none",
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <MessagesContainer />
      </div>

      <div
        ref={inputContainerRef}
        className={cn(
          "flex-shrink-0 w-full bg-white border-t border-f1-border transition-all",
          "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"
        )}
        style={{
          flexShrink: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          touchAction: "none",
        }}
      >
        <FullscreenChatInput />
      </div>
    </div>
  )
}
