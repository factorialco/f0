import { RecordType } from "./records.typings"

export type NestedVariant = "basic" | "detailed"
export type NestedResponseWithType<R extends RecordType> = {
  records: R[]
  type?: NestedVariant
  paginationInfo?: ChildrenPaginationInfo
}

export type ChildrenPaginationInfo = {
  total: number
  perPage: number
  currentPage: number
  pagesCount: number
  hasMore: boolean
}

export type ChildrenResponse<R extends RecordType> = NestedResponseWithType<R>
