import "@testing-library/jest-dom/vitest"
import { act, fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

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
      <button
        onClick={() =>
          ctx.handleCellChange("name", "Typed N", { debounce: true })
        }
        data-testid="type-name-partial"
      >
        Type Name (partial)
      </button>
      <button
        onClick={() =>
          ctx.handleCellChange("name", "Typed Name", { debounce: true })
        }
        data-testid="type-name-full"
      >
        Type Name (full)
      </button>
      <button
        onClick={() => ctx.handleCellChange("email", "new@example.com")}
        data-testid="update-email"
      >
        Update Email
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

    it("calls onCellChange with updated item and changes", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      await user.click(screen.getByTestId("update-name"))

      expect(onCellChange).toHaveBeenCalledWith({
        updatedItem: {
          ...testItem,
          name: "Updated Name",
        },
        changes: {
          name: ["John Doe", "Updated Name"],
        },
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

  describe("debounced cell changes", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it("updates localItem immediately but defers onCellChange until typing stops", async () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      fireEvent.click(screen.getByTestId("type-name-partial"))

      expect(screen.getByTestId("name")).toHaveTextContent("Typed N")
      expect(onCellChange).not.toHaveBeenCalled()

      await act(async () => {
        vi.advanceTimersByTime(750)
      })

      expect(onCellChange).toHaveBeenCalledTimes(1)
    })

    it("commits only the last value when changes come in quick succession", async () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      fireEvent.click(screen.getByTestId("type-name-partial"))

      await act(async () => {
        vi.advanceTimersByTime(400)
      })

      // Second keystroke resets the debounce timer
      fireEvent.click(screen.getByTestId("type-name-full"))

      await act(async () => {
        vi.advanceTimersByTime(400)
      })

      expect(onCellChange).not.toHaveBeenCalled()

      await act(async () => {
        vi.advanceTimersByTime(350)
      })

      expect(onCellChange).toHaveBeenCalledTimes(1)
      // The change tuple spans the whole typing session
      expect(onCellChange).toHaveBeenCalledWith({
        updatedItem: { ...testItem, name: "Typed Name" },
        changes: { name: ["John Doe", "Typed Name"] },
      })
    })

    it("saves the pending debounced change before an immediate change", async () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      fireEvent.click(screen.getByTestId("type-name-partial"))
      fireEvent.click(screen.getByTestId("update-email"))

      // The typed change is saved first, then the immediate one — in order
      expect(onCellChange).toHaveBeenCalledTimes(2)
      expect(onCellChange).toHaveBeenNthCalledWith(1, {
        updatedItem: {
          ...testItem,
          name: "Typed N",
          email: "new@example.com",
        },
        changes: { name: ["John Doe", "Typed N"] },
      })
      expect(onCellChange).toHaveBeenNthCalledWith(2, {
        updatedItem: {
          ...testItem,
          name: "Typed N",
          email: "new@example.com",
        },
        changes: { email: ["john@example.com", "new@example.com"] },
      })

      // The debounce timer must not fire a duplicate save afterwards
      await act(async () => {
        vi.advanceTimersByTime(1000)
      })

      expect(onCellChange).toHaveBeenCalledTimes(2)
    })

    it("flushes the pending debounced change on unmount", () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      const { unmount } = render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      fireEvent.click(screen.getByTestId("type-name-partial"))
      expect(onCellChange).not.toHaveBeenCalled()

      unmount()

      expect(onCellChange).toHaveBeenCalledTimes(1)
      expect(onCellChange).toHaveBeenCalledWith({
        updatedItem: { ...testItem, name: "Typed N" },
        changes: { name: ["John Doe", "Typed N"] },
      })
    })

    it("keeps the pending typed value when the item prop changes mid-debounce", async () => {
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      const { rerender } = render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      fireEvent.click(screen.getByTestId("type-name-partial"))

      // A background reload (e.g. a previous cell's save) replaces the item
      const reloadedItem = { ...testItem, email: "reloaded@example.com" }
      rerender(
        <EditableRowProvider item={reloadedItem} onCellChange={onCellChange}>
          <TestConsumer />
        </EditableRowProvider>
      )

      // The typed value survives the reload; the rest syncs to the new item
      expect(screen.getByTestId("name")).toHaveTextContent("Typed N")
      expect(screen.getByTestId("email")).toHaveTextContent(
        "reloaded@example.com"
      )

      await act(async () => {
        vi.advanceTimersByTime(750)
      })

      expect(onCellChange).toHaveBeenCalledTimes(1)
      expect(onCellChange).toHaveBeenCalledWith({
        updatedItem: { ...reloadedItem, name: "Typed N" },
        changes: { name: ["John Doe", "Typed N"] },
      })
    })
  })
})
