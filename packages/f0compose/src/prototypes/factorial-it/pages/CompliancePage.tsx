import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function CompliancePage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Compliance", href: "/p/factorial-it/compliance" }}
          actions={[]}
        />
      }
    />
  )
}
