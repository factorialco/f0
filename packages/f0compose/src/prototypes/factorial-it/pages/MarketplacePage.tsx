import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function MarketplacePage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Marketplace", href: "/p/factorial-it/marketplace" }}
          actions={[]}
        />
      }
    />
  )
}
