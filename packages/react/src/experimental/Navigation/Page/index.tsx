interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

export function Page({ children, header, embedded = false }: PageProps) {
  return (
    <div
      className={`flex min-h-full w-full flex-col overflow-hidden ${
        embedded ? "" : "xs:rounded-xl"
      } bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`}
    >
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}

Page.displayName = "Page"
