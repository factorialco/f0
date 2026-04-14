import { fontSize, fontWeight } from "@factorialco/f0-core"

function remToPx(value: string): string {
  if (!value.endsWith("rem")) return value
  return `${Math.round(parseFloat(value) * 16)}px`
}

export function FontSizeTable() {
  return (
    <table className="mb-8 dark:text-f1-foreground-inverse/80">
      <thead>
        <tr>
          <th className="text-left">Class</th>
          <th className="text-left">Size</th>
          <th className="text-left">Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fontSize).map(([key, config]) => {
          const pxValue = remToPx(config.size)
          const className = key === "base" ? "" : `text-${key}`
          return (
            <tr key={key}>
              <td>
                <pre className="inline">text-{key}</pre>
              </td>
              <td>{pxValue}</td>
              <td className={className}>
                The quick brown fox jumped over the lazy dog.
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export function FontWeightTable() {
  return (
    <table className="mb-8 dark:text-f1-foreground-inverse/80">
      <thead>
        <tr>
          <th>Font Style</th>
          <th>Weight</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fontWeight).map(([key, value]) => (
          <tr key={key}>
            <td>
              <pre>font-{key}</pre>
            </td>
            <td>{value}</td>
            <td className={`font-${key}`}>
              The quick brown fox jumped over the lazy dog.
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
