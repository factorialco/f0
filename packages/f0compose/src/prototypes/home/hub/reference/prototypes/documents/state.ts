import { createContext, useContext } from "react"

import type { DocNode } from "./mocks/documents"

/**
 * Prototype store for Documents. Holds the LIVE node tree so interactions
 * actually work: moving a document to Trash flips `deleted`, restoring flips it
 * back, and both the Library and Trash collections re-render off the same data.
 */
type DocumentsStore = {
  /** Every node (folders + documents, including trashed). */
  nodes: DocNode[]
  /** Soft-delete a document → it leaves the Library and appears in Trash. */
  trashNode: (id: string) => void
  /** Restore a trashed document back to its folder. */
  restoreNode: (id: string) => void
  /** Permanently remove a node from the prototype. */
  deleteForever: (id: string) => void
  /** Live child count of a folder, excluding trashed nodes. */
  childCount: (folderId: string) => number
  /** Look up a node by id. */
  findNode: (id: string) => DocNode | undefined
}

export const DocumentsStateContext = createContext<DocumentsStore | null>(null)

export function useDocumentsState(): DocumentsStore {
  const store = useContext(DocumentsStateContext)
  if (!store) {
    throw new Error("useDocumentsState must be used inside DocumentsLayout")
  }
  return store
}
