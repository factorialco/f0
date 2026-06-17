import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"

import { ImageUploadErrorType } from "../../../internal/Extensions/Image"

interface ImageUploadErrorProps {
  errorType: ImageUploadErrorType
  onDismiss: () => void
}

const ImageUploadError = ({ errorType, onDismiss }: ImageUploadErrorProps) => {
  const translations = useI18n()

  const getErrorMessage = (type: ImageUploadErrorType) => {
    switch (type) {
      case "file-too-large":
        return translations.imageUpload.errors.fileTooLarge
      case "invalid-type":
        return translations.imageUpload.errors.invalidType
      default:
        return translations.imageUpload.errors.uploadFailed
    }
  }

  const message = getErrorMessage(errorType)

  return (
    <div className="mx-auto flex w-full max-w-[824px] px-14 py-2">
      <div className="flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm">
        <div className="flex w-full flex-row items-center gap-2">
          <div className="flex-shrink-0">
            <F0AvatarAlert size="sm" type="critical" />
          </div>
          <p
            className="w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical"
            title={message}
          >
            {message}
          </p>
        </div>
        <div className="flex-shrink-0">
          <F0Button
            variant="outline"
            onClick={onDismiss}
            label={translations.imageUpload.errors.dismiss}
            size="sm"
          />
        </div>
      </div>
    </div>
  )
}

export { ImageUploadError }
export type { ImageUploadErrorProps }
