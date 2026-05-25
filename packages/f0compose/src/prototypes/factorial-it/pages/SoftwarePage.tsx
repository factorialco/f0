import { F0Box, F0Heading, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

type SoftwareLicense = {
  id: string
  name: string
  vendor: string
  seatsUsed: number
  seatsTotal: number
  renewalDate: string
}

const licenses: SoftwareLicense[] = [
  { id: "sw-001", name: "Figma", vendor: "Figma Inc.", seatsUsed: 12, seatsTotal: 15, renewalDate: "2026-08-01" },
  { id: "sw-002", name: "GitHub Enterprise", vendor: "GitHub", seatsUsed: 28, seatsTotal: 30, renewalDate: "2026-06-15" },
  { id: "sw-003", name: "Slack Pro", vendor: "Salesforce", seatsUsed: 40, seatsTotal: 50, renewalDate: "2026-11-30" },
  { id: "sw-004", name: "1Password Teams", vendor: "AgileBits", seatsUsed: 7, seatsTotal: 10, renewalDate: "2026-07-20" },
]

export function SoftwarePage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Software", href: "/p/factorial-it/software" }}
          actions={[]}
        />
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading content="Software Overview" variant="heading-large" as="h2" />
            <F0Box display="grid" columns="1" gap="md" lg={{ columns: "3" }}>
              <F0Box display="flex" flexDirection="column" gap="sm" padding="md" border="default" borderRadius="md">
                <F0Heading content="Licenses" variant="heading" as="h3" />
                <p>12</p>
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="sm" padding="md" border="default" borderRadius="md">
                <F0Heading content="Seats Used" variant="heading" as="h3" />
                <p>87</p>
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="sm" padding="md" border="default" borderRadius="md">
                <F0Heading content="Renewal Due" variant="heading" as="h3" />
                <p>3</p>
              </F0Box>
            </F0Box>
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading content="Software Licenses" variant="heading-large" as="h2" />
            <F0Box display="flex" flexDirection="column" gap="sm">
              {licenses.map((license) => (
                <F0Box key={license.id} display="flex" justifyContent="between" padding="md" border="default" borderRadius="md">
                  <F0Box display="flex" flexDirection="column" gap="xs">
                    <F0Heading as="h4" content={license.name} />
                    <p>{license.vendor}</p>
                  </F0Box>
                  <F0Box display="flex" flexDirection="column" gap="xs">
                    <p style={{ textAlign: "right" }}>{license.seatsUsed} / {license.seatsTotal} seats</p>
                    <p style={{ textAlign: "right" }}>Renews {license.renewalDate}</p>
                  </F0Box>
                </F0Box>
              ))}
            </F0Box>
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
