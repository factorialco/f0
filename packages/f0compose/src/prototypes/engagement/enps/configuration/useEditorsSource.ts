import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Delete } from "@factorialco/f0-react/icons/app"
import { configEditors, type Editor } from "./editorsFixtures"

export function useEditorsSource() {
  return useDataCollectionSource<Editor>(
    {
      dataAdapter: {
        fetchData: () => ({
          records: configEditors,
        }),
      },
      itemActions: () => [
        { label: "Remove", icon: Delete, onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
