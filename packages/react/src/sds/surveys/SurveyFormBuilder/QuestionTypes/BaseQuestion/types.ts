import {
  HiddenAction,
  HiddenActions,
  QuestionNotice,
  QuestionType,
} from "../../types"

export type { HiddenAction, HiddenActions, QuestionNotice }

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  type: QuestionType
  children: React.ReactNode
  required?: boolean
  hiddenActions?: HiddenActions
  /**
   * Optional note shown as a tooltip when the question is locked (i.e. it sits
   * inside a locked section). Use it to say what this specific question is —
   * distinct from the section's own lock explanation. It is NOT a lock flag:
   * questions can only be locked via their section.
   */
  lockedNote?: string
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
