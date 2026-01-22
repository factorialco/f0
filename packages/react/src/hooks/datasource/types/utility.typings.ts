import { Observable } from "zen-observable-ts"

import { PromiseState } from "@/lib/promise-to-observable"

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export type PromiseOrObservable<T> =
  | T
  | Promise<T>
  | Observable<PromiseState<T>>
