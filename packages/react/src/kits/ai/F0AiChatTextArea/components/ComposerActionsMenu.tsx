import { useState } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Add, Paperclip } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import type { AiChatComposerAction } from "../../F0AiChat/types"

interface ComposerActionsMenuProps {
  actions: AiChatComposerAction[]
  /** Whether the file picker earns its entry — i.e. the host configured `fileAttachments`. */
  showAttachEntry: boolean
  onAttachClick: () => void
  /** `maxFiles` reached: the file entry alone goes dead, the host's actions don't. */
  attachDisabled?: boolean
  attachDisabledTooltip?: string
  /** Transcribing: nothing in the composer is actionable, so the trigger closes down. */
  disabled?: boolean
}

/**
 * The host's entries, in the shape `Dropdown` takes. The two models are kept
 * apart on purpose: `AiChatComposerAction` carries an `id` for the host's own
 * bookkeeping and admits only what the composer's menu supports, so `Dropdown`
 * can grow a kind of row without that becoming public API here.
 */
const toDropdownItems = (actions: AiChatComposerAction[]): DropdownItem[] =>
  actions.map((action): DropdownItem => {
    if (action.type === "separator") {
      return { type: "separator" }
    }

    if (action.type === "submenu") {
      const { id: _id, type: _type, actions: children, ...visuals } = action
      return {
        ...visuals,
        type: "submenu",
        items: toDropdownItems(children),
      }
    }

    if (action.type === "toggle") {
      // The public word is `toggle` and `Dropdown`'s is `switch`: one names what
      // you do to the row, the other what the row wears. Renaming either to
      // match would be worse than this line.
      const { id: _id, type: _type, ...visuals } = action
      return { ...visuals, type: "switch" }
    }

    const { id: _id, type: _type, ...visuals } = action
    return visuals
  })

/**
 * The `+` that replaces the paperclip once a host passes `composerActions`.
 *
 * Attaching a file does not disappear when it does — it becomes the first entry
 * of the menu, contributed here rather than by the host, so "Connectors" can be
 * added without anyone rewiring the file picker. A rule follows it: what the
 * composer owns and what the host brought are not the same kind of thing.
 *
 * Split out of `ActionBar` because that file already carries the recording
 * layout and the three-cell row; the menu's item mapping and its split disabled
 * states do not need to be read to follow either.
 */
export const ComposerActionsMenu = ({
  actions,
  showAttachEntry,
  onAttachClick,
  attachDisabled,
  attachDisabledTooltip,
  disabled,
}: ComposerActionsMenuProps) => {
  const translation = useI18n()
  // Tracked only so the trigger can show its open state. `Dropdown` hands
  // `pressed` to the default trigger it builds itself, but a custom one like
  // ours gets only `disabled` through its cloneElement — so without this the `+`
  // would look identical open and closed.
  const [open, setOpen] = useState(false)

  const attachEntry: DropdownItem[] = showAttachEntry
    ? [
        {
          label: translation.ai.addFilesOrPhotos,
          icon: Paperclip,
          onClick: onAttachClick,
          disabled: attachDisabled,
          disabledTooltip: attachDisabledTooltip,
        },
        // A rule between what the composer owns and what the host brought —
        // only when there is something on the other side of it.
        ...(actions.length > 0 ? [{ type: "separator" } as DropdownItem] : []),
      ]
    : []

  const items: DropdownItem[] = [...attachEntry, ...toDropdownItems(actions)]

  return (
    // Clicks are STOPPED here rather than bubbling to the form, whose onClick
    // focuses the textarea — the same guard `toolbarStart` and the suggestion
    // chips take. Without it, opening the menu would immediately pull focus out
    // of it and back into the field, so the arrow keys would never reach the
    // items. The paperclip could skip this because the native file dialog takes
    // focus off the page entirely.
    <div onClick={(event) => event.stopPropagation()}>
      <Dropdown
        items={items}
        align="start"
        disabled={disabled}
        open={open}
        onOpenChange={setOpen}
      >
        <ButtonInternal
          label={translation.ai.addToConversation}
          hideLabel
          type="button"
          icon={Add}
          variant="outline"
          size="md"
          pressed={open}
          disabled={disabled}
        />
      </Dropdown>
    </div>
  )
}
