import { useState } from "react"
import { F0Button } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Plus } from "@factorialco/f0-react/icons/app"

import { goalColumns } from "./goalColumns"
import { useGoalTreeSource } from "./useGoalTreeSource"
import { NewGoalModal } from "../shared/NewGoalModal"

export function TreeListView() {
  const { addGoal: _addGoal, ...source } = useGoalTreeSource()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <F0Button
          label="Add goal"
          icon={Plus}
          variant="default"
          onClick={() => setModalOpen(true)}
        />
      </div>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: goalColumns,
            },
          },
        ]}
      />
      <NewGoalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => {
          setModalOpen(false)
        }}
      />
    </div>
  )
}
