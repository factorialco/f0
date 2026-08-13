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

/**
 * Whether an href LEAVES THIS APP — the only thing that should ever decide
 * `target="_blank"`. Everything else belongs in the current tab, where the app's
 * own router (`LinkProvider`'s `component`) can take the navigation.
 *
 * Four things are NOT external, and each of them used to be:
 *
 * - A bare `#fragment`. It does not leave the DOCUMENT, let alone the site.
 * - The SAME HOST under a different scheme. `http://app.example.com/x` while you
 *   sit on `https://app.example.com` is the app you are already in; comparing
 *   ORIGINS (scheme included) called it another site and tore the SPA down to
 *   open a new tab. Hosts are what "same domain" means.
 * - The same hostname on ANOTHER PORT. This compares `hostname`, not `host`, so
 *   the port is ignored entirely: an app served through a dev server or a proxy
 *   sits on one (`app.local.factorial.dev:8080`) while the links it renders are
 *   written without one (`https://app.local.factorial.dev/dashboard#…`), and
 *   comparing `host` sent every one of those to a new tab. A port is a way IN to
 *   a machine, not a different site — and where a port genuinely does separate
 *   two apps, the cost of being wrong here is one same-tab navigation, against a
 *   torn-down SPA the other way.
 * - A non-web scheme (`mailto:`, `tel:`, `sms:`). The OS handles those; a tab
 *   would open only to close itself again.
 *
 * Anything unparseable is treated as internal: a new tab is the more disruptive
 * guess, so it is not the one to make when in doubt.
 */
export const isExternalHref = (href?: string): boolean => {
  if (!href || href.startsWith("#")) return false
  if (typeof window === "undefined") return false
  try {
    const url = new URL(href, window.location.href)
    if (url.protocol !== "http:" && url.protocol !== "https:") return false
    // `hostname`, not `host`: the port is how you reach this app, not which
    // app it is — see the note above.
    return url.hostname !== window.location.hostname
  } catch {
    return false
  }
}

function stripTrailingSlash(path: string) {
  return path.endsWith("/") ? path.slice(0, -1) : path
}

function splitPathAndSearch(fullPath: string): [string, URLSearchParams] {
  const queryIndex = fullPath.indexOf("?")
  if (queryIndex === -1) return [fullPath, new URLSearchParams()]
  return [
    fullPath.slice(0, queryIndex),
    new URLSearchParams(fullPath.slice(queryIndex)),
  ]
}

function searchParamsMatch(
  current: URLSearchParams,
  target: URLSearchParams
): boolean {
  for (const [key, value] of target) {
    if (current.get(key) !== value) return false
  }
  return true
}

function searchParamsEqual(a: URLSearchParams, b: URLSearchParams): boolean {
  return searchParamsMatch(a, b) && searchParamsMatch(b, a)
}

export const useNavigation = () => {
  const { currentPath } = useLinkContext()

  const isActive = useCallback(
    (
      path: string | undefined,
      { exact = false }: { exact?: boolean } = { exact: false }
    ) => {
      if (currentPath === undefined || path === undefined) return false

      const [currentPathname, currentSearch] = splitPathAndSearch(currentPath)
      const [targetPathname, targetSearch] = splitPathAndSearch(path)

      if (exact)
        return (
          stripTrailingSlash(currentPathname) ===
            stripTrailingSlash(targetPathname) &&
          searchParamsEqual(currentSearch, targetSearch)
        )

      const pathnameMatch =
        `${stripTrailingSlash(currentPathname)}/`.startsWith(
          `${stripTrailingSlash(targetPathname)}/`
        )

      if (!pathnameMatch) return false

      // When the href has query params, verify they are all present in the current URL
      if (targetSearch.size > 0) {
        return searchParamsMatch(currentSearch, targetSearch)
      }

      return true
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
