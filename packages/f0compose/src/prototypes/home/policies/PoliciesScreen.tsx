import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { policiesColumns } from "./policiesColumns"
import { policies } from "./policiesData"
import { usePoliciesSource } from "./usePoliciesSource"

/**
 * The Policies screen inside the Home canvas (Figma 1350:190929): the
 * element count + the real OneDataCollection (presets, search, sort,
 * selectable rows, actions). The ONE prompt bar stays pinned below —
 * this screen only owns the scrollable content area.
 */
export function PoliciesScreen() {
  const source = usePoliciesSource()
  return (
    <div className="flex w-full flex-col gap-2 px-7 pb-6">
      <p className="text-base font-semibold text-f1-foreground">
        {policies.length} elements
      </p>
      <OneDataCollection
        source={source}
        onSelectItems={() => {}}
        visualizations={[
          { type: "table", options: { columns: policiesColumns } },
        ]}
      />
    </div>
  )
}
