import { createContext, useContext } from "react"

const themes = ["light", "dark", "system"] as const
export type Theme = (typeof themes)[number]
export const availableThemes: Theme[] = [...themes] // Convert readonly array to mutable array

type ThemeProviderProps = {
  children: React.ReactNode
  theme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
}

const initialState: ThemeProviderState = {
  theme: "system",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, theme = "system", ...props }: ThemeProviderProps) {
  const value = {
    theme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
