/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { ComponentProps } from "react"

export type FileCellValue = ComponentProps<typeof F0AvatarFile>["file"]

export const FileCell = (args: FileCellValue) => (
  <div
    className="text-f1-text-default text-md flex items-center gap-2 font-medium"
    data-cell-type="file"
  >
    <F0AvatarFile file={args} /> <span>{args.name}</span>
  </div>
)
