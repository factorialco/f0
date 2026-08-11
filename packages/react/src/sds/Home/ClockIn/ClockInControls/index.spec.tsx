import { describe, expect, it, vi } from "vitest"

import { Office as OfficeIcon } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

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

  it("renders a custom locationSelectorElement in place of the built-in location select", () => {
    render(
      <ClockInControls
        data={[]}
        trackedMinutes={0}
        labels={defaultLabels}
        locations={[{ id: "1", name: "Office", icon: OfficeIcon }]}
        locationId="1"
        onChangeLocationId={() => {}}
        locationSelectorElement={<div>Custom location control</div>}
      />
    )
    expect(screen.getByText("Custom location control")).toBeInTheDocument()
    // The built-in location trigger is replaced, not rendered alongside.
    expect(screen.queryByLabelText("Select location")).not.toBeInTheDocument()
  })

  it("renders the custom locationSelectorElement in the clocked-in state too", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        trackedMinutes={0}
        data={[{ from: new Date(), to: new Date(), variant: "clocked-in" }]}
        locations={[{ id: "1", name: "Office", icon: OfficeIcon }]}
        locationId="1"
        onChangeLocationId={() => {}}
        locationSelectorElement={<div>Custom location control</div>}
      />
    )
    expect(screen.getByText("Custom location control")).toBeInTheDocument()
  })

  describe("horizontal-bar variant", () => {
    const clockedInDay = [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T13:23:00"),
        variant: "clocked-in" as const,
      },
    ]

    it("shows the status, the running total, the day's start and what is left of it", () => {
      render(
        <ClockInControls
          variant="horizontal-bar"
          labels={defaultLabels}
          trackedMinutes={4 * 60 + 21}
          remainingMinutes={4 * 60 + 39}
          data={clockedInDay}
          locations={[]}
          onChangeLocationId={() => {}}
        />
      )

      expect(screen.getByText(defaultLabels.clockedIn)).toBeInTheDocument()
      expect(screen.getByText("04:21")).toBeInTheDocument()
      expect(screen.getByText("09:02")).toBeInTheDocument()
      expect(
        screen.getByText(`${defaultLabels.remainingTime} 04:39`)
      ).toBeInTheDocument()
    })

    it("owns both pickers, each as a select it renders itself", () => {
      const onChangeLocationId = vi.fn()
      render(
        <ClockInControls
          variant="horizontal-bar"
          labels={defaultLabels}
          trackedMinutes={0}
          remainingMinutes={8 * 60}
          data={[]}
          locations={[
            { id: "1", name: "Office", icon: OfficeIcon },
            { id: "2", name: "Home", icon: OfficeIcon },
          ]}
          locationId="1"
          onChangeLocationId={onChangeLocationId}
          projects={[{ id: "p1", name: "Design system" }]}
          onChangeProjectId={() => {}}
        />
      )

      // Both are real, focusable comboboxes the component built from data —
      // neither is a consumer-supplied node.
      expect(
        screen.getByRole("combobox", { name: defaultLabels.selectLocation })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("combobox", { name: defaultLabels.selectProject })
      ).toBeInTheDocument()
      // The location's current choice shows on its trigger.
      expect(screen.getByText("Office")).toBeInTheDocument()
    })

    it("offers a clear affordance only on the pickers that aren't required", () => {
      const { rerender } = render(
        <ClockInControls
          variant="horizontal-bar"
          labels={defaultLabels}
          trackedMinutes={0}
          data={[]}
          locations={[{ id: "1", name: "Office", icon: OfficeIcon }]}
          locationId="1"
          onChangeLocationId={() => {}}
          projects={[{ id: "p1", name: "Design system" }]}
          projectId="p1"
          onChangeProjectId={() => {}}
        />
      )

      // Required by default: nothing to clear with.
      expect(screen.queryAllByLabelText(/clear/i)).toHaveLength(0)

      rerender(
        <ClockInControls
          variant="horizontal-bar"
          labels={defaultLabels}
          trackedMinutes={0}
          data={[]}
          locations={[{ id: "1", name: "Office", icon: OfficeIcon }]}
          locationId="1"
          onChangeLocationId={() => {}}
          projects={[{ id: "p1", name: "Design system" }]}
          projectId="p1"
          onChangeProjectId={() => {}}
          locationRequired={false}
          projectRequired={false}
        />
      )

      expect(screen.queryAllByLabelText(/clear/i)).toHaveLength(2)
    })

    it("keeps the same controls as the default variant", () => {
      const onClockOut = vi.fn()
      render(
        <ClockInControls
          variant="horizontal-bar"
          labels={defaultLabels}
          trackedMinutes={4 * 60 + 21}
          data={clockedInDay}
          locations={[]}
          onChangeLocationId={() => {}}
          onClockOut={onClockOut}
        />
      )

      screen.getByText(defaultLabels.clockOut).click()
      expect(onClockOut).toHaveBeenCalled()
    })
  })

  describe("on a break, which action leads", () => {
    const breakDay = [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in" as const,
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:34:00"),
        variant: "break" as const,
      },
    ]

    const renderOnBreak = (
      extra: Partial<{
        remainingMinutes: number
        onBreakPromote: "resume" | "clock-out"
      }>
    ) =>
      render(
        <ClockInControls
          labels={defaultLabels}
          trackedMinutes={4 * 60}
          data={breakDay}
          locations={[]}
          onChangeLocationId={() => {}}
          {...extra}
        />
      )

    /**
     * The promoted action is the labelled button; the other is icon-only. Both
     * labels stay in the DOM either way — `hideLabel` keeps the text for screen
     * readers — so what tells them apart is whether that text is `sr-only`.
     */
    const isIconOnly = (label: string) =>
      screen.getByText(label).className.includes("sr-only")

    it("promotes resume while there are hours left", () => {
      renderOnBreak({ remainingMinutes: 4 * 60 })

      expect(isIconOnly(defaultLabels.resume)).toBe(false)
      expect(isIconOnly(defaultLabels.clockOut)).toBe(true)
      // Icon-only, but still named for anyone not looking at it.
      expect(
        screen.getByRole("button", { name: defaultLabels.clockOut })
      ).toBeInTheDocument()
    })

    it("promotes clocking out once the day is in overtime", () => {
      renderOnBreak({ remainingMinutes: -17 })

      expect(isIconOnly(defaultLabels.clockOut)).toBe(false)
      expect(isIconOnly(defaultLabels.resume)).toBe(true)
    })

    it("lets onBreakPromote override what the day would pick", () => {
      renderOnBreak({ remainingMinutes: -17, onBreakPromote: "resume" })

      expect(isIconOnly(defaultLabels.resume)).toBe(false)
      expect(isIconOnly(defaultLabels.clockOut)).toBe(true)
    })
  })

  describe("loading", () => {
    it.each(["default", "horizontal-bar"] as const)(
      "draws a placeholder instead of the %s controls",
      (variant) => {
        render(
          <ClockInControls
            variant={variant}
            loading
            labels={defaultLabels}
            trackedMinutes={4 * 60 + 21}
            remainingMinutes={4 * 60 + 39}
            data={[
              {
                from: new Date("2024-03-20T09:02:00"),
                to: new Date("2024-03-20T13:23:00"),
                variant: "clocked-in",
              },
            ]}
            locations={[]}
            onChangeLocationId={() => {}}
          />
        )

        expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
        // Neither the day nor its controls: the data hasn't arrived.
        expect(
          screen.queryByText(defaultLabels.clockedIn)
        ).not.toBeInTheDocument()
        expect(
          screen.queryByText(defaultLabels.clockOut)
        ).not.toBeInTheDocument()
      }
    )
  })

  it("does not render the location area (custom or built-in) when canShowLocation is false", () => {
    render(
      <ClockInControls
        data={[]}
        trackedMinutes={0}
        labels={defaultLabels}
        locations={[{ id: "1", name: "Office", icon: OfficeIcon }]}
        locationId="1"
        onChangeLocationId={() => {}}
        canShowLocation={false}
        locationSelectorElement={<div>Custom location control</div>}
      />
    )
    expect(
      screen.queryByText("Custom location control")
    ).not.toBeInTheDocument()
  })
})
