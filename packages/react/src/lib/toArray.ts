export const toArray = <T>(value: T | T[] | undefined): T[] => {
  if (value === undefined) {
    return []
  }
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}
