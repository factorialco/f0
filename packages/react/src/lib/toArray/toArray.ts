export const toArray = <T>(value: T | T[] | undefined | null): T[] => {
  if (value === undefined || value === null) {
    return []
  }
  return Array.isArray(value) ? value : [value]
}
