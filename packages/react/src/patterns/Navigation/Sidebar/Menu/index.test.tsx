import { describe, expect, it } from "vitest"

import { Home, Sparkles } from "@/icons/app"
import { zeroRender as render, within } from "@/testing/test-utils"

import { Menu, type MenuCategory } from "./index"

const buildTree = (items: MenuCategory["items"]): MenuCategory[] => [
  {
    id: "root",
    title: "Root",
    items,
    isRoot: true,
    isSortable: false,
  },
]

describe("Menu item tag", () => {
  it("renders the tag label on an item that has a tag", () => {
    const tree = buildTree([
      { label: "Reports", icon: Sparkles, href: "/reports", isNew: true },
    ])

    const { getByRole } = render(<Menu tree={tree} />)

    const link = getByRole("link", { name: /reports/i })
    expect(within(link).getByText("New")).toBeInTheDocument()
  })

  it("does not render a tag on items without one", () => {
    const tree = buildTree([
      { label: "Home", icon: Home, href: "/", exactMatch: true },
    ])

    const { getByRole } = render(<Menu tree={tree} />)

    const link = getByRole("link", { name: /home/i })
    expect(within(link).queryByText("New")).not.toBeInTheDocument()
  })
})
