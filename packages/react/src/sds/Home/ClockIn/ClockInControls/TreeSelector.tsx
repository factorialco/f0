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
  /** Leaf + ancestors, for the trigger — out there a leaf name can be ambiguous. */
  path: string
  /** Leaf AND every ancestor: searching "Barcelona" must find its work areas. */
  haystack: string
  icon?: IconType
  /**
   * The leaf's ancestor at each depth, outermost first — one grouping level per
   * field, which is what nests the headings instead of running the chain
   * together on one line.
   *
   * A leaf shallower than the deepest branch leaves the levels below it UNSET
   * on purpose: the grouping keeps a record with no value at a level as a row
   * of the group above, rather than bucketing it under a heading with no name.
   */
  level0?: string
  level1?: string
  level2?: string
}

/**
 * The grouping fields, outermost first. Bounded because the heading stack is
 * what the reader pays for: three is already location → workplace → work area,
 * and a fourth would indent a row off the side of a widget. A tree deeper than
 * this still works — the last level simply holds everything below it.
 */
const LEVEL_FIELDS = ["level0", "level1", "level2"] as const

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
export function flattenTree(items: TreeSelectorItem[]): {
  leaves: LeafRecord[]
  /** What each level id is called, for the headings. */
  levelNames: Map<string, string>
  /** How many grouping levels the deepest branch actually needs. */
  depth: number
} {
  const leaves: LeafRecord[] = []
  const levelNames = new Map<string, string>()
  let depth = 0

  const walk = (node: TreeSelectorItem, ancestors: TreeSelectorItem[]) => {
    if (node.children?.length) {
      node.children.forEach((child) => walk(child, [...ancestors, node]))
      return
    }

    const names = ancestors.map((ancestor) => ancestor.name)
    const trail = names.join(ANCESTOR_SEPARATOR)

    /**
     * One level per ancestor, by ID rather than by name: two subprojects called
     * "Design" under different projects are different groups, and a heading
     * looks them back up by id.
     *
     * A top-level leaf heads a group of its own — F0Select's grouping is
     * all-or-nothing (a group per record, or no groups), so there is no
     * ungrouped tail to put it in.
     */
    const levels = Object.fromEntries(
      LEVEL_FIELDS.map((field, depth) => [
        field,
        ancestors[depth]?.id ?? (depth === 0 ? node.id : undefined),
      ])
    )
    ancestors.forEach((ancestor) => levelNames.set(ancestor.id, ancestor.name))
    if (!ancestors.length) {
      levelNames.set(node.id, node.name)
    }

    leaves.push({
      id: node.id,
      name: node.name,
      ...levels,
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

  const walkDepth = (node: TreeSelectorItem, level: number) => {
    if (!node.children?.length) {
      depth = Math.max(depth, level)
      return
    }
    node.children.forEach((child) => walkDepth(child, level + 1))
  }

  items.forEach((item) => walk(item, []))
  items.forEach((item) => walkDepth(item, 0))

  return {
    leaves,
    levelNames,
    depth: Math.min(Math.max(depth, 1), LEVEL_FIELDS.length),
  }
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
  /**
   * The field's glyph while nothing is selected — and for good, when the items
   * carry no icons of their own (projects). A selected leaf's own icon wins.
   */
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
  const { leaves, levelNames, depth } = useMemo(
    () => flattenTree(items),
    [items]
  )
  /** One grouping level per depth the tree actually reaches. */
  const levelFields = useMemo(() => LEVEL_FIELDS.slice(0, depth), [depth])
  const nested = useMemo(
    () => items.some((item) => !!item.children?.length),
    [items]
  )

  /**
   * The trigger's glyph, ALWAYS through the field's own icon slot — the selected
   * leaf's icon when there is one, the fallback otherwise.
   *
   * Not through the selected option's icon, which is the other way `F0Select` can
   * show one: that renders inside the value area (`px-3`) while a field icon is
   * absolutely placed at `left-2`, so two pickers side by side sat 4px apart —
   * and worse, the icon jumped those 4px the moment you picked something.
   *
   * Options still carry their icons, for the ROWS. `F0Select` leaves the selected
   * option's icon out of the trigger whenever the field has one of its own, so
   * only this slot ever draws there.
   */
  const selectedLeaf = value
    ? leaves.find((leaf) => leaf.id === value)
    : undefined
  const triggerIcon = selectedLeaf?.icon ?? fieldIcon

  // A definition, not a `useDataSource` result: `F0Select` builds the source
  // itself. Memoized because its identity is what would otherwise refetch.
  const source = useMemo<DataSourceDefinition<LeafRecord>>(
    () => ({
      /**
       * NESTED, one level per depth: project heads the group, subproject splits
       * it, the tasks are the rows. The alternative — one level keyed on the
       * whole ancestor chain — reads as "Project · Subproject" on a single
       * heading, which flattens the very hierarchy the picker exists to show.
       *
       * The hierarchy is the picker's own, not a view the reader chooses, so
       * the selector stays hidden: picking a field there would replace the
       * whole grouping, `thenBy` included, with no way back.
       */
      grouping: {
        mandatory: true,
        hideSelector: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: Object.fromEntries(
          levelFields.map((field) => [
            field,
            {
              name: label,
              label: (groupId: unknown) =>
                levelNames.get(String(groupId)) ?? "",
            },
          ])
        ),
      },
      defaultGrouping: {
        field: levelFields[0],
        thenBy: levelFields.slice(1).map((field) => ({ field })),
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
    [leaves, label, levelFields, levelNames]
  )

  const shared = {
    label,
    hideLabel: true,
    placeholder: label,
    icon: triggerIcon,
    size: "sm" as const,
    showSearchBox: true,
    searchBoxPlaceholder: searchPlaceholder,
    // `F0Select` splits `clearable` across two union members (`?: false` and
    // `: true`), so a computed boolean matches neither and the call site needs a
    // literal. Asserted here on purpose: collapsing that public type would have
    // rippled through every export built on select props — `SelectProps`,
    // `BreadcrumbSelect`, `Breadcrumbs`, `PageHeader` — and widening a shared
    // type to spare one line here is the wrong trade. Only truthiness is read
    // downstream, so the runtime value is exactly what it says it is.
    clearable: !required as true,
    value,
    onChange,
    // Clearing goes through `onChangeSelectedOption`, not `onChange` — the empty
    // string is these pickers' "nothing chosen", the same value an unset id has.
    onChangeSelectedOption: (
      option: { value: string } | undefined,
      _checked: boolean
    ) => {
      if (!option) {
        onChange?.("")
      }
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
