import { forwardRef, ReactNode } from "react"

import { Blend, withSkeleton } from "../../../../lib/skeleton"
import { ScrollArea } from "../../../Utilities/ScrollArea"
import { Widget } from "../../Widget"

type DashboardProps = {
  children: ReactNode[]
}

const Container: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]">
    {children}
  </div>
)

export const WidgetStrip = withSkeleton(
  forwardRef<HTMLDivElement, DashboardProps>(function WidgetStrip(
    { children },
    ref
  ) {
    return (
      <ScrollArea ref={ref} showBar={false}>
        <Container>{children}</Container>
      </ScrollArea>
    )
  }),
  () => (
    <Blend orientation="horizontal">
      <Container>
        <Widget.Skeleton />
        <Widget.Skeleton />
        <Widget.Skeleton />
      </Container>
    </Blend>
  )
)
