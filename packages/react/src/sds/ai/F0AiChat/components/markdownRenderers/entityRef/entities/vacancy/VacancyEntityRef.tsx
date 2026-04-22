import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import {
  DetailsItem,
  type DetailsItemType,
} from "@/experimental/Lists/DetailsItem"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { PersonRef } from "../person/types"

import type { VacancyProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const VacancyTrigger = forwardRef<HTMLButtonElement, { label: string }>(
  ({ label, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        focusRing()
      )}
      {...props}
    >
      {label}
    </button>
  )
)
VacancyTrigger.displayName = "VacancyTrigger"

/**
 * Inline vacancy entity reference with a hover card showing vacancy details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches the vacancy
 * data via `entityRefs.resolvers.vacancy` and displays status, recruiter,
 * and deadline rows in addition to the header.
 *
 * Recruiter becomes a clickable link when
 * `entityRefs.urls.person` is provided.
 */
export function VacancyEntityRef({ id, label }: { id: string; label: string }) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.vacancy
  const i18n = useI18n()

  const vacancyUrl = entityRefs?.urls?.vacancy?.(id)
  const personUrlBuilder = entityRefs?.urls?.person

  const mapToCard = useMemo(
    () =>
      (profile: VacancyProfile): F0CardProps => {
        const details: DetailsItemType[] = []

        if (profile.status) {
          details.push({
            title: i18n.t("ai.entityRef.vacancy.status"),
            content: {
              type: "status-tag",
              text: profile.status,
              variant: profile.statusVariant ?? "neutral",
            },
          })
        }

        if (profile.recruiters && profile.recruiters.length > 0) {
          details.push(
            recruitersRow(
              i18n.t("ai.entityRef.vacancy.recruiters"),
              profile.recruiters,
              personUrlBuilder
            )
          )
        }

        if (profile.deadline) {
          details.push({
            title: i18n.t("ai.entityRef.vacancy.deadline"),
            content: { type: "item", text: profile.deadline },
          })
        }

        return {
          title: profile.name,
          description: profile.vacancyType,
          ...(details.length > 0 && {
            children: (
              <div className="-mx-1.5 flex flex-col gap-2">
                {details.map((d) => (
                  <DetailsItem key={d.title} {...d} />
                ))}
              </div>
            ),
          }),
          ...(vacancyUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: vacancyUrl,
            },
          }),
        }
      },
    [i18n, vacancyUrl, personUrlBuilder]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(vacancyUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: vacancyUrl,
        },
      }),
    }),
    [label, i18n, vacancyUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<VacancyTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}

function recruitersRow(
  title: string,
  people: PersonRef[],
  urlBuilder: ((id: string) => string) | undefined
): DetailsItemType {
  if (people.length === 1) {
    return personRow(title, people[0], urlBuilder)
  }
  return {
    title,
    content: {
      type: "avatar-list",
      avatarList: {
        type: "person",
        avatars: people.map((person) => ({
          firstName: person.firstName,
          lastName: person.lastName,
          src: person.avatarUrl,
        })),
      },
    },
  }
}

function personRow(
  title: string,
  person: PersonRef,
  urlBuilder: ((id: string) => string) | undefined
): DetailsItemType {
  const href = urlBuilder?.(String(person.id))
  return {
    title,
    content: {
      type: "person",
      firstName: person.firstName,
      lastName: person.lastName,
      avatarUrl: person.avatarUrl,
      ...(href && {
        action: {
          type: "navigate",
          href,
          showChevron: false,
        },
      }),
    },
  }
}
