import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Accordion } from "../index"
import { F0AccordionItem } from "../types"

const items: F0AccordionItem[] = [
  {
    id: "one",
    title: "Item One",
    description: "Description one",
  },
  {
    id: "two",
    title: "Item Two",
    description: "Description two",
  },
  {
    id: "three",
    title: "Item Three",
    description: "Description three",
  },
]

const getTrigger = (label: string) =>
  screen.getAllByRole("button", { name: /Expand item|Collapse item/ })[
    items.findIndex((i) => i.title === label)
  ]

describe("F0Accordion", () => {
  it("renders all item titles", () => {
    render(<F0Accordion items={items} />)
    expect(screen.getByText("Item One")).toBeInTheDocument()
    expect(screen.getByText("Item Two")).toBeInTheDocument()
    expect(screen.getByText("Item Three")).toBeInTheDocument()
  })

  it("starts with all items collapsed by default", () => {
    render(<F0Accordion items={items} />)
    const triggers = screen.getAllByRole("button", {
      name: /Expand item|Collapse item/,
    })
    triggers.forEach((trigger) =>
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    )
  })

  it("opens an item when its trigger is clicked", async () => {
    render(<F0Accordion items={items} />)
    await userEvent.click(getTrigger("Item One"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "true")
  })

  it("supports opening multiple items simultaneously", async () => {
    render(<F0Accordion items={items} />)
    await userEvent.click(getTrigger("Item One"))
    await userEvent.click(getTrigger("Item Two"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "true")
    expect(getTrigger("Item Two")).toHaveAttribute("aria-expanded", "true")
  })

  it("respects defaultOpen on items", () => {
    render(
      <F0Accordion
        items={items.map((item) =>
          item.id === "two" ? { ...item, defaultOpen: true } : item
        )}
      />
    )
    expect(getTrigger("Item Two")).toHaveAttribute("aria-expanded", "true")
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "false")
  })

  it("respects defaultValue over defaultOpen", () => {
    render(
      <F0Accordion
        defaultValue={["three"]}
        items={items.map((item) =>
          item.id === "one" ? { ...item, defaultOpen: true } : item
        )}
      />
    )
    expect(getTrigger("Item Three")).toHaveAttribute("aria-expanded", "true")
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "false")
  })

  it("behaves as controlled when value is provided", async () => {
    const onValueChange = vi.fn()
    const Controlled = () => {
      const [value, setValue] = useState<string[]>([])
      return (
        <F0Accordion
          items={items}
          value={value}
          onValueChange={(next) => {
            onValueChange(next)
            setValue(next)
          }}
        />
      )
    }
    render(<Controlled />)
    await userEvent.click(getTrigger("Item One"))
    expect(onValueChange).toHaveBeenCalledWith(["one"])
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "true")
  })

  it("clicking an action does not toggle the item", async () => {
    const onChange = vi.fn()
    render(
      <F0Accordion
        items={[
          {
            id: "one",
            title: "Item One",
            description: "Description one",
            actions: [
              {
                type: "segmentedControl",
                ariaLabel: "Relevance for Item One",
                items: [
                  { value: "required", label: "Required" },
                  { value: "important", label: "Important" },
                ],
                value: "required",
                onChange,
              },
            ],
          },
        ]}
      />
    )
    await userEvent.click(screen.getByText("Important"))
    expect(onChange).toHaveBeenCalledWith("important")
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "false")
  })

  it("renders the skeleton variant", () => {
    render(<F0Accordion.Skeleton items={3} />)
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
  })
})
