export const groupBy = <R>(array: R[], key: keyof R): Map<string, R[]> => {
  const result: Map<string, R[]> = new Map()

  for (const item of array) {
    const groupKey = String(item[key])

    if (!result.has(groupKey)) {
      result.set(groupKey, [])
    }

    result.get(groupKey)?.push(item)
  }

  return result
}

/** JSON-stringify with sorted object keys, so logically equal filter states
 *  always produce the same key. */
export const stableStringify = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`
  }
  if (value !== null && typeof value === "object") {
    const record = value as Record<string, unknown>
    return `{${Object.keys(record)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`)
      .join(",")}}`
  }
  return JSON.stringify(value) ?? "undefined"
}
