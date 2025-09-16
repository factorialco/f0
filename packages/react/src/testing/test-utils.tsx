import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"
import {
  render,
  type RenderOptions,
  type RenderResult,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import React, { type ReactElement } from "react"
import { I18nProvider, defaultTranslations } from "../lib/providers/i18n"
export * from "@testing-library/react"

import { MotionGlobalConfig } from "motion"
MotionGlobalConfig.skipAnimations = true

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserPlatformProvider showExperimentalWarnings={false}>
      <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
    </UserPlatformProvider>
  )
}

const zeroRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export { userEvent, zeroRender }
