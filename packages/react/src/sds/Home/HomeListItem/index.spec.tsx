import { describe, expect, test } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { HomeListItem } from "./index"

describe("HomeListItem", () => {
  test("speaks with its three voices: title, subtitle inline, description below", () => {
    zeroRender(
      <HomeListItem
        title="Ada Lovelace"
        subtitle="Engineering"
        description="Requested 3 days off"
      />
    )

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.getByText("· Engineering")).toBeInTheDocument()
    expect(screen.getByText("Requested 3 days off")).toBeInTheDocument()
  })

  test("draws a left slot when given an avatar, none otherwise", () => {
    const { container, rerender } = zeroRender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        title="Time off"
      />
    )

    expect(container.querySelector(".relative.shrink-0")).not.toBeNull()

    rerender(<HomeListItem title="Time off" />)
    expect(container.querySelector(".relative.shrink-0")).toBeNull()
  })

  test("sizes the data avatar via avatarSize, lg by default", () => {
    const { container, rerender } = zeroRender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        title="Time off"
      />
    )

    expect(container.querySelector(".size-10")).not.toBeNull()

    rerender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        avatarSize="sm"
        title="Time off"
      />
    )
    expect(container.querySelector(".size-6")).not.toBeNull()
    expect(container.querySelector(".size-10")).toBeNull()
  })

  test("fills the right slot with whatever the variant hands it", () => {
    zeroRender(<HomeListItem title="row" right={<span>trailing</span>} />)

    expect(screen.getByText("trailing")).toBeInTheDocument()
  })

  test("is a REAL link with a chevron when it has an href, inert otherwise", () => {
    const { rerender } = zeroRender(<HomeListItem title="row" href="/x" />)

    expect(screen.getByRole("link", { name: "row" })).toHaveAttribute(
      "href",
      "/x"
    )

    rerender(<HomeListItem title="row" />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  test("relative and # hrefs stay in this tab; other domains open a new one", () => {
    const { rerender } = zeroRender(<HomeListItem title="row" href="/inside" />)

    expect(screen.getByRole("link")).not.toHaveAttribute("target")

    rerender(<HomeListItem title="row" href="#section" />)
    expect(screen.getByRole("link")).not.toHaveAttribute("target")

    rerender(<HomeListItem title="row" href="https://developer.mozilla.org" />)
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank")
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noreferrer")
  })
})
