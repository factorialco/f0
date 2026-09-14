import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { useEffect, useState } from "react"

import { PLAN_LABELS, setPlan, usePlan, type PlanId } from "../planStore"
import {
  PROFILE_LABELS,
  setProfile,
  useProfile,
  type ProfileId,
} from "../profileStore"
/** Keeps the existing prototype's profile and appearance controls under Preferences. */
export function PersonalPreferencesScreen() {
  const profile = useProfile()
  const plan = usePlan()
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("f0compose:theme") ?? "light"
  )
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem("f0compose:theme", theme)
  }, [theme])
  return (
    <F0Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <F0Heading content="Preferences" variant="heading-large" />
      <F0Text content="Appearance" variant="label" />
      <F0Box display="flex" gap="sm">
        <F0Button
          label="Light"
          variant={theme === "light" ? "default" : "outline"}
          onClick={() => setTheme("light")}
        />
        <F0Button
          label="Dark"
          variant={theme === "dark" ? "default" : "outline"}
          onClick={() => setTheme("dark")}
        />
      </F0Box>
      <F0Text content="Prototype preview" variant="label" />
      <F0Box display="flex" gap="sm">
        {(["admin", "employee"] as ProfileId[]).map((id) => (
          <F0Button
            key={id}
            label={`View as ${PROFILE_LABELS[id].toLowerCase()}`}
            variant={profile === id ? "default" : "outline"}
            onClick={() => setProfile(id)}
          />
        ))}
      </F0Box>
      {/* Simulated entitlements (Angel, 2026-09-14): with few modules
          contracted the rail shows them directly instead of a generic
          "Tools" door. Here rather than in the user menu — it is a
          prototype control, not a product feature. */}
      <F0Text content="Contracted modules" variant="label" />
      <F0Box display="flex" gap="sm">
        {(["full", "time", "time-people"] as PlanId[]).map((id) => (
          <F0Button
            key={id}
            label={PLAN_LABELS[id]}
            variant={plan === id ? "default" : "outline"}
            onClick={() => setPlan(id)}
          />
        ))}
      </F0Box>
    </F0Box>
  )
}
