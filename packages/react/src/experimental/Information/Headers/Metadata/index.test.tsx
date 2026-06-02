import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Metadata } from "./index"

describe("Metadata", () => {
  it("renders multiple items without React key warnings", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    try {
      render(
        <Metadata
          items={[
            { label: "Status", value: { type: "text", content: "Active" } },
            { label: "Owner", value: { type: "text", content: "Alice" } },
            { label: "Team", value: { type: "text", content: "Engineering" } },
          ]}
        />
      )

      expect(consoleError).not.toHaveBeenCalled()
    } finally {
      consoleError.mockRestore()
    }
  })
})
