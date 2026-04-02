import { type CnOptions } from "tailwind-variants";
export declare function cn(...args: CnOptions): string;
/**
 * Omits specified keys from an object at runtime.
 * Used to filter blocked props (e.g. style) before spreading to primitives.
 *
 * @example
 * omitProps(rest, ["style"])
 */
export declare function omitProps<T extends Record<string, unknown>, K extends string>(obj: T, keys: readonly K[]): Omit<T, K>;
//# sourceMappingURL=utils.d.ts.map