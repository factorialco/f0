import { Spinner } from "@/ui/Spinner"

export const PdfLoadingState = ({ label }: { label: string }) => {
  return (
    <div
      role="status"
      aria-label={label}
      aria-live="polite"
      aria-busy={true}
      className="flex w-full items-center justify-center py-10"
    >
      <Spinner />
    </div>
  )
}
