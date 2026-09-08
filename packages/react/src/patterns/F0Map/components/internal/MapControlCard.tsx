import type { ReactNode } from "react"
import { F0Box } from "@/lib/F0Box"
import { mapSurfaceBlur, mapSurfaceProps, mapSurfaceRadius } from "./mapSurface"

/**
 * A group of overlay controls on the shared map surface. Used by the navigation
 * controls and the panel toggle, so the two read as one control language.
 */
export const MapControlCard = ({ children }: { children: ReactNode }) => (
  <div className={mapSurfaceBlur(mapSurfaceRadius.control)}>
    {/* 2px of breathing room around the buttons. Below F0Box's `xs` (4px), so
        it lives on the inner stack rather than as a padding token. */}
    <F0Box
      {...mapSurfaceProps}
      borderRadius={mapSurfaceRadius.control}
      padding="none"
    >
      <div className="flex flex-col items-center gap-1 p-0.5">{children}</div>
    </F0Box>
  </div>
)
