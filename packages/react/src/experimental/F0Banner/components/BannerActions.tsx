import { Button } from "@/components/Actions/Button"
import { Link, type LinkProps } from "@/components/Actions/Link"

export interface BannerLinkProps
  extends Pick<LinkProps, "href" | "target" | "disabled"> {
  label: string
}

export interface BannerButtonProps {
  label: string
  onClick: () => void
}

export interface BannerActionsProps {
  link?: BannerLinkProps
  actions?: BannerButtonProps[]
  compact?: boolean
}

export const BannerActions = ({
  link,
  actions,
  compact = false,
}: BannerActionsProps) => {
  return (
    <div className="flex gap-3">
      {link && (
        <Link href={link.href} target={link.target} disabled={link.disabled}>
          {link.label}
        </Link>
      )}
      {actions &&
        actions.map((action) => (
          <Button
            key={action.label}
            onClick={action.onClick}
            label={action.label}
            variant="outline"
            size={compact ? "sm" : "md"}
          />
        ))}
    </div>
  )
}
