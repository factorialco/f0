import { Editor } from "@tiptap/react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

interface ErrorProps {
  error: string
  editor: Editor
  setError: (error: string | null) => void
}

const Error = ({ error, editor, setError }: ErrorProps) => {
  const i18n = useI18n()

  return (
    <div className="flex w-max max-w-full items-center gap-10 rounded-md bg-f1-background-critical p-1 drop-shadow-sm">
      <div className="flex w-full flex-row items-center gap-2">
        <div className="flex-shrink-0">
          <F0AvatarAlert size="sm" type="critical" />
        </div>
        <p
          className="w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical"
          title={error || i18n.richTextEditor.ai.defaultError}
        >
          {error || i18n.richTextEditor.ai.defaultError}
        </p>
      </div>
      <div className="mr- flex-shrink-0">
        <F0Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault()
            setError(null)
            editor.setEditable(true)
          }}
          label={i18n.richTextEditor.ai.closeErrorButtonLabel}
          size="sm"
        />
      </div>
    </div>
  )
}

export { Error }
