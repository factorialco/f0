import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

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
  screen.getAllByRole("button", { name: /^Expand |^Collapse / })[
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
      name: /^Expand |^Collapse /,
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

  it("closes an open item when its trigger is clicked again", async () => {
    const onValueChange = vi.fn()
    render(<F0Accordion items={items} onValueChange={onValueChange} />)
    await userEvent.click(getTrigger("Item One"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "true")
    expect(onValueChange).toHaveBeenLastCalledWith(["one"])
    await userEvent.click(getTrigger("Item One"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "false")
    expect(onValueChange).toHaveBeenLastCalledWith([])
  })

  it("renders a dropdown action and does not toggle the item when interacted with", async () => {
    const onClick = vi.fn()
    render(
      <F0Accordion
        items={[
          {
            id: "one",
            title: "Item One",
            description: "Description one",
            actions: [
              {
                type: "dropdown",
                ariaLabel: "More actions for Item One",
                items: [{ label: "Edit", onClick }],
              },
            ],
          },
        ]}
      />
    )
    const accordionTrigger = screen.getByRole("button", {
      name: "Expand Item One",
    })
    expect(accordionTrigger).toHaveAttribute("aria-expanded", "false")
    const dropdownTrigger = screen.getByRole("button", {
      name: "More actions for Item One",
    })
    await userEvent.click(dropdownTrigger)
    const editItem = await screen.findByRole("menuitem", { name: /Edit/ })
    expect(editItem).toBeInTheDocument()
    await userEvent.click(editItem)
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    expect(accordionTrigger).toHaveAttribute("aria-expanded", "false")
  })

  it("toggles the item when clicking the title (no actions)", async () => {
    render(<F0Accordion items={items} />)
    await userEvent.click(screen.getByText("Item One"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "true")
    await userEvent.click(screen.getByText("Item One"))
    expect(getTrigger("Item One")).toHaveAttribute("aria-expanded", "false")
  })

  it("toggles the item when clicking the title (with actions)", async () => {
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
                onChange: () => {},
              },
            ],
          },
        ]}
      />
    )
    const chevron = screen.getByRole("button", { name: "Expand Item One" })
    expect(chevron).toHaveAttribute("aria-expanded", "false")
    await userEvent.click(screen.getByText("Item One"))
    expect(chevron).toHaveAttribute("aria-expanded", "true")
  })
})
