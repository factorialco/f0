import type { ComponentType } from "react"

import { CandidateEntityRef } from "../entities/candidate/CandidateEntityRef"
import { JobPostingEntityRef } from "../entities/jobPosting/JobPostingEntityRef"
import { RequisitionEntityRef } from "../entities/requisition/RequisitionEntityRef"
import { PersonEntityRef } from "../entities/person/PersonEntityRef"
import { VacancyEntityRef } from "../entities/vacancy/VacancyEntityRef"

export type EntityRefRendererProps = { id: string; label: string }
export type EntityRefRenderer = ComponentType<EntityRefRendererProps>

const entityRefRenderers: Record<string, EntityRefRenderer> = {
  person: PersonEntityRef,
  candidate: CandidateEntityRef,
  "job-posting": JobPostingEntityRef,
  requisition: RequisitionEntityRef,
  vacancy: VacancyEntityRef,
}

export function getEntityRefRenderer(
  type: string
): EntityRefRenderer | undefined {
  return entityRefRenderers[type]
}
