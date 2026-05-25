import type { F0CardProps } from "@/components/F0Card"
import type { CardMetadata } from "@/components/F0Card/types"
import {
  Calendar,
  Flag,
  InfoCircleLine,
  Money,
  SearchPerson,
  Timer,
} from "@/icons/app"

import type { useI18n } from "@/lib/providers/i18n"

import type { CandidateProfile } from "../entities/candidate/types"
import type { ExpenseProfile } from "../entities/expense/types"
import type { JobPostingProfile } from "../entities/jobPosting/types"
import type { PersonProfile } from "../entities/person/types"
import type { RequisitionProfile } from "../entities/requisition/types"
import type { VacancyProfile } from "../entities/vacancy/types"

import type { EntityResolvers, EntityUrlBuilders } from "../types"
import { formatDate } from "../utils"

export type EntityRefMapContext = {
  i18n: ReturnType<typeof useI18n>
  url: string | undefined
  label: string
}

type ResolverKey = Exclude<keyof EntityResolvers, "searchPersons">
type UrlKey = keyof EntityUrlBuilders

type EntityRefConfig<P> = {
  triggerPrefix?: string
  resolverKey: ResolverKey
  urlKey: UrlKey
  mapToCard: (profile: P, ctx: EntityRefMapContext) => F0CardProps
}

export type ErasedEntityRefConfig = {
  triggerPrefix?: string
  resolverKey: ResolverKey
  urlKey: UrlKey
  mapToCard: (profile: unknown, ctx: EntityRefMapContext) => F0CardProps
}

function makeConfig<P>(config: EntityRefConfig<P>): ErasedEntityRefConfig {
  return config as unknown as ErasedEntityRefConfig
}

const personConfig = makeConfig<PersonProfile>({
  triggerPrefix: "@",
  resolverKey: "person",
  urlKey: "person",
  mapToCard: (profile, { i18n, url }) => ({
    avatar: {
      type: "person",
      firstName: profile.firstName,
      lastName: profile.lastName,
      src: profile.avatarUrl,
    },
    title: `${profile.firstName} ${profile.lastName}`,
    description: profile.jobTitle,
    ...(url && {
      secondaryActions: { label: i18n.t("ai.view"), href: url },
    }),
  }),
})

const candidateConfig = makeConfig<CandidateProfile>({
  resolverKey: "candidate",
  urlKey: "candidate",
  mapToCard: (profile, { i18n, url }) => {
    const metadata: CardMetadata[] = []

    if (profile.source) {
      metadata.push({
        icon: InfoCircleLine,
        property: {
          type: "text",
          label: i18n.t("ai.entityRef.candidate.source"),
          value: profile.source,
        },
      })
    }

    if (profile.appliedAt) {
      metadata.push({
        icon: Calendar,
        property: {
          type: "text",
          label: i18n.t("ai.entityRef.candidate.applied"),
          value: formatDate(profile.appliedAt) ?? profile.appliedAt,
        },
      })
    }

    return {
      avatar: {
        type: "person",
        firstName: profile.firstName,
        lastName: profile.lastName,
        src: profile.avatarUrl,
      },
      title: `${profile.firstName} ${profile.lastName}`,
      ...(metadata.length > 0 && { metadata }),
      ...(url && {
        secondaryActions: { label: i18n.t("ai.view"), href: url },
      }),
    }
  },
})

const expenseConfig = makeConfig<ExpenseProfile>({
  resolverKey: "expense",
  urlKey: "expense",
  mapToCard: (profile, { i18n, url }) => ({
    avatar: { type: "icon", icon: Money },
    title: profile.description || `Expense #${profile.id}`,
    description: [profile.amount, profile.status].filter(Boolean).join(" · "),
    ...(url && {
      secondaryActions: { label: i18n.t("ai.view"), href: url },
    }),
  }),
})

const jobPostingConfig = makeConfig<JobPostingProfile>({
  resolverKey: "jobPosting",
  urlKey: "jobPosting",
  mapToCard: (profile, { i18n, url }) => {
    const metadata: CardMetadata[] = []

    if (profile.status) {
      metadata.push({
        icon: Flag,
        property: {
          type: "status",
          label: i18n.t("ai.entityRef.jobPosting.status"),
          value: {
            status: profile.statusVariant ?? "neutral",
            label: profile.status,
          },
        },
      })
    }

    if (profile.publishedAt) {
      metadata.push({
        icon: Calendar,
        property: {
          type: "text",
          label: i18n.t("ai.entityRef.jobPosting.publishedAt"),
          value: formatDate(profile.publishedAt) ?? profile.publishedAt,
        },
      })
    }

    return {
      title: profile.title,
      ...(profile.location && { description: profile.location }),
      ...(metadata.length > 0 && { metadata }),
      ...(url && {
        secondaryActions: { label: i18n.t("ai.view"), href: url },
      }),
    }
  },
})

const requisitionConfig = makeConfig<RequisitionProfile>({
  resolverKey: "requisition",
  urlKey: "requisition",
  mapToCard: (profile, { i18n, url }) => {
    const metadata: CardMetadata[] = []

    if (profile.status) {
      metadata.push({
        icon: Flag,
        property: {
          type: "status",
          label: i18n.t("ai.entityRef.requisition.status"),
          value: {
            status: profile.statusVariant ?? "neutral",
            label: profile.status,
          },
        },
      })
    }

    if (profile.lineManager) {
      metadata.push({
        icon: SearchPerson,
        property: {
          type: "person",
          label: i18n.t("ai.entityRef.requisition.lineManager"),
          value: {
            firstName: profile.lineManager.firstName,
            lastName: profile.lineManager.lastName,
            src: profile.lineManager.avatarUrl,
          },
        },
      })
    }

    return {
      title: profile.title,
      ...(profile.location && { description: profile.location }),
      ...(metadata.length > 0 && { metadata }),
      ...(url && {
        secondaryActions: { label: i18n.t("ai.view"), href: url },
      }),
    }
  },
})

const vacancyConfig = makeConfig<VacancyProfile>({
  resolverKey: "vacancy",
  urlKey: "vacancy",
  mapToCard: (profile, { i18n, url }) => {
    const metadata: CardMetadata[] = []

    if (profile.status) {
      metadata.push({
        icon: Flag,
        property: {
          type: "status",
          label: i18n.t("ai.entityRef.vacancy.status"),
          value: {
            status: profile.statusVariant ?? "neutral",
            label: profile.status,
          },
        },
      })
    }

    if (profile.deadline && profile.status !== "Hired") {
      metadata.push({
        icon: Timer,
        property: {
          type: "text",
          label: i18n.t("ai.entityRef.vacancy.deadline"),
          value: formatDate(profile.deadline) ?? profile.deadline,
        },
      })
    }

    return {
      title: profile.name,
      ...(profile.location && { description: profile.location }),
      ...(metadata.length > 0 && { metadata }),
      ...(url && {
        secondaryActions: { label: i18n.t("ai.view"), href: url },
      }),
    }
  },
})

export const entityRefConfig: Record<string, ErasedEntityRefConfig> = {
  person: personConfig,
  candidate: candidateConfig,
  expense: expenseConfig,
  "job-posting": jobPostingConfig,
  requisition: requisitionConfig,
  vacancy: vacancyConfig,
}
