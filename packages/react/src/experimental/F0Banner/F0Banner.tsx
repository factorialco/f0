import { Button } from "@/components/Actions/Button"
import {
  AlertAvatarProps,
  F0AvatarAlert,
} from "@/components/avatars/F0AvatarAlert"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { IconType } from "@/components/F0Icon"
import { Cross, Placeholder } from "@/icons/app"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import {
  BannerActions,
  BannerButtonProps,
  BannerLinkProps,
} from "./components/BannerActions"

const bannerVariants = cva({
  base: "w-full rounded-lg",
  variants: {
    type: {
      default: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive",
      warning: "bg-f1-background-warning",
      info: "bg-f1-background-info",
      critical: "bg-f1-background-critical",
    },
    compact: {
      true: "gap-3 p-2 pr-10",
      false: "p-0.5",
    },
  },
  defaultVariants: {
    type: "default",
    compact: false,
  },
})

export interface F0BannerProps extends VariantProps<typeof bannerVariants> {
  title: string
  icon?: IconType
  onClose?: () => void
  link?: BannerLinkProps
  actions?: BannerButtonProps[]
}

export const F0Banner = ({
  title,
  type,
  compact,
  icon = Placeholder,
  onClose,
  link,
  actions,
}: F0BannerProps) => {
  return (
    <div
      className={cn(
        bannerVariants({ type, compact }),
        "relative flex gap-3 @container/banner"
      )}
    >
      <div className="absolute right-2 top-2">
        <Button
          variant="ghost"
          icon={Cross}
          size="sm"
          hideLabel
          label="Close"
          onClick={onClose}
        />
      </div>
      <div className="flex gap-2 @md/banner:grow">
        {type === "default" ? (
          <F0AvatarIcon icon={icon as IconType} size="sm" />
        ) : (
          <F0AvatarAlert type={type as AlertAvatarProps["type"]} size="sm" />
        )}
        <div className="flex flex-col">
          <p className="pt-0.5 font-medium text-f1-foreground">{title}</p>
          <p className="text-f1-foreground-secondary">Description</p>
          {(link || actions) && (
            <div className="mt-3 @md/banner:hidden">
              <BannerActions link={link} actions={actions} compact={compact} />
            </div>
          )}
        </div>
      </div>
      <div className="hidden @md/banner:block">
        <BannerActions link={link} actions={actions} compact={compact} />
      </div>
    </div>
  )
}

F0Banner.displayName = "F0Banner"
