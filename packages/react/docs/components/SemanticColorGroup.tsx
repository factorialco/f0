import { f1Colors } from "@factorialco/f0-core"

import { ColorToken } from "./ColorToken"

type F1ColorCategory = keyof typeof f1Colors

type Descriptions = Record<string, string>

type Props = {
  category: F1ColorCategory
  descriptions?: Descriptions
}

interface FlattenedToken {
  name: string
  cssColor: string
}

function flattenTokens(
  obj: Record<string, unknown>,
  prefix: string
): FlattenedToken[] {
  const result: FlattenedToken[] = []
  for (const [key, value] of Object.entries(obj)) {
    const tokenName = key === "DEFAULT" ? prefix : `${prefix}-${key}`
    if (typeof value === "string") {
      result.push({ name: tokenName, cssColor: value })
    } else if (typeof value === "object" && value !== null) {
      result.push(...flattenTokens(value as Record<string, unknown>, tokenName))
    }
  }
  return result
}

export function SemanticColorGroup({ category, descriptions = {} }: Props) {
  const tokens = flattenTokens(
    f1Colors[category] as Record<string, unknown>,
    `f1-${category}`
  )

  return (
    <div className="mt-4 space-y-2">
      {tokens.map(({ name, cssColor }) => (
        <ColorToken
          key={name}
          name={name}
          description={descriptions[name]}
          cssColor={cssColor}
        />
      ))}
    </div>
  )
}
