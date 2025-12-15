/**
 * Utility type to get all possible paths through an object using dot notation
 * @template T - The object type to traverse
 */
export type RecordPaths<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: K extends string
          ? T[K] extends Record<string, unknown>
            ? K | `${K}.${RecordPaths<T[K]>}`
            : K
          : never
      }[keyof T]
    : never

/**
 * Utility type to get the value type at a given path
 * @template T - The object type
 * @template P - The path string
 */
export type RecordPathValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
      ? RecordPathValue<T[K], Rest>
      : never
    : never

/**
 * Runtime function to get a value from an object using a path string
 * @template T - The object type
 * @param obj - The object to get the value from
 * @param path - The path string (e.g., 'a.b.c')
 * @returns The value at the path, or undefined if not found
 */
export function getValueByPath<T extends Record<string, unknown> | undefined | null>(
  obj: T,
  path: string
): unknown {
  if (!obj || typeof obj !== "object") {
    return undefined
  }

  const keys = path.split(".")
  let current: unknown = obj

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }

  return current
}
