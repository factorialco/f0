import {
  ComponentClass,
  ComponentType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react"

type AnyReactComponent<P> =
  | ComponentType<P>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ForwardRefExoticComponent<P & RefAttributes<any>>
  | ComponentClass<P>

export function withSkeleton<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends AnyReactComponent<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  U extends AnyReactComponent<any>,
>(Component: T, Skeleton: U): T & { Skeleton: U } {
  const componentName = Component.displayName || Component.name || "Component"
  Object.assign(Skeleton, { displayName: `${componentName}.Skeleton` })
  return Object.assign(Component, { Skeleton })
}

export const Blend: React.FC<{
  orientation?: "vertical" | "horizontal"
  limit?: number
  children: ReactNode
}> = ({ orientation = "vertical", limit = 600, children }) => (
  <div
    style={{
      maskImage: `linear-gradient(to ${orientation == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${limit}px, 100%)), rgba(0, 0, 0, 0) 100%)`,
    }}
    className={orientation == "horizontal" ? "w-full overflow-hidden" : "w-auto"}
  >
    {children}
  </div>
)
