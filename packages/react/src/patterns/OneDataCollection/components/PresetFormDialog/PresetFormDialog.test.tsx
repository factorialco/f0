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
    await user.type(await screen.findByLabelText("Title"), "  eng TEAM ")
    await user.click(screen.getByRole("button", { name: "Save" }))

    expect(
      await screen.findByText("A view with this name already exists")
    ).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()

    // Fixing the name clears the error and saves.
    const titleInput = await screen.findByLabelText("Title")
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

    await user.type(await screen.findByLabelText("Title"), "Design")
    await user.click(screen.getByRole("button", { name: "Save" }))

    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Design",
      description: undefined,
    })
  })
})
