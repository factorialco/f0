import { modules } from "@/components/avatars/F0AvatarModule/modules"

export const getDialogAlikeArgTypes = ({
  componentName,
  include = [],
  exclude = [],
}: {
  componentName: string
  include?: string[]
  exclude?: string[]
}) => {
  const argTypes = {
    isOpen: {
      description: `Whether the ${componentName} is open`,
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: `Callback when ${componentName} is closed`,
      action: "onClose",
    },
    title: {
      description: `Title of the ${componentName}`,
      control: "text",
    },
    description: {
      description: `Description of the ${componentName}`,
      control: "text",
    },
    module: {
      description: `The module of the ${componentName}`,
      control: "select",
      options: Object.values(modules),
    },
    primaryAction: {
      description: "Primary action(s) to render in the footer",
      table: {
        type: {
          summary: "DialogAlikeAction | DialogAlikeAction[]",
        },
      },
    },
    secondaryAction: {
      description: "Secondary action(s) to render in the footer",
      table: {
        type: {
          summary: "DialogAlikeAction | DialogAlikeAction[]",
        },
      },
    },
    modal: {
      description: `Whether the ${componentName} should be modal (only closable by clicking the actions)`,
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    otherActions: {
      description: "Other actions to display in the header",
      control: "object",
      table: {
        type: {
          summary: "DropdownItem[]",
        },
      },
    },
    children: {
      description: `Custom content to render in the ${componentName}`,
      control: "text",
    },
    tabs: {
      description: "Tabs to display in the header",
      control: "object",
    },
    activeTabId: {
      description: "The id of the active tab",
      control: "text",
    },
    setActiveTabId: {
      description: "Callback when a tab is selected",
      action: "setActiveTabId",
    },
  }

  return Object.fromEntries(
    Object.entries(argTypes)
      .filter(
        ([key]) =>
          (include.includes(key) || include.length === 0) &&
          !exclude.includes(key)
      )
      .map(([key, value]) => [key, value])
  )
}
