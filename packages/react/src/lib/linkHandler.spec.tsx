import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import {
  isExternalHref,
  Link,
  LinkProvider,
  useNavigation,
} from "./linkHandler"

describe("LinkProvider", () => {
  test("allows LinkProvider to change the component", async () => {
    render(
      <LinkProvider component={(props) => <a {...props} target="_blank" />}>
        <Link href="/">Test</Link>
      </LinkProvider>
    )

    const link = screen.getByRole("link")
    expect(link.getAttribute("target")).toEqual("_blank")
  })
})

describe("useLink", () => {
  const Component: React.FC<{ href: string }> = ({ href }) => {
    const { isActive } = useNavigation()
    return <a href={href} data-is-active={isActive(href)} />
  }

  test("isActive returns true if the current path is the same as the href", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns true if the current path starts with href including trailing slash", async () => {
    render(
      <LinkProvider currentPath="/foo/bar">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns true if the current path starts with href with no trailing slash", async () => {
    render(
      <LinkProvider currentPath="/foo_bar">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "false"
    )
  })

  test("isActive returns false if the current path is not contained in the href", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/foo/bar" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "false"
    )
  })

  test("isActive returns false if the current path doesn't match with href", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/bar" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "false"
    )
  })

  test("isActive ignores query params in currentPath when href has no query params", async () => {
    render(
      <LinkProvider currentPath="/foo?startDate=2026-01-01">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive matches when both currentPath and href have the same query params", async () => {
    render(
      <LinkProvider currentPath="/foo?tab=form">
        <Component href="/foo?tab=form" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns false when href has different query params than currentPath", async () => {
    render(
      <LinkProvider currentPath="/foo?tab=form">
        <Component href="/foo?tab=workflows" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "false"
    )
  })

  test("isActive matches when query params are in different order", async () => {
    render(
      <LinkProvider currentPath="/foo?b=2&a=1">
        <Component href="/foo?a=1&b=2" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive matches when href has query params and currentPath has extra params", async () => {
    render(
      <LinkProvider currentPath="/foo?tab=form&startDate=2026-01-01">
        <Component href="/foo?tab=form" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive matches parent path when currentPath has query params", async () => {
    render(
      <LinkProvider currentPath="/foo/bar?startDate=2026-01-01">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })
})

/**
 * The one rule that decides `target="_blank"`. Everything that can still be
 * handled by the app in this tab must not open another one.
 */
describe("isExternalHref", () => {
  const host = () => window.location.host

  test("a bare fragment is not even a navigation", () => {
    expect(isExternalHref("#core.whatever")).toBe(false)
  })

  test("a path, with or without a fragment, stays here", () => {
    expect(isExternalHref("/calendar")).toBe(false)
    expect(isExternalHref("/calendar#core.events")).toBe(false)
    expect(isExternalHref("calendar?tab=week#core.events")).toBe(false)
  })

  test("THIS host is this app, absolute url and fragment included", () => {
    expect(isExternalHref(`http://${host()}/calendar#core.events`)).toBe(false)
  })

  test("THIS host under a different scheme is still this app", () => {
    // The regression: comparing origins made an `https:` href to the host you
    // are already on look like another site, and it opened in a new tab.
    expect(isExternalHref(`https://${host()}/calendar#core.events`)).toBe(false)
  })

  test("THIS hostname on another PORT is still this app", () => {
    // The regression, as reported from the frontend: the app is served through
    // a dev server on a port (`app.local.factorial.dev:8080`) while the links it
    // renders carry none, so comparing `host` — which includes the port — sent
    // every internal link to a new tab and tore the SPA down to get there.
    const { hostname } = window.location

    expect(
      isExternalHref(
        `https://${hostname}/dashboard#core.dashboardCompanyLinksEdit`
      )
    ).toBe(false)
    expect(
      isExternalHref(
        `https://${hostname}:8080/dashboard#core.dashboardCompanyLinksEdit`
      )
    ).toBe(false)
    expect(isExternalHref(`http://${hostname}:1234/dashboard`)).toBe(false)
  })

  test("another host is external, fragment or not", () => {
    expect(isExternalHref("https://factorial.co")).toBe(true)
    expect(isExternalHref("https://help.factorial.co/article#top")).toBe(true)
  })

  test("a non-web scheme is the OS's business, not a new tab's", () => {
    expect(isExternalHref("mailto:hello@factorial.co")).toBe(false)
    expect(isExternalHref("tel:+34600000000")).toBe(false)
  })

  test("nothing, or something unparseable, is not external", () => {
    expect(isExternalHref()).toBe(false)
    expect(isExternalHref("")).toBe(false)
    expect(isExternalHref("http://")).toBe(false)
  })
})
