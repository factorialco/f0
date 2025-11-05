import { F0Icon, type IconType } from "@/components/F0Icon/F0Icon"
import * as Icons from "@/icons/app"
import { ExternalLink, Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action/Action"
import { AiCollapsibleMessage } from "./AiCollapsibleMessage"

export type Source = {
  title: string
  link: string
  icon?: string // we need to support string because in mastra we don't have the IconType because the icons are not imported
}

// Helper function to get icon component from string name
const getIconComponent = (iconName: string): IconType => {
  // Check if the icon exists in the Icons object
  const IconComponent = (Icons as Record<string, IconType>)[iconName]

  if (!IconComponent) {
    return ExternalLink
  }

  return IconComponent
}

export type MessageSourcesProps = {
  sources: Source[]
}

export const MessageSources = ({ sources }: MessageSourcesProps) => {
  const translations = useI18n()

  if (!sources || sources.length === 0) {
    return null
  }

  return (
    <AiCollapsibleMessage
      icon={Search}
      title={translations.ai.resourcesGroupTitle}
    >
      <div className="flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2">
        {sources.map((source, index) => {
          return (
            <Action
              key={index}
              aria-label={source.title}
              href={source.link}
              size="md"
              target="_blank"
              variant="ghost"
              className="justify-start truncate"
              compact
              prepend={
                source.icon && (
                  <div className="mr-1 flex items-center justify-center">
                    <F0Icon icon={getIconComponent(source.icon)} size="md" />
                  </div>
                )
              }
            >
              {source.title}
            </Action>
          )
        })}
      </div>
    </AiCollapsibleMessage>
  )
}
