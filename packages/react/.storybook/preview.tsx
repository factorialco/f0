// organize-imports-ignore
import React, { useState } from "react"
import { INITIAL_VIEWPORTS } from "storybook/viewport"
import type { Preview, StoryFn, StoryContext } from "@storybook/react-vite"

import { action } from "storybook/actions"
import { MotionGlobalConfig } from "motion/react"

import isChromatic from "chromatic/isChromatic"

import "../src/styles.css"

import { ThemeProvider } from "@/lib/providers/theme"
import { F0Provider } from "@/lib/providers/f0"
import { DocsContainer } from "./DocsContainer.tsx"
import { buildTranslations, defaultTranslations } from "@/lib/providers/i18n"
import { dataCollectionLocalStorageHandler } from "@/lib/providers/datacollection"

MotionGlobalConfig.skipAnimations = isChromatic()

export const withTheme = () => {
  // eslint-disable-next-line react/display-name
  return (Story: StoryFn) => {
    return (
      <ThemeProvider theme="light">
        <Story />
      </ThemeProvider>
    )
  }
}

export const F0 = (Story: StoryFn, { parameters }: StoryContext) => {
  const [currentPath, setCurrentPath] = useState(parameters.currentPath ?? "/")

  return (
    <F0Provider
      layout={{
        fullScreen: parameters.layout === "fullscreen",
      }}
      i18n={{
        translations: buildTranslations(defaultTranslations),
      }}
      l10n={{
        l10n: {
          locale: parameters.l10n?.locale ?? "en",
        },
      }}
      link={{
        currentPath,
        component: (props, ref) => (
          <a
            ref={ref}
            {...props}
            onClick={(event, ...args) => {
              console.log("Link clicked", event, ...args)
              action("Link clicked")(event, ...args)
              props?.onClick?.(event, ...args)
              event.preventDefault()
              if (props.href) {
                setCurrentPath(props.href)
              }
            }}
          />
        ),
      }}
      image={{
        src: ({ src, width, height }) => ({
          src: src?.startsWith("data:") ? src : `${src}?w=${width}&h=${height}`,
        }),
      }}
      isDev={parameters.isDev ?? false}
      dataCollectionStorageHandler={dataCollectionLocalStorageHandler}
    >
      <Story />
    </F0Provider>
  )
}

const preview: Preview = {
  decorators: [F0, withTheme()],

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
      root: "#f0-layout",
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: true, // default: true
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
    docs: {
      container: DocsContainer,
      toc: {
        headingSelector: "h2, h3, h4",
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
      /*
       * Sort all the components and experimental stories in an aplhabetical order, but keep
       * Introduction, How to contribute, Foundations, and Playground in specific order
       */
      storySort: (a, b) => {
        const topLevelOrder = [
          "introduction",
          "how-to-contribute",
          "foundations",
          "library",
          "hooks",
        ]

        const aId = a.id.split("-")?.[0].toLowerCase()
        const bId = b.id.split("-")?.[0].toLowerCase()

        const aIndex = topLevelOrder.indexOf(aId)
        const bIndex = topLevelOrder.indexOf(bId)

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
        if (aIndex !== -1) return -1
        if (bIndex !== -1) return 1

        const isAFoundation = aId.startsWith("foundations/")
        const isBFoundation = bId.startsWith("foundations/")

        if (isAFoundation || isBFoundation) {
          if (isAFoundation && isBFoundation) {
            const foundationOrder = [
              "colors",
              "typography",
              "spacing",
              "borders",
              "shadows",
              "icons",
            ]
            const aFoundationIndex = foundationOrder.indexOf(aId.split("/")[1])
            const bFoundationIndex = foundationOrder.indexOf(bId.split("/")[1])
            if (aFoundationIndex !== -1 && bFoundationIndex !== -1) {
              return aFoundationIndex - bFoundationIndex
            }
          }
          return isAFoundation ? -1 : 1
        }

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
