import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagRaw,
  F0Text,
} from "@factorialco/f0-react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  InfoCircle,
} from "@factorialco/f0-react/icons/app"

import type { PolicyAssignment } from "../mocks/timeOff"

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="xs"
      grow
    >
      <F0Box display="flex" alignItems="center" gap="xs">
        <F0Heading content={String(value)} variant="heading" as="h4" />
        <ChevronDown />
      </F0Box>
      <F0Text content={label} variant="small" />
    </F0Box>
  )
}

/**
 * One policy assignment: centered name + effective period, a unit tag, and the
 * Accrued / Available / Taken triad. Flanked by decorative carousel chevrons,
 * mirroring the reference screen where a person can page through policies.
 */
export function PolicyCard({ policy }: { policy: PolicyAssignment }) {
  return (
    <F0Box display="flex" alignItems="center" gap="xs">
      <F0Button
        label="Previous policy"
        icon={ChevronLeft}
        hideLabel
        variant="ghost"
        onClick={() => {}}
      />

      <F0Box
        display="flex"
        flexDirection="column"
        gap="md"
        padding="lg"
        border="default"
        borderColor="secondary"
        borderRadius="xl"
        grow
      >
        <F0Box display="flex" alignItems="start" justifyContent="between">
          <F0TagRaw onlyIcon icon={InfoCircle} text="Policy details" />
          <F0Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="xs"
          >
            <F0Text content={policy.name} variant="label" />
            <F0Text content={policy.period} variant="description" />
          </F0Box>
          <F0Box
            background="secondary"
            borderRadius="sm"
            paddingX="sm"
            paddingY="xs"
          >
            <F0Text content={policy.unit} variant="small" />
          </F0Box>
        </F0Box>

        <F0Box display="flex" alignItems="center" gap="md">
          <Metric label="Accrued" value={policy.accrued} />
          <Metric label="Available" value={policy.available} />
          <Metric label="Taken" value={policy.taken} />
        </F0Box>
      </F0Box>

      <F0Button
        label="Next policy"
        icon={ChevronRight}
        hideLabel
        variant="ghost"
        onClick={() => {}}
      />
    </F0Box>
  )
}
