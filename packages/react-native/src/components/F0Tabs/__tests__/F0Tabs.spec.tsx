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

  it("Snapshot - full width", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} fullWidth />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - separator inset content", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} separatorInset="content" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - globally disabled", () => {
    const { toJSON } = render(<F0Tabs tabs={tabs} disabled />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - tab disabled", () => {
    const tabsWithDisabled = [
      { id: "overview", label: "Overview" },
      { id: "courses", label: "Courses", disabled: true },
      { id: "categories", label: "Categories" },
    ]
    const { toJSON } = render(<F0Tabs tabs={tabsWithDisabled} />)
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

  it("does not call setActiveTabId or tab onPress when globally disabled", () => {
    const setActiveTabId = jest.fn()
    const onPress = jest.fn()
    const tabsWithPress = [
      { id: "overview", label: "Overview" },
      { id: "courses", label: "Courses", onPress },
    ]
    render(
      <F0Tabs
        tabs={tabsWithPress}
        activeTabId="overview"
        setActiveTabId={setActiveTabId}
        disabled
      />
    )

    fireEvent.press(screen.getByText("Courses"))
    expect(onPress).not.toHaveBeenCalled()
    expect(setActiveTabId).not.toHaveBeenCalled()
  })

  it("does not call callbacks for a disabled tab", () => {
    const setActiveTabId = jest.fn()
    const disabledOnPress = jest.fn()
    const enabledOnPress = jest.fn()
    const tabsWithDisabled = [
      { id: "overview", label: "Overview", onPress: enabledOnPress },
      {
        id: "courses",
        label: "Courses",
        onPress: disabledOnPress,
        disabled: true,
      },
    ]
    render(
      <F0Tabs
        tabs={tabsWithDisabled}
        activeTabId="overview"
        setActiveTabId={setActiveTabId}
      />
    )

    fireEvent.press(screen.getByText("Courses"))

    expect(disabledOnPress).not.toHaveBeenCalled()
    expect(setActiveTabId).not.toHaveBeenCalled()

    fireEvent.press(screen.getByText("Overview"))
    expect(enabledOnPress).toHaveBeenCalledTimes(1)
    expect(setActiveTabId).toHaveBeenCalledWith("overview")
  })

  it("sets accessibilityRole tablist on the container", () => {
    render(<F0Tabs tabs={tabs} />)
    const container = screen.UNSAFE_getByProps({
      accessibilityRole: "tablist",
    })
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

  it("sets accessibilityState.disabled for globally disabled tabs", () => {
    render(<F0Tabs tabs={tabs} disabled />)

    const overviewTab = screen.getByRole("tab", { name: "Overview" })
    const coursesTab = screen.getByRole("tab", { name: "Courses" })

    expect(overviewTab.props.accessibilityState?.disabled).toBe(true)
    expect(coursesTab.props.accessibilityState?.disabled).toBe(true)
  })

  it("sets accessibilityState.disabled for individually disabled tabs", () => {
    const tabsWithDisabled = [
      { id: "overview", label: "Overview" },
      { id: "courses", label: "Courses", disabled: true },
    ]

    render(<F0Tabs tabs={tabsWithDisabled} activeTabId="overview" />)

    const overviewTab = screen.getByRole("tab", { name: "Overview" })
    const coursesTab = screen.getByRole("tab", { name: "Courses" })

    expect(overviewTab.props.accessibilityState).toMatchObject({
      selected: true,
      disabled: false,
    })
    expect(coursesTab.props.accessibilityState).toMatchObject({
      selected: false,
      disabled: true,
    })
  })
})
