import { Button } from "@/components/Actions/Button"
import { AlertAvatar } from "@/experimental/Information/Avatars/AlertAvatar"
import { errorConfig } from "@/experimental/RichText/RichTextEditor/utils/types"
import { Editor } from "@tiptap/react"

interface ErrorProps {
  error: string
  closeErrorButtonLabel?: string
  editor: Editor
  errorConfig?: errorConfig
  setError: (error: string | null) => void
}

const Error = ({
  error,
  closeErrorButtonLabel,
  editor,
  errorConfig,
  setError,
}: ErrorProps) => {
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
            setError(null)
            editor.setEditable(true)
            if (errorConfig?.onClose) {
              errorConfig.onClose()
            }
          }}
          label={closeErrorButtonLabel || "Continue editing"}
          type="button"
          size="sm"
        />
      </div>
    </div>
  )
}

export { Error }
