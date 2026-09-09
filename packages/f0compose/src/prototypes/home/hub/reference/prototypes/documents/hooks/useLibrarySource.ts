import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Delete,
  Download,
  Share,
  Upload,
} from "@factorialco/f0-react/icons/app"

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import type { DocNode } from "../mocks/documents"

const STR = {
  en: {
    visibility: "Visibility",
    all: "All",
    personal: "Personal",
    company: "Company",
    public: "Public",
    private: "Private",
    name: "Name",
    lastUpdated: "Last updated",
    uploadFiles: "Upload files",
    distributeFiles: "Distribute files",
    download: "Download",
    share: "Share",
    moveToTrash: "Move to trash",
  },
  es: {
    visibility: "Visibilidad",
    all: "Todos",
    personal: "Personal",
    company: "Empresa",
    public: "Público",
    private: "Privado",
    name: "Nombre",
    lastUpdated: "Última actualización",
    uploadFiles: "Subir archivos",
    distributeFiles: "Distribuir archivos",
    download: "Descargar",
    share: "Compartir",
    moveToTrash: "Mover a la papelera",
  },
} as const

/**
 * useDataCollectionSource for the Library — a folder/document browser.
 *
 * - Shows the contents of `folderId` (null = root), excluding trashed nodes.
 * - The section `presets` render as the top chips (All / Personal / Company)
 *   and filter the visible rows. A separate Visibility filter (Public / Private)
 *   narrows company documents — visibility only exists for the Company section.
 * - Folder rows drill in via `itemOnClick`; document rows aren't clickable.
 * - At the root, "Upload files" is the toolbar primary action and "Distribute
 *   files" is a secondary action (F0 collapses it into the ⋯ overflow). Inside
 *   a folder these live in the resource header instead.
 * - `itemActions` are the per-row overflow actions (download / share / trash).
 */
export function useLibrarySource(
  nodes: DocNode[],
  folderId: string | null,
  onOpenFolder: (id: string) => void,
  trashNode: (id: string) => void,
  onDistribute: () => void,
  locale: AppLocale = "en"
) {
  const t = STR[locale]
  return useDataCollectionSource<DocNode>(
    {
      search: { enabled: true, sync: true },
      // The section chips and the Visibility filter only make sense across the
      // whole library — inside a folder the contents already share a section, so
      // drop them and keep the folder view clean (just search + sort).
      filters: folderId
        ? {}
        : {
            visibility: {
              type: "in",
              label: t.visibility,
              options: {
                options: [
                  { value: "public", label: t.public },
                  { value: "private", label: t.private },
                ],
              },
            },
          },
      currentFilters: {},
      presets: folderId
        ? undefined
        : [
            { label: t.all, filter: {} },
            { label: t.personal, filter: { section: ["personal"] } },
            { label: t.company, filter: { section: ["company"] } },
          ],
      sortings: {
        name: { label: t.name },
        updatedAt: { label: t.lastUpdated },
      },
      itemOnClick: (item) => () => {
        if (item.kind === "folder") onOpenFolder(item.id)
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedSections = Array.isArray(filters?.section)
            ? (filters.section as string[])
            : []
          const wantedVisibility = Array.isArray(filters?.visibility)
            ? (filters.visibility as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = nodes
            .filter((n) => !n.deleted)
            .filter((n) => n.parentId === folderId)
            .filter((n) =>
              wantedSections.length === 0
                ? true
                : wantedSections.includes(n.section)
            )
            // Visibility only applies to company nodes — filtering by it implicitly
            // shows the Company section (personal nodes have no visibility).
            .filter((n) =>
              wantedVisibility.length === 0
                ? true
                : n.visibility !== undefined &&
                  wantedVisibility.includes(n.visibility)
            )
            .filter((n) =>
              term === "" ? true : n.name.toLowerCase().includes(term)
            )

          // Folders always sort before documents, then by the active sorting.
          const sorted = applySort(filtered, sortings, (n, field) => {
            switch (field) {
              case "name":
                return n.name.toLowerCase()
              case "updatedAt":
                return n.updatedAt
              default:
                return null
            }
          }).sort((a, b) =>
            a.kind === b.kind ? 0 : a.kind === "folder" ? -1 : 1
          )

          const perPage = pagination?.perPage ?? 12
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      // Root toolbar: a split primary button — "Upload files" is the main
      // action, "Distribute files" sits in its caret dropdown (F0 renders an
      // array of primaryActions as a F0ButtonDropdown). Inside a folder the
      // resource header owns these instead.
      primaryActions: folderId
        ? undefined
        : () => [
            { label: t.uploadFiles, icon: Upload, onClick: () => {} },
            { label: t.distributeFiles, icon: Share, onClick: onDistribute },
          ],
      itemActions: (item: DocNode) =>
        item.kind === "folder"
          ? []
          : [
              { label: t.download, icon: Download, onClick: () => {} },
              { label: t.share, icon: Share, onClick: () => {} },
              { type: "separator" },
              {
                label: t.moveToTrash,
                icon: Delete,
                onClick: () => trashNode(item.id),
                critical: true,
              },
            ],
    },
    [nodes, folderId, onOpenFolder, trashNode, onDistribute, locale]
  )
}
