import {
  F0Box,
  F0Dialog,
  F0Link,
  F0RadialProgressChart,
  F0Text,
} from "@factorialco/f0-react"
import { useState } from "react"

import { ONE_USAGE } from "../setup/mock-data"

/** Shared by every One composer. Usage is informative, never an action. */
export function PermissionsNote() {
  const [details, setDetails] = useState(false)
  return (
    <>
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="sm"
        paddingY="sm"
        paddingX="sm"
        data-one-footer
      >
        <F0Box display="flex" alignItems="center" flexWrap="wrap" gap="xs">
          <F0Text
            content="One works within your permissions."
            variant="small"
          />
          <F0Link
            className="text-sm text-f1-foreground-secondary"
            onClick={() => setDetails(true)}
          >
            See more
          </F0Link>
        </F0Box>
        <F0Box
          display="flex"
          alignItems="center"
          gap="sm"
          shrink={false}
          data-one-usage
        >
          <F0Text content={ONE_USAGE.plan} variant="small" />
          <F0Box
            width="4"
            height="4"
            role="meter"
            aria-label="One credits used"
            aria-valuemin={0}
            aria-valuemax={ONE_USAGE.total}
            aria-valuenow={ONE_USAGE.used}
          >
            <F0RadialProgressChart
              value={ONE_USAGE.used}
              max={ONE_USAGE.total}
              color="categorical-2"
            />
          </F0Box>
        </F0Box>
      </F0Box>
      <F0Dialog
        isOpen={details}
        onClose={() => setDetails(false)}
        title="One permissions"
        width="sm"
      >
        <F0Box display="flex" flexDirection="column" gap="md" padding="lg">
          <F0Text content="One can only access information and actions available to you in Factorial." />
          <F0Text content="You review requests before anything is approved or sent." />
          <F0Text
            content="This prototype uses sample data and does not change real permissions."
            variant="description"
          />
        </F0Box>
      </F0Dialog>
    </>
  )
}
