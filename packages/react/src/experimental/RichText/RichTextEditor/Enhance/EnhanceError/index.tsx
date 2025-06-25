import { Button } from "@/components/Actions/Button"
import { AlertAvatar } from "@/experimental/exports"

interface EnhanceErrorProps {
  error: string
  onClose: () => void
  closeErrorButtonLabel?: string
}

const EnhanceError = ({
  error,
  onClose,
  closeErrorButtonLabel,
}: EnhanceErrorProps) => {
  return (
    <div className="flex w-max max-w-full items-center gap-10 rounded-md bg-f1-background-critical p-1 drop-shadow-sm">
      <div className="flex w-full flex-row items-center gap-2">
        <div className="flex-shrink-0">
          <AlertAvatar size="sm" type="critical" />
        </div>
        <p
          className="w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical"
          title={error || "Error"}
        >
          {error || "Error"}
        </p>
      </div>
      <div className="mr- flex-shrink-0">
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
          label={closeErrorButtonLabel || "Continue editing"}
          type="button"
          size="sm"
        />
      </div>
    </div>
  )
}

export { EnhanceError }
