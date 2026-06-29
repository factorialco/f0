import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { Thinking } from "../components/Thinking"

describe("Thinking", () => {
  it("renders plain titles (back-compat)", () => {
    zeroRender(
      <Thinking titles={["Looking up data", "Grouping by department"]} />
    )
    expect(screen.getByText("Looking up data")).toBeInTheDocument()
    expect(screen.getByText("Grouping by department")).toBeInTheDocument()
  })

  it("renders per-step rich content from items", () => {
    zeroRender(
      <Thinking
        items={[
          {
            title: "Pulling the latest employee data",
            content: <span data-testid="source-pill">Employee data</span>,
          },
          { title: "Breaking down by legal entity" },
        ]}
      />
    )
    expect(
      screen.getByText("Pulling the latest employee data")
    ).toBeInTheDocument()
    expect(screen.getByTestId("source-pill")).toHaveTextContent("Employee data")
    // A step without content still renders its title.
    expect(
      screen.getByText("Breaking down by legal entity")
    ).toBeInTheDocument()
  })

  it("prefers items over titles when both are provided", () => {
    zeroRender(
      <Thinking titles={["ignored title"]} items={[{ title: "rich title" }]} />
    )
    expect(screen.getByText("rich title")).toBeInTheDocument()
    expect(screen.queryByText("ignored title")).not.toBeInTheDocument()
  })
})
