import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { PresetFormDialog } from "./PresetFormDialog"

const baseProps = {
  isOpen: true as const,
  mode: "create" as const,
  onClose: vi.fn(),
}

describe("PresetFormDialog - name uniqueness", () => {
  it("raises an inline error and blocks save when the name duplicates an existing one (case-insensitive)", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    zeroRender(
      <PresetFormDialog
        {...baseProps}
        onSubmit={onSubmit}
        existingNames={["Eng team"]}
      />
    )

    // A duplicate name (different case / surrounding whitespace).
    const titleInput = await screen.findByRole("textbox", { name: "Title" })
    await user.type(titleInput, "  eng TEAM ")
    await user.click(screen.getByRole("button", { name: "Save" }))

    const error = await screen.findByRole("alert")
    expect(error).toHaveTextContent("A view with this name already exists")
    expect(titleInput).toHaveAttribute("aria-invalid", "true")
    expect(titleInput).toHaveAttribute("aria-describedby", error.id)
    expect(titleInput).toHaveFocus()
    expect(onSubmit).not.toHaveBeenCalled()

    // Fixing the name clears the error and saves.
    await user.clear(titleInput)
    await user.type(titleInput, "Marketing")
    await user.click(screen.getByRole("button", { name: "Save" }))

    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Marketing",
      description: undefined,
    })
  })

  it("accepts a unique name", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    zeroRender(
      <PresetFormDialog
        {...baseProps}
        onSubmit={onSubmit}
        existingNames={["Eng team", "Marketing"]}
      />
    )

    await user.type(
      await screen.findByRole("textbox", { name: "Title" }),
      "Design"
    )
    await user.type(
      screen.getByRole("textbox", { name: "Description" }),
      "Shared design view"
    )
    await user.click(screen.getByRole("button", { name: "Save" }))

    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Design",
      description: "Shared design view",
    })
  })

  it("reseeds values when a mounted dialog closes and reopens", async () => {
    const onSubmit = vi.fn()
    const view = zeroRender(
      <PresetFormDialog
        {...baseProps}
        mode="update"
        initialValues={{ title: "First", description: "Old description" }}
        onSubmit={onSubmit}
      />
    )

    expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue("First")
    expect(screen.getByRole("textbox", { name: "Description" })).toHaveValue(
      "Old description"
    )

    view.rerender(
      <PresetFormDialog
        {...baseProps}
        isOpen={false}
        mode="update"
        initialValues={{ title: "First", description: "Old description" }}
        onSubmit={onSubmit}
      />
    )
    view.rerender(
      <PresetFormDialog
        {...baseProps}
        mode="update"
        initialValues={{ title: "Second", description: "New description" }}
        onSubmit={onSubmit}
      />
    )

    await waitFor(() => {
      expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue(
        "Second"
      )
    })
    expect(screen.getByRole("textbox", { name: "Description" })).toHaveValue(
      "New description"
    )
  })

  it("submits a unique name when Enter is pressed in the title", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    zeroRender(<PresetFormDialog {...baseProps} onSubmit={onSubmit} />)

    const titleInput = await screen.findByRole("textbox", { name: "Title" })
    await user.type(titleInput, "Design{Enter}")

    expect(onSubmit).toHaveBeenCalledWith({
      title: "Design",
      description: undefined,
    })
  })
})
