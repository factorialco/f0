import { type VariantProps, cva } from "cva"

import { F0Icon, F0IconProps } from "@/components/F0Icon"
import { Windows } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { type Platform, useUserPlatform } from "@/lib/providers/user-platafform"
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
  Record<PlatformDependentKey, string | F0IconProps["icon"]>
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

function _Shortcut({ keys, variant }: ShortcutProps) {
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
            {isIcon ? <F0Icon icon={userKey} size="sm" /> : userKey}
          </kbd>
        )
      })}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
const Shortcut = withDataTestId(experimentalComponent("Shortcut", _Shortcut))

export { Shortcut }
