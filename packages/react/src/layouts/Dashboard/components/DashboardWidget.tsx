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
    <article className={cn("relative", className)}>
      <div className="rounded-md bg-[#f00]">
        <header>
          <Head>{title}</Head>
          <h2 data-testid="dashboard-widget-title">{title}</h2>
        </header>
        {children}
      </div>
    </article>
  )
}
