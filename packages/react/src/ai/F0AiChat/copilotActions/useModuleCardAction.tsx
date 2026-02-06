import { useCopilotAction } from "@copilotkit/react-core"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"

import { F0ModuleCard } from "../../F0UpsellKit/F0ModuleCard"
import { ModuleCardArgs } from "./types"

/**
 * Hook to register the module card copilot action.
 * Renders a card with module icon, title, description, and a redirect action (e.g. "Learn more") when the backend requests it.
 */
export const useModuleCardAction = () => {
  useCopilotAction({
    name: "moduleCard",
    description:
      "Display a module card with module icon, title, description, and an action button (e.g. 'Learn more') to redirect the user.",
    parameters: [
      {
        name: "module",
        type: "string",
        description:
          "Module id for the icon (e.g. company_projects, benefits, projects, calendar, reports)",
        required: true,
      },
      {
        name: "moduleName",
        type: "string",
        description:
          "Module name for the icon (e.g. company_projects, benefits, projects, calendar, reports)",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "Description text below the title",
        required: true,
      },
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL for the action button (redirect)",
        required: false,
      },
    ],
    available: "disabled",
    render: (props) => {
      const args = props.args as ModuleCardArgs
      const moduleId = args.module as ModuleId
      return (
        <F0ModuleCard
          module={moduleId}
          moduleName={args.moduleName}
          description={args.description}
          actionHref={args.actionHref}
          onAction={args.actionHref ? undefined : () => {}}
        />
      )
    },
  })
}
