import { F0Box, Chip } from "@factorialco/f0-react"

import type { CompanyId } from "../shared/companies"
import { companies } from "../shared/companies"

type Props = {
  activeCompanyId: CompanyId
  onSelectCompany: (id: CompanyId) => void
}

/**
 * Floating pill bar at the bottom of the Goals prototype that lets the
 * user swap the active company mock. Built entirely with F0 components:
 * F0Box for the container and Chip for each company tab (with company
 * avatar + selected variant for the active one).
 */
export function CompanySwitcherBar({ activeCompanyId, onSelectCompany }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center">
      <div className="pointer-events-auto">
        <F0Box
          display="flex"
          gap="xs"
          padding="xs"
          background="primary"
          border="default"
          borderColor="secondary"
          borderRadius="2xl"
          alignItems="center"
        >
          {companies.map((company) => (
            <Chip
              key={company.id}
              label={company.name}
              avatar={{ type: "company", name: company.name }}
              variant={
                company.id === activeCompanyId ? "selected" : "default"
              }
              onClick={() => onSelectCompany(company.id)}
            />
          ))}
        </F0Box>
      </div>
    </div>
  )
}
