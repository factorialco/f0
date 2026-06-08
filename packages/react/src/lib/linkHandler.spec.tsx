import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Link, LinkProvider, useNavigation } from "./linkHandler"

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
