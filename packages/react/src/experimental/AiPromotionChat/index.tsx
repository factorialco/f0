import { ChatWindow } from "./components"
import { AiChatStateProvider } from "./providers/AiChatStateProvider"

const AiPromotionChatWrapper = () => {
  return (
    <ChatWindow
      clickOutsideToClose={false}
      hitEscapeToClose={false}
      shortcut={""}
    >
      <div>
        <h1>Ai Promotion Chat</h1>
      </div>
    </ChatWindow>
  )
}

export const AiPromotionChat = () => {
  return (
    <AiChatStateProvider>
      <AiPromotionChatWrapper />
    </AiChatStateProvider>
  )
}
