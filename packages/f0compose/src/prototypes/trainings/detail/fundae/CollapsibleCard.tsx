import {
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Icon,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { ChevronDown, ChevronUp, Download } from "@factorialco/f0-react/icons/app"
import type { ReactNode } from "react"

type StatusVariant = "neutral" | "info" | "positive" | "warning" | "critical"

type Props = {
  title: string
  subtitle?: string
  statusTag?: { text: string; variant: StatusVariant }
  expanded: boolean
  onExpandedChange: (v: boolean) => void
  locked?: boolean
  lockedReason?: string
  primaryAction?: { label: string; onClick: () => void; disabled?: boolean }
  secondaryAction?: { label: string; onClick: () => void }
  // Short text shown next to the action cluster explaining why the primary
  // action is unavailable (e.g. an unmet prerequisite). Replaces hard locks.
  actionHint?: string
  // XML / file export action — sits on the left side of the footer,
  // visually separated from the edit/save/cancel cluster.
  xmlAction?: {
    label: string
    onClick: () => void
    disabled?: boolean
    comingSoon?: boolean
  }
  // "card" (default): own F0Card surface. "flat": borderless sub-section,
  // for use inside a single container card (layout B).
  variant?: "card" | "flat"
  // When false, the header is not a collapse toggle and the content is
  // always shown (for master-detail layouts where the active step panel is
  // permanently open). Default true.
  collapsible?: boolean
  children: ReactNode
}

export function CollapsibleCard({
  title,
  subtitle,
  statusTag,
  expanded,
  onExpandedChange,
  locked,
  lockedReason,
  primaryAction,
  secondaryAction,
  xmlAction,
  actionHint,
  variant = "card",
  collapsible = true,
  children,
}: Props) {
  const isLocked = !!locked
  const showOpen = collapsible ? expanded && !isLocked : true
  const hasFooter = !!(primaryAction || secondaryAction || xmlAction)

  const headerContent = (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="md"
    >
      <F0Box display="flex" flexDirection="column" gap="xs" alignItems="start">
        <F0Heading as="h3" variant="heading" content={title} />
        {subtitle && <F0Text variant="small" content={subtitle} />}
        {isLocked && lockedReason && (
          <F0Text variant="small" content={lockedReason} />
        )}
      </F0Box>
      <F0Box display="flex" alignItems="center" gap="sm">
        {statusTag && (
          <F0TagStatus text={statusTag.text} variant={statusTag.variant} />
        )}
        {collapsible && !isLocked && (
          <F0Icon
            icon={showOpen ? ChevronUp : ChevronDown}
            size="md"
            color="default"
          />
        )}
      </F0Box>
    </F0Box>
  )

  const header = collapsible ? (
    <F0Box
      role="button"
      tabIndex={isLocked ? -1 : 0}
      aria-expanded={showOpen}
      onClick={() => !isLocked && onExpandedChange(!expanded)}
      paddingX="lg"
      paddingY="md"
    >
      {headerContent}
    </F0Box>
  ) : (
    <F0Box paddingX="lg" paddingY="md">
      {headerContent}
    </F0Box>
  )

  const inner = (
    <>
      {header}

      {showOpen && (
        <>
          <F0Box
            borderTop="default"
            borderColor="secondary"
            padding="lg"
            display="flex"
            flexDirection="column"
          >
            {children}
          </F0Box>
          {hasFooter && (
            <F0Box
              borderTop="default"
              borderColor="secondary"
              padding="md"
              display="flex"
              alignItems="center"
              justifyContent="between"
              gap="sm"
            >
              <F0Box>
                {xmlAction && (
                  <F0Button
                    label={
                      xmlAction.comingSoon
                        ? `${xmlAction.label} (próximamente)`
                        : xmlAction.label
                    }
                    icon={Download}
                    variant="outline"
                    disabled={xmlAction.disabled || xmlAction.comingSoon}
                    onClick={xmlAction.onClick}
                  />
                )}
              </F0Box>
              <F0Box display="flex" alignItems="center" gap="md">
                {actionHint && (
                  <F0Text variant="small" content={actionHint} />
                )}
                {secondaryAction && (
                  <F0Button
                    label={secondaryAction.label}
                    variant="outline"
                    onClick={secondaryAction.onClick}
                  />
                )}
                {primaryAction && (
                  <F0Button
                    label={primaryAction.label}
                    variant="default"
                    disabled={primaryAction.disabled}
                    onClick={primaryAction.onClick}
                  />
                )}
              </F0Box>
            </F0Box>
          )}
        </>
      )}
    </>
  )

  if (variant === "flat") return <F0Box>{inner}</F0Box>
  return <F0Card>{inner}</F0Card>
}
