import { IconType } from "@/components/Utilities/Icon"
import * as ModuleIcons from "@/icons/modules"
import type { Meta, StoryObj } from "@storybook/react"
import { ModuleTag } from "./index"

// Crear un objeto con los módulos y sus propiedades
const modules = Object.entries(ModuleIcons).reduce(
  (acc, [key, icon]) => {
    const formattedName = key.replace(/([A-Z])/g, " $1").trim()
    return {
      ...acc,
      [key]: {
        name: formattedName,
        icon,
      },
    }
  },
  {} as Record<string, { name: string; icon: IconType }>
)

type StoryProps = {
  selectedModule: string
  onClick?: () => void
}

const meta = {
  component: ModuleTag,
  title: "Tag/ModuleTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    selectedModule: {
      control: "select",
      options: Object.keys(modules),
      description: "Select a module",
    },
  },
  args: {
    selectedModule: "Home",
    onClick: () => {},
  },
} satisfies Meta<StoryProps>

export default meta
type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    selectedModule: "Home",
  },
  render: ({ selectedModule }) => {
    const module = modules[selectedModule]
    return (
      <ModuleTag
        moduleName={module.name}
        icon={module.icon}
        onClick={() => console.log(`clicked ${module.name}`)}
      />
    )
  },
}

export const AllModules: Story = {
  args: {
    selectedModule: "Home",
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      {Object.entries(modules).map(([key, module]) => (
        <ModuleTag
          key={key}
          moduleName={module.name}
          icon={module.icon}
          onClick={() => console.log(`clicked ${module.name}`)}
        />
      ))}
    </div>
  ),
}
