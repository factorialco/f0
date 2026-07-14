import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks"
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode"
// organize-imports-ignore
import React from "react"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DOCS_RENDERED } from "storybook/internal/core-events"
import { addons } from "storybook/preview-api"

import { F0Alert } from "@/components/F0Alert"
import { I18nProvider } from "@/lib/providers/i18n/i18n-provider"
import { buildTranslations, defaultTranslations } from "@/lib/providers/i18n"

import lightTheme, { darkTheme } from "./FactorialOne.ts"
import { ImportBanner } from "./ImportBanner.tsx"

const storybookTranslations = buildTranslations(defaultTranslations)

const channel = addons.getChannel()

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = (
  props
) => {
  const [isDark, setDark] = useState(false)
  const { context, children } = props
  const [storyId, setStoryId] = useState<string | null>(null)

  useEffect(() => {
    const onDocsRendered = (id: string) => setStoryId(id)
    context.channel.on(DOCS_RENDERED, onDocsRendered)
    return () => context.channel.off(DOCS_RENDERED, onDocsRendered)
  }, [context.channel])

  const experimental = storyId && storyId.startsWith("experimental-")

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [])

  return (
    <BaseContainer theme={isDark ? darkTheme : lightTheme} {...props}>
      <I18nProvider translations={storybookTranslations}>
        {experimental && (
          <div className="sb-unstyled mb-8">
            <F0Alert
              variant="critical"
              title="Experimental component"
              description="Please don't use experimental components in production unless you're part of a testing group. To know more about our testing process please check out our Component Maturity Model"
              link={{
                href: "/?path=/docs/components-maturity--documentation",
                label: "Component Maturity Model",
              }}
            />
          </div>
        )}
        <ImportBanner isDark={isDark} />
        {children}
      </I18nProvider>
    </BaseContainer>
  )
}
