export const limitDeep = <T extends object>(obj: T, depth: number): T => {
  if (depth <= 0) {
    return obj
  }
  if (typeof obj === "object" && obj !== null) {
    // Preserve Date instances
    if (obj instanceof Date) {
      return obj
    }
    // Handle arrays specially - preserve as arrays but process elements
    if (Array.isArray(obj)) {
      return obj.map((item) => limitDeep(item, depth - 1)) as T
    }
    // Handle regular objects
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        limitDeep(value, depth - 1),
      ])
    ) as T
  }
  return obj
}
