import { F0Icon, IconType } from "@/components/F0Icon/F0Icon"
import { Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action/Action"
import { AiCollapsibleMessage } from "./AiCollapsibleMessage"

export type Source = {
  title: string
  link: string
  icon?: IconType
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
      <div className="-ml-7 flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2">
        {sources.map((source, index) => (
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
                  <F0Icon icon={source.icon} size="md" />
                </div>
              )
            }
          >
            {source.title}
          </Action>
        ))}
      </div>
    </AiCollapsibleMessage>
  )
}
