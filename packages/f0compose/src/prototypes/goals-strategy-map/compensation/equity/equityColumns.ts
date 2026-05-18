import type { EquityGrant } from "../compensationFixtures"
import { employees } from "@/fixtures"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n)
}

function grantTypeLabel(type: EquityGrant["grantType"]): string {
  switch (type) {
    case "iso":
      return "ISO"
    case "nso":
      return "NSO"
    case "rsu":
      return "RSU"
    case "phantom":
      return "Phantom"
  }
}

function statusToVariant(
  status: EquityGrant["status"]
): "positive" | "warning" | "info" | "neutral" {
  switch (status) {
    case "active":
      return "positive"
    case "fully-vested":
      return "info"
    case "pending":
      return "warning"
    case "cancelled":
      return "neutral"
  }
}

function statusToLabel(status: EquityGrant["status"]): string {
  switch (status) {
    case "active":
      return "Active"
    case "fully-vested":
      return "Fully vested"
    case "pending":
      return "Pending"
    case "cancelled":
      return "Cancelled"
  }
}

export const equityColumns = [
  {
    id: "employee",
    label: "Employee",
    frozen: true,
    render: (item: EquityGrant) => {
      const emp = employeeMap.get(item.employeeId)
      if (!emp) return "-"
      return {
        type: "person" as const,
        value: {
          firstName: emp.fullName.split(" ")[0] ?? "",
          lastName: emp.fullName.split(" ")[1] ?? "",
          src: emp.avatarUrl,
        },
      }
    },
  },
  {
    id: "grantType",
    label: "Type",
    render: (item: EquityGrant) => ({
      type: "tag" as const,
      value: { label: grantTypeLabel(item.grantType) },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: EquityGrant) => ({
      type: "status" as const,
      value: {
        label: statusToLabel(item.status),
        status: statusToVariant(item.status),
      },
    }),
  },
  {
    id: "granted",
    label: "Granted",
    sorting: "granted",
    align: "right" as const,
    render: (item: EquityGrant) =>
      new Intl.NumberFormat("en").format(item.sharesGranted),
  },
  {
    id: "vested",
    label: "Vested",
    align: "right" as const,
    render: (item: EquityGrant) => ({
      type: "progressBar" as const,
      value: {
        value: item.sharesVested,
        max: item.sharesGranted,
        label: `${new Intl.NumberFormat("en").format(item.sharesVested)} / ${new Intl.NumberFormat("en").format(item.sharesGranted)}`,
      },
    }),
  },
  {
    id: "strikePrice",
    label: "Strike price",
    align: "right" as const,
    render: (item: EquityGrant) => formatEur(item.strikePrice),
  },
  {
    id: "currentPrice",
    label: "Current price",
    align: "right" as const,
    render: (item: EquityGrant) => formatEur(item.currentPrice),
  },
  {
    id: "unrealizedValue",
    label: "Unrealized value",
    sorting: "unrealizedValue",
    align: "right" as const,
    render: (item: EquityGrant) =>
      formatEur(item.sharesVested * (item.currentPrice - item.strikePrice)),
  },
  {
    id: "vestingSchedule",
    label: "Vesting",
    render: (item: EquityGrant) => item.vestingSchedule,
  },
  {
    id: "grantDate",
    label: "Grant date",
    sorting: "grantDate",
    render: (item: EquityGrant) => item.grantDate,
  },
]
