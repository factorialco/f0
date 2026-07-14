import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { SidebarTabPanel } from "../SidebarTabPanel"
import { SidebarTabPanelGroup } from "../types"

const btn = (label: string) => <button type="button">{label}</button>

const groups: SidebarTabPanelGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    items: [
      { id: "roger", searchText: "Roger Campos", content: btn("Roger Campos") },
      {
        id: "raul",
        searchText: "Raúl Sigüenza",
        content: btn("Raúl Sigüenza"),
      },
    ],
  },
  {
    id: "groups",
    title: "Groups",
    items: [{ id: "general", searchText: "General", content: btn("General") }],
  },
]

describe("SidebarTabPanel", () => {
  it("renders groups and item content, preserving order", () => {
    render(<SidebarTabPanel groups={groups} />)
    expect(screen.getByText("Direct messages")).toBeInTheDocument()
    expect(screen.getByText("Groups")).toBeInTheDocument()
    const roger = screen.getByRole("button", { name: "Roger Campos" })
    const general = screen.getByRole("button", { name: "General" })
    expect(
      roger.compareDocumentPosition(general) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("drops groups that have no items (title disappears)", () => {
    render(
      <SidebarTabPanel
        groups={[
          {
            id: "full",
            title: "Full",
            items: [{ id: "x", content: btn("X") }],
          },
          { id: "empty", title: "Empty", items: [] },
        ]}
      />
    )
    expect(screen.getByText("Full")).toBeInTheDocument()
    expect(screen.queryByText("Empty")).not.toBeInTheDocument()
  })

  it("renders a titleless group without a header (root)", () => {
    render(
      <SidebarTabPanel
        groups={[{ id: "root", items: [{ id: "x", content: btn("Rooted") }] }]}
      />
    )
    expect(screen.getByRole("button", { name: "Rooted" })).toBeInTheDocument()
  })

  describe("loading / empty", () => {
    it("shows the skeleton while loading with no items", () => {
      render(
        <SidebarTabPanel
          groups={[]}
          loading
          skeleton={<div data-testid="skel" />}
        />
      )
      expect(screen.getByTestId("skel")).toBeInTheDocument()
    })

    it("ignores loading once items are known", () => {
      render(
        <SidebarTabPanel
          groups={groups}
          loading
          skeleton={<div data-testid="skel" />}
        />
      )
      expect(screen.queryByTestId("skel")).not.toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Roger Campos" })
      ).toBeInTheDocument()
    })

    it("shows the empty state when there are no items and not loading", () => {
      render(
        <SidebarTabPanel groups={[]} emptyState={<div data-testid="empty" />} />
      )
      expect(screen.getByTestId("empty")).toBeInTheDocument()
    })
  })

  describe("search", () => {
    it("renders no search box without a placeholder", () => {
      render(<SidebarTabPanel groups={groups} />)
      expect(screen.queryByRole("searchbox")).not.toBeInTheDocument()
    })

    it("always shows the search box at the top, even while loading", () => {
      render(<SidebarTabPanel groups={[]} loading searchPlaceholder="Search" />)
      expect(screen.getByRole("searchbox")).toBeInTheDocument()
    })

    it("renders the search above the actions", () => {
      render(
        <SidebarTabPanel
          groups={groups}
          searchPlaceholder="Search"
          actions={[{ label: "Act" }]}
        />
      )
      const box = screen.getByRole("searchbox")
      const act = screen.getByRole("button", { name: "Act" })
      // The search always precedes the actions in the DOM.
      expect(
        box.compareDocumentPosition(act) & Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })

    it("fuzzy-filters items and drops groups left empty", async () => {
      render(<SidebarTabPanel groups={groups} searchPlaceholder="Search" />)
      await userEvent.type(screen.getByRole("searchbox"), "roger")

      expect(
        await screen.findByRole("button", { name: "Roger Campos" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Raúl Sigüenza" })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "General" })
      ).not.toBeInTheDocument()
      expect(screen.queryByText("Groups")).not.toBeInTheDocument()
    })

    it("filters out items with no searchText under a non-empty query", async () => {
      render(
        <SidebarTabPanel
          groups={[
            {
              id: "g",
              title: "G",
              items: [
                {
                  id: "named",
                  searchText: "Findable",
                  content: btn("Findable"),
                },
                { id: "blank", content: btn("Blank") },
              ],
            },
          ]}
          searchPlaceholder="Search"
        />
      )
      await userEvent.type(screen.getByRole("searchbox"), "find")
      expect(
        await screen.findByRole("button", { name: "Findable" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Blank" })
      ).not.toBeInTheDocument()
    })

    it("shows the no-results label when nothing matches", async () => {
      render(
        <SidebarTabPanel
          groups={groups}
          searchPlaceholder="Search"
          noResultsLabel="Nothing here"
        />
      )
      await userEvent.type(screen.getByRole("searchbox"), "zzz")
      expect(await screen.findByText("Nothing here")).toBeInTheDocument()
      expect(screen.queryByText("Direct messages")).not.toBeInTheDocument()
      expect(screen.queryByText("Groups")).not.toBeInTheDocument()
    })

    it("opens a collapsed group while searching and re-collapses on clear", async () => {
      const { container } = render(
        <SidebarTabPanel
          groups={[
            {
              id: "g",
              title: "G",
              isOpen: false,
              items: [
                { id: "a", searchText: "alpha", content: <span>alpha</span> },
              ],
            },
          ]}
          searchPlaceholder="Search"
        />
      )
      // Radix reflects the open state on `data-state`, which the panel forces
      // open while searching (via the remount key) regardless of `isOpen`.
      const isOpen = () => !!container.querySelector('[data-state="open"]')
      expect(isOpen()).toBe(false)

      await userEvent.type(screen.getByRole("searchbox"), "alp")
      await waitFor(() => expect(isOpen()).toBe(true))

      await userEvent.clear(screen.getByRole("searchbox"))
      await waitFor(() => expect(isOpen()).toBe(false))
    })
  })

  describe("actions", () => {
    it("renders ghost buttons from an actions array and fires onClick", async () => {
      const onClick = vi.fn()
      render(
        <SidebarTabPanel
          groups={groups}
          actions={[{ label: "New chat", onClick }]}
        />
      )
      await userEvent.click(screen.getByRole("button", { name: "New chat" }))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("wraps an action's default button via the render escape hatch", () => {
      render(
        <SidebarTabPanel
          groups={groups}
          actions={[
            {
              label: "Settings",
              render: (button) => <div data-testid="wrapper">{button}</div>,
            },
          ]}
        />
      )
      const wrapper = screen.getByTestId("wrapper")
      // The standard ghost button is still rendered, just inside the wrapper.
      const button = screen.getByRole("button", { name: "Settings" })
      expect(wrapper).toContainElement(button)
    })
  })
})
