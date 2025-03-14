import { type VariantProps, cva } from "cva"

import { Icon, IconProps } from "@/components/Utilities/Icon"
import { Windows } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import {
  Platform,
  useUserPlatform,
} from "@/lib/user-platform/UserPlatformProvider"
import { cn } from "@/lib/utils"

const shortcutVariants = cva({
  base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",

  variants: {
    variant: {
      default:
        "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
      inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
  keys: string[]
}

type PlatformDependentKey = "cmd" | "option" | "ctrl"
const platformDependentKeys = new Set<PlatformDependentKey>([
  "cmd",
  "option",
  "ctrl",
])
const platformKeyMap: Record<
  Extract<Platform, "mac" | "windows" | "linux">,
  Record<PlatformDependentKey, string | IconProps["icon"]>
> = {
  mac: {
    cmd: "⌘",
    option: "⌥",
    ctrl: "⌃",
  },
  windows: {
    ctrl: "Ctrl",
    cmd: Windows,
    option: "Alt",
  },
  linux: {
    ctrl: "^",
    cmd: "Meta",
    option: "Alt",
  },
}

const isPlatformDependentKey = (key: string): key is PlatformDependentKey => {
  return platformDependentKeys.has(key as PlatformDependentKey)
}

function Shortcut({ keys, variant }: ShortcutProps) {
  const platform = useUserPlatform()
  const translations = useI18n()

  if (platform === "unknown" || platform === "mobile") {
    return null
  }
  const platformKeys = platformKeyMap[platform]

  return (
    <div className="flex flex-wrap items-center gap-0.5">
      <span className="sr-only">{translations.shortcut}</span>
      {keys.map((key, index) => {
        const lowerKey = key.toLowerCase()
        const isPlatformDependent = isPlatformDependentKey(lowerKey)
        const userKey = isPlatformDependent ? platformKeys[lowerKey] : key

        const isIcon = typeof userKey !== "string"
        return (
          <kbd
            key={index}
            className={cn(
              shortcutVariants({ variant }),
              isPlatformDependent ? "" : "uppercase",
              isIcon ? "w-5 px-0.5" : "min-w-5 px-1"
            )}
          >
            {isIcon ? <Icon icon={userKey} size="sm" /> : userKey}
          </kbd>
        )
      })}
    </div>
  )
}

export { Shortcut }
