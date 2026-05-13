import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render } from "@/testing/test-utils"

vi.mock("@copilotkit/react-core", async () => {
  const actual = await vi.importActual<typeof import("@copilotkit/react-core")>(
    "@copilotkit/react-core"
  )
  return {
    ...actual,
    useCopilotAction: vi.fn(),
  }
})

vi.mock(
  "../../../../canvas/entities/generatedCanvas/GeneratedCanvasCard",
  () => ({
    GeneratedCanvasCard: ({
      title,
      engine,
    }: {
      title: string
      engine: string
    }) => (
      <div data-testid="generated-canvas-card">
        {title} · {engine}
      </div>
    ),
  })
)

import { useCopilotAction } from "@copilotkit/react-core"

import { useDisplayGeneratedCanvasAction } from "../useDisplayGeneratedCanvasAction"

function getRegisteredRender() {
  const TestComponent = () => {
    useDisplayGeneratedCanvasAction()
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

describe("useDisplayGeneratedCanvasAction.render", () => {
  it("renders nothing while required args are still streaming", () => {
    const Render = getRegisteredRender()
    expect(Render).toBeDefined()

    const { container } = render(
      <>{Render!({ args: { title: "Org galaxy" } })}</>
    )

    expect(container.innerHTML).toBe("")
  })

  it("renders a generated canvas card with the default canvas2d engine", () => {
    const Render = getRegisteredRender()

    const { getByTestId } = render(
      <>
        {Render!({
          args: {
            title: "Org galaxy",
            rendererSource: "async function render() {}",
            data: { nodes: [] },
          },
        })}
      </>
    )

    expect(getByTestId("generated-canvas-card")).toHaveTextContent(
      "Org galaxy · canvas2d"
    )
  })
})
