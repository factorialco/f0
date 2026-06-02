import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function SettingsPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Settings", href: "/p/factorial-it/settings" }}
          actions={[]}
        />
      }
    />
  )
}
