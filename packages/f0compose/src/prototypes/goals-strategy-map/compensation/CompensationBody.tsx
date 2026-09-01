import type { CompTabId } from "./compTabs"

import { BenefitsTab } from "./benefits/BenefitsTab"
import { CompensationReviewsTab } from "./compensation-reviews/CompensationReviewsTab"
import { EquityTab } from "./equity/EquityTab"
import { IncentivePlansTab } from "./incentive-plans/IncentivePlansTab"
import { SalaryBandsTab } from "./salary-bands/SalaryBandsTab"

/** Body content for the active compensation sub-tab. */
export function CompensationBody({ activeTab }: { activeTab: CompTabId }) {
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
