import type { CSSProperties } from "react"

import { baseColors } from "@factorialco/f0-core"

import { tagDotColors, type NewColor } from "@/components/tags/F0TagDot/types"

export function getDefaultCategoryColors(filterKeys: string[]) {
  const usedColors = new Set<NewColor>()
  const colors = new Map<string, NewColor>()

  for (const filterKey of filterKeys) {
    const hash = Array.from(filterKey).reduce(
      (total, character) => total + character.charCodeAt(0),
      0
    )
    let colorIndex = hash % tagDotColors.length

    while (
      usedColors.has(tagDotColors[colorIndex]) &&
      usedColors.size < tagDotColors.length
    ) {
      colorIndex = (colorIndex + 1) % tagDotColors.length
    }

    const color = tagDotColors[colorIndex]
    colors.set(filterKey, color)
    usedColors.add(color)
  }

  return colors
}

export function getCategoryDotStyle(color: NewColor): CSSProperties {
  return {
    backgroundColor: `hsl(${baseColors[color][50]})`,
  }
}
