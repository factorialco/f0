import { createContext, type ReactNode, useContext, useMemo } from "react"

type ChatRenderConfig = {
  reducedMotion: boolean
}

const ChatRenderConfigContext = createContext<ChatRenderConfig>({
  reducedMotion: false,
})

export const ChatRenderConfigProvider = ({
  children,
  reducedMotion,
}: {
  children: ReactNode
  reducedMotion: boolean
}): ReactNode => {
  const value = useMemo(() => ({ reducedMotion }), [reducedMotion])

  return (
    <ChatRenderConfigContext.Provider value={value}>
      {children}
    </ChatRenderConfigContext.Provider>
  )
}

export const useChatRenderConfig = (): ChatRenderConfig =>
  useContext(ChatRenderConfigContext)
