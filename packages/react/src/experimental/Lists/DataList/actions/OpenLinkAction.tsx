import { memo, ReactNode } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import ExternalLink from "../../../../icons/app/ExternalLink"
import { Link } from "../../../../lib/linkHandler"
import { cn } from "../../../../lib/utils"
import { InternalOpenLinkActionType } from "../ItemContainer"

export type OpenLinkActionProps = {
  children: ReactNode
  className?: string
} & InternalOpenLinkActionType

export const OpenLinkAction = memo(
  ({ children, className, href, ...props }: OpenLinkActionProps) => {
    return (
      <Link
        {...props}
        target="_blank"
        href={href}
        rel="noopener noreferrer"
        className={cn(
          "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
          "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
          className
        )}
      >
        {children}
        <div className="grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100">
          <F0Icon
            aria-hidden={true}
            icon={ExternalLink}
            size="md"
            color="default"
          />
        </div>
      </Link>
    )
  }
)

OpenLinkAction.displayName = "OpenLinkAction"
