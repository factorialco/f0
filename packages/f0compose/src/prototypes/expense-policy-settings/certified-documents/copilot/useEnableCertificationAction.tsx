import { useCopilotAction } from "@/copilot"

import { countryCopy } from "../seeds"
import type { CertificationData } from "../useCertificationData"

/**
 * Co-creation action: enable certified-documents certification for one
 * or all legal entities.
 *
 * The certified-docs cards (Factorial España SL, Factorial Italia Srl,
 * Factorial France SAS) each have an "Enable certification" button, but
 * One previously had no tool to do it — so "enable certification for all
 * entities" failed ("there aren't any legal entities…"). This bridges
 * One → `certificationData.authorizeEntity`.
 *
 * `entity` resolves leniently: a legal-entity name fragment ("Spain",
 * "España", "Italia"), a country name / ISO code ("ES", "France"), an
 * entity id, or **"all"** to enable every entity that isn't active yet.
 *
 * Idempotent by design: only entities that are still `inactive` are
 * flipped, so a re-call (the agent's loop) finds nothing left to do and
 * returns a "already enabled — output nothing" stop, which both prevents
 * a duplicate ack and ends the round-trip.
 */
export function useEnableCertificationAction(args: {
  certificationData: CertificationData
}): void {
  const { certificationData } = args

  useCopilotAction({
    name: "expensePolicyPrototype.enableCertification",
    description:
      "Turn ON certified-documents certification for a legal entity (Factorial acts as its digital certifying agent with the local tax authority). Pass `entity` = a legal entity name or country (e.g. 'Spain', 'Factorial Italia Srl', 'FR'), or 'all' to enable every entity that isn't certified yet. The available entities are in the certified-documents readable context.",
    available: "enabled",
    parameters: [
      {
        name: "entity",
        type: "string",
        required: true,
        description:
          "Legal entity name / country / id, or 'all' for every inactive entity.",
      },
    ],
    handler: ({ entity }) => {
      const q = String(entity ?? "").trim().toLowerCase()
      const all = certificationData.entities
      const inactive = all.filter((e) => e.certificationStatus !== "active")

      // Nothing left to enable → idempotent no-op + hard stop (kills the
      // re-call loop and the duplicate confirmation).
      if (inactive.length === 0) {
        return {
          ok: true,
          duplicate: true,
          message:
            "All legal entities are already certified — do NOT call enableCertification again and do NOT write another message. Output NOTHING and end the turn.",
        }
      }

      const wantsAll =
        q === "all" || q === "" || q === "everyone" || q.includes("all ")

      const targets = wantsAll
        ? inactive
        : inactive.filter((e) => {
            const countryName = countryCopy[e.country]?.name.toLowerCase() ?? ""
            return (
              e.legalName.toLowerCase().includes(q) ||
              e.country.toLowerCase() === q ||
              countryName === q ||
              countryName.includes(q) ||
              e.id.toLowerCase() === q
            )
          })

      if (targets.length === 0) {
        return {
          ok: false,
          error: `No matching legal entity for "${entity}". Available: ${all
            .map((e) => `${e.legalName} (${e.certificationStatus})`)
            .join(", ")}.`,
        }
      }

      targets.forEach((t) => certificationData.authorizeEntity(t.id))

      return {
        ok: true,
        enabled: targets.map((t) => t.legalName),
        message: `Enabled certification for ${targets
          .map((t) => t.legalName)
          .join(", ")}. DONE — do NOT call enableCertification again and do NOT write another message. Output NOTHING and end the turn.`,
      }
    },
  })
}
