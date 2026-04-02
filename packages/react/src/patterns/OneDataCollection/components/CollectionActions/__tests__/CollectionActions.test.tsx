import { describe, expect, it, vi } from "vitest"

import { IconType } from "@/components/F0Icon"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { PrimaryActionItemDefinition } from "../../../actions"
import { CollectionActions } from "../CollectionActions"

vi.mock("@/components/F0Button", () => ({
  F0Button: ({ label, onClick, ...props }: Record<string, unknown>) => (
    <button data-testid="f0-button" onClick={onClick as () => void} {...props}>
      {label as string}
    </button>
  ),
}))

vi.mock("@/components/F0Button/internal", () => ({
  ButtonInternal: ({ label, onClick, ...props }: Record<string, unknown>) => (
    <button
      data-testid="button-internal"
      onClick={onClick as () => void}
      {...props}
    >
      {label as string}
    </button>
  ),
}))

vi.mock("@/components/F0ButtonDropdown", () => ({
  F0ButtonDropdown: ({
    items,
    onClick,
    mode,
    trigger,
  }: Record<string, unknown>) => (
    <div
      data-testid={
        mode === "dropdown" ? "button-dropdown-mode" : "button-split-mode"
      }
      data-items={JSON.stringify(items)}
      data-mode={mode || "split"}
      data-trigger={trigger ? String(trigger) : undefined}
    >
      <button
        data-testid={
          mode === "dropdown"
            ? "button-dropdown-mode-main"
            : "button-split-mode-main"
        }
        onClick={() =>
          (onClick as (value: string, item: unknown) => void)(
            (items as Array<{ value: string }>)[0].value,
            (items as Array<unknown>)[0]
          )
        }
      >
        {(items as Array<{ label: string }>)[0]?.label}
      </button>
    </div>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown", () => ({
  Dropdown: ({
    children,
    items,
    open,
    onOpenChange,
  }: Record<string, unknown>) => (
    <div
      data-testid="dropdown"
      data-items={JSON.stringify(items)}
      data-open={open}
    >
      {children as React.ReactNode}
      <button
        data-testid="dropdown-toggle"
        onClick={() =>
          (onOpenChange as (open: boolean) => void)?.(!open as boolean)
        }
      >
        Toggle
      </button>
    </div>
  ),
  DropdownItem: ({ children }: Record<string, unknown>) => (
    <div>{children as React.ReactNode}</div>
  ),
}))

vi.mock("@/icons/app", () => ({
  Ellipsis: () => <div data-testid="ellipsis-icon">...</div>,
}))

const mockIcon: IconType = (() => (
  <div data-testid="mock-icon">icon</div>
)) as unknown as IconType

describe("CollectionActions", () => {
  describe("without descriptions (split button mode)", () => {
    it("renders a single F0Button when there is exactly one primary action", () => {
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("f0-button")).toBeInTheDocument()
      expect(screen.getByText("New expense")).toBeInTheDocument()
      expect(screen.queryByTestId("button-split-mode")).not.toBeInTheDocument()
      expect(
        screen.queryByTestId("button-dropdown-mode")
      ).not.toBeInTheDocument()
    })

    it("renders F0ButtonDropdown in split mode when there are multiple primary actions without descriptions", () => {
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
        { label: "Mileage", icon: mockIcon, onClick: vi.fn() },
        { label: "Per diem", icon: mockIcon, onClick: vi.fn() },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("button-split-mode")).toBeInTheDocument()
      expect(
        screen.queryByTestId("button-dropdown-mode")
      ).not.toBeInTheDocument()
    })
  })

  describe("with descriptions (dropdown mode)", () => {
    it("renders F0ButtonDropdown in dropdown mode when primary actions have descriptions", () => {
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a personal vehicle",
          onClick: vi.fn(),
        },
        {
          label: "Per diem",
          icon: mockIcon,
          description: "Fixed daily travel allowance",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      // Should render F0ButtonDropdown in dropdown mode
      const dropdownMode = screen.getByTestId("button-dropdown-mode")
      expect(dropdownMode).toBeInTheDocument()
      expect(dropdownMode).toHaveAttribute("data-mode", "dropdown")
      expect(screen.queryByTestId("button-split-mode")).not.toBeInTheDocument()

      // All items should be passed with their descriptions
      const passedItems = JSON.parse(
        dropdownMode.getAttribute("data-items") || "[]"
      )
      expect(passedItems).toHaveLength(3)
      expect(passedItems[0].label).toBe("Regular expense")
      expect(passedItems[0].description).toBe(
        "Costs proven by receipts or invoices"
      )
      expect(passedItems[1].label).toBe("Mileage")
      expect(passedItems[1].description).toBe("Travel with a personal vehicle")
      expect(passedItems[2].label).toBe("Per diem")
      expect(passedItems[2].description).toBe("Fixed daily travel allowance")
    })

    it("renders dropdown mode even with a single action that has a description", () => {
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("button-dropdown-mode")).toBeInTheDocument()
      expect(screen.queryByTestId("f0-button")).not.toBeInTheDocument()
    })

    it("passes primaryActionsLabel as trigger prop to F0ButtonDropdown", () => {
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a personal vehicle",
          onClick: vi.fn(),
        },
      ]

      render(
        <CollectionActions
          primaryActions={actions}
          primaryActionsLabel="New expense"
        />
      )

      const dropdownMode = screen.getByTestId("button-dropdown-mode")
      const trigger = dropdownMode.getAttribute("data-trigger")
      expect(trigger).toBe("New expense")
    })

    it("uses dropdown mode when only some actions have descriptions", () => {
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a vehicle",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      // Should use dropdown mode since at least one action has a description
      expect(screen.getByTestId("button-dropdown-mode")).toBeInTheDocument()
      expect(screen.queryByTestId("button-split-mode")).not.toBeInTheDocument()
    })
  })

  describe("edge cases", () => {
    it("returns null when no actions are provided", () => {
      const { container } = render(<CollectionActions />)
      expect(container).toBeEmptyDOMElement()
    })

    it("returns null when empty arrays are provided", () => {
      const { container } = render(
        <CollectionActions
          primaryActions={[]}
          secondaryActions={[]}
          otherActions={[]}
        />
      )
      expect(container).toBeEmptyDOMElement()
    })
  })
})
