import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function DevicesPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Devices", href: "/p/factorial-it/devices" }}
          actions={[]}
        />
      }
    />
  )
}
