import { ReactNode } from "react"
import { CardContent as CardContentPrimitive } from "@/ui/Card"
import { CardMetadata } from "./CardMetadata"
import { cn } from "@/lib/utils"
import { CardMetadata as CardMetadataType } from "../types"

export type CardContentProps = {
  metadata?: CardMetadataType[]
  children?: ReactNode
  compact?: boolean
  forceVerticalMetadata?: boolean
  className?: string
}

export const CardContent = ({
  metadata,
  children,
  compact,
  className,
  forceVerticalMetadata,
}: CardContentProps) => {
  return (
    <CardContentPrimitive className={cn("pointer-events-none", className)}>
      {metadata && (
        <div
          className={cn(
            "flex flex-col gap-0.5",
            compact && "gap-x-3 gap-y-0",
            forceVerticalMetadata && "flex-col gap-y-0.5"
          )}
        >
          {metadata.map((item, index) => (
            <CardMetadata key={index} metadata={item} />
          ))}
        </div>
      )}
      {children}
    </CardContentPrimitive>
  )
}
