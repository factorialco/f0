// Sample data shaped after Factorial shift-management's time range, workplace
// and planned-break fields. No shifts are fetched or changed.
export const upcomingShifts = [
  {
    id: "s1",
    date: new Date(2026, 8, 10),
    day: "Today",
    startTime: "09:00",
    endTime: "18:00",
    workplace: "Barcelona HQ",
    plannedBreak: "13:00–14:00",
  },
  {
    id: "s2",
    date: new Date(2026, 8, 11),
    day: "Friday",
    startTime: "09:00",
    endTime: "17:00",
    workplace: "Remote",
    plannedBreak: "13:00–14:00",
  },
  {
    id: "s3",
    date: new Date(2026, 8, 14),
    day: "Monday",
    startTime: "09:00",
    endTime: "18:00",
    workplace: "Barcelona HQ",
    plannedBreak: "13:00–14:00",
  },
]
