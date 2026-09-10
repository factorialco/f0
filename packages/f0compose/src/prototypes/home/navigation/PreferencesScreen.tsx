import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { useEffect, useState } from "react"

import {
  PROFILE_LABELS,
  setProfile,
  useProfile,
  type ProfileId,
} from "../profileStore"
/** Keeps the existing prototype's profile and appearance controls under Preferences. */
export function PersonalPreferencesScreen() {
  const profile = useProfile()
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
    </F0Box>
  )
}
