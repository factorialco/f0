import { BaseResponse } from "./fetch.typings"
import { RecordType } from "./records.typings"

type ChildrenResponseType = "basic" | "detailed"

export type ChildrenResponse<R extends RecordType> =
  | BaseResponse<R>
  | R[]
  | { records: R[] & { type?: ChildrenResponseType } }
