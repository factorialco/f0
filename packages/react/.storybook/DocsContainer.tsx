import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks"
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode"
// organize-imports-ignore
import React from "react"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { addons } from "storybook/preview-api"

import { I18nProvider } from "@/lib/providers/i18n/i18n-provider"
import { buildTranslations, defaultTranslations } from "@/lib/providers/i18n"

import { ComponentStatusPanel } from "./ComponentStatusPanel.tsx"
import lightTheme, { darkTheme } from "./FactorialOne.ts"
import { ImportBanner } from "./ImportBanner.tsx"

const storybookTranslations = buildTranslations(defaultTranslations)

const channel = addons.getChannel()

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = (
  props
) => {
  const [isDark, setDark] = useState(false)
  const { children } = props

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [])

  return (
    <BaseContainer theme={isDark ? darkTheme : lightTheme} {...props}>
      <I18nProvider translations={storybookTranslations}>
        <ImportBanner isDark={isDark} />
        <ComponentStatusPanel />
        {children}
      </I18nProvider>
    </BaseContainer>
  )
}
