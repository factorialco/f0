/**
 * Shim for @copilotkit/react-ui — the f0-react dist chunk imports it as an
 * external, but f0compose doesn't use the AI chat UI directly (the shell
 * wires it via ApplicationFrame). This empty module prevents Vite from
 * crashing on the unresolved import.
 */
export const Markdown = () => null
export const useChatContext = () => ({})
export const CopilotSidebar = () => null
