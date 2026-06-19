import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function TicketsPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Tickets", href: "/p/factorial-it/tickets" }}
          actions={[]}
        />
      }
    />
  )
}
