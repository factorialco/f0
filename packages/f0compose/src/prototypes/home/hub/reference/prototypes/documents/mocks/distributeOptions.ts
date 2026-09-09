/**
 * The "Send in bulk" distribution methods shown on the Distribute files screen.
 * Presentational option cards (not domain data) — kept here so the page stays
 * free of inline arrays.
 */
import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

export type DistributeOption = {
  id: string
  title: string
  description: string
  /** Spanish copy — shown when the global locale is "es". */
  title_es: string
  description_es: string
}

export const distributeOptions: DistributeOption[] = [
  {
    id: "payslips",
    title: "Payslips",
    description:
      "Distribute payslips that are automatically matched with each employee's information.",
    title_es: "Nóminas",
    description_es:
      "Distribuye nóminas que se asocian automáticamente con la información de cada empleado.",
  },
  {
    id: "same-file",
    title: "Same file to everyone",
    description:
      "Send a copy of the files you upload to one or several employees.",
    title_es: "Mismo archivo para todos",
    description_es:
      "Envía una copia de los archivos que subas a uno o varios empleados.",
  },
  {
    id: "personal-files",
    title: "Personal files",
    description:
      "Distribute payslips and other documents that contain the information of the employees.",
    title_es: "Archivos personales",
    description_es:
      "Distribuye nóminas y otros documentos que contienen la información de los empleados.",
  },
  {
    id: "document-template",
    title: "Document template",
    description:
      "Distribute smart documents that contain employee information or fillable capabilities.",
    title_es: "Plantilla de documento",
    description_es:
      "Distribuye documentos inteligentes que contienen información del empleado o campos rellenables.",
  },
]

/** Locale-aware copy for an option. */
export function optionTitle(
  option: DistributeOption,
  locale: AppLocale = "en"
): string {
  return locale === "es" ? option.title_es : option.title
}
export function optionDescription(
  option: DistributeOption,
  locale: AppLocale = "en"
): string {
  return locale === "es" ? option.description_es : option.description
}
