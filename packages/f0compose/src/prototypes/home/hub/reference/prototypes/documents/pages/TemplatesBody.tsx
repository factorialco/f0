import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import { useTemplatesSource } from "../hooks/useTemplatesSource"
import { templateColumns } from "../lib/templateColumns"
import { templates as initialTemplates } from "../mocks/templates"

/** Templates body — reusable document templates. */
export function TemplatesBody() {
  const locale = useLocale()
  const [templates] = useState(initialTemplates)
  const source = useTemplatesSource(templates, locale)
  const columns = useMemo(() => templateColumns(locale), [locale])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
