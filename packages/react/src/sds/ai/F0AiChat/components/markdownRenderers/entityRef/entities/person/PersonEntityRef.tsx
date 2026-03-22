import { useCallback, useEffect, useRef, useState } from "react"

import { F0Card } from "@/components/F0Card"
import { Link } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import type { PersonProfile } from "./types"

/**
 * Inline person entity reference with a hover card showing profile details.
 *
 * Renders the trigger as a styled inline mention. On hover, lazily fetches
 * the employee profile via `entityResolvers.person` from the AiChat context
 * and displays avatar, name, job title, and a link to `/employees/:id`.
 *
 * Profiles are cached per ID to avoid redundant fetches.
 */
export function PersonEntityRef({ id, label }: { id: string; label: string }) {
  const { entityResolvers } = useAiChat()
  const resolver = entityResolvers?.person

  // Cache resolved profiles to avoid refetching on every hover
  const cacheRef = useRef<Map<string, PersonProfile>>(new Map())
  const [profile, setProfile] = useState<PersonProfile | null>(
    () => cacheRef.current.get(id) ?? null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Guard against state updates after unmount
  const mountedRef = useRef(true)
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const fetchProfile = useCallback(() => {
    if (!resolver || profile || isLoading) return

    const cached = cacheRef.current.get(id)
    if (cached) {
      setProfile(cached)
      return
    }

    setIsLoading(true)
    setHasError(false)
    resolver(id)
      .then((data: PersonProfile) => {
        cacheRef.current.set(id, data)
        if (mountedRef.current) setProfile(data)
      })
      .catch(() => {
        if (mountedRef.current) setHasError(true)
      })
      .finally(() => {
        if (mountedRef.current) setIsLoading(false)
      })
  }, [resolver, id, profile, isLoading])

  // Without a resolver, render as plain text
  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <HoverCard
      openDelay={300}
      closeDelay={100}
      onOpenChange={(open) => {
        if (open) fetchProfile()
      }}
    >
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
            focusRing()
          )}
        >
          @{label}
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="start"
        className="w-64 rounded-2xl border-none p-0 shadow-md"
      >
        <PersonEntityRefContent
          id={id}
          profile={profile}
          isLoading={isLoading}
          hasError={hasError}
          fallbackName={label}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

function PersonEntityRefContent({
  id,
  profile,
  isLoading,
  hasError,
  fallbackName,
}: {
  id: string
  profile: PersonProfile | null
  isLoading: boolean
  hasError: boolean
  fallbackName: string
}) {
  const employeeUrl = `/employees/${id}`
  const linkRef = useRef<HTMLAnchorElement>(null)
  const i18n = useI18n()

  const navigateToProfile = () => {
    linkRef.current?.click()
  }

  if (isLoading) {
    return <F0Card.Skeleton />
  }

  if (hasError || !profile) {
    return (
      <>
        <Link ref={linkRef} href={employeeUrl} className="hidden" />
        <F0Card
          title={fallbackName}
          primaryAction={{
            label: i18n.t("ai.viewProfile"),
            onClick: navigateToProfile,
          }}
        />
      </>
    )
  }

  return (
    <>
      <Link ref={linkRef} href={employeeUrl} className="hidden" />
      <F0Card
        avatar={{
          type: "person",
          firstName: profile.firstName,
          lastName: profile.lastName,
          src: profile.avatarUrl,
        }}
        title={`${profile.firstName} ${profile.lastName}`}
        description={profile.jobTitle}
        secondaryActions={[
          {
            label: i18n.t("ai.viewProfile"),
            onClick: navigateToProfile,
          },
        ]}
      />
    </>
  )
}
