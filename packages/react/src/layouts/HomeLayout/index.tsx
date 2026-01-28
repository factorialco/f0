import {
  Children,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react"

import { Carousel } from "@/experimental/Navigation/Carousel"

import { LayoutProvider } from "../LayoutProvider"

type Props = {
  widgets?: ReactNode[]
  children?: ReactNode
}

const CAROUSEL_COLUMNS = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2,
} as const

export const HomeLayout = forwardRef<HTMLDivElement, Props>(function HomeLayout(
  { widgets, children },
  forwardedRef
) {
  const ref = useRef<HTMLDivElement>(null)

  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

  const arrayWidgets = Children.toArray(widgets)
    .filter((widget) => !!widget)
    .map((widget, i) => (
      <div key={i} className="h-full @5xl:h-auto [&>div]:h-full">
        {widget}
      </div>
    ))

  return (
    <LayoutProvider layout="home">
      <div ref={ref} className="@container">
        {/* Smaller screen content */}
        <div className="flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden">
          <Carousel columns={CAROUSEL_COLUMNS} showArrows={false}>
            {arrayWidgets}
          </Carousel>
          <main>{children}</main>
        </div>

        {/* Larger screen content */}
        <div className="hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid">
          <div className="col-span-3 flex flex-row gap-5 *:flex-1">
            {arrayWidgets.slice(0, 3)}
          </div>

          <main className="col-span-2">{children}</main>

          <div className="flex flex-1 flex-col gap-5">
            {arrayWidgets.slice(3)}
          </div>
        </div>
      </div>
    </LayoutProvider>
  )
})
