import type { Preview, StoryFn, StoryContext } from "@storybook/react-vite"

import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode"
import isChromatic from "chromatic/isChromatic"
import { MotionGlobalConfig } from "motion/react"
// organize-imports-ignore
import React, { useEffect, useState } from "react"
import { action } from "storybook/actions"
import { INITIAL_VIEWPORTS } from "storybook/viewport"
import { addons } from "storybook/preview-api"

import "../src/styles.css"
import { aiTranslations } from "@/sds/ai/F0AiChat/types"
import { WeekStartDay } from "@/components/OneCalendar/types"
import { dataCollectionLocalStorageHandler } from "@/lib/providers/datacollection"
import { F0Provider } from "@/lib/providers/f0"
import { buildTranslations, defaultTranslations } from "@/lib/providers/i18n"
import { ThemeProvider } from "@/lib/providers/theme"

import {
  getAllComponentStatuses,
  getComponentStatus,
  getStatusGeneratedAt,
} from "@/component-status"

import { DocsContainer } from "./DocsContainer.tsx"

MotionGlobalConfig.skipAnimations = isChromatic()

// Public status API — queryable from the Storybook preview console, e.g.
//   f0ComponentStatus.get("Button")
//   f0ComponentStatus.get("F0Alert").missing
if (typeof window !== "undefined") {
  ;(window as unknown as { f0ComponentStatus: unknown }).f0ComponentStatus = {
    get: getComponentStatus,
    getAll: getAllComponentStatuses,
    generatedAt: getStatusGeneratedAt,
  }
}

const channel = addons.getChannel()

// eslint-disable-next-line react/display-name
export const withTheme = () => {
  return (Story: StoryFn) => {
    const [isDark, setDark] = useState(false)

    useEffect(() => {
      channel.on(DARK_MODE_EVENT_NAME, setDark)
      return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
    }, [])

    return (
      <ThemeProvider theme={isDark ? "dark" : "light"}>
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
        translations: buildTranslations({
          ...defaultTranslations,
          ...aiTranslations,
        }),
      }}
      l10n={{
        l10n: {
          locale: parameters.l10n?.locale ?? "en",
          date: {
            weekStartsOn:
              parameters.l10n?.date?.weekStartsOn ?? WeekStartDay.Monday,
          },
        },
      }}
      link={{
        currentPath,
        component: (props, ref) => (
          <a
            ref={ref}
            {...props}
            onClick={(event, ...args) => {
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
        src: ({ src, width, height }) => {
          if (!src || src.startsWith("data:")) return { src }
          const hasQuery = src.includes("?")
          const separator = hasQuery ? "&" : "?"
          const params = []
          if (width !== undefined) params.push(`w=${width}`)
          if (height !== undefined) params.push(`h=${height}`)
          return {
            src:
              params.length > 0 ? `${src}${separator}${params.join("&")}` : src,
          }
        },
      }}
      isDev={parameters.isDev ?? false}
      dataCollectionStorageHandler={dataCollectionLocalStorageHandler}
      renderDataTestIdAttribute={true}
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

      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    html: {
      root: "#f0-layout",
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: true, // default: true
      },
    },
    backgrounds: {
      options: {
        content: { name: "content", value: "hsl(var(--neutral-0))" },
        page: { name: "page", value: "hsl(var(--page))" },
      },
    },
    viewport: {
      options: {
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
       * Sort stories alphabetically by default, but keep the documented top-level sections
       * and nested Foundations/CRUD patterns/Lifecycle groups in the specific order defined below.
       * Inside `Lifecycle/`, the order follows the actual workflow
       * (contribute → DoD → maturity → review → release).
       */
      storySort: {
        method: "alphabetical",
        order: [
          // Get started: Introduction (how to consume) → About F0 (the definition) → Using F0
          "Introduction",
          "About F0",
          [
            "What is F0",
            "How to contribute",
            "Where it goes",
            "Definition of Done",
            "Components Maturity",
            "Design Review",
            "Release and Versioning",
          ],
          "AI configuration",
          "Changelog",
          // Foundations
          "Foundations",
          ["Colors", "Typography", "Spacing", "Borders", "Shadows", "Icons"],
          // Core
          "Components",
          "Patterns",
          [
            "Data collection",
            [
              "CRUD patterns",
              ["Overview", "By view", "Create", "Read", "Update", "Delete"],
            ],
            "App shell",
          ],
          // Kits
          "Kits",
          ["Charts", "AI", "Chat", "Social"],
          // Domain specific (was "SDS")
          "Domain specific",
          ["Time tracking", "Growth", "Home", "Profile", "Inbox", "Surveys"],
          // Tail
          "Resources",
          "Deprecated",
          "🔒 Internal",
        ],
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },

  tags: ["autodocs"],

  initialGlobals: {
    backgrounds: {
      value: "content",
    },
  },
}

export default preview
