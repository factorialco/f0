import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

export const F0PdfViewerSkeleton = () => {
  const { pdfViewer } = useI18n()

  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label={pdfViewer.loading}
      className={cn(
        "F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden",
        "border border-solid border-f1-border-secondary"
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2 px-6 py-4">
        <Skeleton className="h-8 w-24 rounded-md" />
        <Skeleton className="h-8 w-40 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
      <div className="flex flex-1 justify-center p-4">
        <Skeleton className="h-full w-full max-w-[600px] rounded-md" />
      </div>
    </div>
  )
}
