import { zeroRender as render, screen } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import { ClockInControls } from "./index"

const defaultLabels = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
  paid: "Paid",
  unpaid: "Unpaid",
}

describe("ClockInControls", () => {
  it("renders clocked out state when no data", () => {
    render(
      <ClockInControls
        data={[]}
        trackedMinutes={0}
        labels={defaultLabels}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    expect(screen.getByText(defaultLabels.clockedOut)).toBeInTheDocument()
    expect(screen.getByText(defaultLabels.clockIn)).toBeInTheDocument()
  })

  it("renders clocked in state", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        trackedMinutes={0}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "clocked-in",
          },
        ]}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    expect(screen.getByText(defaultLabels.clockedIn)).toBeInTheDocument()
  })

  it("renders break state", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        trackedMinutes={0}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "break",
          },
        ]}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    expect(screen.getByText(defaultLabels.onBreak)).toBeInTheDocument()
    expect(screen.getByText(defaultLabels.resume)).toBeInTheDocument()
  })

  it("shows remaining time text", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        trackedMinutes={0}
        remainingMinutes={4 * 60 + 39}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "clocked-in",
          },
        ]}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    expect(
      screen.getByText(`${defaultLabels.remainingTime} 04:39`)
    ).toBeInTheDocument()
  })

  it("shows overtime text", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        trackedMinutes={17}
        remainingMinutes={-17}
        data={[
          {
            from: new Date("2024-03-20T12:00:00"),
            to: new Date("2024-03-20T12:17:00"),
            variant: "clocked-in",
          },
        ]}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    expect(
      screen.getByText(`${defaultLabels.overtime} 00:17`)
    ).toBeInTheDocument()
  })

  it("calls onClockIn when clock in button is clicked", () => {
    const onClockIn = vi.fn()
    render(
      <ClockInControls
        data={[]}
        labels={defaultLabels}
        trackedMinutes={0}
        onClockIn={onClockIn}
        locations={[]}
        onChangeLocationId={() => {}}
      />
    )
    screen.getByText(defaultLabels.clockIn).click()
    expect(onClockIn).toHaveBeenCalled()
  })
})
