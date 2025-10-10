import { ModuleId, modules } from "@/components/avatars/F0AvatarModule"

export const mockModuleId = (index: number): ModuleId => {
  const moduleIds = Object.keys(modules)
  return (moduleIds[index % moduleIds.length] ?? "analytics") as ModuleId
}
