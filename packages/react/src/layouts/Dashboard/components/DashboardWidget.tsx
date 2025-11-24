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
      className={cn("relative h-full rounded-md bg-[#f00] p-4", className)}
    >
      <header className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {draggable && <F0Icon icon={Handle} size="sm" />}
          <F0Heading content={title} as="h2" />
        </div>
        <div className="flex items-center gap-2">
          {actions && <Dropdown items={actions} />}
        </div>
      </header>
      <div className="p-4">{children}</div>
    </article>
  )
}
