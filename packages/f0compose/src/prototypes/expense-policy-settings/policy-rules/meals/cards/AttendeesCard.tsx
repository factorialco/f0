import { F0Box, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { Handshake, Group, Person } from "@factorialco/f0-react/icons/app"
import type React from "react"

import { InlineProseSelect, InlineProseValue } from "../../shared/InlineProse"
import type { AttendeeRequirement, AttendeeRules } from "../../types"

/**
 * Attendees card \u2014 a horizontal 3-tile grid, one per meal
 * context. Earlier this was a vertical 3-line list which read
 * as a sentence stack; the tile layout gives each context its
 * own breathing room and matches the visual rhythm of the meal-
 * caps grid above (icon tile + label + value).
 *
 * Tile shape:
 *   \u2502 [icon]                          \u2502
 *   \u2502 Context name (label)            \u2502
 *   \u2502 [inline-prose rule]             \u2502
 *
 * Solo is intentionally non-editable (data model has no solo
 * attendee field). Its tile renders the icon muted and the
 * rule as plain prose so the page is honest about what's
 * enforced vs. what's documented.
 */

const REQ_OPTIONS: { value: AttendeeRequirement; label: string }[] = [
  { value: "always", label: "always required" },
  { value: "over-threshold", label: "over a threshold" },
  { value: "never", label: "not required" },
]

export function AttendeesCard(props: {
  attendees: AttendeeRules
  setAttendeeRequirement: (
    target: "client" | "team",
    next: AttendeeRequirement
  ) => void
  setTeamMealThreshold: (amount: number) => void
}) {
  const { attendees } = props
  const teamOverThreshold = attendees.team === "over-threshold"

  return (
    <F0Card title="Attendees">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Text
          content="Who needs to be logged on each meal, and when."
          variant="description"
        />

        <F0Box display="grid" columns="3" gap="md">
          <Tile icon={Handshake} context="Client meals">
            <InlineProseSelect<AttendeeRequirement>
              value={attendees.client}
              options={REQ_OPTIONS}
              onChange={(v) => props.setAttendeeRequirement("client", v)}
              ariaLabel="Client meals attendee requirement"
            />
          </Tile>

          <Tile icon={Group} context="Team meals">
            <span className="text-f1-foreground text-base leading-relaxed">
              <InlineProseSelect<AttendeeRequirement>
                value={attendees.team}
                options={REQ_OPTIONS}
                onChange={(v) => props.setAttendeeRequirement("team", v)}
                ariaLabel="Team meals attendee requirement"
              />
              {teamOverThreshold && (
                <>
                  {" over "}
                  <InlineProseValue
                    value={attendees.teamMealThreshold}
                    onChange={(v) => props.setTeamMealThreshold(v as number)}
                    format="currency"
                    ariaLabel="Team meal attendee threshold"
                    suggestions={["€50", "€75", "€100", "€150"]}
                  />
                </>
              )}
            </span>
          </Tile>

          <Tile icon={Person} context="Solo meals" muted>
            <span className="text-f1-foreground-secondary text-base">
              not required
            </span>
          </Tile>
        </F0Box>
      </F0Box>
    </F0Card>
  )
}

function Tile(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  context: string
  muted?: boolean
  children: React.ReactNode
}) {
  // Tinted tile: muted background on the tile itself defines the
  // group without a border. Uses the page's accent bg token
  // (`bg-f1-background-info` for Meals) at ~10% alpha — gives the
  // tile a faint blue tint that clearly differentiates it from
  // the outer white card AND echoes the hero icon tile, unifying
  // the page's tonal accent.
  //
  // Earlier attempts with neutral `secondary` (neutral-10) read
  // too dark, and `tertiary` (neutral-5) was indistinguishable
  // from the white outer card.
  //
  // The inner icon tile stays white (bg-f1-background) so the
  // icon still pops against the tinted tile.
  //
  // Hierarchy: F0Text variant="label" gives a semibold tile
  // title smaller than F0Heading (which dwarfed the values).
  // Value stays at body size in default foreground so the
  // inline-prose underline reads as the interactive element.
  return (
    <div className="bg-f1-background-info/5 rounded-md p-4 flex flex-col gap-2">
      <div
        className={
          props.muted
            ? "w-8 h-8 rounded-md flex items-center justify-center bg-f1-background mb-1"
            : "w-8 h-8 rounded-md flex items-center justify-center bg-f1-background mb-1"
        }
      >
        <F0Icon
          icon={props.icon}
          color={props.muted ? "secondary" : "info"}
          size="sm"
        />
      </div>
      <F0Text content={props.context} variant="label" />
      <div>{props.children}</div>
    </div>
  )
}
