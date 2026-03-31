import type { ComponentType } from "react"

import { CandidateEntityRef } from "../entities/candidate/CandidateEntityRef"
import { JobPostingEntityRef } from "../entities/jobPosting/JobPostingEntityRef"
import { PersonEntityRef } from "../entities/person/PersonEntityRef"

export type EntityRefRendererProps = { id: string; label: string }
export type EntityRefRenderer = ComponentType<EntityRefRendererProps>

const entityRefRenderers: Record<string, EntityRefRenderer> = {
  person: PersonEntityRef,
  candidate: CandidateEntityRef,
  "job-posting": JobPostingEntityRef,
}

export function getEntityRefRenderer(
  type: string
): EntityRefRenderer | undefined {
  return entityRefRenderers[type]
}
