import { Shortcut } from "@/ui/Shortcut"

interface CommandHelpBarProps {
  navigate: string
  select: string
  cancel: string
}

export function CommandHelpBar({
  navigate,
  select,
  cancel,
}: CommandHelpBarProps) {
  return (
    <div className="flex items-center gap-4 border-t border-f1-border-secondary px-4 py-2">
      <HelpItem keys={["tab"]} label={navigate} />
      <HelpItem keys={["return"]} label={select} />
      <HelpItem keys={["esc"]} label={cancel} />
    </div>
  )
}

function HelpItem({ keys, label }: { keys: string[]; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-f1-foreground-secondary">
      <Shortcut keys={keys} />
      <span>{label}</span>
    </div>
  )
}
