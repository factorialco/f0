export const groupBy = <R>(array: R[], key: keyof R): Map<string, R[]> => {
  const result = new Map<string, R[]>()

  for (const item of array) {
    const groupKey = String(item[key])

    if (!result.has(groupKey)) {
      result.set(groupKey, [])
    }

    result.get(groupKey)?.push(item)
  }

  return result
}
