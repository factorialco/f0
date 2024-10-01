import { Blend, withSkeleton } from "@/lib/skeleton"
import {
  Children,
  ComponentProps,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import { Masonry } from "react-masonry"
import { Widget } from "../../Widget"

type DashboardProps = {
  children?: ReactNode[]
}

const _Dashboard = forwardRef<HTMLDivElement, DashboardProps>(
  function Dashboard({ children }, ref) {
    const [columns, setColumns] = useState<number | undefined>()

    const arrayChildren = Children.toArray(children)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleResize = () => {
        const width = containerRef.current?.offsetWidth
        if (width) setColumns(Math.floor(width / 340) || 1)
      }

      handleResize()

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [setColumns])

    return (
      <div ref={ref} className="text-f1-foreground">
        <div ref={containerRef}>
          {columns === 1 ? (
            <div className="flex flex-col gap-4 *:shadow">{children}</div>
          ) : (
            columns &&
            columns > 1 && (
              <div className="relative -mr-4">
                <Masonry key={columns}>
                  {arrayChildren.map((child, index) => (
                    <div
                      key={index}
                      style={{
                        width: `${Math.floor((1 / columns) * 10000) / 100 - 0.05}%`,
                      }}
                      className="pb-4 pr-4 *:shadow"
                    >
                      {child}
                    </div>
                  ))}
                </Masonry>
              </div>
            )
          )}
        </div>
      </div>
    )
  }
)

const skeletonHeights: Array<ComponentProps<typeof Widget.Skeleton>["height"]> =
  ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"]

export const Dashboard = withSkeleton(_Dashboard, () => (
  <Blend>
    <_Dashboard>
      {skeletonHeights.map((height, i) => (
        <Widget.Skeleton height={height} key={i} />
      ))}
    </_Dashboard>
  </Blend>
))
