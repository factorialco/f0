import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"
import { Ellipsis } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"

import { ItemTitleAction } from "../types"

export type ItemTeaserProps = {
  title: string
  avatar?: AvatarVariant
  description?: string[]
  titleActions?: ItemTitleAction[]
}

export const ItemTeaser = ({
  title,
  avatar,
  description,
  titleActions,
}: ItemTeaserProps) => {
  const hasTitleActions = !!titleActions && titleActions.length > 0
  const singleTitleAction =
    titleActions && titleActions.length === 1 ? titleActions[0] : null
  const titleActionDropdownItems: DropdownItem[] = (titleActions ?? []).map(
    (action) => ({
      label: action.label,
      icon: action.icon,
      critical: action.critical,
      onClick: action.onClick,
      href: action.href,
      target: action.target,
    })
  )

  return (
    <article className="flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2">
      {avatar && <F0Avatar avatar={avatar} size="md" />}
      <div className="flex flex-1 flex-col gap-0.5">
        <header>
          <h3>
            <span className="flex min-w-0 items-center gap-1">
              <OneEllipsis className="text-base font-medium text-f1-foreground">
                {title}
              </OneEllipsis>
              {hasTitleActions && (
                <span className="pointer-events-auto relative z-10 inline-flex shrink-0 items-center">
                  {singleTitleAction ? (
                    <F0Button
                      icon={singleTitleAction.icon}
                      label={singleTitleAction.label}
                      hideLabel
                      variant="ghost"
                      size="sm"
                      onClick={singleTitleAction.onClick}
                      {...(singleTitleAction.href
                        ? {
                            href: singleTitleAction.href,
                            target: singleTitleAction.target,
                          }
                        : {})}
                    />
                  ) : (
                    <DropdownInternal
                      items={titleActionDropdownItems}
                      icon={Ellipsis}
                      size="sm"
                    />
                  )}
                </span>
              )}
            </span>
          </h3>
        </header>
        <aside>
          {description && description.length > 0 && (
            <div className="flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1">
              {description.map((item, index) => (
                <div key={index} className="flex min-w-0 gap-1">
                  <OneEllipsis>{item}</OneEllipsis>
                  {index < description.length - 1 && (
                    <span className="hidden md:inline"> · </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
