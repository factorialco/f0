import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import React from "react"

import { PageHeader } from "../index"
import { PageHeaderNavigationProvider } from "../PageHeaderNavigationContext"

const defaultModule = {
  id: "time-tracking" as const,
  name: "Time Tracking",
  href: "/time-tracking",
}

const propNavigation = {
  previous: { url: "/prop-prev", title: "Prop Previous" },
  next: { url: "/prop-next", title: "Prop Next" },
  counter: { current: 1, total: 5 },
}

const contextNavigation = {
  previous: { url: "/ctx-prev", title: "Context Previous" },
  next: { url: "/ctx-next", title: "Context Next" },
  counter: { current: 2, total: 10 },
}

describe("PageHeader navigation context", () => {
  it("renders nothing when neither prop nor context navigation is provided", () => {
    render(<PageHeader module={defaultModule} />)
    expect(screen.queryByRole("link", { name: /previous/i })).toBeNull()
    expect(screen.queryByRole("link", { name: /next/i })).toBeNull()
  })

  it("renders navigation from the prop when prop is provided", () => {
    render(<PageHeader module={defaultModule} navigation={propNavigation} />)
    expect(
      screen.getByRole("link", { name: "Prop Previous" })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Prop Next" })).toBeInTheDocument()
    expect(screen.getByText("1/5")).toBeInTheDocument()
  })

  it("renders navigation from context when no prop is provided", () => {
    render(
      <PageHeaderNavigationProvider value={contextNavigation}>
        <PageHeader module={defaultModule} />
      </PageHeaderNavigationProvider>
    )
    expect(
      screen.getByRole("link", { name: "Context Previous" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Context Next" })
    ).toBeInTheDocument()
    expect(screen.getByText("2/10")).toBeInTheDocument()
  })

  it("prop takes precedence over context when both are provided", () => {
    render(
      <PageHeaderNavigationProvider value={contextNavigation}>
        <PageHeader module={defaultModule} navigation={propNavigation} />
      </PageHeaderNavigationProvider>
    )
    expect(
      screen.getByRole("link", { name: "Prop Previous" })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Prop Next" })).toBeInTheDocument()
    expect(screen.getByText("1/5")).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "Context Previous" })).toBeNull()
  })

  it("renders nothing when context value is null", () => {
    render(
      <PageHeaderNavigationProvider value={null}>
        <PageHeader module={defaultModule} />
      </PageHeaderNavigationProvider>
    )
    expect(screen.queryByRole("link", { name: /previous/i })).toBeNull()
    expect(screen.queryByRole("link", { name: /next/i })).toBeNull()
  })
})
