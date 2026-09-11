import { F0Box, F0Button } from "@factorialco/f0-react"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import { useProfile } from "../profileStore"
import { useFixedWidgets } from "../setup/widgetPreferences"
import { useWidgetCatalog } from "./model"
import { WidgetCard } from "./WidgetCard"

export function StaticWidgets() {
  const profile = useProfile()
  const builtin = useFixedWidgets(profile)
  const catalog = useWidgetCatalog(profile)
  const [, setParams] = useSearchParams()
  return (
    <F0Box
      width="96"
      maxWidth="full"
      shrink={false}
      height="full"
      overflowY="auto"
      padding="lg"
      display="flex"
      flexDirection="column"
      gap="md"
      aria-label="Home widgets"
    >
      {[...builtin, ...catalog.selectedCustom].map((id) => (
        <WidgetCard key={id} id={id} custom={catalog.custom} />
      ))}
      <F0Box
        display="flex"
        justifyContent="center"
        shrink={false}
      >
        <F0Button
          label="Edit widgets"
          icon={Pencil}
          variant="outline"
          size="md"
          onClick={() => setParams({ view: "widgets" })}
        />
      </F0Box>
    </F0Box>
  )
}
