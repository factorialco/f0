import { breakpoints } from "@factorialco/f0-core"
import { motion } from "motion/react"
import { type ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { New } from "@/icons/app"
import ChevronDown from "@/icons/app/ChevronDown"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import type { F0AiChatHeaderProps } from "./types"

import { CreditsPopover } from "./components/CreditsPopover"
import { EmployeeCreditsPopover } from "./components/EmployeeCreditsPopover"

/**
 * Picks the right credits popover to render based on which prop the host
 * provided. `employeeCredits` (employee-only) takes precedence; otherwise
 * falls back to the classic `credits` popover. Renders nothing when neither
 * is set.
 */
const CreditsPopoverPicker = ({
  credits,
  employeeCredits,
  trigger,
}: Pick<F0AiChatHeaderProps, "credits" | "employeeCredits"> & {
  /** Custom popover trigger (asChild). Defaults to the Sliders icon button. */
  trigger?: ReactNode
}) => {
  if (employeeCredits)
    return (
      <EmployeeCreditsPopover
        employeeCredits={employeeCredits}
        trigger={trigger}
      />
    )
  if (credits) return <CreditsPopover credits={credits} trigger={trigger} />
  return null
}

/**
 * The AI chat credits / settings popover button, on its own. Use it to surface
 * the popover outside the chat header — e.g. from a sidebar that already owns
 * the chat navigation (history, new chat), leaving the header minimal.
 */
export const F0AiChatCreditsButton = CreditsPopoverPicker

/**
 * Headless chat header. Renders a top bar with title (or thread selector),
 * credits popover, fullscreen toggle and close button. Has two visual
 * variants:
 * - with-history: title acts as a thread selector (clickable) — the host
 *   wires `onOpenHistory` to mount its own history dialog.
 * - legacy: title is static; a "new chat" button is shown when `hasMessages`.
 *
 * Decoupled from CopilotKit and `useAiChat()` — everything via props.
 */
export const F0AiChatHeader = ({
  historyEnabled = false,
  title,
  currentThreadTitle,
  titleIcon,
  fullscreen = false,
  lockVisualizationMode = false,
  onToggleVisualizationMode,
  onClose,
  onNewChat,
  onOpenHistory,
  hasMessages = false,
  credits,
  employeeCredits,
  compact = false,
}: F0AiChatHeaderProps) => {
  const translations = useI18n()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  const expandButton = !lockVisualizationMode && !isSmallScreen && (
    <ButtonInternal
      variant="ghost"
      hideLabel
      label={
        fullscreen ? translations.ai.collapseChat : translations.ai.expandChat
      }
      icon={fullscreen ? Minimize : Maximize}
      onClick={onToggleVisualizationMode}
    />
  )

  const closeButton = (
    <ButtonInternal
      variant="ghost"
      hideLabel
      label={translations.ai.closeChat}
      icon={Cross}
      onClick={onClose}
    />
  )

  // Compact: the chat is hosted next to a sidebar that owns navigation (history,
  // new chat) and the credits/settings popover, so the header keeps only the
  // conversation title (plain text — the thread title, or "New chat") plus the
  // expand + close controls.
  if (compact) {
    return (
      <header
        className={cn("flex items-center justify-between gap-3 pr-4 pl-5 py-3")}
      >
        <OneEllipsis
          lines={1}
          className="min-w-0 flex-1 text-left font-semibold text-f1-foreground"
        >
          {currentThreadTitle ?? translations.ai.newConversation}
        </OneEllipsis>
        <motion.div
          className="flex shrink-0 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {expandButton}
          {closeButton}
        </motion.div>
      </header>
    )
  }

  if (historyEnabled) {
    return (
      <header
        className={cn(
          "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center">
          {!lockVisualizationMode && (
            <Action
              variant="ghost"
              size="md"
              className="min-w-0 max-w-full [&>div>span>span]:w-full"
              onClick={onOpenHistory}
            >
              <div className="flex min-w-0 items-center gap-1">
                {titleIcon && (
                  <F0Icon icon={titleIcon} color="default" size="md" />
                )}
                <OneEllipsis lines={1} className="min-w-0 text-left">
                  {currentThreadTitle ?? translations.ai.newConversation}
                </OneEllipsis>
                <F0Icon icon={ChevronDown} color="default" size="md" />
              </div>
            </Action>
          )}
        </div>
        <motion.div
          className="flex shrink-0 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <CreditsPopoverPicker
            credits={credits}
            employeeCredits={employeeCredits}
          />
          {expandButton}
          {closeButton}
        </motion.div>
      </header>
    )
  }

  return (
    <header className={cn("flex justify-between px-4 py-3")}>
      <div className="flex items-center">
        <h2 className="text-f1-foreground">{title ?? ""}</h2>
      </div>
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {hasMessages && !lockVisualizationMode && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={New}
            onClick={onNewChat}
          />
        )}
        <CreditsPopoverPicker
          credits={credits}
          employeeCredits={employeeCredits}
        />
        {expandButton}
        {closeButton}
      </motion.div>
    </header>
  )
}
