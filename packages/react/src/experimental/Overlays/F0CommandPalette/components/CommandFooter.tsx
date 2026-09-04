import { useI18n } from "@/lib/providers/i18n"
import { Shortcut } from "@/ui/Shortcut"

import type { CommandStage } from "../internal-types"

type CommandFooterProps = {
  stage: CommandStage
  scoped: boolean
  /** Whether the assistant's `mod+Enter` binding is live. */
  hasAssistant: boolean
}

/**
 * One quiet line teaching the gesture that matters RIGHT NOW.
 *
 * Key-and-label pairs rather than a prose sentence, and deliberately: `Shortcut`
 * draws nothing on a platform it cannot name a modifier for (mobile, or before
 * detection resolves), which would leave a sentence full of holes — "Press to
 * act on a result". A pair degrades to its label, which still reads.
 *
 * Only the keys that need teaching. Arrows move and `Enter` picks; nobody has to
 * be told, and printing them crowds out the one line that does the work.
 */
const Hint = ({ keys, label }: { keys: string[]; label: string }) => (
  <span className="inline-flex items-center gap-1">
    <Shortcut keys={keys} />
    <span>{label}</span>
  </span>
)

export const CommandFooter = ({
  stage,
  scoped,
  hasAssistant,
}: CommandFooterProps) => {
  const i18n = useI18n()
  const footer = i18n.commandPalette.footer

  return (
    <div className="flex items-center justify-center gap-4 border-0 border-t border-solid border-f1-border-secondary px-3.5 py-2 text-sm text-f1-foreground-secondary">
      {stage.kind === "param" ? (
        <Hint keys={["backspace"]} label={footer.goBack} />
      ) : scoped ? (
        <>
          <Hint keys={["backspace"]} label={footer.leaveScope} />
          <Hint keys={["tab"]} label={footer.rowActions} />
        </>
      ) : (
        <>
          <Hint keys={["/"]} label={footer.act} />
          <Hint keys={["tab"]} label={footer.rowActions} />
        </>
      )}
      {hasAssistant ? (
        <Hint keys={["cmd", "enter"]} label={footer.ask} />
      ) : null}
    </div>
  )
}
