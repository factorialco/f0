import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function DiscoverPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Discover", href: "/p/factorial-it/discover" }}
          actions={[]}
        />
      }
    />
  )
}
