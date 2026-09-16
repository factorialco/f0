import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import type { CommandEntityAvatar } from "../types"

type ScopeChipProps = {
  label: string
  icon?: IconType

  avatar?: CommandEntityAvatar

  title: string

  removeLabel: string
  onRemove: () => void
}

export const ScopeChip = ({
  label,
  icon,
  avatar,
  title,
  removeLabel,
  onRemove,
}: ScopeChipProps) => (
  <button
    type="button"
    data-scope-chip=""
    contentEditable={false}
    className={cn(
      "m-0 inline-flex shrink-0 cursor-pointer select-none items-center gap-1",

      "max-h-6 -translate-y-px border-none align-middle",

      "mr-1.5",
      "bg-f1-background-hover py-px pl-1 pr-1.5",
      "font-sans text-lg font-medium text-f1-foreground",

      avatar ? "rounded-full" : "rounded-sm"
    )}
    tabIndex={-1}
    title={title}
    aria-label={removeLabel}
    onClick={onRemove}
  >
    {avatar ? (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        <F0AvatarPerson
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          src={avatar.src}
          size="xs"
        />
      </span>
    ) : icon ? (
      <F0Icon icon={icon} size="md" color="bold" />
    ) : null}

    <span className="truncate">{label}</span>
  </button>
)
