import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0EmojiPicker as F0EmojiPickerComponent } from "./F0EmojiPicker"

export {
  f0EmojiPickerSizes,
  type F0EmojiPickerProps,
  type F0EmojiPickerSize,
} from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0EmojiPicker = withDataTestId(
  experimentalComponent("F0EmojiPicker", F0EmojiPickerComponent)
)
