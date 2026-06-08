import type { ActionType } from "./types"
import type { InternalActionType } from "./ItemContainer"

/**
 * Convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
export const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string
): InternalActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText }
  }

  return action
}
