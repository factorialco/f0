import { useCopilotReadable } from "@/copilot"

import { countryCopy, regimeCopy } from "../seeds"
import type { Entity } from "../types"

/**
 * Expose the certified-documents step state to the One chat panel.
 *
 * The agent uses this to answer questions like:
 *  - "Which entities are certified?"
 *  - "What does AEAT certification do?"
 *  - "Authorize the Spanish entity for me" (resolves the entity id)
 *
 * Note: each entity is exposed *with* its regime copy (authority,
 * summary, legal blurb) so the agent has everything it needs to walk
 * the admin through authorization without making things up.
 */
export function useExposeCertificationContext(args: { entities: Entity[] }) {
  useCopilotReadable({
    description:
      "Certified documents step of the Expense Policy. Each legal entity needs to be authorized once for Factorial to act as its digital certifying agent with the local tax authority. Authorization is one-way.",
    value: {
      entities: args.entities.map((e) => {
        const country = countryCopy[e.country]
        const regime = regimeCopy[e.regime]
        return {
          id: e.id,
          legalName: e.legalName,
          country: country.name,
          countryCode: e.country,
          regimeName: regime.name,
          regimeAuthority: regime.authority,
          regimeSummary: regime.summary,
          legalBlurb: regime.legalBlurb,
          status: e.certificationStatus,
          activatedAt: e.activatedAt ?? null,
        }
      }),
    },
  })
}
