import { cnMerge, type CnOptions } from "tailwind-variants"

export function cn(...args: CnOptions): string {
  return (
    cnMerge(args)({
      twMerge: true,
    }) ?? ""
  )
}

/**
 * Omits specified keys from an object at runtime.
 * Used to filter blocked props (e.g. style) before spreading to primitives.
 *
 * @example
 * omitProps(rest, ["style"])
 */
export function omitProps<T extends Record<string, unknown>, K extends string>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> {
  const omitted = new Set<string>(keys)
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !omitted.has(key))
  ) as Omit<T, K>
}
