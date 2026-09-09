import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { DocNode } from "../mocks/documents"

import { nodeName } from "../mocks/documents"
import { docTypeLabel, docTypeVariant } from "./docVariants"
import { formatDate, formatSize } from "./format"

const STR = {
  en: {
    name: "Name",
    type: "Type",
    owner: "Owner",
    size: "Size",
    deletedOn: "Deleted on",
  },
  es: {
    name: "Nombre",
    type: "Tipo",
    owner: "Propietario",
    size: "Tamaño",
    deletedOn: "Eliminado el",
  },
} as const

/** Columns for the Trash OneDataCollection table (soft-deleted documents). */
export function trashColumns(locale: AppLocale = "en") {
  const t = STR[locale]
  return [
    {
      id: "name",
      label: t.name,
      sorting: "name",
      render: (item: DocNode) => nodeName(item, locale),
    },
    {
      id: "type",
      label: t.type,
      render: (item: DocNode) => ({
        type: "status" as const,
        value: {
          label: docTypeLabel(item.docType ?? "other", locale),
          status: docTypeVariant(item.docType ?? "other"),
        },
      }),
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
      render: (item: DocNode) => formatSize(item.sizeKb),
    },
    {
      id: "deletedAt",
      label: t.deletedOn,
      sorting: "deletedAt",
      render: (item: DocNode) =>
        item.deletedAt ? formatDate(item.deletedAt, locale) : "—",
    },
  ]
}
