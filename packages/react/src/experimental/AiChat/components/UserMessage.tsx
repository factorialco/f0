import { type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useRef } from "react"

export const UserMessage = ({ message, ImageRenderer }: UserMessageProps) => {
  const isImageMessage = message && "image" in message && message.image
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [])

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
