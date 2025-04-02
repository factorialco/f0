import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import * as Icons from "../../../icons/app"
import { PersonAvatar } from "../../Information/Avatars/PersonAvatar"
import { Dropdown, MobileDropdown as MobileDropdownComponent } from "./index"

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    items: [
      {
        label: "Create",
        onClick: () => console.log("Create clicked"),
        icon: Icons.Add,
        description: "New creation process",
        "data-test": "foo",
      },
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
        icon: Icons.Pencil,
        description: "Edit item's information",
      },
      {
        label: "Save",
        onClick: () => console.log("Save clicked"),
        icon: Icons.Save,
        description: "Preserve changes",
      },
      { type: "separator" },
      {
        label: "Delete",
        onClick: () => console.log("Delete clicked"),
        description: "Remove item",
        critical: true,
        icon: Icons.Delete,
      },
    ],
  },
  play: async ({ canvasElement }) => {
    // Search the full page because the popup is rendered in a portal, outside the story canvas
    const page = within(canvasElement.closest('body')!)

    const openButton = page.getByRole("button")
    await userEvent.click(openButton)
    const menuItems = await page.findAllByRole("menuitem")
    await expect(menuItems.filter(item => item.dataset.test === "foo")).toHaveLength(1)
  },
}

export const WithCustomTrigger: Story = {
  args: {
    items: [
      {
        label: "Upload new avatar",
        onClick: () => console.log("Create clicked"),
      },
      {
        label: "Delete current avatar",
        onClick: () => console.log("Delete clicked"),
        critical: true,
      },
    ],
  },
  render: (args) => (
    <Dropdown {...args}>
      <button aria-label="Open user menu">
        <PersonAvatar
          src="https://github.com/dani-moreno.png"
          firstName="Dani"
          lastName="Moreno"
          size="large"
        />
      </button>
    </Dropdown>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [],
      },
    },
  },
}

export const WithLinks: Story = {
  args: {
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        description: "View your dashboard",
        icon: Icons.Home,
      },
      {
        label: "Settings",
        href: "/settings",
        description: "Adjust your settings",
        icon: Icons.Settings,
      },
      {
        label: "Help",
        href: "/help",
        description: "Get help and support",
        icon: Icons.InfoCircleLine,
      },
    ],
  },
}

export const WithAvatars: Story = {
  args: {
    items: [
      {
        label: "Josep Jaume Rey",
        avatar: {
          type: "person",
          firstName: "Josep Jaume",
          lastName: "Rey",
          src: "https://github.com/josepjaume.png",
          "aria-label": "Josep Jaume Rey avatar",
        },
      },
      {
        label: "Nik Lopin",
        avatar: {
          type: "person",
          firstName: "Nik",
          lastName: "Lopin",
          src: "https://github.com/nlopin.png",
          "aria-label": "Nik Lopin avatar",
        },
      },
      {
        label: "Saúl Domínguez",
        avatar: {
          type: "person",
          firstName: "Saúl",
          lastName: "Domínguez",
          src: "https://github.com/sauldom102.png",
          "aria-label": "Saúl Domínguez avatar",
        },
      },
    ],
  },
}

export const MobileDropdown: Story = {
  args: {
    items: [
      {
        label: "Create",
        onClick: () => console.log("Create clicked"),
        icon: Icons.Add,
        description: "New creation process",
      },
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
        icon: Icons.Pencil,
        description: "Edit item's information",
      },
      {
        label: "Save",
        onClick: () => console.log("Save clicked"),
        icon: Icons.Save,
        description: "Preserve changes",
      },
      { type: "separator" },
      {
        label: "Delete",
        onClick: () => console.log("Delete clicked"),
        description: "Remove item",
        critical: true,
        icon: Icons.Delete,
      },
    ],
  },
  render: (args) => <MobileDropdownComponent {...args} />,
}
