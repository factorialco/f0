import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import { IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

type CardAvatarVariant =
  | AvatarVariant
  | { type: "emoji"; emoji: string }
  | { type: "file"; file: File }
  | { type: "icon"; icon: IconType }
  | { type: "module"; module: ModuleId }

type CardAvatarSize = "sm" | "md" | "lg"

interface CardAvatarProps {
  /**
   * The avatar to display
   */
  avatar: CardAvatarVariant

  /**
   * Whether the avatar is displayed with an overlay
   */
  overlay?: boolean

  /**
   * Whether the avatar is displayed in a compact layout
   */
  compact?: boolean

  /**
   * Explicit size override. When omitted, the size derives from `compact`
   * (sm) or the default vertical layout (lg). Passing a size also signals
   * inline usage (e.g. the one-liner card) and drops the vertical margin.
   */
  size?: CardAvatarSize
}

const AvatarRender = ({
  avatar,
  size,
}: {
  avatar: CardAvatarVariant
  size: CardAvatarSize
}) => {
  if (avatar.type === "emoji") {
    return <F0AvatarEmoji emoji={avatar.emoji} size={size} />
  }
  if (avatar.type === "file") {
    return <F0AvatarFile file={avatar.file} size={size} />
  }
  if (avatar.type === "icon") {
    return <F0AvatarIcon icon={avatar.icon} size={size} />
  }
  if (avatar.type === "module") {
    return <F0AvatarModule module={avatar.module} size={size} />
  }
  return <F0Avatar avatar={avatar} size={size} />
}

export function CardAvatar({
  avatar,
  overlay = false,
  compact = false,
  size,
}: CardAvatarProps) {
  const isRounded = avatar.type === "person"
  const resolvedSize: CardAvatarSize = size ?? (compact ? "sm" : "lg")

  return (
    <div
      className={cn(
        "mb-1.5 flex h-fit w-fit",
        overlay &&
          !compact &&
          "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background",
        overlay && isRounded && "rounded-full",
        (compact || size) && "mb-0"
      )}
      data-testid="card-avatar"
    >
      <AvatarRender avatar={avatar} size={resolvedSize} />
    </div>
  )
}

export type { CardAvatarVariant }
