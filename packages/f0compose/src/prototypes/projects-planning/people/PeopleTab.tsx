import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { peopleColumns } from "./peopleColumns"
import { usePeopleSource } from "./usePeopleSource"

export function PeopleTab({
  onOpenPerson,
}: {
  onOpenPerson: (id: string) => void
}) {
  const source = usePeopleSource(onOpenPerson)
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: peopleColumns } },
      ]}
    />
  )
}
