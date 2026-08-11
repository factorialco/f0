import { useMemo } from "react"

import type { IconType } from "@/components/F0Icon"
import { F0Select } from "@/components/F0Select"
import type { DataSourceDefinition } from "@/hooks/datasource"

/**
 * A node in one of the tile's pickers — a location, a project, anything you pick
 * by drilling down. `children` nests it, and a node WITHOUT children is a LEAF:
 * only leaves are selectable, which is what lets the hierarchy show as F0Select
 * group headings instead of an invented indent.
 *
 * Two or three levels is what reads well — location → workplace → work area,
 * project → subproject: the leaf names the row and its ancestors name the group
 * above it. Deeper nests still work; the heading just carries a longer chain.
 */
export type TreeSelectorItem = {
  id: string
  name: string
  icon?: IconType
  children?: TreeSelectorItem[]
}

/** One selectable leaf, flattened: what it is, what it sits under, how to find it. */
type LeafRecord = {
  id: string
  name: string
  /** The ancestor chain, which becomes the group heading. */
  group: string
  /** Leaf + ancestors, for the trigger — out there a leaf name can be ambiguous. */
  path: string
  /** Leaf AND every ancestor: searching "Barcelona" must find its work areas. */
  haystack: string
  icon?: IconType
}

/** Ancestors read as a trail; the leaf is set apart from them. */
const ANCESTOR_SEPARATOR = " · "
const PATH_SEPARATOR = " — "

/**
 * How many leaves a page of the dropdown holds. Small enough that a real book of
 * work or a real building list actually pages rather than arriving in one go.
 */
const PER_PAGE = 20

/**
 * Every leaf of the tree, in order, each carrying the context its row and trigger
 * need.
 *
 * A TOP-LEVEL leaf heads a group of its own — F0Select's grouping is
 * all-or-nothing (a group per record, or no groups), so there is no ungrouped
 * tail to put it in. In a list that nests nowhere the caller skips grouping
 * entirely, so this only shows up in mixed lists.
 */
export function flattenTree(items: TreeSelectorItem[]): LeafRecord[] {
  const leaves: LeafRecord[] = []

  const walk = (node: TreeSelectorItem, ancestors: TreeSelectorItem[]) => {
    if (node.children?.length) {
      node.children.forEach((child) => walk(child, [...ancestors, node]))
      return
    }

    const names = ancestors.map((ancestor) => ancestor.name)
    const trail = names.join(ANCESTOR_SEPARATOR)

    leaves.push({
      id: node.id,
      name: node.name,
      group: names.length ? trail : node.name,
      path: names.length ? `${node.name}${PATH_SEPARATOR}${trail}` : node.name,
      haystack: [node.name, ...names].join(" ").toLowerCase(),
      // The glyph that means something is usually the ROOT's (Office, Home,
      // Business trip) — a work area rarely has its own, so the nearest one up
      // the chain stands in for it.
      icon:
        node.icon ??
        [...ancestors].reverse().find((ancestor) => ancestor.icon)?.icon,
    })
  }

  items.forEach((item) => walk(item, []))
  return leaves
}

/** The selected leaf, wherever it sits in the tree. */
export const findLeaf = (
  items: TreeSelectorItem[],
  id: string | undefined
): TreeSelectorItem | undefined =>
  id ? flattenTreeNodes(items).find((node) => node.id === id) : undefined

const flattenTreeNodes = (items: TreeSelectorItem[]): TreeSelectorItem[] =>
  items.flatMap((item) => [item, ...flattenTreeNodes(item.children ?? [])])

export interface TreeSelectorProps {
  items: TreeSelectorItem[]
  value?: string
  onChange?: (value: string) => void
  /** The picker's label, also the empty trigger's placeholder. */
  label: string
  /** Placeholder for the search box. Falls back to F0Select's own wording. */
  searchPlaceholder?: string
  /** A fixed glyph for the field, when the items don't carry their own. */
  fieldIcon?: IconType
  /** When false the picker offers a clear affordance. */
  required?: boolean
  disabled?: boolean
}

