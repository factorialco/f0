import { sidebarWidths } from "@factorialco/f0-core"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Home, Marketplace, Messages } from "@/icons/app"
import { Menu } from "@/patterns/Navigation/Sidebar/Menu"
import { SidebarPanelHeader } from "@/patterns/Navigation/Sidebar/PanelHeader"
import { SidebarRail } from "@/patterns/Navigation/Sidebar/Rail"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "comms", label: "Comms", icon: Messages },
]

const rail = (
  <SidebarRail
    company={{
      companies: [{ id: "1", name: "Factorial" }],
      selected: "1",
      onChange: () => {},
    }}
    tabs={tabs}
    activeTab="home"
    onTabChange={() => {}}
    actions={[
      {
        id: "marketplace",
        label: "Marketplace",
        icon: Marketplace,
        onClick: () => {},
      },
    ]}
    user={{
      user: { firstName: "Jordan", lastName: "Avery" },
      options: [{ label: "Preferences", href: "/preferences" }],
    }}
  />
)

const menu = (
  <Menu
    tree={[
      {
        id: "root",
        title: "Main",
        isRoot: true,
        items: [{ id: "dash", label: "Dashboard", href: "/", icon: Home }],
      },
    ]}
  />
)

const page = (
  <PageHeader
    module={{ id: "hub", name: "Hub", href: "/hub" }}
    breadcrumbs={[]}
  />
)

const renderFrame = ({ withRail }: { withRail: boolean }) =>
  render(
    <ApplicationFrame
      sidebar={
        withRail ? (
          <Sidebar
            rail={rail}
            header={<SidebarPanelHeader title="Home" />}
            body={menu}
          />
        ) : (
          <Sidebar header={<SidebarPanelHeader title="Home" />} body={menu} />
        )
      }
    >
      {page}
    </ApplicationFrame>
  )

/** The frame's navigation slot — the box whose width is the room it reserves. */
const slot = () =>
  screen.getByTestId("sidebar-rail").closest("aside")
    ?.parentElement as HTMLElement

const collapse = () =>
  userEvent.click(screen.getByRole("button", { name: /close sidebar/i }))

describe("ApplicationFrame with a module rail", () => {
  it("keeps the rail on screen when the panel is collapsed", async () => {
    renderFrame({ withRail: true })
    expect(screen.getByTestId("sidebar-rail")).toBeInTheDocument()

    await collapse()

    // The whole point: the modules and the account survive the collapse.
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Comms" })).toBeVisible()
    )
    expect(
      screen.getByRole("button", { name: "Jordan Avery" })
    ).toBeInTheDocument()
  })

  it("leaves the rail reachable by keyboard once the panel is collapsed", async () => {
    renderFrame({ withRail: true })
    await collapse()

    // The frame used to seal the WHOLE slot with `inert` when the sidebar
    // hid. With a rail in that slot, only the panel may be sealed.
    const railNode = screen.getByTestId("sidebar-rail")
    await waitFor(() => expect(railNode.closest("[inert]")).toBeNull())
    screen.getByRole("button", { name: "Comms" }).focus()
    expect(screen.getByRole("button", { name: "Comms" })).toHaveFocus()
  })

  it("reserves the rail's width even with the panel collapsed", async () => {
    renderFrame({ withRail: true })
    const node = slot()
    await waitFor(() =>
      expect(node).toHaveStyle({
        width: `${sidebarWidths.rail + sidebarWidths.panel}px`,
      })
    )

    await collapse()

    await waitFor(() =>
      expect(node).toHaveStyle({ width: `${sidebarWidths.rail}px` })
    )
  })

  it("drops the page header's menu button — there is nothing to restore", async () => {
    renderFrame({ withRail: true })
    await collapse()

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /open main menu/i })
      ).not.toBeInTheDocument()
    )
  })

  it("still offers the menu button when there is no rail", async () => {
    renderFrame({ withRail: false })
    await collapse()

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: /open main menu/i })
      ).toBeInTheDocument()
    )
  })
})
