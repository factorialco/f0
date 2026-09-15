import { documents } from "./reference/prototypes/documents/mocks/documents"

/**
 * The Library's own root — the folders first, then the loose files — so
 * the Files panel can list what is actually in there rather than only
 * the places you can go (Angel, 2026-09-14). Read straight from the
 * imported prototype's fixture, so the panel and the screen cannot
 * disagree about what exists.
 */
export function libraryTree() {
  const root = documents.filter(
    (node) => !node.deleted && node.parentId === null
  )
  const folders = root.filter((node) => node.kind === "folder")
  const files = root.filter((node) => node.kind !== "folder")
  return [...folders, ...files]
}
