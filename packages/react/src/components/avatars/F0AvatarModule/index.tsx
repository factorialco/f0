import { withDataTestId } from "@/lib/data-testid"

import { F0AvatarModule as _F0AvatarModule } from "./F0AvatarModule"

export * from "./modules"
export type { F0AvatarModuleProps } from "./F0AvatarModule"
export const F0AvatarModule = withDataTestId(_F0AvatarModule)
