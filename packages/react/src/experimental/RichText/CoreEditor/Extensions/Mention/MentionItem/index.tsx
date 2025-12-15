import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { cn } from "@/lib/utils"
import { MentionedUser } from "../types"

interface MentionItemProps {
  item: MentionedUser
  selected: boolean
}

export const MentionItem = ({ item, selected }: MentionItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border border-solid p-1.5 hover:bg-f1-background-hover",
        selected ? "border-f1-border-selected-bold" : "border-f1-border-inverse"
      )}
    >
      <F0AvatarPerson
        firstName={item.label}
        lastName=""
        src={item.image_url ?? undefined}
        size="sm"
      />
      <p className="text-neutral-100 text-md truncate text-ellipsis font-medium">{item.label}</p>
    </div>
  )
}
