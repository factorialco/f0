import type { Benefit } from "../compensationFixtures"

function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)
}

function categoryLabel(cat: Benefit["category"]): string {
  switch (cat) {
    case "health":
      return "Health"
    case "retirement":
      return "Retirement"
    case "wellness":
      return "Wellness"
    case "education":
      return "Education"
    case "transport":
      return "Transport"
    case "meal":
      return "Meal"
  }
}

export const benefitsColumns = [
  {
    id: "name",
    label: "Benefit",
    sorting: "name",
    frozen: true,
    render: (item: Benefit) => item.name,
  },
  {
    id: "category",
    label: "Category",
    render: (item: Benefit) => ({
      type: "tag" as const,
      value: { label: categoryLabel(item.category) },
    }),
  },
  {
    id: "provider",
    label: "Provider",
    render: (item: Benefit) => item.provider,
  },
  {
    id: "monthlyCost",
    label: "Monthly cost",
    sorting: "monthlyCost",
    align: "right" as const,
    render: (item: Benefit) => `${formatEur(item.monthlyCost)} / emp`,
  },
  {
    id: "enrollment",
    label: "Enrollment",
    render: (item: Benefit) => ({
      type: "progressBar" as const,
      value: {
        value: item.enrolledCount,
        max: item.eligibleCount,
        label: `${item.enrolledCount} / ${item.eligibleCount}`,
      },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: Benefit) => ({
      type: "status" as const,
      value: {
        label: item.status === "active" ? "Active" : "Inactive",
        status: item.status === "active" ? "positive" : "neutral",
      },
    }),
  },
  {
    id: "renewalDate",
    label: "Renewal date",
    sorting: "renewalDate",
    render: (item: Benefit) => item.renewalDate,
  },
]
