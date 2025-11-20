import { cn } from "@/lib/utils"

export interface DashboardWidgetProps {
  children: React.ReactNode
  className?: string
}

export const DashboardWidget = ({
  children,
  className,
}: DashboardWidgetProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-md bg-[#f00]">{children}</div>
    </div>
  )
}
