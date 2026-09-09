import { StandardLayout } from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo, useState } from "react"

import { Outlet } from "@/prototypes/home/hub/reference/router"

import { DocumentsHeader } from "../components/DocumentsHeader"
import { documents as initialDocuments } from "../mocks/documents"
import { DocumentsStateContext } from "../state"

/**
 * Layout route for the Documents prototype. Owns the LIVE node tree (so
 * trash / restore / delete actually mutate and re-render Library + Trash) and
 * the PERSISTENT page shell (`Page` + route-aware `DocumentsHeader` +
 * `StandardLayout`). Only `<Outlet/>` swaps between tabs/folders, so the
 * header never flashes.
 */
export function DocumentsLayout() {
  const [nodes, setNodes] = useState(initialDocuments)

  const trashNode = useCallback((id: string) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              deleted: true,
              deletedAt: new Date().toISOString().slice(0, 10),
            }
          : n
      )
    )
  }, [])

  const restoreNode = useCallback((id: string) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, deleted: false, deletedAt: undefined } : n
      )
    )
  }, [])

  const deleteForever = useCallback((id: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const childCount = useCallback(
    (folderId: string) =>
      nodes.filter((n) => n.parentId === folderId && !n.deleted).length,
    [nodes]
  )

  const findNode = useCallback(
    (id: string) => nodes.find((n) => n.id === id),
    [nodes]
  )

  const store = useMemo(
    () => ({
      nodes,
      trashNode,
      restoreNode,
      deleteForever,
      childCount,
      findNode,
    }),
    [nodes, trashNode, restoreNode, deleteForever, childCount, findNode]
  )

  return (
    <DocumentsStateContext.Provider value={store}>
      <Page embedded header={<DocumentsHeader />}>
        <StandardLayout>
          <Outlet />
        </StandardLayout>
      </Page>
    </DocumentsStateContext.Provider>
  )
}
