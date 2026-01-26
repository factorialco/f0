import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"

/**
 * Props for the F0AiCollapsibleMessage component
 */
export interface F0AiCollapsibleMessageProps {
  /**
   * Icon to display in the collapsible trigger
   */
  icon: IconType
  /**
   * Title text for the collapsible trigger
   */
  title: string
  /**
   * Content to show when expanded
   */
  children: ReactNode
}
