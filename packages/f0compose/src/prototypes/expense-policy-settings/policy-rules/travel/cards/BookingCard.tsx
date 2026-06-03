import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect, InlineProseValue } from "../../shared/InlineProse"
import type { BookingRules, FlightClass } from "../../types"

/**
 * Booking rules — flight class + advance booking window + hotel
 * ceiling, expressed as one paragraph of inline-prose edits.
 * Mirrors the Alcohol pattern: F0Card chrome + a real
 * sentence with dotted-underline interactive spans embedded
 * in it.
 */

const CLASS_OPTIONS: { value: FlightClass; label: string }[] = [
  { value: "economy", label: "economy" },
  { value: "premium-economy", label: "premium economy" },
  { value: "business", label: "business" },
]

export function BookingCard(props: {
  booking: BookingRules
  setFlightAdvanceDays: (days: number) => void
  setFlightClass: (next: FlightClass) => void
  setHotelMaxStars: (stars: number) => void
}) {
  const { booking } = props
  return (
    <F0Card title="Booking">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Flights must be booked at least{" "}
          <InlineProseValue
            value={booking.flightAdvanceDays}
            onChange={(v) => props.setFlightAdvanceDays(v as number)}
            format="duration-days"
            ariaLabel="Minimum days in advance for flight bookings"
            suggestions={["7 days", "14 days", "21 days", "30 days"]}
          />{" "}
          before departure, in{" "}
          <InlineProseSelect<FlightClass>
            value={booking.flightClass}
            options={CLASS_OPTIONS}
            onChange={props.setFlightClass}
            ariaLabel="Maximum reimbursable flight class"
          />{" "}
          class or below. Hotels are reimbursable up to{" "}
          <InlineProseValue
            value={booking.hotelMaxStars}
            onChange={(v) => props.setHotelMaxStars(v as number)}
            format="number"
            ariaLabel="Maximum hotel star rating"
            suggestions={["3", "4", "5"]}
          />{" "}
          stars.
        </p>
        <F0Text
          content="Late bookings and higher classes can still be expensed with an exception approval."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
