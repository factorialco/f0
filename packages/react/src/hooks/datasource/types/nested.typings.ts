import { InfiniteScrollPaginatedResponse } from "./fetch.typings"
import { RecordType } from "./records.typings"

export type NestedVariant = "basic" | "detailed"
export type NestedResponseWithType<R extends RecordType> = {
  records: R[]
  type?: NestedVariant
  paginationInfo?: ChildrenPaginationInfo<R>
}

export type ChildrenPaginationInfo<R extends RecordType> = Omit<
  InfiniteScrollPaginatedResponse<R>,
  "type" | "records"
>
export type ChildrenResponse<R extends RecordType> = NestedResponseWithType<R>
