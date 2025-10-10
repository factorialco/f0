import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarListProps } from "@/components/avatars/F0AvatarList/types"
import { F0Icon } from "@/components/F0Icon"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { AlertCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"
import { MetadataItem } from "./index"

const DATE_ICON_STYLES = {
  warning: {
    icon: Warning,
    iconColor: "warning" as const,
    textColor: "text-f1-foreground-warning",
  },
  critical: {
    icon: AlertCircle,
    iconColor: "critical" as const,
    textColor: "text-f1-foreground-critical",
  },
}

export function MetadataValue({
  item,
  collapse = false,
}: {
  item: MetadataItem
  collapse?: boolean
}) {
  const { value } = item
  switch (value.type) {
    case "text":
      return <span>{value.content}</span>

    case "avatar":
      return (
        <div className="flex items-center gap-1">
          <F0Avatar avatar={value.variant} size="xs" />
          {value.text && <span>{value.text}</span>}
        </div>
      )

    case "status":
      return <F0TagStatus text={value.label} variant={value.variant} />
    case "list":
      return (
        <F0AvatarList
          {...({
            type: value.variant,
            avatars: value.avatars,
            size: "xs" as const,
            max: 3,
          } as F0AvatarListProps)}
          // TS dont narrow correctly the type of the list when destructuring the value
        />
      )

    case "data-list":
      return collapse ? (
        <div className="flex items-center justify-center gap-1 font-medium">
          {value.data[0]}
          {value.data.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{value.data.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {value.data.map((data) => (
            <span key={data}>{data}</span>
          ))}
        </div>
      )

    case "tag-list":
      return collapse ? (
        <div className="flex flex-wrap items-center justify-center gap-1 font-medium">
          <F0TagRaw text={value.tags[0]} />
          {value.tags.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{value.tags.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col gap-1 [&>div]:w-fit",
            value.tags.length > 1 && "-mt-[3px]"
          )}
        >
          {value.tags.map((tag) => (
            <F0TagRaw key={tag} text={tag} />
          ))}
        </div>
      )

    case "dot-tag":
      return <F0TagDot text={value.label} color={value.color} />
    case "date": {
      if (value.icon === undefined) {
        return <span>{value.formattedDate}</span>
      }

      const { icon, iconColor, textColor } = DATE_ICON_STYLES[value.icon]

      return (
        <div className="flex items-center justify-center gap-0.5 font-medium">
          <F0Icon icon={icon} color={iconColor} />
          <span className={textColor}>{value.formattedDate}</span>
        </div>
      )
    }
  }
}
