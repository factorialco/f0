import { screen, waitFor } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { aiTranslations } from "@/sds/ai/F0AiChat"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider
    translations={{
      ...defaultTranslations,
      ai: {
        ...defaultTranslations.ai,
        ...aiTranslations.ai,
      },
    }}
  >
    {children}
  </I18nProvider>
)

describe("OneDataCollection — per-visualization source override", () => {
  test("renders override source records instead of top-level records", async () => {
    const { result: topLevel } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: async () => ({
              records: [{ name: "Top Alice" }, { name: "Top Bob" }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    const { result: override } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: async () => ({
              records: [{ name: "Override Carol" }, { name: "Override Dave" }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={topLevel.current}
          visualizations={[
            {
              type: "table",
              source: override.current,
              options: {
                columns: [{ label: "Name", render: (item) => item.name }],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Override Carol")).toBeInTheDocument()
      expect(screen.getByText("Override Dave")).toBeInTheDocument()
    })

    expect(screen.queryByText("Top Alice")).not.toBeInTheDocument()
    expect(screen.queryByText("Top Bob")).not.toBeInTheDocument()
  })

  test("renders top-level source when visualization has no override", async () => {
    const { result: topLevel } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: async () => ({
              records: [{ name: "Top Alice" }, { name: "Top Bob" }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={topLevel.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [{ label: "Name", render: (item) => item.name }],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Top Alice")).toBeInTheDocument()
      expect(screen.getByText("Top Bob")).toBeInTheDocument()
    })
  })

  test("chrome search input is wired to override source when override is active", async () => {
    const { result: topLevel } = renderHook(
      () =>
        useDataCollectionSource({
          search: { enabled: true, sync: true },
          dataAdapter: {
            fetchData: async () => ({
              records: [{ name: "Top Alice" }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    const { result: override } = renderHook(
      () =>
        useDataCollectionSource({
          search: { enabled: true, sync: true },
          dataAdapter: {
            fetchData: async () => ({
              records: [{ name: "Override Carol" }],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={topLevel.current}
          visualizations={[
            {
              type: "table",
              source: override.current,
              options: {
                columns: [{ label: "Name", render: (item) => item.name }],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Override Carol")).toBeInTheDocument()
    })
  })
})
