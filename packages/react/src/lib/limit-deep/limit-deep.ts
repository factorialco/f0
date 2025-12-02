export const limitDeep = <T extends object>(obj: T, depth: number): T => {
  if (depth <= 0) {
    return obj
  }
  if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        limitDeep(value, depth - 1),
      ])
    ) as T
  }
  return obj
}
