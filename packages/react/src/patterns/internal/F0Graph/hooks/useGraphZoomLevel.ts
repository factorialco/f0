import { useEffect, useMemo, useRef } from "react"

import type { ZoomLevel, ZoomPreset, ZoomThresholds } from "../types"

import { zoomPresets } from "../types"

const DEFAULT_HYSTERESIS = 0.05

interface UseGraphZoomLevelOptions {
  preset?: ZoomPreset
  thresholds?: ZoomThresholds
  hysteresis?: number
}

export function useGraphZoomLevel(
  zoomFactor: number,
  options?: UseGraphZoomLevelOptions
): ZoomLevel {
  const lastStableLevel = useRef<ZoomLevel>("detail")

  const resolvedThresholds = useMemo((): ZoomThresholds => {
    if (options?.thresholds) return options.thresholds
    const preset = options?.preset ?? "default"
    return { ...zoomPresets[preset] }
  }, [options?.thresholds, options?.preset])

  const hysteresis = options?.hysteresis ?? DEFAULT_HYSTERESIS

  const level = useMemo((): ZoomLevel => {
    const prev = lastStableLevel.current
    const t = resolvedThresholds

    // Compute raw level (no hysteresis)
    const rawLevel = computeRawLevel(zoomFactor, t)

    // Apply hysteresis: shift thresholds based on direction of change
    const levelWithHysteresis = computeLevelWithHysteresis(
      zoomFactor,
      t,
      prev,
      hysteresis
    )

    // If hysteresis keeps us at current level, stay; otherwise use raw
    const nextLevel = levelWithHysteresis === prev ? prev : rawLevel

    return nextLevel
  }, [zoomFactor, resolvedThresholds, hysteresis])

  // Update the stable ref in an effect — useMemo is not guaranteed to
  // execute exactly once per dep change (Strict Mode, future React).
  useEffect(() => {
    lastStableLevel.current = level
  }, [level])

  return level
}

function computeRawLevel(zoom: number, thresholds: ZoomThresholds): ZoomLevel {
  if (zoom >= thresholds.detail) return "detail"
  if (zoom >= thresholds.compact) return "compact"
  return "dot"
}

function computeLevelWithHysteresis(
  zoom: number,
  thresholds: ZoomThresholds,
  currentLevel: ZoomLevel,
  hysteresis: number
): ZoomLevel {
  // When transitioning away from current level, require crossing
  // threshold + hysteresis margin. When staying, use threshold - margin.
  const margin = hysteresis

  switch (currentLevel) {
    case "detail": {
      // To leave detail, zoom must drop below (detail - margin)
      if (zoom >= thresholds.detail - margin) return "detail"
      return computeRawLevel(zoom, thresholds)
    }
    case "compact": {
      // To go up to detail, zoom must exceed (detail + margin)
      if (zoom >= thresholds.detail + margin) return "detail"
      // To go down to dot, zoom must drop below (compact - margin)
      if (zoom >= thresholds.compact - margin) return "compact"
      return computeRawLevel(zoom, thresholds)
    }
    case "dot": {
      // To go up to compact, zoom must exceed (compact + margin)
      if (zoom >= thresholds.compact + margin) return "compact"
      return "dot"
    }
  }
}
