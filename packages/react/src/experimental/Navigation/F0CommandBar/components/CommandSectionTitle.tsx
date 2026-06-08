interface CommandSectionTitleProps {
  title: string
}

export function CommandSectionTitle({ title }: CommandSectionTitleProps) {
  return (
    <div className="px-2 pb-1 pt-3 first:pt-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
        {title}
      </span>
    </div>
  )
}
