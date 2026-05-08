import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"
import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"

import "./index.css"
import { App } from "./App"
import { StressTest } from "./StressTest"

const mode = new URLSearchParams(window.location.search).get("mode")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserPlatformProvider showExperimentalWarnings={false}>
      <I18nProvider translations={defaultTranslations}>
        {mode === "stress" ? <StressTest /> : <App />}
      </I18nProvider>
    </UserPlatformProvider>
  </StrictMode>
)
