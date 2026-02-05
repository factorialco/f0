import type { IconType } from "@/components/F0Icon"

/**
 * A single FAQ item with question and answer
 */
export interface F0FAQItem {
  /** Unique identifier for the FAQ item */
  id: string
  /** The question text */
  question: string
  /** The answer text */
  answer: string
}

/**
 * Props for the F0FAQCard component
 */
export interface F0FAQCardProps {
  /**
   * Optional icon shown in the card header
   * @default Question icon
   */
  headerIcon?: IconType
  /**
   * Array of FAQ items to display
   */
  items: F0FAQItem[]
  /**
   * Initially expanded item ID (uncontrolled mode)
   */
  defaultExpandedId?: string
  /**
   * Currently expanded item ID (controlled mode)
   */
  expandedId?: string
  /**
   * Callback when an item is expanded/collapsed (controlled mode)
   */
  onExpandedChange?: (id: string | null) => void
  /**
   * Whether multiple items can be expanded at once
   * @default false
   */
  allowMultiple?: boolean
}
