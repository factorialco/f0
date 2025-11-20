import { F0Icon, type IconType } from "@/components/F0Icon/F0Icon"
import * as Icons from "@/icons/app"
import { ExternalLink, Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action/Action"
import { AiCollapsibleMessage } from "./AiCollapsibleMessage"

export type Source = {
  title: string
  link?: string
  icon?: string // we need to support string because in mastra we don't have the IconType because the icons are not imported
  targetBlank?: boolean
}

const getIconComponent = (iconName: string): IconType => {
  const IconFromName = (Icons as Record<string, IconType>)[iconName]
  return IconFromName || ExternalLink
}

const SourceIcon = ({ iconName }: { iconName?: string }) => {
  if (!iconName) return null

  return (
    <div className="mr-1 flex items-center justify-center">
      <F0Icon icon={getIconComponent(iconName)} size="md" color="default" />
    </div>
  )
}

export type MessageSourcesProps = {
  sources: Source[]
}

export const MessageSources = ({ sources }: MessageSourcesProps) => {
  const translations = useI18n()

  if (!sources || sources.length === 0 || !Array.isArray(sources)) {
    return null
  }

  return (
    <AiCollapsibleMessage
      icon={Search}
      title={translations.ai.resourcesGroupTitle}
    >
      <div className="flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2">
        {sources.map((source, index) => {
          const sourceIcon = <SourceIcon iconName={source.icon} />

          if (!source.link) {
            return (
              <div
                key={index}
                className="flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground"
              >
                {sourceIcon}
                {source.title}
              </div>
            )
          }

          return (
            <Action
              key={index}
              aria-label={source.title}
              href={source.link}
              size="md"
              target={source.targetBlank ? "_blank" : "_self"}
              variant="ghost"
              className="justify-start truncate hover:bg-f1-background-hover"
              compact
              prepend={sourceIcon}
            >
              <div className="flex w-full items-start">{source.title}</div>
            </Action>
          )
        })}
      </div>
    </AiCollapsibleMessage>
  )
}
