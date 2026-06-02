import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { MoneyCell } from "../components/cells/MoneyCell"

const numberCellProps = vi.hoisted(() => vi.fn())

vi.mock("../components/cells/NumberCell", () => ({
  NumberCell: (props: Record<string, unknown>) => {
    numberCellProps(props)
    return <div data-testid="number-cell" />
  },
}))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseColumn = {
  id: "amount",
  label: "Amount",
  cell: () => null,
  render: () => null,
} as any

const baseProps = {
  editableColumn: { ...baseColumn },
  value: "100",
  onChange: vi.fn(),
  item: { id: "1" },
}

describe("MoneyCell", () => {
  it("defaults units to $ when numberConfig has no units", () => {
    render(<MoneyCell {...baseProps} />)

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.units).toBe("$")
  })

  it("sets unitsPosition to 'after' when no units are configured", () => {
    render(<MoneyCell {...baseProps} />)

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.unitsPosition).toBe("after")
  })

  it("uses the provided units from numberConfig", () => {
    render(
      <MoneyCell
        {...baseProps}
        editableColumn={{
          ...baseColumn,
          numberConfig: { units: "€" },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.units).toBe("€")
  })

  it("resolves unitsPosition to 'before' for en-US locale with USD", () => {
    render(
      <MoneyCell
        {...baseProps}
        editableColumn={{
          ...baseColumn,
          numberConfig: { units: "USD" },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.unitsPosition).toBe("before")
  })

  it("respects explicit unitsPosition 'before' from config", () => {
    render(
      <MoneyCell
        {...baseProps}
        editableColumn={{
          ...baseColumn,
          numberConfig: { units: "EUR", unitsPosition: "before" },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.unitsPosition).toBe("before")
  })

  it("resolves unitsPosition to 'after' for a locale where currency follows the number", () => {
    render(
      <MoneyCell
        {...baseProps}
        editableColumn={{
          ...baseColumn,
          numberConfig: { units: "EUR", locale: "de-DE" },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.unitsPosition).toBe("after")
  })

  it("preserves other numberConfig properties", () => {
    render(
      <MoneyCell
        {...baseProps}
        editableColumn={{
          ...baseColumn,
          numberConfig: { units: "€", min: 0, max: 1000, step: 0.01 },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig).toMatchObject({
      min: 0,
      max: 1000,
      step: 0.01,
    })
  })

  it("forwards all base props to NumberCell", () => {
    const onChange = vi.fn()
    render(
      <MoneyCell
        {...baseProps}
        value="250"
        error="required"
        loading={true}
        onChange={onChange}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.value).toBe("250")
    expect(passedProps.error).toBe("required")
    expect(passedProps.loading).toBe(true)
    expect(passedProps.onChange).toBe(onChange)
  })

  it("resolves units from a function based on the item", () => {
    render(
      <MoneyCell
        {...baseProps}
        item={{ id: "1", currency: "€" }}
        editableColumn={{
          ...baseColumn,
          numberConfig: {
            units: (item: { id: string; currency: string }) => item.currency,
          },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.units).toBe("€")
  })

  it("resolves unitsPosition from locale when units is a function returning a currency code", () => {
    render(
      <MoneyCell
        {...baseProps}
        item={{ id: "1", currency: "USD" }}
        editableColumn={{
          ...baseColumn,
          numberConfig: {
            units: (item: { id: string; currency: string }) => item.currency,
          },
        }}
      />
    )

    const passedProps = numberCellProps.mock.lastCall?.[0]
    expect(passedProps.editableColumn.numberConfig.units).toBe("$")
    expect(passedProps.editableColumn.numberConfig.unitsPosition).toBe("before")
  })
})
