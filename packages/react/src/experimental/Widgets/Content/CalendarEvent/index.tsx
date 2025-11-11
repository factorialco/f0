import { F0AvatarDate } from "@/components/avatars/F0AvatarDate"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Tag = {
  icon: IconType
  label?: string
  description?: string
}

const Tags = ({ tags, right }: { tags: Tag[]; right?: boolean }) => (
  <div
    className={cn(
      "flex flex-1 flex-row items-center gap-1.5",
      right && "justify-end"
    )}
  >
    {tags.map((tag) => {
      const Content = (
        <div>
          <F0TagRaw
            icon={tag.icon}
            text={tag.label ?? (tag.description || "")}
            onlyIcon
            additionalAccessibleText={`${tag.label}: ${tag.description}`}
          />
        </div>
      )

      if (tag.label || tag.description) {
        return (
          <Tooltip
            key={tag.label ?? tag.description}
            label={tag.label as string}
            description={tag.description as string}
          >
            {Content}
          </Tooltip>
        )
      }

      return Content
    })}
  </div>
)

export interface CalendarEventProps {
  label?: string
  title: string
  subtitle?: string
  description: string
  color: string
  isPending: boolean
  leftTags?: Tag[]
  rightTags?: Tag[]
  fromDate?: Date
  toDate?: Date
  noBackground?: boolean
}

export const CalendarEvent = forwardRef<HTMLDivElement, CalendarEventProps>(
  function CalendarEvent(
    {
      label,
      title,
      subtitle,
      description,
      color,
      isPending,
      leftTags,
      rightTags,
      fromDate,
      toDate,
      noBackground,
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className="relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2"
      >
        {!noBackground && (
          <>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 opacity-5"
              style={{
                background: `${color}`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 opacity-5"
              style={{
                background: `linear-gradient(to right, ${color}, transparent)`,
              }}
            />
          </>
        )}

        <div
          className="min-h-10 min-w-1 rounded-2xs"
          style={
            isPending
              ? {
                  backgroundImage: `repeating-linear-gradient(
              135deg,
              ${color} 0px,
              ${color} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`,
                }
              : {
                  backgroundColor: color,
                }
          }
        />
        <div className="z-10 flex flex-1 flex-col gap-2">
          <div className="flex flex-row items-start gap-2.5">
            <div className="flex flex-1 flex-col gap-0.5">
              {!!label && (
                <p className="line-clamp-1 text-sm text-f1-foreground-secondary">
                  {label}
                </p>
              )}
              <p className="line-clamp-3 font-medium text-f1-foreground">
                {title}
                {!!subtitle && (
                  <span className="pl-1 font-normal text-f1-foreground-secondary">{`· ${subtitle}`}</span>
                )}
              </p>
              <p className="text-f1-foreground-secondary">{description}</p>
            </div>
            <div className="flex flex-row items-center">
              {fromDate && (
                <>
                  <F0AvatarDate date={fromDate} />
                  <F0Icon
                    icon={ChevronRight}
                    size="sm"
                    className="text-f1-foreground-tertiary"
                  />
                </>
              )}
              {toDate && <F0AvatarDate date={toDate} />}
            </div>
          </div>
          {(leftTags || rightTags) && (
            <div className="flex flex-row items-center justify-between">
              {leftTags && <Tags tags={leftTags} />}
              {rightTags && <Tags tags={rightTags} right />}
            </div>
          )}
        </div>
      </div>
    )
  }
)
