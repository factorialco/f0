import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { cn } from "@/lib/utils"

interface VersionItemProps {
  author: { firstName: string; lastName: string; src?: string }
  date: string
  time: string
  onClick?: () => void
  isActive?: boolean
}

export function VersionItem({
  author,
  date,
  time,
  onClick,
  isActive,
}: VersionItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[6px] rounded-md p-[6px] pl-[6px] pr-2 transition-colors",
        isActive && "bg-f1-background-tertiary",
        onClick && "cursor-pointer hover:bg-f1-background-hover"
      )}
      onClick={onClick}
    >
      <OneEllipsis lines={1} className="font-medium text-f1-foreground">
        {`${date} - ${time}`}
      </OneEllipsis>

      <div className="flex flex-row items-center gap-[6px]">
        <F0AvatarPerson
          firstName={author.firstName}
          lastName={author.lastName}
          src={author.src}
          size="xs"
        />

        <OneEllipsis
          lines={1}
          className="font-medium text-f1-foreground-secondary"
        >
          {`${author.firstName} ${author.lastName}`}
        </OneEllipsis>
      </div>
    </div>
  )
}
