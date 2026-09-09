import {
  F0AvatarTeam,
  F0Box,
  F0DataChart,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"

import { PROFILE_PEOPLE } from "../../../../../fixtures"
import { useProfile } from "../../../../../profileStore"
import { InfoCard } from "../components/InfoCard"
import { ProgressBar } from "../components/ProgressBar"
import {
  compensation,
  expenses,
  goals,
  performance,
  profile as sourceProfile,
  projects,
  pulse,
  status,
  tasks,
  timeOff,
  timesheet,
  training,
} from "../mocks/profile"

/** A small colored dot + label, used for chart-style legends. */
function LegendDot({
  label,
  background,
}: {
  label: string
  background: "positive-bold" | "secondary"
}) {
  return (
    <F0Box display="flex" alignItems="center" gap="xs">
      <F0Box width="2" height="2" borderRadius="full" background={background} />
      <F0Text content={label} variant="small" />
    </F0Box>
  )
}

/** Label / value line used throughout the right-hand details panel. */
function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={label} variant="small" />
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}

/** A single time-off / event chip: label + day count, with a date range. */
function EventRow({
  label,
  days,
  from,
  to,
}: {
  label: string
  days: string
  from: string
  to: string
}) {
  return (
    <F0Box display="flex" alignItems="center" justifyContent="between" gap="sm">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content={label} variant="body" />
        <F0Text content={days} variant="small" />
      </F0Box>
      <F0Box display="flex" alignItems="center" gap="xs">
        <F0Text content={from} variant="small" />
        <F0Text content="→" variant="small" />
        <F0Text content={to} variant="small" />
      </F0Box>
    </F0Box>
  )
}

/** A status / amount line (a colored status tag + the amount, right-aligned). */
function AmountRow({
  label,
  amount,
  variant,
}: {
  label: string
  amount: string
  variant: "neutral" | "info" | "positive" | "warning" | "critical"
}) {
  return (
    <F0Box display="flex" alignItems="center" justifyContent="between" gap="sm">
      <F0TagStatus text={label} variant={variant} />
      <F0Text content={amount} variant="body" />
    </F0Box>
  )
}

/**
 * Profile → Overview. A dense dashboard of cards mirroring the reference
 * screen: clock status, goals, time off, timesheet, tasks, performance,
 * projects, expenses, pulse, training, plus the right-hand Details panel.
 * Laid out as a responsive card grid (1 / 2 / 3 columns).
 */
