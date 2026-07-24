import {
  HiddenAction,
  HiddenActions,
  LockedQuestionNotice,
  LockedSectionNotice,
  QuestionType,
} from "../../types"

export type {
  HiddenAction,
  HiddenActions,
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
   * Optional notice shown in the lock tooltip when the question is locked. Use
   * it to say what this specific question is — it takes precedence over the
   * parent section's `LockedSectionNotice` and over the default question notice
   * from the i18n provider.
   */
  lockedNote?: LockedQuestionNotice
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
