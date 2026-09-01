import type { PropsWithChildren } from "react"

import { describe, expect, it } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import {
  DataCollectionSettingsProvider,
  useDataCollectionSettings,
} from "./SettingsProvider"

const wrapper = ({ children }: PropsWithChildren) => (
  <DataCollectionSettingsProvider>{children}</DataCollectionSettingsProvider>
)

describe("DataCollectionSettingsProvider", () => {
  it("initializes every supported visualization with independent settings", () => {
    const first = renderHook(useDataCollectionSettings, { wrapper })
    const second = renderHook(useDataCollectionSettings, { wrapper })

    expect(first.result.current.settings.visualization).toEqual({
      table: {},
      editableTable: {},
      list: {},
      card: {},
      kanban: {},
      graph: {},
    })
    expect(first.result.current.settings.visualization).not.toBe(
      second.result.current.settings.visualization
    )
  })
})
