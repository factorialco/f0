import { F0Icon, resolveIconName } from "@/components/F0Icon"
import { ExternalLink, Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action/Action"
import { CollapsibleMessage } from "./components/CollapsibleMessage"

/**
 * Information source attached to an assistant message.
 */
export type F0AiMessageSource = {
  title: string
  link?: string
  /**
   * Kebab-case icon name, e.g. `"link"` or `"alert-circle-line"`. Stays a
   * `string` rather than an `IconName` because hosts populate it from their own
   * data. Unknown names fall back to the external-link icon.
   */
  icon?: string
  targetBlank?: boolean
}

export type F0AiMessageSourcesProps = {
  sources: F0AiMessageSource[]
  /**
   * Override the section title. Defaults to the
   * `ai.resourcesGroupTitle` translation key.
   */
  title?: string
}

const SourceIcon = ({ iconName }: { iconName?: string }) => {
  if (!iconName) return null
  return (
    <div className="mr-1 flex items-center justify-center">
      <F0Icon
        icon={resolveIconName(iconName) ?? ExternalLink}
        size="md"
        color="default"
      />
    </div>
  )
}

/**
 * Renders a collapsible group of information sources attached to an
 * assistant message. Sources without a `link` render as plain rows;
 * sources with a `link` render as clickable Actions. Pure presentational
 * — no hooks, no AI coupling.
 */
export function F0AiMessageSources({
  sources,
  title: titleProp,
}: F0AiMessageSourcesProps) {
  const translations = useI18n()

  if (!sources || sources.length === 0 || !Array.isArray(sources)) {
    return null
  }

  const title = titleProp ?? translations.ai.resourcesGroupTitle

  return (
    <CollapsibleMessage icon={Search} title={title}>
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
    </CollapsibleMessage>
  )
}

F0AiMessageSources.displayName = "F0AiMessageSources"
