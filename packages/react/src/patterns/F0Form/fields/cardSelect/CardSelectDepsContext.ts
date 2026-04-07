import { createContext, type ReactNode } from "react"

/**
 * Context for passing pre-rendered dependent field content to CardSelectFieldRenderer.
 * Maps an option's equalsTo value to the ReactNode content that should render
 * as selectedContent for that option.
 */
export const CardSelectDepsContext = createContext<
  Map<string, ReactNode> | undefined
>(undefined)
