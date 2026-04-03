import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"

import { F0Tabs } from "../"

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "courses", label: "Courses" },
  { id: "categories", label: "Categories" },
]

describe("F0Tabs", () => {
  it("is exported from the barrel", () => {
    expect(F0Tabs).toBeDefined()
  })

  it("Snapshot - primary (default)", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - secondary", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} secondary />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - single tab", () => {
    const { toJSON } = render(
      <F0Tabs tabs={[{ id: "only", label: "Overview" }]} />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - embedded", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} embedded />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("renders all tab labels", () => {
    render(<F0Tabs tabs={tabs} />)
    expect(screen.getByText("Overview")).toBeDefined()
    expect(screen.getByText("Courses")).toBeDefined()
    expect(screen.getByText("Categories")).toBeDefined()
  })

  it("calls setActiveTabId when a tab is pressed", () => {
    const setActiveTabId = jest.fn()
    render(
      <F0Tabs
        tabs={tabs}
        activeTabId="overview"
        setActiveTabId={setActiveTabId}
      />
    )
    fireEvent.press(screen.getByText("Courses"))
    expect(setActiveTabId).toHaveBeenCalledWith("courses")
  })

  it("calls tab onPress in addition to setActiveTabId", () => {
    const setActiveTabId = jest.fn()
    const onPress = jest.fn()
    const tabsWithPress = [
      { id: "overview", label: "Overview", onPress },
      { id: "courses", label: "Courses" },
    ]
    render(
      <F0Tabs
        tabs={tabsWithPress}
        activeTabId="courses"
        setActiveTabId={setActiveTabId}
      />
    )
    fireEvent.press(screen.getByText("Overview"))
    expect(onPress).toHaveBeenCalledTimes(1)
    expect(setActiveTabId).toHaveBeenCalledWith("overview")
  })

  it("sets accessibilityRole tablist on the container", () => {
    render(<F0Tabs tabs={tabs} />)
    const container = screen.UNSAFE_getByProps({ accessibilityRole: "tablist" })
    expect(container).toBeDefined()
  })

  it("sets accessibilityRole tab on each tab", () => {
    render(<F0Tabs tabs={tabs} />)
    const tabElements = screen.getAllByRole("tab")
    expect(tabElements).toHaveLength(tabs.length)
  })

  it("marks the active tab as selected", () => {
    render(<F0Tabs tabs={tabs} activeTabId="courses" />)
    const activeTab = screen.getByRole("tab", { name: "Courses" })
    expect(activeTab.props.accessibilityState?.selected).toBe(true)
  })

  it("marks inactive tabs as not selected", () => {
    render(<F0Tabs tabs={tabs} activeTabId="courses" />)
    const inactiveTab = screen.getByRole("tab", { name: "Overview" })
    expect(inactiveTab.props.accessibilityState?.selected).toBe(false)
  })
})
