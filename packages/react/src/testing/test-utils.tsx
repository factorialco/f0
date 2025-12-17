import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"
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
import * as ReactDOMClient from "react-dom/client"

import { queries } from "@testing-library/dom"

import { userEvent } from "@testing-library/user-event"
import React, { type ReactElement } from "react"
import { defaultTranslations, I18nProvider } from "../lib/providers/i18n"
export * from "@testing-library/react"

import { DataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import { L10nProvider } from "@/lib/providers/l10n"
import { MotionGlobalConfig } from "motion"
MotionGlobalConfig.skipAnimations = true

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataCollectionStorageProvider
      handler={{
        get: () => Promise.resolve({}),
        set: () => Promise.resolve(),
      }}
    >
      <UserPlatformProvider showExperimentalWarnings={false}>
        <L10nProvider l10n={{ locale: "en-US" }}>
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
