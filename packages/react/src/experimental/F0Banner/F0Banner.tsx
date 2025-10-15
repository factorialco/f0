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
  base: "relative flex w-full gap-3 rounded-lg p-2",
  variants: {
    type: {
      default: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive",
      warning: "bg-f1-background-warning",
      info: "bg-f1-background-info",
      critical: "bg-f1-background-critical",
    },
  },
  defaultVariants: {
    type: "default",
  },
})

export interface F0BannerProps extends VariantProps<typeof bannerVariants> {
  /**
   * The title of the banner
   */
  title: string

  /**
   * The description of the banner
   */
  description?: string

  /**
   * The icon of the banner. If the type is not "default", the icon will be ignored
   */
  icon?: IconType

  /**
   * The function to close the banner
   */
  onClose?: () => void

  /**
   * If provided, a link will be displayed below the description, or to right of the title if compact is true
   */
  link?: BannerLinkProps

  /**
   * If provided, action buttons will be displayed below the description, or to right of the title if compact is true
   */
  actions?: BannerButtonProps[]
}

export const F0Banner = ({
  title,
  description,
  type,
  icon = Placeholder,
  onClose,
  link,
  actions,
}: F0BannerProps) => {
  return (
    <div
      className={cn(
        bannerVariants({ type }),
        "@container/banner",
        onClose && "pr-10"
      )}
    >
      {onClose && (
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
      )}
      <div className="flex gap-2 @md/banner:grow">
        <div className="shrink-0">
          {type === "default" ? (
            <F0AvatarIcon icon={icon as IconType} size="sm" />
          ) : (
            <F0AvatarAlert type={type as AlertAvatarProps["type"]} size="sm" />
          )}
        </div>
        <div className="flex flex-col">
          <p className="pt-0.5 font-medium text-f1-foreground">{title}</p>
          {description && (
            <p className="text-f1-foreground-secondary">{description}</p>
          )}
          {(link || actions) && (
            <div className="mt-3 @md/banner:hidden">
              <BannerActions link={link} actions={actions} />
            </div>
          )}
        </div>
      </div>
      {(link || actions) && (
        <div className="hidden @md/banner:block">
          <BannerActions link={link} actions={actions} />
        </div>
      )}
    </div>
  )
}

F0Banner.displayName = "F0Banner"
