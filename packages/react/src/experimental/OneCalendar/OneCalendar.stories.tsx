import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  addDays,
  addMonths,
  addYears,
  endOfISOWeek,
  endOfMonth,
  endOfYear,
  startOfISOWeek,
  startOfYear,
} from "date-fns"
import MockDate from "mockdate"
import { useState } from "react"
import { OneCalendar } from "./OneCalendar"
import { DateRange } from "./types"

const mockDate = new Date(2025, 6, 30)
const mockTodayDate = new Date(2025, 5, 30)
const meta = {
  title: "Calendar",
  component: OneCalendar,
  tags: ["autodocs"],
  async beforeEach() {
    MockDate.set(mockTodayDate)

    // 👇 Reset the Date after each story
    return () => {
      MockDate.reset()
    }
  },
} satisfies Meta<typeof OneCalendar>

export default meta
type Story = StoryObj<typeof meta>

function SelectedDateDisplay({ range }: { range: DateRange }) {
  const formatDate = (date: Date) =>
    date.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    })

  return (
    <div className="mt-6 flex flex-col gap-1.5 rounded-md bg-f1-background-tertiary p-4">
      <h4>Selected</h4>
      <p className="text-sm text-f1-foreground">
        {formatDate(range.from)}
        {range.to && <> - {formatDate(range.to)}</>}
        <br />
        <span className="tabular-nums">
          ({range.from.toLocaleDateString()} - {range.to?.toLocaleDateString()})
        </span>
      </p>
    </div>
  )
}

