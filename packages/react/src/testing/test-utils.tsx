import { queries } from "@testing-library/dom"
import {
  Queries,
  render,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
  type RenderOptions,
  type RenderResult,
  screen,
  within,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import React, { type ReactElement } from "react"
import * as ReactDOMClient from "react-dom/client"

import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"

import { defaultTranslations, I18nProvider } from "../lib/providers/i18n"
export * from "@testing-library/react"

import { MotionGlobalConfig } from "motion"

import { WeekStartDay } from "@/components/OneCalendar/types"
import { DataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import { L10nProvider } from "@/lib/providers/l10n"
MotionGlobalConfig.skipAnimations = true

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataCollectionStorageProvider
      handler={{
        get: () => Promise.resolve({}),
        set: () => Promise.resolve(),
      }}
    >
      <UserPlatformProvider
        showExperimentalWarnings={false}
        renderDataTestIdAttribute
      >
        <L10nProvider
          l10n={{
            locale: "en-US",
            date: { weekStartsOn: WeekStartDay.Monday },
          }}
        >
          <I18nProvider translations={defaultTranslations}>
            {children}
          </I18nProvider>
        </L10nProvider>
      </UserPlatformProvider>
    </DataCollectionStorageProvider>
  )
}

const zeroRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: TestProviders, ...options })

type RendererableContainer = ReactDOMClient.Container
type HydrateableContainer = Parameters<
  (typeof ReactDOMClient)["hydrateRoot"]
>[0]

const zeroRenderHook = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement> | undefined
): RenderHookResult<Result, Props> =>
  renderHook(render, { wrapper: TestProviders, ...options })

// ─── Viewport ────────────────────────────────────────────────────────────
// The suite-wide stub in `vite/vitest.setup.ts` answers `false` to every media
// query, which makes every viewport-driven branch unreachable from a test —
// the responsive half of the app shell is untestable without this.
//
// Opt in when the behaviour under test IS the responsive one, and call
// `resetTestViewport()` afterwards so the suite-wide default stands again.

type MediaListener = (event: { matches: boolean; media: string }) => void

const listeners = new Set<{ query: string; notify: MediaListener }>()
let currentViewport: number | null = null

const queryMatches = (query: string, width: number): boolean => {
  const max = /max-width:\s*(\d+(?:\.\d+)?)px/.exec(query)
  const min = /min-width:\s*(\d+(?:\.\d+)?)px/.exec(query)
  if (max && width > Number(max[1])) return false
  if (min && width < Number(min[1])) return false
  return Boolean(max || min)
}

/**
 * Make `matchMedia` answer width queries against `width`. Call it again to
 * simulate a resize — registered listeners are notified, so `useMediaQuery`
 * re-renders the way it would in a browser.
 */
export const setTestViewport = (width: number): void => {
  currentViewport = width
  window.matchMedia = ((query: string) => {
    const entry = { query, notify: (() => {}) as MediaListener }
    return {
      get matches() {
        return queryMatches(query, currentViewport ?? width)
      },
      media: query,
      onchange: null,
      addListener: (fn: MediaListener) => {
        entry.notify = fn
        listeners.add(entry)
      },
      removeListener: () => listeners.delete(entry),
      addEventListener: (_: string, fn: MediaListener) => {
        entry.notify = fn
        listeners.add(entry)
      },
      removeEventListener: () => listeners.delete(entry),
      dispatchEvent: () => true,
    } as unknown as MediaQueryList
  }) as typeof window.matchMedia

  for (const entry of listeners) {
    entry.notify({
      matches: queryMatches(entry.query, width),
      media: entry.query,
    })
  }
}

/** Restore the suite-wide "nothing matches" stub. */
export const resetTestViewport = (): void => {
  listeners.clear()
  currentViewport = null
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  })) as unknown as typeof window.matchMedia
}

export { screen, TestProviders, userEvent, within, zeroRender, zeroRenderHook }
