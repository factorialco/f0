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
   * Optional notice shown in the lock tooltip when the question is locked (i.e.
   * it sits inside a locked section). Use it to say what this specific question
   * is — it takes precedence over the section's own `LockedSectionNotice`. It is
   * NOT a lock flag: questions can only be locked via their section.
   */
  lockedNote?: LockedQuestionNotice
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
