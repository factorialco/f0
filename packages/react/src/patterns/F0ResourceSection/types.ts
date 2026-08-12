import { ComponentProps, ReactNode } from "react"

import { F0CardProps } from "@/components/F0Card"
import { DetailsItemContent } from "@/experimental/Lists/DetailsItem"
import { SectionHeader } from "@/patterns/SectionHeader"

type SectionHeaderAction = ComponentProps<typeof SectionHeader>["action"]

/** What kind of content the section holds. More will follow. */
export const resourceSectionVariants = [
  "details",
  "cards",
  "collection",
] as const

export type F0ResourceSectionVariant = (typeof resourceSectionVariants)[number]

export interface F0ResourceSectionHeader {
  /** The section's heading, like "Work information". */
  title: string
  /** One line under the title saying what the section holds. */
  description?: string
  /** An action on the right of the header, like Edit. Ghost unless told otherwise. */
  action?: SectionHeaderAction
}

export interface F0ResourceSectionProps {
  /**
   * The section's own id, which is what a page's rail lists and scrolls to.
   * Rendered on the section element, so it also works as a link target.
   */
  id?: string
  /** The section's header. Omit it and the section is just the items. */
  header?: F0ResourceSectionHeader
  /**
   * What the section holds:
   *
   * - `details` for label and value fields, the resource's own attributes
   * - `cards` for a grid of things you can open, like the teams a person is in
   * - `collection` for content that lays itself out, like a data collection,
   *   a chart or a map. The section gives it the heading and the spacing and
   *   stays out of the way.
   */
  variant?: F0ResourceSectionVariant
  /**
   * How many columns the content arranges into. `details` takes 1 or 2, and 2
   * matches the profile design; `cards` takes 2, 3 or 4 and defaults to 3.
   * Always one column below the breakpoint where the resource header stacks.
   * `collection` lays out its own content, so this does not apply.
   */
  columns?: 1 | 2 | 3 | 4
  /**
   * `F0ResourceSection.Item` elements in the `details` variant,
   * `F0ResourceSection.Card` elements in the `cards` one, and whatever the
   * section is about in `collection`.
   */
  children?: ReactNode
}

export interface F0ResourceSectionItemProps {
  /** What the value is, shown above it in secondary color. */
  label: string
  /**
   * The value: text, a person, a team, a tag, a file... Accepts everything
   * `DetailsItem` accepts. Omit it and the placeholder shows instead, so an
   * empty field stays visible rather than disappearing.
   */
  content?: DetailsItemContent | DetailsItemContent[]
  /** Shown when `content` is omitted. */
  placeholder?: string
}

/**
 * Everything `F0Card` takes, so a card on a resource page can do anything a card
 * does anywhere else: `compact` to sit the avatar beside the title, `otherActions`
 * for a per-card menu, `link` or `onClick` to open the thing it stands for.
 */
export type F0ResourceSectionCardProps = F0CardProps
