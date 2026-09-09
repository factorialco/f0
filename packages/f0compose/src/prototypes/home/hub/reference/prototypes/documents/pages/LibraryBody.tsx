import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo } from "react"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"
import { useNavigate, useParams } from "@/prototypes/home/hub/reference/router"

import { useLibrarySource } from "../hooks/useLibrarySource"
import { documentColumns } from "../lib/documentColumns"
import { useDocumentsState } from "../state"

/**
 * Library body — a folder/document browser. Renders the contents of the current
 * folder (`:folderId` param, absent = root). The top chips (presets) switch the
 * visibility view; clicking a folder drills in. The page shell + tabs live in
 * DocumentsLayout, so this is body-only.
 */
export function LibraryBody() {
  const { folderId } = useParams()
  const navigate = useNavigate()
  const locale = useLocale()
  const { nodes, trashNode, childCount } = useDocumentsState()

  const onOpenFolder = useCallback(
    (id: string) => navigate(`/p/documents/library/${id}`),
    [navigate]
  )
  const onDistribute = useCallback(
    () => navigate("/p/documents/library/distribute"),
    [navigate]
  )

  const source = useLibrarySource(
    nodes,
    folderId ?? null,
    onOpenFolder,
    trashNode,
    onDistribute,
    locale
  )
  const columns = useMemo(
    () => documentColumns(childCount, locale),
    [childCount, locale]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
