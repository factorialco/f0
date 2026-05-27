import type { GraphEdge, GraphNode } from "@/patterns/F0Graph"
import type { RecordType } from "@/hooks/datasource"

import type { GraphEdgeAdapter, GraphNodeAdapter } from "./types"

/**
 * Resolve a record's stable identifier using the OneDataCollection three-step
 * fallback (mirrors Kanban): `source.idProvider(item, index)` → `item.id` →
 * `String(index)`. Always coerced to `string`.
 *
 * TODO(Phase 1 follow-up): hoist this to `OneDataCollection/utils/` if no
 * shared util already exists. For now the helper is duplicated locally and in
 * `Kanban.tsx` to avoid widening Phase 1 surface.
 */
export function getRecordKey<R extends RecordType>(
  item: R,
  index: number,
  idProvider: ((item: R, index: number) => string | number) | undefined
): string {
  if (idProvider) return String(idProvider(item, index))
  const fallbackId = (item as unknown as { id?: string | number }).id
  return fallbackId !== undefined && fallbackId !== null
    ? String(fallbackId)
    : String(index)
}

export type ProjectGraphInput<R extends RecordType> = {
  records: ReadonlyArray<R>
  nodeAdapter: GraphNodeAdapter<R>
  edgeAdapter?: GraphEdgeAdapter<R>
  idProvider: ((item: R, index: number) => string | number) | undefined
  /**
   * Optional matched-id set. When provided, records whose key is NOT in this
   * set are omitted from `nodes`, and any edge incident on a removed node is
   * also omitted. Subtree of a removed parent is removed (no orphan promotion).
   */
  matchedIds?: ReadonlySet<string>
  /** When true, throw on duplicate keys. Defaults to false (warn-only). */
  strictDuplicates?: boolean
}

export type ProjectGraphResult<R extends RecordType> = {
  nodes: ReadonlyArray<GraphNode<R>>
  edges: ReadonlyArray<GraphEdge>
  /** Record keys participating in a parent-link cycle. */
  cycles: ReadonlyArray<string>
  /** Record keys that resolved to a duplicate id and were dropped. */
  duplicates: ReadonlyArray<string>
}

type Adapted<R> = {
  key: string
  record: R
  parentId: string | null
  parentIds?: string[]
  childrenCount?: number
  childrenLoaded?: boolean
}

/**
 * Pure projection: turns the source's records into F0Graph's `nodes`/`edges`,
 * applies hard-removal filtering, and reports topology problems (duplicate
 * keys, cycles) so the caller can surface them.
 */
