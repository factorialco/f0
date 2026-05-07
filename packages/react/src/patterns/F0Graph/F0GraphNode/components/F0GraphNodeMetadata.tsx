import type { ReactNode } from "react"

import { textVariants } from "@/ui/Text/variants"

export interface F0GraphNodeMetadataProps {
  children?: ReactNode
}

export function F0GraphNodeMetadata({ children }: F0GraphNodeMetadataProps) {
  return (
    <div
      className={
        textVariants({ variant: "description" }) +
        " flex flex-wrap gap-1 text-xs"
      }
    >
      {children}
    </div>
  )
}

F0GraphNodeMetadata.displayName = "F0GraphNodeMetadata"
