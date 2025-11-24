import { F0Heading } from "@/components/F0Heading"
import { cn } from "@/lib/utils"

export interface DashboardWidgetProps {
  children: React.ReactNode
  className?: string
  title: string
}

export const DashboardWidget = ({
  children,
  className,
  title,
}: DashboardWidgetProps) => {
  return (
    <article className={cn("relative rounded-md bg-[#f00]", className)}>
      <header>
        <F0Heading content={title} as="h2" />
      </header>
      <div className="p-4">{children}</div>
    </article>
  )
}
