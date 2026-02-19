import {
  AnchorHTMLAttributes,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react"

export type LinkContextValue = {
  currentPath?: string
  component?: (
    props: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => JSX.Element
}

const LinkContext = createContext<LinkContextValue | undefined>(undefined)

export const LinkProvider: React.FC<
  {
    children: ReactNode
  } & LinkContextValue
> = ({ children, component, currentPath }) => {
  return (
    <LinkContext.Provider value={{ component, currentPath }}>
      {children}
    </LinkContext.Provider>
  )
}

export const useLinkContext = () => {
  const context = useContext(LinkContext)

  return {
    controller: () => ({}),
    ...context,
  }
}

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  exactMatch?: boolean
  disabled?: boolean
}

function stripTrailingSlash(path: string) {
  return path.endsWith("/") ? path.slice(0, -1) : path
}

export const useNavigation = () => {
  const { currentPath } = useLinkContext()

  const isActive = useCallback(
    (
      path: string | undefined,
      { exact = false }: { exact?: boolean } = { exact: false }
    ) => {
      if (currentPath === undefined || path === undefined) return false

      if (exact)
        return stripTrailingSlash(currentPath) === stripTrailingSlash(path)

      return `${stripTrailingSlash(currentPath)}/`.startsWith(
        `${stripTrailingSlash(path)}/`
      )
    },
    [currentPath]
  )

  return {
    currentPath,
    isActive,
  }
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { disabled, ...props },
  ref
) {
  const { component } = useLinkContext()
  const { isActive } = useNavigation()

  const active = isActive(props.href, { exact: props.exactMatch })
  const isDisabled = !props.href || disabled

  const overridenProps = {
    "data-is-active": active,
    ...props,
    disabled: isDisabled,
  }

  const Component = useMemo(
    () =>
      forwardRef<HTMLAnchorElement>(function Component(props: LinkProps, ref) {
        if (isDisabled) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { href, target, rel, download, exactMatch, ...spanProps } =
            props
          return <span ref={ref} aria-disabled={true} {...spanProps} />
        }

        // For external links or links with target="_blank", always use native <a>
        if (props.target === "_blank" || !component) {
          return <a ref={ref} {...props} />
        }

        return component(props, ref)
      }),
    [component, isDisabled]
  )

  return <Component ref={ref} {...overridenProps} />
})
