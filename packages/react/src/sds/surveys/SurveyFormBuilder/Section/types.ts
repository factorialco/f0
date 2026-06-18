import { LockedSectionNotice, QuestionElement } from "../types"

export type SectionProps = {
  id: string
  /**
   * Section heading. Optional — a section may have no title (e.g. a predefined,
   * blocked section that leads with a `notice` instead). In the editable view an
   * empty title shows a placeholder so authors can add one; when the section is
   * locked/read-only an empty title is hidden entirely.
   */
  title?: string
  description?: string
  locked?: boolean
  /**
   * Optional explanation surfaced in the lock tooltip (authoring view only).
   * Pair with `locked` to say why a predefined section can't be edited or moved.
   */
  notice?: LockedSectionNotice
  questions?: QuestionElement[]
}
