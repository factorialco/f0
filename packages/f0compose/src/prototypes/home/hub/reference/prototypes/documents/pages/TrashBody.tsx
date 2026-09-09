import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useMemo } from "react"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import { useTrashSource } from "../hooks/useTrashSource"
import { trashColumns } from "../lib/trashColumns"
import { useDocumentsState } from "../state"

/** Trash body — soft-deleted documents with restore / delete-forever actions. */
export function TrashBody() {
  const locale = useLocale()
  const { nodes, restoreNode, deleteForever } = useDocumentsState()
  const source = useTrashSource(nodes, restoreNode, deleteForever, locale)
  const columns = useMemo(() => trashColumns(locale), [locale])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
