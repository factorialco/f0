import { Skeleton } from "@/ui/skeleton"

interface PdfLoadingStateProps {
  label: string
  width: number
  height: number
}

export const PdfLoadingState = ({
  label,
  width,
  height,
}: PdfLoadingStateProps) => {
  return (
    <div
      role="status"
      aria-label={label}
      aria-live="polite"
      aria-busy={true}
      className="F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4"
    >
      <Skeleton
        style={{ width, height }}
        className="rounded-lg border border-solid border-f1-border-secondary shadow-md"
      />
    </div>
  )
}
