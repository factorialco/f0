import { render } from "@testing-library/react-native"
import React from "react"

import { F0Metadata } from "../F0Metadata"
import type { MetadataItem } from "../F0Metadata.types"

describe("F0Metadata", () => {
  describe("Snapshots — value types", () => {
    const cases: Array<{ name: string; item: MetadataItem }> = [
      {
        name: "text",
        item: {
          label: "Department",
          value: { type: "text", content: "Engineering" },
        },
      },
      {
        name: "avatar — person",
        item: {
          label: "Owner",
          value: {
            type: "avatar",
            avatarType: "person",
            firstName: "Alice",
            lastName: "Smith",
          },
        },
      },
      {
        name: "avatar — team",
        item: {
          label: "Team",
          value: { type: "avatar", avatarType: "team", name: "Frontend" },
        },
      },
      {
        name: "avatar — company",
        item: {
          label: "Company",
          value: { type: "avatar", avatarType: "company", name: "Factorial" },
        },
      },
      {
        name: "avatar — person deactivated",
        item: {
          label: "Former owner",
          value: {
            type: "avatar",
            avatarType: "person",
            firstName: "Bob",
            lastName: "Jones",
            deactivated: true,
          },
        },
      },
      {
        name: "status",
        item: {
          label: "Status",
          value: { type: "status", label: "Active", variant: "positive" },
        },
      },
      {
        name: "list — person",
        item: {
          label: "Members",
          value: {
            type: "list",
            variant: "person",
            avatars: [
              { firstName: "Alice", lastName: "Smith" },
              { firstName: "Bob", lastName: "Jones" },
            ],
          },
        },
      },
      {
        name: "list — team",
        item: {
          label: "Teams",
          value: {
            type: "list",
            variant: "team",
            avatars: [{ name: "Frontend" }, { name: "Mobile" }],
          },
        },
      },
      {
        name: "list — company",
        item: {
          label: "Companies",
          value: {
            type: "list",
            variant: "company",
            avatars: [{ name: "Acme" }, { name: "Factorial" }],
          },
        },
      },
      {
        name: "data-list",
        item: {
          label: "Tags",
          value: { type: "data-list", data: ["Remote", "Full-time", "Senior"] },
        },
      },
      {
        name: "tag-list",
        item: {
          label: "Skills",
          value: { type: "tag-list", tags: ["TypeScript", "React Native"] },
        },
      },
      {
        name: "dot-tag",
        item: {
          label: "Category",
          value: { type: "dot-tag", label: "Design", color: "purple" },
        },
      },
      {
        name: "date — no icon",
        item: {
          label: "Start date",
          value: { type: "date", formattedDate: "Mar 25, 2026" },
        },
      },
      {
        name: "date — warning icon",
        item: {
          label: "Due date",
          value: {
            type: "date",
            formattedDate: "Apr 1, 2026",
            icon: "warning",
          },
        },
      },
      {
        name: "date — critical icon",
        item: {
          label: "Deadline",
          value: {
            type: "date",
            formattedDate: "Jan 1, 2026",
            icon: "critical",
          },
        },
      },
      {
        name: "progress-bar",
        item: {
          label: "Progress",
          value: { type: "progress-bar", value: 60, max: 100, label: "60%" },
        },
      },
    ]

    cases.forEach(({ name, item }) => {
      it(`Snapshot — ${name}`, () => {
        const { toJSON } = render(<F0Metadata items={[item]} />)
        expect(toJSON()).toMatchSnapshot()
      })
    })
  })

  describe("Snapshots — orientations", () => {
    const items: MetadataItem[] = [
      {
        label: "Status",
        value: { type: "status", label: "Active", variant: "positive" },
      },
      {
        label: "Department",
        value: { type: "text", content: "Engineering" },
      },
    ]

    it("Snapshot — vertical orientation (default)", () => {
      const { toJSON } = render(<F0Metadata items={items} />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot — horizontal orientation", () => {
      const { toJSON } = render(
        <F0Metadata items={items} orientation="horizontal" />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Filtering", () => {
    it("filters out undefined items", () => {
      const { queryAllByText } = render(
        <F0Metadata
          items={[
            { label: "A", value: { type: "text", content: "visible" } },
            undefined,
            { label: "B", value: { type: "text", content: "also visible" } },
          ]}
        />
      )
      expect(queryAllByText("visible")).toHaveLength(1)
      expect(queryAllByText("also visible")).toHaveLength(1)
    })

    it("filters out boolean items", () => {
      const { queryAllByText } = render(
        <F0Metadata
          items={[
            false,
            { label: "A", value: { type: "text", content: "visible" } },
            true,
          ]}
        />
      )
      expect(queryAllByText("visible")).toHaveLength(1)
    })
  })

  describe("hideLabel", () => {
    it("renders label by default", () => {
      const { queryByText } = render(
        <F0Metadata
          items={[
            { label: "Department", value: { type: "text", content: "Eng" } },
          ]}
        />
      )
      expect(queryByText("Department")).not.toBeNull()
    })

    it("hides label when hideLabel is true", () => {
      const { queryByText } = render(
        <F0Metadata
          items={[
            {
              label: "Department",
              value: { type: "text", content: "Eng" },
              hideLabel: true,
            },
          ]}
        />
      )
      expect(queryByText("Department")).toBeNull()
    })
  })
})
