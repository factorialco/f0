import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { DocNode } from "../mocks/documents"

import { nodeName } from "../mocks/documents"
import { visibilityLabel, visibilityVariant } from "./docVariants"
import { formatDate, formatItemCount, formatSize } from "./format"

const STR = {
  en: {
    name: "Name",
    visibility: "Visibility",
    owner: "Owner",
    size: "Size",
    updated: "Last updated",
  },
  es: {
    name: "Nombre",
    visibility: "Visibilidad",
    owner: "Propietario",
    size: "Tamaño",
    updated: "Última actualización",
  },
} as const

/**
 * Columns for the Library OneDataCollection — a mixed folder/document browser.
 * Folder rows render with a leading folder icon (the F0 `folder` cell);
 * document rows show just their name (no icon, no type column). `childCount`
 * resolves a folder's live item count (excludes trashed nodes). Renderers
 * return strings or compound `{ type, value }` cell objects — never JSX.
 */
export function documentColumns(
  childCount: (folderId: string) => number,
  locale: AppLocale = "en"
) {
  const t = STR[locale]
  return [
    {
      id: "name",
      label: t.name,
      sorting: "name",
      render: (item: DocNode) =>
        item.kind === "folder"
          ? { type: "folder" as const, value: { name: nodeName(item, locale) } }
          : nodeName(item, locale),
    },
    {
      id: "visibility",
      label: t.visibility,
      // Visibility only exists for company documents. Personal documents (and
      // folders) show an em dash — they belong to the employee, not the company.
      render: (item: DocNode) =>
        item.section === "company" && item.visibility
          ? {
              type: "status" as const,
              value: {
                label: visibilityLabel(item.visibility, locale),
                status: visibilityVariant(item.visibility),
              },
            }
          : "—",
    },
    {
      id: "owner",
      label: t.owner,
      render: (item: DocNode) => {
        if (!item.ownerId) return "—"
        const emp = findEmployee(item.ownerId)
        if (!emp) return "—"
        const [firstName, ...rest] = emp.fullName.split(" ")
        return {
          type: "avatarList" as const,
          value: {
            type: "person" as const,
            avatarList: [
              { firstName, lastName: rest.join(" "), src: emp.avatarUrl },
            ],
            max: 1,
          },
        }
      },
    },
    {
      id: "size",
      label: t.size,
      render: (item: DocNode) =>
        item.kind === "folder"
          ? formatItemCount(childCount(item.id), locale)
          : formatSize(item.sizeKb),
    },
    {
      id: "updatedAt",
      label: t.updated,
      sorting: "updatedAt",
      render: (item: DocNode) => formatDate(item.updatedAt, locale),
    },
  ]
}