export function OverviewBody() {
  const person = PROFILE_PEOPLE[useProfile()]
  const profile = {
    ...sourceProfile,
    fullName: `${person.firstName} ${person.lastName}`,
  }
  return (
    <F0Box
      display="grid"
      columns="1"
      md={{ columns: "2" }}
      lg={{ columns: "3" }}
      gap="md"
    >
      {/* Status */}
      <InfoCard title="Status">
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Box display="flex">
            <F0TagStatus text={status.state} variant="neutral" />
          </F0Box>
          <F0Heading content={status.timer} variant="heading-large" as="h3" />
        </F0Box>
      </InfoCard>

      {/* Goals */}
      <InfoCard title="Goals" expandable>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Progress" variant="small" />
          <F0Heading
            content={`${goals.progress}%`}
            variant="heading-large"
            as="h3"
          />
          <ProgressBar percent={goals.progress} />
          <F0Text
            content={`Expected progress: ${goals.expected}%`}
            variant="small"
          />
          {goals.items.map((g) => (
            <F0Text key={g} content={`• ${g}`} variant="body" />
          ))}
        </F0Box>
      </InfoCard>

      {/* Time off */}
      <InfoCard title="Time off" expandable>
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Text content="Requested" variant="small" />
            {timeOff.requested.map((e) => (
              <EventRow key={`${e.from}-${e.to}`} {...e} />
            ))}
          </F0Box>
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Text content="Current and upcoming" variant="small" />
            {timeOff.upcoming.map((e) => (
              <EventRow key={`${e.from}-${e.to}`} {...e} />
            ))}
            <F0Text content={`+${timeOff.moreCount} events`} variant="small" />
          </F0Box>
        </F0Box>
      </InfoCard>

      {/* Timesheet */}
      <InfoCard title="Timesheet" caption={timesheet.month} expandable>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="Worked / Planned hours" variant="small" />
          <F0Box display="flex" alignItems="baseline" gap="sm">
            <F0Heading
              content={`${timesheet.workedHours}h`}
              variant="heading-large"
              as="h3"
            />
            <F0Text content={`${timesheet.diffHours}h`} variant="small" />
          </F0Box>
          <ProgressBar percent={timesheet.progress} />
          <F0Box display="flex" gap="md">
            <LegendDot label="Worked" background="positive-bold" />
            <LegendDot label="To be completed" background="secondary" />
          </F0Box>
        </F0Box>
      </InfoCard>

      {/* Tasks */}
      <InfoCard title="Tasks" expandable>
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Box display="flex" gap="lg">
            <F0Box display="flex" flexDirection="column" gap="xs">
              <F0Heading
                content={String(tasks.overdue)}
                variant="heading"
                as="h4"
              />
              <F0Text content="Overdue" variant="small" />
            </F0Box>
            <F0Box display="flex" flexDirection="column" gap="xs">
              <F0Heading
                content={String(tasks.due)}
                variant="heading"
                as="h4"
              />
              <F0Text content="Due" variant="small" />
            </F0Box>
            <F0Box display="flex" flexDirection="column" gap="xs">
              <F0Heading
                content={String(tasks.noDue)}
                variant="heading"
                as="h4"
              />
              <F0Text content="No due" variant="small" />
            </F0Box>
          </F0Box>
          <F0Box display="flex" flexDirection="column" gap="sm">
            {tasks.items.map((t) => (
              <F0Box
                key={t.title}
                display="flex"
                alignItems="center"
                justifyContent="between"
                gap="sm"
              >
                <F0Text content={`• ${t.title}`} variant="body" />
                {t.overdue ? (
                  <F0TagStatus text={t.due} variant="critical" />
                ) : (
                  <F0Text content={t.due} variant="small" />
                )}
              </F0Box>
            ))}
            <F0Text content={`+${tasks.moreCount} tasks`} variant="small" />
          </F0Box>
        </F0Box>
      </InfoCard>

      {/* Performance */}
      <InfoCard title="Performance" expandable>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Box display="flex" alignItems="baseline" gap="sm">
            <F0Heading
              content={String(performance.score)}
              variant="heading-large"
              as="h3"
            />
            <F0Text content="Current score" variant="small" />
          </F0Box>
          <F0Box width="full" height="48">
            <F0DataChart
              type="bar"
              categories={[...performance.chart.categories]}
              series={[
                {
                  name: "Score",
                  color: "viridian",
                  data: [...performance.chart.data],
                },
              ]}
              showLegend={false}
              showGrid
            />
          </F0Box>
        </F0Box>
      </InfoCard>

      {/* My projects */}
      <InfoCard title="My projects" caption={projects.month} expandable>
        <F0Box display="flex" flexDirection="column" gap="sm">
          {projects.items.map((p) => (
            <F0Box
              key={p}
              display="flex"
              alignItems="center"
              justifyContent="between"
              gap="sm"
            >
              <F0Text content={p} variant="body" />
              <F0Text content="0h" variant="small" />
            </F0Box>
          ))}
        </F0Box>
      </InfoCard>

      {/* My expenses */}
      <InfoCard title="My Expenses" caption={expenses.month} expandable>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Box
            display="flex"
            alignItems="center"
            justifyContent="between"
            gap="sm"
          >
            <F0Text content="Status" variant="small" />
            <F0Text content="Expenses" variant="small" />
          </F0Box>
          {expenses.rows.map((r) => (
            <AmountRow
              key={r.label}
              label={r.label}
              amount={r.amount}
              variant={r.variant}
            />
          ))}
        </F0Box>
      </InfoCard>

      {/* Employee pulse */}
      <InfoCard title="Employee pulse">
        <F0Box display="flex" gap="sm" flexWrap="wrap">
          {pulse.days.map((d, i) => (
            <F0Box
              key={`${d.label}-${i}`}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="xs"
            >
              <F0Text content="◌" variant="body" />
              <F0Text content={d.label} variant="small" />
            </F0Box>
          ))}
        </F0Box>
      </InfoCard>

      {/* Training */}
      <InfoCard title="Training" expandable>
        <F0Box display="grid" columns="2" gap="sm">
          {training.counters.map((c) => (
            <F0Box
              key={c.label}
              display="flex"
              flexDirection="column"
              gap="xs"
              padding="sm"
              border="default"
              borderColor="secondary"
              borderRadius="md"
            >
              <F0Text content={c.label} variant="small" />
              <F0Heading content={String(c.value)} variant="heading" as="h4" />
            </F0Box>
          ))}
        </F0Box>
      </InfoCard>

      {/* Compensations */}
      <InfoCard title="Compensations" expandable>
        <F0Box width="full" height="56">
          <F0DataChart
            type="line"
            categories={[...compensation.categories]}
            series={compensation.series.map((s) => ({
              name: s.name,
              color: s.color,
              data: [...s.data],
            }))}
            showArea
            showGrid={false}
            valueFormatter={(v: number) => `€${v}k`}
          />
        </F0Box>
      </InfoCard>

      {/* Details */}
      <InfoCard title="Details">
        <F0Box display="flex" flexDirection="column" gap="md">
          <DetailField label="Manager" value={profile.manager} />
          <DetailField label="Email" value={profile.email} />
          <DetailField label="Phone" value={profile.phone} />
          <DetailField label="Legal entity" value={profile.legalEntity} />
          <DetailField
            label="Start date"
            value={`${profile.startDate} (${profile.tenure})`}
          />
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Workdays" variant="small" />
            <F0Box display="flex" gap="xs">
              {profile.workdays.map((d, i) => (
                <F0Box
                  key={`${d.label}-${i}`}
                  width="6"
                  height="6"
                  borderRadius="sm"
                  background={d.on ? "info-bold" : "secondary"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <F0Text
                    content={d.label}
                    variant={d.on ? "inverse" : "small"}
                  />
                </F0Box>
              ))}
            </F0Box>
          </F0Box>
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Text content="Teams" variant="small" />
            {profile.teams.map((t) => (
              <F0Box key={t} display="flex" alignItems="center" gap="sm">
                <F0AvatarTeam name={t} size="xs" />
                <F0Text content={t} variant="body" />
              </F0Box>
            ))}
          </F0Box>
        </F0Box>
      </InfoCard>
    </F0Box>
  )
}
