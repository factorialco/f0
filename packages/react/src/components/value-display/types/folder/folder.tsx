/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { Folder } from "@/icons/app"

import { IconCell } from "../icon"

interface FolderValue {
  name: string
}
export type FolderCellValue = FolderValue

export const FolderCell = (args: FolderCellValue) => (
  <IconCell icon={Folder} label={args.name} />
)
