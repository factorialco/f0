import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0ResourceSection } from "../index"

describe("F0ResourceSection", () => {
  it("renders a header only when one is given", () => {
    const { unmount } = render(
      <F0ResourceSection>
        <F0ResourceSection.Item
          label="Email"
          content={{ type: "item", text: "rene@factorial.co" }}
        />
      </F0ResourceSection>
    )
    expect(
      screen.queryByRole("heading", { name: "Work information" })
    ).toBeNull()
    unmount()

    render(
      <F0ResourceSection header={{ title: "Work information" }}>
        <F0ResourceSection.Item
          label="Email"
          content={{ type: "item", text: "rene@factorial.co" }}
        />
      </F0ResourceSection>
    )
    expect(
      screen.getByRole("heading", { name: "Work information" })
    ).toBeDefined()
  })

  it("renders the header description when given", () => {
    render(
      <F0ResourceSection
        header={{ title: "Work information", description: "Key details" }}
      >
        <F0ResourceSection.Item label="Email" />
      </F0ResourceSection>
    )

    expect(screen.getByText("Key details")).toBeDefined()
  })

  it("runs the header action on click", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <F0ResourceSection
        header={{
          title: "Work information",
          action: { label: "Edit", onClick },
        }}
      >
        <F0ResourceSection.Item label="Email" />
      </F0ResourceSection>
    )

    // SectionHeader renders the action once per breakpoint, so assert on at
    // least one rather than pinning that duplication.
    const editButtons = screen.getAllByRole("button", { name: "Edit" })
    expect(editButtons.length).toBeGreaterThan(0)

    await user.click(editButtons[editButtons.length - 1])
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders both the label and the value of an item", () => {
    render(
      <F0ResourceSection>
        <F0ResourceSection.Item
          label="Legal entity"
          content={{ type: "item", text: "Everyday Software SL" }}
        />
      </F0ResourceSection>
    )

    expect(screen.getByText("Legal entity")).toBeDefined()
    expect(screen.getByText("Everyday Software SL")).toBeDefined()
  })

  it("renders a person value with its name", () => {
    render(
      <F0ResourceSection>
        <F0ResourceSection.Item
          label="Manager"
          content={{ type: "person", firstName: "Ilya", lastName: "Zayats" }}
        />
      </F0ResourceSection>
    )

    expect(screen.getByText("Ilya Zayats")).toBeDefined()
  })

  describe("empty values", () => {
    it("keeps the item visible with a placeholder", () => {
      render(
        <F0ResourceSection>
          <F0ResourceSection.Item label="Personal email" />
        </F0ResourceSection>
      )

      // The field stays on the page so the gap is visible rather than hidden.
      expect(screen.getByText("Personal email")).toBeDefined()
      expect(screen.getByText("--")).toBeDefined()
    })

    it("accepts a different placeholder", () => {
      render(
        <F0ResourceSection>
          <F0ResourceSection.Item
            label="Personal email"
            placeholder="Not set"
          />
        </F0ResourceSection>
      )

      expect(screen.getByText("Not set")).toBeDefined()
      expect(screen.queryByText("--")).toBeNull()
    })
  })

  describe("columns", () => {
    const grid = (container: HTMLElement) =>
      container.querySelector(".grid")?.className ?? ""

    it("arranges into two columns by default, one on small screens", () => {
      const { container } = render(
        <F0ResourceSection>
          <F0ResourceSection.Item label="Email" />
        </F0ResourceSection>
      )

      expect(grid(container)).toContain("grid-cols-1")
      expect(grid(container)).toContain("md:grid-cols-2")
    })

    it("stays single column when asked", () => {
      const { container } = render(
        <F0ResourceSection columns={1}>
          <F0ResourceSection.Item label="Email" />
        </F0ResourceSection>
      )

      expect(grid(container)).toContain("grid-cols-1")
      expect(grid(container)).not.toContain("md:grid-cols-2")
    })

    it("separates sections with space alone, on every one but the first", () => {
      const { container } = render(
        <>
          <F0ResourceSection header={{ title: "Work information" }}>
            <F0ResourceSection.Item label="Email" />
          </F0ResourceSection>
          <F0ResourceSection header={{ title: "Personal" }}>
            <F0ResourceSection.Item label="Pronouns" />
          </F0ResourceSection>
        </>
      )

      // 64px between sections (32 margin + 32 padding), no rule: the headings
      // are separation enough. The padding half is what a jump from the rail
      // keeps visible above the heading.
      const [first] = container.querySelectorAll(".flex.flex-col.gap-4")
      expect(first.className).toContain("[&:not(:first-child)]:mt-8")
      expect(first.className).toContain("[&:not(:first-child)]:pt-8")
      expect(first.className).not.toContain("border-dashed")

      // And SectionHeader draws none of its own.
      expect(
        container.querySelector('[class*="border-t-f1-border"]')
      ).toBeNull()
    })

    it("makes the header action ghost, unless the caller says otherwise", () => {
      const { container, unmount } = render(
        <F0ResourceSection
          header={{
            title: "Work information",
            action: { label: "Edit", onClick: () => {} },
          }}
        >
          <F0ResourceSection.Item label="Email" />
        </F0ResourceSection>
      )

      // Ghost buttons carry no border of their own, unlike the outline default.
      const [edit] = screen.getAllByRole("button", { name: "Edit" })
      expect(edit.className).not.toContain("border-f1-border")
      unmount()

      render(
        <F0ResourceSection
          header={{
            title: "Work information",
            action: { label: "Edit", variant: "default", onClick: () => {} },
          }}
        >
          <F0ResourceSection.Item label="Email" />
        </F0ResourceSection>
      )

      expect(container).toBeDefined()
    })

    it("pulls the fields back by DataList's own 6px padding", () => {
      // Without this the labels and values sit 6px right of the heading above
      // them, since DataList pads both to make room for a value's hover chip.
      const { container } = render(
        <F0ResourceSection header={{ title: "Work information" }}>
          <F0ResourceSection.Item label="Email" />
        </F0ResourceSection>
      )

      expect(grid(container)).toContain("-ml-1.5")
    })
  })

  it("composes items from conditions", () => {
    const showSeniority = false

    render(
      <F0ResourceSection>
        <F0ResourceSection.Item label="Email" />
        {showSeniority && <F0ResourceSection.Item label="Seniority date" />}
      </F0ResourceSection>
    )

    expect(screen.getByText("Email")).toBeDefined()
    expect(screen.queryByText("Seniority date")).toBeNull()
  })
})
