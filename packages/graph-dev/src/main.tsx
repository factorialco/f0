import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import "./index.css"
import { App } from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider translations={defaultTranslations}>
      <App />
    </I18nProvider>
  </StrictMode>
)
