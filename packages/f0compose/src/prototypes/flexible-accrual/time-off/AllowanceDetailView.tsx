import { AllowanceDetailViewE5 } from "./AllowanceDetailViewE5"
import { Exploration4View } from "./Exploration4View"
import { type E5AllowanceData } from "./E5AllowanceCreationModal"
import { type Allowance, type Policy } from "./policiesData"

export type ExpTabId = "e4" | "e5"

export function AllowanceDetailView({
  allowance,
  expTab,
  e5Data,
}: {
  policy: Policy
  allowance: Allowance
  expTab: ExpTabId
  e5Data?: E5AllowanceData
}) {
  // E5 has its own post-modal allowance page layout (3 boxes).
  if (expTab === "e5") {
    return <AllowanceDetailViewE5 key={`e5-${allowance.id}`} allowance={allowance} e5Data={e5Data} />
  }

  // Exploration 4 owns its full page (its own Basic information, written in a
  // distinct plain-language style, plus the level-tiered accrual rules).
  return <Exploration4View key={`e4-${allowance.id}`} allowance={allowance} />
}
