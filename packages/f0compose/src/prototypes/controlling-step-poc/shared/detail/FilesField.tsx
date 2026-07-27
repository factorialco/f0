import { F0Box, F0Button, F0Icon, F0Text } from "@factorialco/f0-react"
import { Delete, Paperclip, Upload } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

/**
 * Files section — recreation of the real Factorial expense form's
 * "Files" block: a drag-and-drop dropzone above a list of attached
 * files (each removable). Visual-only for the prototype — the
 * dropzone doesn't perform a real upload; it's seeded with the
 * expense's existing attachment so the demo reads true.
 *
 * Local state only, kept out of RHF for the same reason as the Tax /
 * Cost-center widgets.
 */
export function FilesField(props: { initialFiles?: string[] }) {
  const [files, setFiles] = useState<string[]>(
    () => props.initialFiles ?? ["signed_invoice.pdf"]
  )

  const remove = (name: string) =>
    setFiles((prev) => prev.filter((f) => f !== name))

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {/* Dropzone — visual affordance only */}
      <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-f1-border bg-f1-background-secondary px-4 py-8 text-center">
        <F0Icon icon={Upload} size="md" />
        <F0Text content="Drag and drop here or click to browse." variant="body" />
      </div>

      {/* Attached files */}
      {files.map((name) => (
        <F0Box
          key={name}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="sm"
          paddingX="md"
          paddingY="sm"
          border="default"
          borderRadius="md"
        >
          <F0Icon icon={Paperclip} size="sm" />
          <F0Box grow>
            <F0Text content={name} variant="body" />
          </F0Box>
          <F0Button
            variant="outline"
            size="md"
            icon={Delete}
            label={`Remove ${name}`}
            hideLabel
            onClick={() => remove(name)}
          />
        </F0Box>
      ))}
    </F0Box>
  )
}
