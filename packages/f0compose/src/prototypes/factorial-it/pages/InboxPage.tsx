import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function InboxPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Inbox", href: "/p/factorial-it/inbox" }}
          actions={[]}
        />
      }
    />
  )
}
