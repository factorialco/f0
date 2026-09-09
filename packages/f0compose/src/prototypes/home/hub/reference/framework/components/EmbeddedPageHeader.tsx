import type { ComponentProps } from "react"

import { F0Box } from "@factorialco/f0-react"
import {
  Breadcrumbs,
  PageHeader as SourcePageHeader,
} from "@factorialco/f0-react/dist/experimental"

import { homeHref } from "../../router"

/** Home already owns the page title and agent entry. Retain only nested breadcrumbs from the imported header. */
export function PageHeader({
  module,
  breadcrumbs = [],
}: ComponentProps<typeof SourcePageHeader>) {
  if (!breadcrumbs.length) return null
  return (
    <F0Box padding="md">
      <Breadcrumbs
        breadcrumbs={[
          {
            id: module.href,
            label: module.name,
            href: homeHref(module.href),
            module: module.id,
          },
          ...breadcrumbs.map((item) => ({
            ...item,
            ...("href" in item && item.href
              ? { href: homeHref(item.href) }
              : {}),
          })),
        ]}
      />
    </F0Box>
  )
}
