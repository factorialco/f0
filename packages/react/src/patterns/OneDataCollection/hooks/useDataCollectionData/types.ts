import { RecordType, UseDataReturn } from "@/hooks/datasource"

/**
 * Hook return type for useData
 */
export type UseDataCollectionDataReturn<R extends RecordType> =
  UseDataReturn<R> & {
    summaries?: R // Add summaries to the return type
  }
