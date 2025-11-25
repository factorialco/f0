import { F0Heading } from "@/components/F0Heading"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

export interface DashboardWidgetProps {
  children: React.ReactNode
  className?: string
  title: string
  draggable?: boolean
  actions?: DropdownItem[]
}

export const DashboardWidget = ({
  children,
  className,
  title,
  draggable = false,
  actions,
}: DashboardWidgetProps) => {
  return (
    <article
      className={cn(
        "relative h-full rounded-md border border-solid border-f1-border-secondary bg-f1-background px-4 py-2",
        "hover:border-f1-border-hover",
        className
      )}
    >
      <header className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {draggable.toString()}
          {draggable && <F0Icon icon={Handle} size="sm" />}
          <F0Heading content={title} as="h6" />
        </div>
        <div className="flex items-center gap-2">
          {actions && <Dropdown items={actions} />}
        </div>
      </header>
      <div className="">{children}</div>
    </article>
  )
}