export const MonthSingle: Story = {
  args: {
    mode: "single",
    view: "month",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      return {
        from: start,
        to: endOfMonth(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const MonthRange: Story = {
  args: {
    mode: "range",
    view: "month",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 4, 1)
      return {
        from: start,
        to: endOfMonth(end),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const YearSingle: Story = {
  args: {
    mode: "single",
    view: "year",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      return {
        from: startOfYear(now),
        to: endOfYear(now),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const YearRange: Story = {
  args: {
    mode: "range",
    view: "year",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = startOfYear(now)
      const end = endOfYear(new Date(now.getFullYear() + 4, 0, 1))
      return {
        from: start,
        to: end,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const DaySingle: Story = {
  args: {
    mode: "single",
    view: "day",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const defaultDate = mockDate
      return {
        from: defaultDate,
        to: defaultDate,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) {
        setSelectedRange({
          from: date,
          to: date,
        })
        return
      }
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange?.from}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const DayRange: Story = {
  args: {
    mode: "range",
    view: "day",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const start = mockDate
      const end = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + 5
      )
      return {
        from: start,
        to: end,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const Week: Story = {
  args: {
    mode: "single",
    view: "week",
  },
  parameters: {
    // Disable color contrast check for week view as it gets a false positive for middle range days
    a11y: {
      skipCi: true,
    },
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = startOfISOWeek(now)
      return {
        from: start,
        to: endOfISOWeek(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedRange(null)
        return
      }
      if (!(date instanceof Date)) {
        setSelectedRange(date)
      }
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const QuarterSingle: Story = {
  args: {
    mode: "single",
    view: "quarter",
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
      const now = mockDate
      const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3
      return new Date(now.getFullYear(), quarterStartMonth, 1)
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedDate(null)
        return
      }
      if (date instanceof Date) {
        setSelectedDate(date)
      }
    }

    const displayRange = selectedDate
      ? {
          from: selectedDate,
          to: new Date(
            selectedDate.getFullYear(),
            Math.floor(selectedDate.getMonth() / 3) * 3 + 3,
            0
          ),
        }
      : null

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedDate}
          onSelect={handleSelect}
        />
        {displayRange && <SelectedDateDisplay range={displayRange} />}
      </div>
    )
  },
}

export const QuarterRange: Story = {
  args: {
    mode: "range",
    view: "quarter",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const currentQuarter = Math.floor(now.getMonth() / 3)
      const currentQuarterStartMonth = currentQuarter * 3
      const nextQuarter = (currentQuarter + 2) % 4
      const nextQuarterStartMonth = nextQuarter * 3
      const nextQuarterYear = now.getFullYear() + (currentQuarter === 3 ? 1 : 0)

      return {
        from: new Date(now.getFullYear(), currentQuarterStartMonth, 1),
        to: new Date(nextQuarterYear, nextQuarterStartMonth + 3, 0),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedRange(null)
        return
      }
      if (!(date instanceof Date)) {
        setSelectedRange(date)
      }
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const HalfYearSingle: Story = {
  args: {
    mode: "single",
    view: "halfyear",
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
      const now = mockDate
      const halfYearStartMonth = Math.floor(now.getMonth() / 6) * 6
      return new Date(now.getFullYear(), halfYearStartMonth, 1)
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedDate(null)
        return
      }
      if (date instanceof Date) {
        setSelectedDate(date)
      }
    }

    const displayRange = selectedDate
      ? {
          from: selectedDate,
          to: new Date(
            selectedDate.getFullYear(),
            Math.floor(selectedDate.getMonth() / 6) * 6 + 6,
            0
          ),
        }
      : null

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedDate}
          onSelect={handleSelect}
        />
        {displayRange && <SelectedDateDisplay range={displayRange} />}
      </div>
    )
  },
}

export const HalfYearRange: Story = {
  args: {
    mode: "range",
    view: "halfyear",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const currentHalfYear = Math.floor(now.getMonth() / 6)
      const currentHalfYearStartMonth = currentHalfYear * 6
      const endYear = now.getFullYear() + Math.floor((currentHalfYear + 2) / 2)
      const endMonth = ((currentHalfYear + 2) % 2) * 6

      return {
        from: new Date(now.getFullYear(), currentHalfYearStartMonth, 1),
        to: new Date(endYear, endMonth + 6, 0),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedRange(null)
        return
      }
      if (!(date instanceof Date)) {
        setSelectedRange(date)
      }
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const DayRangeWithInput: Story = {
  args: {
    mode: "range",
    view: "day",
    showInput: true,
  },
}

export const MonthRangeWithInput: Story = {
  args: {
    mode: "range",
    view: "month",
    showInput: true,
  },
}

export const QuarterRangeWithInput: Story = {
  args: {
    mode: "range",
    view: "quarter",
    showInput: true,
  },
}

export const HalfYearRangeWithInput: Story = {
  args: {
    mode: "range",
    view: "halfyear",
    showInput: true,
  },
}

export const YearRangeWithInput: Story = {
  args: {
    mode: "range",
    view: "year",
    showInput: true,
  },
}

export const WithMinAndMaxDay: Story = {
  args: {
    mode: "single",
    view: "day",
    minDate: mockDate,
    maxDate: addDays(mockDate, 30),
  },
}

export const WithMinAndMaxWeek: Story = {
  args: {
    mode: "single",
    view: "week",
    minDate: mockDate,
    maxDate: addDays(mockDate, 30),
  },
}

export const WithMinAndMaxMonth: Story = {
  args: {
    mode: "single",
    view: "month",
    minDate: mockDate,
    maxDate: addDays(mockDate, 30),
  },
}

export const WithMinAndMaxHalfYear: Story = {
  args: {
    mode: "single",
    view: "halfyear",
    minDate: mockDate,
    maxDate: addMonths(mockDate, 24),
  },
}
export const WithMinAndMaxQuarter: Story = {
  args: {
    mode: "single",
    view: "quarter",
    minDate: mockDate,
    maxDate: addMonths(mockDate, 6),
  },
}

export const WithMinAndMaxYear: Story = {
  args: {
    mode: "single",
    view: "year",
    minDate: mockDate,
    maxDate: addYears(mockDate, 2),
  },
}

// Compact versions
export const CompactMonthSingle: Story = {
  args: {
    mode: "single",
    view: "month",
    compact: true,
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      return {
        from: start,
        to: endOfMonth(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-64">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const CompactMonthRange: Story = {
  args: {
    mode: "range",
    view: "month",
    compact: true,
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 4, 1)
      return {
        from: start,
        to: endOfMonth(end),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-64">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const CompactWeek: Story = {
  args: {
    mode: "single",
    view: "week",
    compact: true,
  },
  parameters: {
    // Disable color contrast check for week view as it gets a false positive for middle range days
    a11y: {
      skipCi: true,
    },
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = startOfISOWeek(now)
      return {
        from: start,
        to: endOfISOWeek(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) {
        setSelectedRange(null)
        return
      }
      if (!(date instanceof Date)) {
        setSelectedRange(date)
      }
    }

    return (
      <div className="mx-auto max-w-64">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const CompactDayRange: Story = {
  args: {
    mode: "range",
    view: "day",
    compact: true,
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const start = mockDate
      const end = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + 5
      )
      return {
        from: start,
        to: end,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-64">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

// Comparison story showing both regular and compact side by side
export const RegularVsCompact: Story = {
  args: {
    mode: "single",
    view: "month",
  },
  render: () => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = mockDate
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      return {
        from: start,
        to: endOfMonth(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="flex gap-8">
        <div className="flex-1">
          <h3 className="mb-4 text-lg font-medium">Regular</h3>
          <OneCalendar
            mode="single"
            view="month"
            defaultSelected={selectedRange}
            onSelect={handleSelect}
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-4 text-lg font-medium">Compact</h3>
          <OneCalendar
            mode="single"
            view="month"
            compact={true}
            defaultSelected={selectedRange}
            onSelect={handleSelect}
          />
        </div>
        {selectedRange && (
          <div className="mt-6">
            <SelectedDateDisplay range={selectedRange} />
          </div>
        )}
      </div>
    )
  },
}
