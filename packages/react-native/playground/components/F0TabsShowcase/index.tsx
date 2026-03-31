import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Tabs } from "../../../src/components/F0Tabs"
import type { F0TabItem } from "../../../src/components/F0Tabs"
import { F0Text } from "../../../src/components/primitives/F0Text"

const primaryTabs: F0TabItem[] = [
  { id: "overview", label: "Overview", index: true },
  { id: "courses", label: "Courses" },
  { id: "categories", label: "Categories" },
  { id: "catalog", label: "Catalog" },
  { id: "requests", label: "Requests" },
]

const secondaryTabs: F0TabItem[] = [
  { id: "all", label: "All", index: true },
  { id: "active", label: "Active" },
  { id: "archived", label: "Archived" },
]

const manyTabs: F0TabItem[] = [
  { id: "tab1", label: "Overview" },
  { id: "tab2", label: "Courses" },
  { id: "tab3", label: "Categories" },
  { id: "tab4", label: "Catalog" },
  { id: "tab5", label: "Requests" },
  { id: "tab6", label: "Reports" },
  { id: "tab7", label: "Settings" },
]

const primaryContent: Record<string, string> = {
  overview: "A summary of all your learning activity, progress and stats.",
  courses: "Browse and manage all courses available in your organisation.",
  categories: "Organise courses into categories to improve discoverability.",
  catalog: "The public catalog of courses available for self-enrolment.",
  requests: "Pending and completed course requests from your team.",
}

const secondaryContent: Record<string, string> = {
  all: "Showing all items regardless of status.",
  active: "Items that are currently active and in progress.",
  archived: "Items that have been archived and are no longer active.",
}

// ---------------------------------------------------------------------------
// Piled example — primary + secondary with synced real content
// ---------------------------------------------------------------------------

function PiledExample() {
  const [primaryTab, setPrimaryTab] = useState("overview")
  const [secondaryTab, setSecondaryTab] = useState("all")

  return (
    <View>
      <F0Tabs
        tabs={primaryTabs}
        activeTabId={primaryTab}
        setActiveTabId={setPrimaryTab}
      />
      <F0Tabs
        tabs={secondaryTabs}
        secondary
        activeTabId={secondaryTab}
        setActiveTabId={setSecondaryTab}
      />
      <View className="mt-3 rounded-md bg-f0-background-secondary p-3">
        <F0Text variant="body-md-medium" color="default">
          {primaryContent[primaryTab]}
        </F0Text>
        <F0Text variant="body-sm-medium" color="secondary" className="mt-1">
          Filter: {secondaryContent[secondaryTab]}
        </F0Text>
      </View>
    </View>
  )
}

// ---------------------------------------------------------------------------
// Main showcase
// ---------------------------------------------------------------------------

export function F0TabsShowcase() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 32, gap: 24 }}
    >
      {/* Primary with real tab content */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Primary (underline)
        </F0Text>
        <F0Tabs
          tabs={primaryTabs}
          activeTabId={activeTab}
          setActiveTabId={setActiveTab}
        />
        <View className="rounded-md bg-f0-background-secondary p-3">
          <F0Text variant="body-md-medium" color="default">
            {primaryContent[activeTab]}
          </F0Text>
        </View>
      </View>

      {/* Piled — primary + secondary stacked with real content */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Piled (primary + secondary)
        </F0Text>
        <PiledExample />
      </View>

      {/* Secondary — pill only */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Secondary (pill only, no underline)
        </F0Text>
        <F0Tabs
          tabs={secondaryTabs}
          secondary
        />
      </View>

      {/* Overflow — many tabs */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Scrollable (many tabs)
        </F0Text>
        <F0Tabs tabs={manyTabs} />
      </View>

      {/* Embedded */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Embedded (first tab only, no interaction)
        </F0Text>
        <F0Tabs tabs={primaryTabs} embedded />
      </View>

      {/* Single tab */}
      <View className="gap-2">
        <F0Text variant="body-md-medium" color="default">
          Single tab
        </F0Text>
        <F0Tabs tabs={[{ id: "only", label: "Overview" }]} />
      </View>
    </ScrollView>
  )
}
