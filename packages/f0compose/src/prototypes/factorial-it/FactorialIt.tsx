import { F0Box, F0Heading, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { PrototypeMeta } from "../types"

type ItAsset = {
  id: string
  name: string
  type: "laptop" | "monitor" | "keyboard" | "mouse" | "headset"
  status: "active" | "archived" | "maintenance"
  assignedTo: string | null
  purchaseDate: string
}

const seedAssets: ItAsset[] = [
  {
    id: "it-001",
    name: "MacBook Pro 16 M3",
    type: "laptop",
    status: "active",
    assignedTo: "Samuel",
    purchaseDate: "2024-01-15",
  },
  {
    id: "it-002",
    name: "Dell U2724D Monitor",
    type: "monitor",
    status: "active",
    assignedTo: "Samuel",
    purchaseDate: "2024-01-20",
  },
  {
    id: "it-003",
    name: "Magic Keyboard",
    type: "keyboard",
    status: "active",
    assignedTo: null,
    purchaseDate: "2023-06-10",
  },
]

export const meta: PrototypeMeta = {
  slug: "factorial-it",
  title: "Factorial IT",
  description:
    "Asset management prototype for IT equipment tracking. Manage company IT assets with status tracking, assignment, and purchase date history.",
  category: "Other",
  module: "documents",
  audience: ["admin"],
  tags: ["assets", "inventory"],
  createdAt: "2026-05-21",
}

export default function FactorialIt() {
  const [assets] = useState<ItAsset[]>(seedAssets)

  const stats = {
    total: assets.length,
    active: assets.filter((a) => a.status === "active").length,
    assigned: assets.filter((a) => a.assignedTo !== null).length,
  }

  return (
    <Page
      header={
        <PageHeader
          module={{
            id: "documents",
            name: "Factorial IT",
            href: "/p/factorial-it",
          }}
          actions={[]}
        />
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading content="Asset Overview" variant="heading-large" as="h2" />
            <F0Box display="grid" columns="1" gap="md" lg={{ columns: "3" }}>
              <F0Box
                display="flex"
                flexDirection="column"
                gap="sm"
                padding="md"
                border="default"
                borderRadius="md"
              >
                <F0Heading
                  content="Total Assets"
                  variant="heading"
                  as="h3"
                />
                <p>{stats.total}</p>
              </F0Box>
              <F0Box
                display="flex"
                flexDirection="column"
                gap="sm"
                padding="md"
                border="default"
                borderRadius="md"
              >
                <F0Heading content="Active" variant="heading" as="h3" />
                <p>{stats.active}</p>
              </F0Box>
              <F0Box
                display="flex"
                flexDirection="column"
                gap="sm"
                padding="md"
                border="default"
                borderRadius="md"
              >
                <F0Heading content="Assigned" variant="heading" as="h3" />
                <p>{stats.assigned}</p>
              </F0Box>
            </F0Box>
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading content="Assets" variant="heading-large" as="h2" />
            <F0Box display="flex" flexDirection="column" gap="sm">
              {assets.map((asset) => (
                <F0Box
                  key={asset.id}
                  display="flex"
                  justifyContent="between"
                  padding="md"
                  border="default"
                  borderRadius="md"
                >
                  <F0Box display="flex" flexDirection="column" gap="xs">
                    <F0Heading as="h4" content={asset.name} />
                    <p>{asset.type} • {asset.status}</p>
                  </F0Box>
                  <F0Box
                    display="flex"
                    flexDirection="column"
                    gap="xs"
                  >
                    <p style={{ textAlign: "right" }}>{asset.assignedTo || "Unassigned"}</p>
                    <p style={{ textAlign: "right" }}>{asset.purchaseDate}</p>
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
