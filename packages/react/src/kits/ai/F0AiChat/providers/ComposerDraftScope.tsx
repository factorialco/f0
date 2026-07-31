import { createContext, ReactNode, useContext } from "react"

/**
 * Marks the subtree whose `F0AiChatTextArea` owns the chat composer. Only a
 * textarea inside this scope claims `composerDraft` prefills — standalone
 * chat textareas embedded in app pages (ticket dialogs, settings forms, …)
 * share the app-wide `AiChatStateProvider` and must never have their input
 * replaced or their focus stolen by a chat handoff.
 */
const ComposerDraftScopeContext = createContext(false)

export const ComposerDraftScope = ({ children }: { children: ReactNode }) => (
  <ComposerDraftScopeContext.Provider value={true}>
    {children}
  </ComposerDraftScopeContext.Provider>
)

export const useComposerDraftScope = () => useContext(ComposerDraftScopeContext)
