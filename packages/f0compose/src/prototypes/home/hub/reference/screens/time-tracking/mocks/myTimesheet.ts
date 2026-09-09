/**
 * The signed-in employee's own weekly timesheet (the "My timesheet" tab).
 * Durations are in minutes; `balance` is null on days that don't yet count
 * toward the running balance (today and future). Week of 22 Jun 2026, with
 * Wednesday 24 Jun as "today" — mirrors the reference screen.
 */
import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

export type DayEntry = {
  /** Day-of-month label, e.g. "22 Jun". */
  date: string
  weekday: string
  worked: number
  planned: number
  /** Running balance contribution in minutes, or null when not yet counted. */
  balance: number | null
  breaks: number
  extra: number
  absence: string | null
  isToday: boolean
  isWeekend: boolean
}

/** Weekday + month-abbreviation copy, keyed by locale. */
const I18N = {
  en: {
    weekdays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    jun: "Jun",
    weekLabel: "Week of 22 Jun 2026",
    balanceNote: "Catch up! Worked less hours than the planned hours.",
    extraNote: "On track! No extra hours during this period.",
    state: "In progress",
    stateNote: "This timesheet corresponds to an open period.",
  },
  es: {
    weekdays: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    jun: "jun",
    weekLabel: "Semana del 22 jun 2026",
    balanceNote: "¡Ponte al día! Has trabajado menos horas de las previstas.",
    extraNote: "¡Vas bien! No hay horas extra durante este periodo.",
    state: "En curso",
    stateNote: "Esta hoja de horas corresponde a un periodo abierto.",
  },
} as const

/** Localized weekly day-by-day breakdown for the My timesheet tab. */
export function buildMyWeek(locale: AppLocale): DayEntry[] {
  const { weekdays, jun } = I18N[locale]
  const day = (n: number) => `${22 + n} ${jun}`
  return [
    {
      date: day(0),
      weekday: weekdays[0],
      worked: 0,
      planned: 480,
      balance: -480,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: false,
    },
    {
      date: day(1),
      weekday: weekdays[1],
      worked: 0,
      planned: 480,
      balance: -480,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: false,
    },
    {
      date: day(2),
      weekday: weekdays[2],
      worked: 0,
      planned: 480,
      balance: null,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: true,
      isWeekend: false,
    },
    {
      date: day(3),
      weekday: weekdays[3],
      worked: 0,
      planned: 480,
      balance: null,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: false,
    },
    {
      date: day(4),
      weekday: weekdays[4],
      worked: 0,
      planned: 480,
      balance: null,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: false,
    },
    {
      date: day(5),
      weekday: weekdays[5],
      worked: 0,
      planned: 0,
      balance: null,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: true,
    },
    {
      date: day(6),
      weekday: weekdays[6],
      worked: 0,
      planned: 0,
      balance: null,
      breaks: 0,
      extra: 0,
      absence: null,
      isToday: false,
      isWeekend: true,
    },
  ]
}

/** Localized header summary for the My timesheet tab. */
export function buildMySummary(locale: AppLocale) {
  const t = I18N[locale]
  return {
    weekLabel: t.weekLabel,
    /** Bank of hours, in minutes. */
    bankOfHours: -56 * 60,
    /** Period balance, in minutes. */
    balance: -16 * 60,
    balanceNote: t.balanceNote,
    /** Extra hours, in minutes. */
    extra: 0,
    extraNote: t.extraNote,
    state: t.state,
    stateNote: t.stateNote,
  }
}
