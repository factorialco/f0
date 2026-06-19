import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function SecurityPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Security", href: "/p/factorial-it/security" }}
          actions={[]}
        />
      }
    />
  )
}
