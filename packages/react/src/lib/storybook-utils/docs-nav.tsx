const defaultItems = [
  { label: "Overview", href: "#overview" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Code", href: "#code" },
  { label: "Examples", href: "#examples" },
] as const

export interface DocsNavProps {
  items?: ReadonlyArray<{ label: string; href: string }>
}

/** Compact in-page navigation shared by authored Storybook documentation. */
export function DocsNav({ items = defaultItems }: DocsNavProps) {
  return (
    <nav aria-label="Documentation sections">
      <ul className="!m-0 flex list-none flex-wrap gap-x-3 gap-y-1 !p-0">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-sm font-medium text-f1-foreground-secondary no-underline hover:text-f1-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
