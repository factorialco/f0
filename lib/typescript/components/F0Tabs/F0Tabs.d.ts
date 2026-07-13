import React from "react";
import type { F0TabsProps } from "./F0Tabs.types";
/**
 * Generic-preserving public export of `F0Tabs`.
 *
 * `React.memo` does not preserve generics through its inferred type, so we
 * cast the memoized component to a generic call signature. At runtime this is
 * the exact same component; only the public type surface differs.
 */
export declare const F0Tabs: <T extends string = string>(props: F0TabsProps<T>) => React.ReactElement | null;
//# sourceMappingURL=F0Tabs.d.ts.map