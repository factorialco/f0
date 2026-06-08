import React from "react"
import { ScrollView, View } from "react-native"

import { F0Metadata } from "../../../src/components/F0Metadata"
import { F0Text } from "../../../src/components/primitives/F0Text"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <View className="mb-8">
      <F0Text variant="body-xs-medium" color="secondary" className="mb-4 uppercase">
        {title}
      </F0Text>
      <View className="rounded-xl border border-f0-border-secondary p-4">
        {children}
      </View>
    </View>
  )
}

export function F0MetadataShowcase() {
  return (
    <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 40 }}>
      <Section title="All value types — vertical">
        <F0Metadata
          items={[
            {
              label: "Text",
              value: { type: "text", content: "Engineering" },
            },
            {
              label: "Status",
              value: { type: "status", label: "Active", variant: "positive" },
            },
            {
              label: "Person",
              value: {
                type: "avatar",
                avatarType: "person",
                firstName: "Alice",
                lastName: "Smith",
              },
            },
            {
              label: "Team",
              value: {
                type: "avatar",
                avatarType: "team",
                name: "Frontend",
              },
            },
            {
              label: "Company",
              value: {
                type: "avatar",
                avatarType: "company",
                name: "Factorial",
              },
            },
            {
              label: "Avatar list",
              value: {
                type: "list",
                variant: "person",
                avatars: [
                  { firstName: "Alice", lastName: "Smith" },
                  { firstName: "Bob", lastName: "Jones" },
                  { firstName: "Carol", lastName: "White" },
                  { firstName: "Dave", lastName: "Brown" },
                ],
              },
            },
            {
              label: "Tag list",
              value: {
                type: "tag-list",
                tags: ["TypeScript", "React Native", "GraphQL"],
              },
            },
            {
              label: "Data list",
              value: {
                type: "data-list",
                data: ["Barcelona", "Madrid", "Remote"],
              },
            },
            {
              label: "Dot tag",
              value: { type: "dot-tag", label: "Design", color: "purple" },
            },
            {
              label: "Date",
              value: { type: "date", formattedDate: "Mar 25, 2026" },
            },
            {
              label: "Date warning",
              value: {
                type: "date",
                formattedDate: "Apr 1, 2026",
                icon: "warning",
              },
            },
            {
              label: "Date critical",
              value: {
                type: "date",
                formattedDate: "Jan 1, 2026",
                icon: "critical",
              },
            },
            {
              label: "Progress linear",
              value: { type: "progress-bar", value: 65, max: 100, label: "65%" },
            },
            {
              label: "Progress circular",
              value: {
                type: "progress-bar",
                value: 40,
                label: "40%",
                progressType: "circular",
              },
            },
          ]}
        />
      </Section>

      {/* ── Horizontal orientation ── */}
      <Section title="Horizontal orientation">
        <F0Metadata
          orientation="horizontal"
          items={[
            {
              label: "Department",
              value: { type: "text", content: "Engineering" },
            },
            {
              label: "Status",
              value: { type: "status", label: "Active", variant: "positive" },
            },
            {
              label: "Owner",
              value: {
                type: "avatar",
                avatarType: "person",
                firstName: "Alice",
                lastName: "Smith",
              },
            },
            {
              label: "Due date",
              value: {
                type: "date",
                formattedDate: "Apr 1, 2026",
                icon: "warning",
              },
            },
          ]}
        />
      </Section>

      {/* ── hideLabel — use case: card footer ── */}
      <Section title="hideLabel — card footer">
        <F0Metadata
          orientation="horizontal"
          items={[
            {
              label: "Progress",
              value: {
                type: "progress-bar",
                value: 15,
                progressType: "circular",
              },
              hideLabel: true,
            },
            {
              label: "Duration",
              value: { type: "text", content: "2 hours" },
              hideLabel: true,
            },
            {
              label: "Due date",
              value: {
                type: "date",
                formattedDate: "Due Feb 15",
                icon: "warning",
              },
              hideLabel: true,
            },
          ]}
        />
      </Section>

      {/* ── Deactivated avatar ── */}
      <Section title="Deactivated person">
        <F0Metadata
          items={[
            {
              label: "Former owner",
              value: {
                type: "avatar",
                avatarType: "person",
                firstName: "Bob",
                lastName: "Jones",
                deactivated: true,
              },
            },
          ]}
        />
      </Section>
    </ScrollView>
  )
}
