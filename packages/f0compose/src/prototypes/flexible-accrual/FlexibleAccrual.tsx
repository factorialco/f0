import { StandardLayout } from "@factorialco/f0-react";
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental";
import { useSearchParams } from "react-router-dom";

import type { PrototypeMeta } from "../types";
import { AuthoringView } from "./authoring/AuthoringView";
import { EmployeeView } from "./employee/EmployeeView";
import { SimulateView } from "./simulate/SimulateView";

export const meta: PrototypeMeta = {
  slug: "flexible-accrual",
  title: "Flexible Accrual Rules",
  description:
    "RFC prototype: AI-powered accrual rule authoring for HR, dry-run simulation with receipt-style breakdowns, and employee balance explainability panel.",
  category: "Time",
  module: "time-off",
  audience: ["admin", "employee"],
  tags: ["accrual", "time-off", "ai", "simulation", "leave"],
  createdAt: "2026-05-25",
  author: "f0compose",
};

const tabs = [
  {
    id: "authoring",
    label: "Rule Authoring",
  },
  {
    id: "simulate",
    label: "Simulate",
  },
  {
    id: "employee",
    label: "Employee View",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];
const VALID_TABS = new Set<string>(tabs.map((t) => t.id));

export default function FlexibleAccrual() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get("tab");
  const activeTab: TabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as TabId) : "authoring";

  const setTab = (id: string) => {
    const next = new URLSearchParams();
    if (id !== "authoring") next.set("tab", id);
    setSearchParams(next);
  };

  const goToSimulate = () => setTab("simulate");

  const tabsWithNav = tabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }));

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "timeoff",
              name: "Time Off",
              href: "/p/flexible-accrual",
            }}
            breadcrumbs={[{ id: "accrual-rules", label: "Accrual Rules" }]}
            actions={[]}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      <StandardLayout>
        {activeTab === "authoring" && (
          <AuthoringView onSimulate={goToSimulate} />
        )}
        {activeTab === "simulate" && <SimulateView />}
        {activeTab === "employee" && <EmployeeView />}
      </StandardLayout>
    </Page>
  );
}
