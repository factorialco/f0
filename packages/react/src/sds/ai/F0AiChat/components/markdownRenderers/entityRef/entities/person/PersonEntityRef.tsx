import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { DetailsItem, type DetailsItemType } from "@/experimental/Lists/DetailsItem"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { PersonProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const PersonTrigger = forwardRef<HTMLButtonElement, { label: string }>(
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
      @{label}
    </button>
  )
)
PersonTrigger.displayName = "PersonTrigger"

/**
 * Inline person entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled @mention. On hover, lazily fetches
 * the employee profile via `entityRefs.resolvers.person` and displays
 * avatar, name, job title, and a row for the direct manager
 *
 * The manager becomes a clickable link when `entityRefs.urls.person` is
 * provided. Trailing chevrons are suppressed via DataList's `showChevron`
 * prop to keep the card dense.
 */
export function PersonEntityRef({ id, label }: { id: string; label: string }) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.person
  const i18n = useI18n()

  const personUrlBuilder = entityRefs?.urls?.person
  const personUrl = personUrlBuilder?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: PersonProfile): F0CardProps => {
        const details: DetailsItemType[] = []

        if (profile.managerFirstName && profile.managerLastName) {
          const managerHref = profile.managerId
            ? personUrlBuilder?.(profile.managerId)
            : undefined
          details.push({
            title: i18n.t("ai.entityRef.person.manager"),
            content: {
              type: "person",
              firstName: profile.managerFirstName,
              lastName: profile.managerLastName,
              avatarUrl: profile.managerAvatarUrl,
              ...(managerHref && {
                action: {
                  type: "navigate",
                  href: managerHref,
                  showChevron: false,
                },
              }),
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
          description: profile.jobTitle,
          ...(details.length > 0 && {
            children: (
              <div className="-mx-1.5 flex flex-col gap-2">
                {details.map((d) => (
                  <DetailsItem key={d.title} {...d} />
                ))}
              </div>
            ),
          }),
          ...(personUrl && {
            secondaryActions: {
              label: i18n.t("ai.view"),
              href: personUrl,
            },
          }),
        }
      },
    [i18n, personUrl, personUrlBuilder]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(personUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: personUrl,
        },
      }),
    }),
    [label, i18n, personUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<PersonTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
