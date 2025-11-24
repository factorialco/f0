import { BaseResponse } from "./fetch.typings"
import { RecordType } from "./records.typings"

export type NestedVariant = "basic" | "detailed"
export type NestedResponseWithType<R extends RecordType> = {
  records: R[]
  type?: NestedVariant
}

export type ChildrenResponse<R extends RecordType> =
  | BaseResponse<R>
  | R[]
  | NestedResponseWithType<R>
