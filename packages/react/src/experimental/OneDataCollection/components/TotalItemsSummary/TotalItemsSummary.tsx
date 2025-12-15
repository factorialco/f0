import { Skeleton } from "@/ui/skeleton"

type TotalItemsSummaryProps = {
  /** Whether the total item summary is ready */
  isReady: boolean
  /** The total item summary result */
  totalItemSummaryResult?: string | null
}

export const TotalItemsSummary = ({ isReady, totalItemSummaryResult }: TotalItemsSummaryProps) => {
  return (
    <div className="flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold">
      {!isReady ? (
        <Skeleton className="h-5 w-24" />
      ) : (
        <div className="flex h-5 items-center"> {totalItemSummaryResult}</div>
      )}
    </div>
  )
}
