import { type UserMessageProps } from "@copilotkit/react-ui"
import { useContext, useEffect, useRef } from "react"
import { FullscreenChatContext } from "../index"

export const UserMessage = ({ message, ImageRenderer }: UserMessageProps) => {
  const isImageMessage = message && "image" in message && message.image
  const ref = useRef<HTMLDivElement>(null)

  // Get context to check if we are in fullscreen
  const fullscreenContext = useContext(FullscreenChatContext)
  const isFullscreen = !!fullscreenContext?.setInProgress

  useEffect(() => {
    if (!ref.current || isFullscreen) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [isFullscreen])

  // Image message
  if (isImageMessage) {
    const imageMessage = message

    return (
      <div className="copilotKitMessage copilotKitUserMessage">
        <ImageRenderer
          image={imageMessage.image!}
          content={imageMessage.content}
        />
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0"
    >
      {message?.content}
    </div>
  )
}
