import { describe, expect, it } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { DataList } from ".."

describe("DataList tag items", () => {
  it("render as plain rows when they have no action", () => {
    render(
      <DataList>
        <DataList.RawTagItem text="4.2 / 5" />
        <DataList.DotTagItem text="1 overdue" color="yellow" />
      </DataList>
    )

    expect(screen.getByText("4.2 / 5")).toBeInTheDocument()
    expect(screen.getByText("1 overdue")).toBeInTheDocument()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.queryByRole("link")).toBeNull()
  })

  it("take the same actions as text items", () => {
    render(
      <DataList>
        <DataList.RawTagItem text="4.2 / 5" action={{ type: "copy" }} />
        <DataList.DotTagItem
          text="1 overdue"
          color="yellow"
          action={{ type: "navigate", href: "/goals" }}
        />
        <DataList.StatusTagItem
          text="Complete"
          variant="positive"
          action={{
            type: "drawer",
            expanded: false,
            onToggle: () => {},
          }}
        />
      </DataList>
    )

    expect(
      screen.getByRole("button", { name: "Copy 4.2 / 5" })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /1 overdue/ })).toHaveAttribute(
      "href",
      "/goals"
    )
    expect(screen.getByRole("button", { name: /Complete/ })).toHaveAttribute(
      "aria-expanded",
      "false"
    )
  })
})
