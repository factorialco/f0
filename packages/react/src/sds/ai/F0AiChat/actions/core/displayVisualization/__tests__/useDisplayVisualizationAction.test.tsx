import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render } from "@/testing/test-utils"

const openCanvas = vi.fn()

vi.mock("@copilotkit/react-core", async () => {
  const actual = await vi.importActual<typeof import("@copilotkit/react-core")>(
    "@copilotkit/react-core"
  )
  return {
    ...actual,
    useCopilotAction: vi.fn(),
    useCopilotContext: () => ({
      copilotApiConfig: {
        chatApiEndpoint: "http://localhost:4111/copilotkit",
        headers: { authorization: "Bearer local" },
      },
    }),
  }
})

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    runtimeFetch: fetch,
    openCanvas,
  }),
}))

import { useCopilotAction } from "@copilotkit/react-core"

import { useDisplayVisualizationAction } from "../useDisplayVisualizationAction"

function getRegisteredRender() {
  const TestComponent = () => {
    useDisplayVisualizationAction()
    return null
  }
  render(<TestComponent />)

  const calls = (
    useCopilotAction as unknown as { mock: { calls: unknown[][] } }
  ).mock.calls
  const lastCall = calls[calls.length - 1]?.[0] as
    | {
        render: (props: { args: Record<string, unknown> }) => unknown
      }
    | undefined
  return lastCall?.render
}

describe("useDisplayVisualizationAction.render", () => {
  it("renders nothing while required args are still streaming", () => {
    const Render = getRegisteredRender()
    expect(Render).toBeDefined()

    const { container } = render(<>{Render!({ args: { title: "Org" } })}</>)

    expect(container.innerHTML).toBe("")
  })

  it("renders a dynamic canvas card for an org visualization spec", () => {
    const Render = getRegisteredRender()

    const { getByText } = render(
      <>
        {Render!({
          args: {
            title: "Org chart",
            renderer: "org",
            datasetId: "employees",
            specVersion: "2026-05-10",
            spec: {
              layout: {
                type: "tree",
                idField: "id",
                parentField: "managerId",
              },
              card: { title: "fullName" },
            },
          },
        })}
      </>
    )

    expect(getByText("Org chart")).toBeInTheDocument()
    expect(getByText("Open")).toBeInTheDocument()
  })
})
