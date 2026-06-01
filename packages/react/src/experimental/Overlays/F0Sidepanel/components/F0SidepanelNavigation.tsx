import { F0Button } from "@/components/F0Button"
import { ChevronDown, ChevronUp } from "@/icons/app"

import { NavigationStep, SidepanelNavigation } from "../types"

interface Props {
  navigation: SidepanelNavigation
}

const hasUrl = (
  step: NavigationStep
): step is NavigationStep & { url: string } => "url" in step

export const F0SidepanelNavigation = ({ navigation }: Props) => {
  const { previous, next, counter } = navigation

  return (
    <div className="flex items-center gap-3">
      {counter && (
        <span className="text-sm text-f1-foreground-secondary">
          {counter.current}/{counter.total}
        </span>
      )}
      <div className="flex items-center gap-2">
        <F0Button
          size="sm"
          variant="outline"
          icon={ChevronUp}
          label={previous?.title ?? "Previous"}
          hideLabel
          disabled={!previous}
          {...(previous && hasUrl(previous)
            ? { href: previous.url }
            : { onClick: previous?.onClick })}
        />
        <F0Button
          size="sm"
          variant="outline"
          icon={ChevronDown}
          label={next?.title ?? "Next"}
          hideLabel
          disabled={!next}
          {...(next && hasUrl(next)
            ? { href: next.url }
            : { onClick: next?.onClick })}
        />
      </div>
    </div>
  )
}
