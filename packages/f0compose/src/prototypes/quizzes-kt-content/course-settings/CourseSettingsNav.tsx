import { F0TableOfContent } from "@factorialco/f0-react/dist/experimental"
import { strings } from "./state"

const s = strings.settings

/**
 * Left section nav for the course Settings screen — mirrors production's
 * `EditionWindow` left rail: one icon+label entry per edit section that swaps
 * the visible step via the URL (`/settings`, `/settings/internal`, …). The
 * active entry is derived from the current path.
 */
export function CourseSettingsNav({ active = "completion", onSelect = () => {} }: { active?: string; onSelect?: (id: string) => void }) {
  const navigate = (path: string) => onSelect(path)

  const items = [
    { id: "basic", label: s.secBasic, onClick: () => navigate("basic") },
    { id: "internal", label: s.secInternal, onClick: () => navigate("internal") },
    { id: "completion", label: s.secCompletion, onClick: () => navigate("completion") },
    { id: "enrollment", label: s.secEnrollment, onClick: () => navigate("enrollment") },
    { id: "collaborators", label: s.secCollaborators, onClick: () => navigate("collaborators") },
  ]

  return <F0TableOfContent items={items} activeItem={active} />
}
