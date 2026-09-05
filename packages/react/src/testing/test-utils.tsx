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

/**
 * The clocks a test about elapsed TIME needs faked, and nothing else.
 *
 * `vi.useFakeTimers()` also fakes `requestAnimationFrame`, so advancing the
 * clock by a few seconds makes the runner execute every animation frame in
 * that span — hundreds of them, each re-rendering the tree. A test that walks
 * a counter to eight seconds then costs seconds of real time, which is fine on
 * an idle laptop and blows the 5s timeout on CI.
 *
 * Pass this to `vi.useFakeTimers({ toFake: CLOCKS_ONLY })` whenever the test
 * drives an interval or a timeout and does not care about frames.
 */
export const CLOCKS_ONLY = [
  "setTimeout",
  "clearTimeout",
  "setInterval",
  "clearInterval",
  "Date",
] as const

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

export { screen, TestProviders, userEvent, within, zeroRender, zeroRenderHook }
