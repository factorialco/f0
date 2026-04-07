import baseCss from "@factorialco/f0-core/base.css?raw"

import { BareColor } from "./BareColor"

function parseBareColorVars(css: string): string[] {
  const matches = css.matchAll(/--([a-z]+-\d+(?:-\d+)?)\s*:/g)
  const seen = new Set<string>()
  const result: string[] = []
  for (const [, name] of matches) {
    if (!seen.has(name) && !name.startsWith("white-")) {
      seen.add(name)
      result.push(name)
    }
  }
  return result
}

const bareColorVars = parseBareColorVars(baseCss)

export function BareColorList() {
  return (
    <div className="mb-12 mt-4 space-y-2">
      {bareColorVars.map((name) => (
        <BareColor key={name} name={name} />
      ))}
    </div>
  )
}
