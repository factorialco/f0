import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAiChat } from "@factorialco/f0-react"

import type { PrototypeMeta } from "../types"
import { ItSidebar } from "./ItSidebar"
import { CompliancePage } from "./pages/CompliancePage"
import { DevicesPage } from "./pages/DevicesPage"
import { DiscoverPage } from "./pages/DiscoverPage"
import { EmployeesPage } from "./pages/EmployeesPage"
import { HomePage } from "./pages/HomePage"
import { InboxPage } from "./pages/InboxPage"
import { MarketplacePage } from "./pages/MarketplacePage"
import { SecurityPage } from "./pages/SecurityPage"
import { SettingsPage } from "./pages/SettingsPage"
import { SaasManagementPage } from "./pages/SaasManagementPage"
import { TicketsPage } from "./pages/TicketsPage"

export { ItSidebar as sidebar }

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

const IT_PLACEHOLDERS = [
  "Ask about device status, licenses, or open tickets...",
  "Approve requests, assign devices, or renew a license...",
  "Which devices are missing security patches?",
  "Create an onboarding plan for a new employee...",
  "Show me software licenses approaching their renewal date...",
]

export default function FactorialIt() {
  const { setPlaceholders } = useAiChat()

  useEffect(() => {
    setPlaceholders(IT_PLACEHOLDERS)
    return () => setPlaceholders([])
  }, [setPlaceholders])

  return (
    <Routes>
      <Route index element={<Navigate to="/p/factorial-it/home" replace />} />
      <Route path="home" element={<HomePage />} />
      <Route path="inbox" element={<InboxPage />} />
      <Route path="discover" element={<DiscoverPage />} />
      <Route path="tickets" element={<TicketsPage />} />
      <Route path="devices" element={<DevicesPage />} />
      <Route path="employees" element={<EmployeesPage />} />
      <Route path="security" element={<SecurityPage />} />
      <Route path="compliance" element={<CompliancePage />} />
      <Route path="saas-management" element={<SaasManagementPage />} />
      <Route path="marketplace" element={<MarketplacePage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Routes>
  )
}
