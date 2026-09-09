/**
 * The popover menu primitives, shared by every "⋮" in this prototype —
 * the Recents rows, the rail user menu, the widgets drawer and the agent
 * cards.
 *
 * Lifted out of `HomeNav.tsx` when the agent cards needed the same menu
 * (2026-09-02): a screen importing its rows from the NAVIGATION would
 * have been the wrong dependency, and copying them would have been the
 * `CalGroup` duplication all over again.
 */

export function MenuRow({
  icon,
  label,
  trailing,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  trailing?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-secondary"
    >
      {icon}
      <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
        {label}
      </span>
      {trailing}
    </button>
  )
}

export function MenuDivider() {
  return <div className="-mx-1 my-1 h-px shrink-0 bg-f1-border-secondary" />
}

/** The popover surface itself, so every menu gets the same chrome. */
export function MenuSurface({
  children,
  className = "w-[180px]",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`f0c-popover flex flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}
