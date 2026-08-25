import type maplibregl from "maplibre-gl"
import { useEffect, useState } from "react"

import type { F0MapPoint } from "../types"

export interface F0MapClusterData {
  id: string
  /** Centroid `[lng, lat]` of the clustered points. */
  coordinates: [number, number]
  count: number
  pointIds: string[]
  /** Bounding box of the leaves, for zoom-to-expand on click. */
  bounds: [[number, number], [number, number]]
}

export interface F0MapClusterResult {
  clusters: F0MapClusterData[]
  singles: F0MapPoint[]
}

/**
 * Dependency-free screen-space clustering: points whose projected positions
 * fall within `radius` px of each other at the current zoom are grouped. It
 * recomputes on move/zoom/resize, so clusters split apart as you zoom in. A
 * greedy single pass — good for workplace-scale datasets; swap for supercluster
 * if point counts grow into the thousands.
 *
 * Two-tier sensitivity: a lone marker only pairs off with another when they are
 * nearly touching (`radius`), but once a cluster has formed it keeps absorbing
 * points within the looser `clusterRadius`. This keeps individual markers
 * distinct while still gathering the rest of a dense pocket into one pile.
 */
export const useClusters = (
  map: maplibregl.Map | null,
  points: F0MapPoint[],
  enabled: boolean,
  radius = 12,
  clusterRadius = 164
): F0MapClusterResult => {
  const [result, setResult] = useState<F0MapClusterResult>({
    clusters: [],
    singles: points,
  })

  useEffect(() => {
    if (!map || !enabled) {
      setResult({ clusters: [], singles: points })
      return
    }

    let raf = 0
    const recompute = () => {
      const projected = points.map((p) => map.project(p.coordinates))
      const n = points.length
      const markerR2 = radius * radius
      const clusterR2 = clusterRadius * clusterRadius
      const dist2 = (a: number, b: number) => {
        const dx = projected[a].x - projected[b].x
        const dy = projected[a].y - projected[b].y
        return dx * dx + dy * dy
      }

      // Union-find over the points.
      const parent = Array.from({ length: n }, (_, i) => i)
      const find = (x: number): number => {
        while (parent[x] !== x) x = parent[x] = parent[parent[x]]
        return x
      }
      const union = (a: number, b: number) => {
        const ra = find(a)
        const rb = find(b)
        if (ra !== rb) parent[ra] = rb
      }

      // "Core" points nearly touch a neighbour (tight `radius`) — only these
      // seed a cluster, so isolated markers stay individual.
      const core = new Array(n).fill(false)
      for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
          if (dist2(i, j) <= markerR2) {
            core[i] = core[j] = true
            union(i, j)
          }
      // A cluster then swallows everything within the looser `clusterRadius` of
      // any core point, so a dense pocket collapses into one pile rather than a
      // cluster ringed by leftover labelled dots. Non-core points can't extend
      // the reach, which keeps genuinely separate markers from chaining in.
      for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
          if ((core[i] || core[j]) && dist2(i, j) <= clusterR2) union(i, j)

      const groups = new Map<number, number[]>()
      for (let i = 0; i < n; i++) {
        const r = find(i)
        const g = groups.get(r)
        if (g) g.push(i)
        else groups.set(r, [i])
      }

      const clusters: F0MapClusterData[] = []
      const singles: F0MapPoint[] = []
      for (const idxs of groups.values()) {
        if (idxs.length === 1) {
          singles.push(points[idxs[0]])
          continue
        }
        let lng = 0
        let lat = 0
        let minLng = Infinity
        let minLat = Infinity
        let maxLng = -Infinity
        let maxLat = -Infinity
        for (const k of idxs) {
          const [gl, ga] = points[k].coordinates
          lng += gl
          lat += ga
          minLng = Math.min(minLng, gl)
          maxLng = Math.max(maxLng, gl)
          minLat = Math.min(minLat, ga)
          maxLat = Math.max(maxLat, ga)
        }
        const count = idxs.length
        clusters.push({
          id: `cluster:${idxs
            .map((k) => points[k].id)
            .sort()
            .join(",")}`,
          coordinates: [lng / count, lat / count],
          count,
          pointIds: idxs.map((k) => points[k].id),
          bounds: [
            [minLng, minLat],
            [maxLng, maxLat],
          ],
        })
      }
      // Bail out when membership hasn't changed (the common case per frame
      // during pan/zoom): returning the previous object keeps every downstream
      // identity stable, so the marker layer doesn't re-render. Cluster ids
      // encode their members (centroid/bounds derive from them), and singles
      // are references into `points`, so these checks cover the whole shape.
      setResult((prev) => {
        const same =
          prev.clusters.length === clusters.length &&
          prev.singles.length === singles.length &&
          prev.clusters.every((c, i) => c.id === clusters[i].id) &&
          prev.singles.every((s, i) => s === singles[i])
        return same ? prev : { clusters, singles }
      })
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(recompute)
    }
    schedule()
    map.on("move", schedule)
    map.on("zoom", schedule)
    map.on("resize", schedule)
    return () => {
      cancelAnimationFrame(raf)
      map.off("move", schedule)
      map.off("zoom", schedule)
      map.off("resize", schedule)
    }
  }, [map, points, enabled, radius, clusterRadius])

  return result
}
