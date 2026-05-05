import type { ChartDataset } from "./types"

const months12 = [
  "Jun 25",
  "Jul 25",
  "Aug 25",
  "Sep 25",
  "Oct 25",
  "Nov 25",
  "Dec 25",
  "Jan 26",
  "Feb 26",
  "Mar 26",
  "Apr 26",
  "May 26",
]

export const chartHeadcount: ChartDataset = {
  id: "chart-headcount",
  title: "Headcount over time",
  labels: months12,
  series: [
    {
      name: "Active",
      values: [16, 16, 17, 18, 18, 19, 19, 19, 20, 20, 20, 20],
    },
    { name: "Hires", values: [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0] },
    { name: "Leavers", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
  ],
}

export const chartPayrollGross: ChartDataset = {
  id: "chart-payroll-gross",
  title: "Total gross payroll",
  labels: months12,
  series: [
    {
      name: "Gross",
      values: [
        142000, 144500, 145000, 152000, 158000, 162000, 168400, 172100, 174900,
        175800, 178500, 0,
      ],
    },
  ],
  unit: "EUR",
}

export const chartTimeOffByType: ChartDataset = {
  id: "chart-time-off-type",
  title: "Days off taken by type",
  labels: ["Vacation", "Sick", "Personal", "Parental", "Remote"],
  series: [{ name: "Days", values: [184, 18, 9, 120, 78] }],
}

export const chartHeadcountByDept: ChartDataset = {
  id: "chart-headcount-by-dept",
  title: "Headcount by department",
  labels: [
    "Engineering",
    "People",
    "Design",
    "Product",
    "Sales",
    "Customer Success",
  ],
  series: [{ name: "Headcount", values: [6, 3, 3, 3, 3, 2] }],
}

export const chartReviewRatings: ChartDataset = {
  id: "chart-review-ratings",
  title: "Q1 2026 review ratings",
  labels: ["Exceeds", "Meets", "Below"],
  series: [{ name: "Reviews", values: [5, 9, 1] }],
}

export const chartHiringFunnel: ChartDataset = {
  id: "chart-hiring-funnel",
  title: "Hiring funnel — Q2 2026",
  labels: ["Applied", "Screened", "Interviewed", "Offer", "Hired"],
  series: [{ name: "Candidates", values: [218, 84, 36, 9, 4] }],
}

export const charts = {
  headcount: chartHeadcount,
  payrollGross: chartPayrollGross,
  timeOffByType: chartTimeOffByType,
  headcountByDept: chartHeadcountByDept,
  reviewRatings: chartReviewRatings,
  hiringFunnel: chartHiringFunnel,
}
