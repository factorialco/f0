import { useState } from "react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { trainingsListColumns } from "./trainingsListColumns"
import { useTrainingsListSource } from "./useTrainingsListSource"
import { CreateCourseDialog } from "./CreateCourseDialog"

interface Props {
  onOpenTraining: (id: string) => void
}

export function TrainingsListTab({ onOpenTraining }: Props) {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const source = useTrainingsListSource(onOpenTraining, () => setShowCreateDialog(true))
  return (
    <>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: { columns: trainingsListColumns },
          },
        ]}
      />
      <CreateCourseDialog
        isOpen={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onCreate={() => setShowCreateDialog(false)}
      />
    </>
  )
}
