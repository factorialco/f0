import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { cn } from "@/lib/utils"
import { DropdownItemVisuals } from "./internal"

export const DropdownItemContent = ({
  item,
}: {
  item: DropdownItemVisuals
}) => (
  <>
    {item.avatar ? <F0Avatar avatar={item.avatar} size="xs" /> : null}
    {item.icon ? (
      <F0Icon
        icon={item.icon}
        size="md"
        className={cn("text-f1-icon", item.critical && "text-f1-icon-critical")}
      />
    ) : null}
    {/* `flex-1` so whatever the ROW puts after this — a switch, a chevron —
        sits at its end instead of hugging the label. */}
    <div className="flex min-w-0 flex-1 flex-col items-start">
      <div className="flex w-full items-center gap-1.5">
        <span className="truncate">{item.label}</span>
        {item.tag ? <F0TagRaw text={item.tag} /> : null}
      </div>
      {item.description ? (
        <div
          className={cn(
            "font-normal text-f1-foreground-secondary",
            item.critical && "text-f1-foreground-critical"
          )}
        >
          {item.description}
        </div>
      ) : null}
    </div>
  </>
)
