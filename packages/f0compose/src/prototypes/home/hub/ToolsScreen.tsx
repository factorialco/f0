import { F0Icon } from "@factorialco/f0-react"
import { useSearchParams } from "react-router-dom"

import { goHome } from "../one/conversationStore"
import { usePlan, PLAN_MODULES } from "../planStore"
import { useProfile } from "../profileStore"
import { ADMIN_HUB, EMPLOYEE_HUB, filterHub, HUB_ICONS } from "./hubCatalog"
import { hubSlug } from "./hubSlug"

/**
 * The Tools canvas: the catalog itself, so the rail's Tools item lands
 * somewhere (Angel, 2026-09-14 — every first-level item changes the
 * content). Deliberately NOT `ModuleScreen`, whose empty state says there
 * is no sample content: this screen's content is the modules.
 *
 * Same `filterHub` the panel calls, so the two agree on what the company
 * has.
 */
export function ToolsScreen() {
  const profile = useProfile()
  const plan = usePlan()
  const groups = filterHub(
    profile === "employee" ? EMPLOYEE_HUB : ADMIN_HUB,
    PLAN_MODULES[plan]
  )
  const [, setSearchParams] = useSearchParams()
  return (
    <div className="home-canvas-scroll flex h-full w-full min-w-0 flex-col gap-8 overflow-y-auto px-7 pb-8 pt-6">
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-3">
          <p className="text-sm font-medium text-f1-foreground-secondary">
            {group.label}
          </p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
            {group.items.map((label) => (
              <button
                key={label}
                onClick={() => {
                  goHome()
                  setSearchParams({ view: hubSlug(label) })
                }}
                className="f0c-pressable flex cursor-pointer items-center gap-2 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3 text-left hover:bg-f1-background-secondary"
              >
                {HUB_ICONS[label] && (
                  <F0Icon icon={HUB_ICONS[label]} size="md" color="default" />
                )}
                <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
