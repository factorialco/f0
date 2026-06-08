import { ModuleId } from "@/components/avatars/F0AvatarModule"

/**
 * Module configuration shown in a dialog/drawer header.
 *
 * Kept in its own module (free of any F0Dialog/F0Drawer dependency) so the
 * shared `dialog-alike/common` layer can reference it without creating a
 * circular dependency back through `dialogs-alike/types`.
 */
export type DialogModule = {
  id: ModuleId
  label: string
  href: string
}
