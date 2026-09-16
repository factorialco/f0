import {
  HiddenAction,
  HiddenActions,
  LockedFields,
  LockedQuestionNotice,
  LockedSectionNotice,
  QuestionType,
} from "../../types"

export type {
  HiddenAction,
  HiddenActions,
  LockedFields,
  LockedQuestionNotice,
  LockedSectionNotice,
}

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  type: QuestionType
  children: React.ReactNode
  required?: boolean
  hiddenActions?: HiddenActions
  /**
   * Locks the question on its own — independent of any section. A question is
   * also locked when its containing section is locked.
   */
  locked?: boolean
  /**
   * Freezes only the named fields, leaving the rest of the question editable —
   * the actions menu included, so it can still be made optional, duplicated or
   * removed. Use it when the wording is what the consumer depends on: a
   * question whose answer feeds a validated field stops meaning the same thing
   * once it is renamed, while deleting it is a legitimate choice.
   *
   * `locked` is the stronger form and wins: a locked question (or one inside a
   * locked section) freezes everything regardless of this.
   */
  lockedFields?: LockedFields
  /**
   * Optional notice shown in the lock tooltip when the question is locked. Use
   * it to say what this specific question is — it takes precedence over the
   * parent section's `LockedSectionNotice` and over the default question notice
   * from the i18n provider.
   *
   * Also used by `lockedFields`, where saying which part is frozen and why is
   * the only cue the author gets.
   */
  lockedNote?: LockedQuestionNotice
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
