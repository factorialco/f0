import "@testing-library/jest-dom/vitest"
import { act, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import {
  EditableRowProvider,
  useEditableRow,
} from "../context/EditableRowContext"

type TestRecord = {
  id: number
  name: string
  email: string
}

const testItem: TestRecord = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
}

// Test component that uses the context
function TestConsumer() {
  const ctx = useEditableRow<TestRecord>()

  if (!ctx) {
    return <div>No context</div>
  }

  return (
    <div>
      <span data-testid="name">{ctx.localItem.name}</span>
      <span data-testid="email">{ctx.localItem.email}</span>
      <span data-testid="name-error">{ctx.cellErrors.name ?? ""}</span>
      <span data-testid="name-loading">
        {ctx.cellLoading.name ? "loading" : "idle"}
      </span>
      <button
        onClick={() => ctx.handleCellChange("name", "Updated Name")}
        data-testid="update-name"
      >
        Update Name
      </button>
    </div>
  )
}

describe("EditableRowContext", () => {
  describe("useEditableRow", () => {
    it("returns null when used outside provider", () => {
      render(<TestConsumer />)
      expect(screen.getByText("No context")).toBeInTheDocument()
    })

    it("provides localItem from the provider", () => {
      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <TestConsumer />
        </EditableRowProvider>
      )

      expect(screen.getByTestId("name")).toHaveTextContent("John Doe")
      expect(screen.getByTestId("email")).toHaveTextContent("john@example.com")
    })
  })

  describe("handleCellChange", () => {
    it("updates localItem optimistically", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      expect(screen.getByTestId("name")).toHaveTextContent("John Doe")

      await user.click(screen.getByTestId("update-name"))

      // Optimistic update happens immediately
      expect(screen.getByTestId("name")).toHaveTextContent("Updated Name")
    })

    it("calls onCellChange with updated item", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      await user.click(screen.getByTestId("update-name"))

      expect(onCellChange).toHaveBeenCalledWith({
        ...testItem,
        name: "Updated Name",
      })
    })

    it("sets loading state while onCellChange is pending", async () => {
      const user = userEvent.setup()
      let resolveChange: () => void
      const onCellChange = vi.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveChange = resolve
          })
      )

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      expect(screen.getByTestId("name-loading")).toHaveTextContent("idle")

      await user.click(screen.getByTestId("update-name"))

      expect(screen.getByTestId("name-loading")).toHaveTextContent("loading")

      await act(async () => {
        resolveChange!()
      })

      await waitFor(() => {
        expect(screen.getByTestId("name-loading")).toHaveTextContent("idle")
      })
    })

    it("sets cell error when onCellChange returns errors", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue({
        name: "Name already exists",
      })

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      expect(screen.getByTestId("name-error")).toHaveTextContent("")

      await user.click(screen.getByTestId("update-name"))

      await waitFor(() => {
        expect(screen.getByTestId("name-error")).toHaveTextContent(
          "Name already exists"
        )
      })
    })

    it("sets cell error when onCellChange rejects with Error", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockRejectedValue(new Error("Server error"))

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      await user.click(screen.getByTestId("update-name"))

      await waitFor(() => {
        expect(screen.getByTestId("name-error")).toHaveTextContent(
          "Server error"
        )
      })
    })

    it("clears previous error for the column on new change", async () => {
      const user = userEvent.setup()
      let callCount = 0
      const onCellChange = vi.fn(() => {
        callCount++
        if (callCount === 1) {
          return Promise.resolve({ name: "First error" })
        }
        return Promise.resolve(undefined)
      })

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      // First change sets an error
      await user.click(screen.getByTestId("update-name"))
      await waitFor(() => {
        expect(screen.getByTestId("name-error")).toHaveTextContent(
          "First error"
        )
      })

      // Second change clears the error immediately (optimistically)
      await user.click(screen.getByTestId("update-name"))

      // Error should be cleared immediately on new change attempt
      await waitFor(() => {
        expect(screen.getByTestId("name-error")).toHaveTextContent("")
      })
    })

    it("syncs localItem when item prop changes", async () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      const { rerender } = render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      expect(screen.getByTestId("name")).toHaveTextContent("John Doe")

      const updatedItem = { ...testItem, name: "Jane Doe" }

      rerender(
        <EditableRowProvider item={updatedItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      await waitFor(() => {
        expect(screen.getByTestId("name")).toHaveTextContent("Jane Doe")
      })
    })
  })
})
