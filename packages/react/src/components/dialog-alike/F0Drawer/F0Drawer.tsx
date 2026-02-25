import { WithDataTestIdProps } from "@/lib/data-testid"

import { dialogAlikePrivateProps } from "../common/types"
import { DrawerInternal } from "./internal/DrawerInternal"
import { DrawerInternalProps } from "./internal/internal-types"

const privateProps = dialogAlikePrivateProps

export type F0DrawerProps = Omit<
  DrawerInternalProps,
  (typeof privateProps)[number]
> &
  WithDataTestIdProps

const F0Drawer = (props: F0DrawerProps) => {
  const publicProps = privateProps.reduce<
    DrawerInternalProps & WithDataTestIdProps
  >(
    (acc, key) => {
      const { [key as keyof DrawerInternalProps]: _, ...rest } = acc
      return rest as DrawerInternalProps & WithDataTestIdProps
    },
    props as DrawerInternalProps & WithDataTestIdProps
  )

  return <DrawerInternal {...publicProps} />
}

F0Drawer.displayName = "F0Drawer"

export { F0Drawer }
