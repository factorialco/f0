import { F0Box, F0Button, F0TagRaw, F0Text } from "@factorialco/f0-react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Sparkles,
  Swap,
  Target,
} from "@factorialco/f0-react/icons/app"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import { SummaryCard } from "../components/SummaryCard"
import { TimesheetDayTable } from "../components/TimesheetDayTable"
import { formatHoursCompact } from "../lib/formatDuration"
import { buildMySummary, buildMyWeek } from "../mocks/myTimesheet"

const STR = {
  en: {
    bankOfHours: "Bank of hours",
    prevWeek: "Previous week",
    nextWeek: "Next week",
    compensation: "Compensation",
    downloadTimesheet: "Download timesheet",
    balance: "Balance",
    extraHours: "Extra hours",
    state: "STATE",
    autofill: "Autofill timesheet",
    expandAll: "Expand all",
  },
  es: {
    bankOfHours: "Bolsa de horas",
    prevWeek: "Semana anterior",
    nextWeek: "Semana siguiente",
    compensation: "Compensación",
    downloadTimesheet: "Descargar hoja de horas",
    balance: "Balance",
    extraHours: "Horas extra",
    state: "ESTADO",
    autofill: "Rellenar hoja de horas",
    expandAll: "Expandir todo",
  },
} as const

/** The signed-in employee's own timesheet — the "My timesheet" tab. */
export function MyTimesheetView() {
  const locale = useLocale()
  const t = STR[locale]
  const mySummary = buildMySummary(locale)
  const myWeek = buildMyWeek(locale)
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* Bank of hours chip + week navigator + period actions */}
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <F0Box
          display="flex"
          alignItems="center"
          gap="xs"
          border="default"
          borderColor="secondary"
          borderRadius="md"
          paddingX="sm"
          paddingY="xs"
        >
          <F0TagRaw onlyIcon icon={Clock} text={t.bankOfHours} />
          <F0Text content={t.bankOfHours} variant="small" />
          <F0Box background="secondary" borderRadius="sm" paddingX="xs">
            <F0Text
              content={formatHoursCompact(mySummary.bankOfHours)}
              variant="small"
            />
          </F0Box>
        </F0Box>

        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Box
            display="flex"
            alignItems="center"
            gap="xs"
            border="default"
            borderColor="secondary"
            borderRadius="md"
            paddingX="xs"
          >
            <F0Button
              label={t.prevWeek}
              icon={ChevronLeft}
              hideLabel
              variant="ghost"
              onClick={() => {}}
            />
            <F0Text content={mySummary.weekLabel} variant="label" />
            <F0Button
              label={t.nextWeek}
              icon={ChevronRight}
              hideLabel
              variant="ghost"
              onClick={() => {}}
            />
          </F0Box>
          <F0Button
            label={t.compensation}
            icon={Swap}
            variant="outline"
            onClick={() => {}}
          />
          <F0Button
            label={t.downloadTimesheet}
            icon={Download}
            hideLabel
            variant="outline"
            onClick={() => {}}
          />
        </F0Box>
      </F0Box>

      {/* Headline metrics */}
      <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="md">
        <SummaryCard
          title={t.balance}
          note={mySummary.balanceNote}
          value={formatHoursCompact(mySummary.balance)}
          icon={Clock}
          onOpen={() => {}}
        />
        <SummaryCard
          title={t.extraHours}
          note={mySummary.extraNote}
          value={formatHoursCompact(mySummary.extra)}
          icon={Target}
        />
      </F0Box>

      {/* State + timesheet actions */}
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Text content={t.state} variant="small" />
          <F0Box
            background="secondary"
            borderRadius="sm"
            paddingX="sm"
            paddingY="xs"
          >
            <F0Text content={mySummary.state} variant="small" />
          </F0Box>
          <F0Text content={mySummary.stateNote} variant="description" />
        </F0Box>
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Button
            label={t.autofill}
            icon={Sparkles}
            variant="outline"
            onClick={() => {}}
          />
          <F0Button
            label={t.expandAll}
            icon={ChevronDown}
            variant="outline"
            onClick={() => {}}
          />
        </F0Box>
      </F0Box>

      <TimesheetDayTable days={myWeek} />
    </F0Box>
  )
}
