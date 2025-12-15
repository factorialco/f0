import { createContext, ReactNode, useContext } from "react"

export type LayoutType = "standard" | "fullscreen" | "home" | "overview" | null

const LayoutContext = createContext<LayoutType>(null)

interface LayoutProviderProps {
  children: ReactNode
  layout: LayoutType
}

export function LayoutProvider({ children, layout }: LayoutProviderProps) {
  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
}

export function useLayout(): LayoutType {
  const context = useContext(LayoutContext)

  return context
}
