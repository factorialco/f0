import { useState } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Paperclip, Plus } from "@/icons/app"
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
 * The `+` that replaces the paperclip once a host passes `composerActions`.
 *
 * Attaching a file does not disappear when it does — it becomes the first entry
 * of the menu, contributed here rather than by the host, so "Connectors" can be
 * added without anyone rewiring the file picker.
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

  const items: DropdownItem[] = [
    ...(showAttachEntry
      ? [
          {
            label: translation.ai.attachFile,
            icon: Paperclip,
            onClick: onAttachClick,
            disabled: attachDisabled,
            disabledTooltip: attachDisabledTooltip,
          },
        ]
      : []),
    ...actions.map(({ id: _id, ...action }) => action),
  ]

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
          label={translation.ai.addToMessage}
          hideLabel
          type="button"
          icon={Plus}
          variant="outline"
          size="md"
          pressed={open}
          disabled={disabled}
        />
      </Dropdown>
    </div>
  )
}
