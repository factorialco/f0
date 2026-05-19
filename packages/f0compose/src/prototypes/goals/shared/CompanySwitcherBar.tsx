import { F0Box, Chip } from "@factorialco/f0-react"

import type { CompanyId } from "../shared/companies"
import { companies } from "../shared/companies"

type Props = {
  activeCompanyId: CompanyId
  onSelectCompany: (id: CompanyId) => void
}

/**
 * Floating pill bar at the bottom of the Goals prototype that lets the
 * user swap the active company mock.
 */
export function CompanySwitcherBar({ activeCompanyId, onSelectCompany }: Props) {
  return (
    <F0Box
      position="fixed"
      display="flex"
      justifyContent="center"
      marginBottom="xl"
    >
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
    </F0Box>
  )
}
