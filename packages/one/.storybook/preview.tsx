// organize-imports-ignore
import React, { useState } from "react"
import { INITIAL_VIEWPORTS } from "storybook/viewport"
import type { Preview, StoryFn, StoryContext } from "@storybook/react-vite"

import { action } from "storybook/actions"
import { MotionGlobalConfig } from "motion/react"

import isChromatic from "chromatic/isChromatic"

import "../src/styles.css"

import {
  I18nProvider,
  buildTranslations,
  defaultTranslations,
} from "@/lib/providers/i18n"

MotionGlobalConfig.skipAnimations = isChromatic()

export const withI18n = () => {
  // eslint-disable-next-line react/display-name
  return (Story: StoryFn) => {
    return (
      <I18nProvider translations={buildTranslations(defaultTranslations)}>
        <Story />
      </I18nProvider>
    )
  }
}

const preview: Preview = {
  decorators: [withI18n()],

  parameters: {
    throwPlayFunctionExceptions: true,
    chromatic: { disableSnapshot: true, diffThreshold: 0.2 },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
            selector: "*:not([data-a11y-color-contrast-ignore])",
          },
        ],
      },
    },
    html: {
      highlighter: {
        showLineNumbers: true,
        wrapLines: true,
      },
    },
    backgrounds: {
      default: "content",
      values: [
        { name: "content", value: "hsl(var(--neutral-0))" },
        { name: "page", value: "hsl(var(--page))" },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        return a.title.localeCompare(b.title)
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
  tags: ["autodocs"],
}

export default preview
