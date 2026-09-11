import {
  F0Box,
  F0Button,
  F0Dialog,
  F0Link,
  F0Text,
} from "@factorialco/f0-react"
import { useState } from "react"

import { ONE_USAGE } from "../setup/mock-data"

/** One shared footer for every composer, including Home and the contextual panel. */
export function PermissionsNote() {
  const [details, setDetails] = useState<"permissions" | "usage" | null>(null)
  const percentage = Math.round((ONE_USAGE.used / ONE_USAGE.total) * 100)
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
            variant="description"
          />
          <F0Link onClick={() => setDetails("permissions")}>See more</F0Link>
        </F0Box>
        <F0Box shrink={false}>
          <F0Button
            label={`${ONE_USAGE.plan} · ${percentage}%`}
            tooltip="View One usage"
            variant="ghost"
            size="sm"
            onClick={() => setDetails("usage")}
          />
        </F0Box>
      </F0Box>
      <F0Dialog
        isOpen={details !== null}
        onClose={() => setDetails(null)}
        title={details === "usage" ? "One usage" : "One permissions"}
        width="sm"
      >
        <F0Box display="flex" flexDirection="column" gap="md" padding="lg">
          {details === "usage" ? (
            <>
              <F0Text content={`${ONE_USAGE.plan} plan`} variant="label" />
              <F0Text
                content={`${ONE_USAGE.used} of ${ONE_USAGE.total} credits used · ${percentage}%`}
              />
              <F0Text
                content="Sample usage for this prototype."
                variant="description"
              />
            </>
          ) : (
            <>
              <F0Text content="One can only access information and actions available to you in Factorial." />
              <F0Text content="You review requests before anything is approved or sent." />
              <F0Text
                content="This prototype uses sample data and does not change real permissions."
                variant="description"
              />
            </>
          )}
        </F0Box>
      </F0Dialog>
    </>
  )
}
