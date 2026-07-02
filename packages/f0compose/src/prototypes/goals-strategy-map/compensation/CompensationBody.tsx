import { IncentivePlansTab } from "./incentive-plans/IncentivePlansTab"
import { SalaryBandsTab } from "./salary-bands/SalaryBandsTab"
import { CompensationReviewsTab } from "./compensation-reviews/CompensationReviewsTab"
import { EquityTab } from "./equity/EquityTab"
import { BenefitsTab } from "./benefits/BenefitsTab"
import type { CompTabId } from "./compTabs"

/** Body content for the active compensation sub-tab. */
export function CompensationBody({
  activeTab,
}: {
  activeTab: CompTabId
}) {
  switch (activeTab) {
    case "incentive-plans":
      return <IncentivePlansTab />
    case "salary-bands":
      return <SalaryBandsTab />
    case "compensation-reviews":
      return <CompensationReviewsTab />
    case "equity":
      return <EquityTab />
    case "benefits":
      return <BenefitsTab />
  }
}
