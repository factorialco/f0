import { Shortcut } from "@/ui/Shortcut"
import type { CommandRow, CommandStage } from "../internal-types"
import type { ResolvedCommandLabels } from "../labels"

type CommandFooterProps = {
  labels: ResolvedCommandLabels
  stage: CommandStage
  scoped: boolean
  /** Whether the assistant's `mod+Enter` binding is live. */
  hasAssistant: boolean

  row?: CommandRow
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
  labels,
  stage,
  scoped,
  hasAssistant,
  row,
}: CommandFooterProps) => {
  const footer = labels.footer

  const hints = [
    ...(stage.kind === "param"
      ? [
          { keys: ["enter"], label: footer.choose },
          { keys: ["backspace"], label: footer.goBack },
        ]
      : scoped
        ? [{ keys: ["backspace"], label: footer.leaveScope }]
        : [
            ...(row?.scopeRef
              ? [{ keys: ["tab"], label: footer.actions }]
              : []),
            ...((row?.rowActions?.length ?? 0) > 0
              ? [{ keys: ["→"], label: footer.rowActions }]
              : []),
          ]),
    ...(hasAssistant ? [{ keys: ["cmd", "enter"], label: footer.ask }] : []),
  ]

  /*
    NOTHING TO TEACH, NOTHING TO DRAW. Every hint here is conditional — the
    stage's own, the row's, and the assistant's — so they can all be absent at
    once: at the root, with no assistant configured, on a row that is a plain
    verb with neither a reference to commit nor controls of its own. The bordered
    band still rendered, which read as a strip of the panel that had failed to
    load rather than as a legend with nothing in it.
  */
  if (hints.length === 0) {
    return null
  }

  return (
    <div className="flex items-center justify-center gap-4 border-0 border-t border-solid border-f1-border-secondary px-3.5 py-2 text-sm text-f1-foreground-secondary">
      {hints.map((hint) => (
        <Hint key={hint.label} keys={hint.keys} label={hint.label} />
      ))}
    </div>
  )
}
