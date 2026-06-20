import { describe, expect, it } from "vitest"

import * as Icons from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { Menu, type MenuCategory, type MenuItem } from "../index"

const treeWith = (item: Partial<MenuItem>): MenuCategory[] => [
  {
    id: "1",
    title: "Root",
    isRoot: true,
    isSortable: false,
    items: [{ label: "Tickets", icon: Icons.Check, href: "/tickets", ...item }],
  },
]

describe("Menu MenuItem tag", () => {
  it("renders the tag text when item.tag is set", () => {
    zeroRender(<Menu tree={treeWith({ tag: "New" })} />)
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  it("renders both the tag and the numeric badge when both are set", () => {
    zeroRender(<Menu tree={treeWith({ tag: "New", badge: 3 })} />)
    expect(screen.getByText("New")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("does not render a tag when item.tag is unset", () => {
    zeroRender(<Menu tree={treeWith({})} />)
    expect(screen.queryByText("New")).not.toBeInTheDocument()
  })
})