/**
 * The tile's picker for a tree of options: an `F0Select` the component owns and
 * builds from data, so a Home tile can't be handed a node that breaks its layout.
 *
 * Nesting arrives as F0Select GROUPS — the ancestor chain heads the group, its
 * leaves are the options under it. Grouping only kicks in when something actually
 * nests; in a flat list a heading per option would just repeat it.
 *
 * SEARCH AND PAGING are on, because these lists grow to hundreds and scrolling a
 * nested one to find a single work area is not a way to book time. The nested path
 * fetches through an infinite-scroll adapter and matches search against the leaf
 * AND its ancestors; the flat path leaves search to F0Select over `options`.
 *
 * It uses F0Select's OWN trigger rather than a `children` one: that path renders
 * the trigger as a `div`, which a keyboard can't reach (`SelectTrigger asChild`
 * over a plain element). The field is a real, focusable trigger, at `sm` because
 * it sits inside a widget.
 */
export function TreeSelector({
  items,
  value,
  onChange,
  label,
  searchPlaceholder,
  fieldIcon,
  required = true,
  disabled,
}: TreeSelectorProps) {
  const leaves = useMemo(() => flattenTree(items), [items])
  const nested = useMemo(
    () => items.some((item) => !!item.children?.length),
    [items]
  )

  // A definition, not a `useDataSource` result: `F0Select` builds the source
  // itself. Memoized because its identity is what would otherwise refetch.
  const source = useMemo<DataSourceDefinition<LeafRecord>>(
    () => ({
      grouping: {
        mandatory: true,
        hideSelector: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          group: { name: label, label: (groupId) => String(groupId) },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        perPage: PER_PAGE,
        // Synchronous: the records are already here. This is the shape a real
        // consumer's endpoint would fill in — search in, one page out — so the
        // dropdown pages and searches the same way either side of the wire.
        fetchData: ({ search, pagination }) => {
          const term = search?.trim().toLowerCase()
          const matching = term
            ? leaves.filter((leaf) => leaf.haystack.includes(term))
            : leaves

          const perPage = pagination.perPage ?? PER_PAGE
          const cursor = Number(
            ("cursor" in pagination ? pagination.cursor : null) ?? 0
          )
          const nextCursor = cursor + perPage

          return {
            type: "infinite-scroll" as const,
            records: matching.slice(cursor, nextCursor),
            total: matching.length,
            perPage,
            cursor: String(nextCursor),
            hasMore: nextCursor < matching.length,
          }
        },
      },
    }),
    [leaves, label]
  )

  const shared = {
    label,
    hideLabel: true,
    placeholder: label,
    icon: fieldIcon,
    size: "sm" as const,
    showSearchBox: true,
    searchBoxPlaceholder: searchPlaceholder,
    clearable: !required,
    value,
    onChange,
    // Clearing goes through `onChangeSelectedOption`, not `onChange` — the empty
    // string is these pickers' "nothing chosen", the same value an unset id has.
    onChangeSelectedOption: (
      option: { value: string } | undefined,
      _checked: boolean
    ) => {
      if (!option) onChange?.("")
    },
    disabled,
  }

  return nested ? (
    <F0Select<string, LeafRecord>
      {...shared}
      source={source}
      mapOptions={(leaf) => ({
        value: leaf.id,
        label: leaf.name,
        icon: leaf.icon,
        // The row is read under its group heading, so it stays short. The TRIGGER
        // has no heading above it — there, the leaf carries its whole path.
        selectedLabel: leaf.path,
      })}
    />
  ) : (
    <F0Select
      {...shared}
      options={leaves.map((leaf) => ({
        value: leaf.id,
        label: leaf.name,
        icon: leaf.icon,
      }))}
    />
  )
}
