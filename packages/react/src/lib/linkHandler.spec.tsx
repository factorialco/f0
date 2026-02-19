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

  test("isActive returns true when href contains search params matching pathname", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/foo?tab=form" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns true when href contains hash matching pathname", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/foo#section" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns true when href contains both search params and hash matching pathname", async () => {
    render(
      <LinkProvider currentPath="/foo">
        <Component href="/foo?tab=form#section" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })

  test("isActive returns false when href contains search params but pathname does not match", async () => {
    render(
      <LinkProvider currentPath="/bar">
        <Component href="/foo?tab=form" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "false"
    )
  })

  test("isActive returns true when currentPath contains search params matching href pathname", async () => {
    render(
      <LinkProvider currentPath="/foo?tab=form">
        <Component href="/foo" />
      </LinkProvider>
    )

    expect(screen.getByRole("link").getAttribute("data-is-active")).toEqual(
      "true"
    )
  })
})