export function projectGraph<R extends RecordType>(
  input: ProjectGraphInput<R>
): ProjectGraphResult<R> {
  const { records, nodeAdapter, edgeAdapter, idProvider, matchedIds } = input

  // 1. Adapt records → intermediate with stable keys.
  const adapted: Adapted<R>[] = []
  const duplicates: string[] = []
  const seen = new Map<string, number>()
  records.forEach((record, index) => {
    const key = getRecordKey(record, index, idProvider)
    if (seen.has(key)) {
      duplicates.push(key)
      if (input.strictDuplicates) {
        throw new Error(
          `Graph visualization: duplicate record key "${key}" produced by idProvider/item.id fallback. Records must have unique keys.`
        )
      }
      return
    }
    seen.set(key, index)
    const linkage = nodeAdapter(record)
    adapted.push({
      key,
      record,
      parentId: linkage.parentId,
      parentIds: linkage.parentIds,
      childrenCount: linkage.childrenCount,
      childrenLoaded: linkage.childrenLoaded,
    })
  })

  // 2. Resolve hard-removal: build the set of keys that survive the filter,
  // then drop any record whose ancestor chain crosses a removed parent.
  const keptKeys = new Set<string>()
  if (matchedIds) {
    const byKey = new Map(adapted.map((a) => [a.key, a]))
    const cache = new Map<string, boolean>()
    const survives = (key: string, stack: Set<string>): boolean => {
      const cached = cache.get(key)
      if (cached !== undefined) return cached
      if (stack.has(key)) {
        // Cycle while walking ancestors — treat as surviving to avoid hiding
        // it for the wrong reason; the cycle detector below logs it.
        cache.set(key, true)
        return true
      }
      const node = byKey.get(key)
      if (!node) {
        cache.set(key, false)
        return false
      }
      if (!matchedIds.has(key)) {
        cache.set(key, false)
        return false
      }
      const parents = node.parentIds?.length
        ? node.parentIds
        : node.parentId !== null
          ? [node.parentId]
          : []
      if (parents.length === 0) {
        cache.set(key, true)
        return true
      }
      stack.add(key)
      // A node survives if every known parent survives. Parents that do not
      // exist in the record set are ignored (treated as missing roots), not
      // as "removed", so subtrees of filtered-in records with missing parents
      // still render.
      const allParentsOk = parents.every((p) => {
        if (!byKey.has(p)) return true
        return survives(p, stack)
      })
      stack.delete(key)
      cache.set(key, allParentsOk)
      return allParentsOk
    }
    for (const a of adapted) {
      if (survives(a.key, new Set())) keptKeys.add(a.key)
    }
  } else {
    for (const a of adapted) keptKeys.add(a.key)
  }

  const kept = adapted.filter((a) => keptKeys.has(a.key))
  const keptByKey = new Map(kept.map((a) => [a.key, a]))

  // 3. Cycle detection — walk parent linkage on the kept set, drop any edge
  // that would close a cycle, and report participating keys.
  const cycles = new Set<string>()
  const visiting = new Set<string>()
  const visited = new Set<string>()
  const droppedEdges = new Set<string>() // "child|parent"
  const walk = (key: string, stack: string[]): void => {
    if (visited.has(key)) return
    if (visiting.has(key)) {
      // Closing a cycle on this key. Drop the edge that took us back here.
      const cycleStart = stack.indexOf(key)
      const cycleNodes =
        cycleStart >= 0 ? stack.slice(cycleStart) : [...stack, key]
      for (const c of cycleNodes) cycles.add(c)
      // The offending edge is the one from the previous stack entry into `key`.
      const previous = stack[stack.length - 1]
      if (previous !== undefined) droppedEdges.add(`${previous}|${key}`)
      return
    }
    visiting.add(key)
    stack.push(key)
    const node = keptByKey.get(key)
    if (node) {
      const parents = node.parentIds?.length
        ? node.parentIds
        : node.parentId !== null
          ? [node.parentId]
          : []
      for (const p of parents) {
        if (!keptByKey.has(p)) continue
        walk(p, stack)
      }
    }
    stack.pop()
    visiting.delete(key)
    visited.add(key)
  }
  for (const a of kept) walk(a.key, [])

  // 4. Project nodes.
  const projectedNodes: GraphNode<R>[] = kept.map((a) => {
    // Drop parent links that close a cycle so F0Graph never sees an invalid
    // topology; the cycle list is reported to the caller for a single warn.
    const parentIdsCleaned = a.parentIds?.filter(
      (p) => !droppedEdges.has(`${a.key}|${p}`)
    )
    const parentIdCleaned =
      a.parentId !== null && droppedEdges.has(`${a.key}|${a.parentId}`)
        ? null
        : a.parentId
    const node: GraphNode<R> = {
      id: a.key,
      parentId: parentIdCleaned,
      data: a.record,
    }
    if (parentIdsCleaned && parentIdsCleaned.length > 0) {
      node.parentIds = parentIdsCleaned
    }
    if (a.childrenCount !== undefined) node.childrenCount = a.childrenCount
    if (a.childrenLoaded !== undefined) node.childrenLoaded = a.childrenLoaded
    return node
  })

  // 5. Project edges — either through the adapter or derived from parent linkage.
  let projectedEdges: GraphEdge[]
  if (edgeAdapter) {
    const keptRecords = kept.map((a) => a.record)
    projectedEdges = edgeAdapter(keptRecords).filter(
      (e) =>
        keptByKey.has(e.source) &&
        keptByKey.has(e.target) &&
        !droppedEdges.has(`${e.target}|${e.source}`)
    ) as GraphEdge[]
  } else {
    projectedEdges = []
    for (const a of kept) {
      const parents = a.parentIds?.length
        ? a.parentIds
        : a.parentId !== null
          ? [a.parentId]
          : []
      for (const p of parents) {
        if (!keptByKey.has(p)) continue
        if (droppedEdges.has(`${a.key}|${p}`)) continue
        projectedEdges.push({
          id: `${p}->${a.key}`,
          source: p,
          target: a.key,
        })
      }
    }
  }

  return {
    nodes: projectedNodes,
    edges: projectedEdges,
    cycles: Array.from(cycles),
    duplicates,
  }
}
