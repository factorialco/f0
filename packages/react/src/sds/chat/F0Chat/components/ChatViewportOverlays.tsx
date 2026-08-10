import { AnimatePresence, motion } from "motion/react"
import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { ScrollShadow } from "@/kits/ai/F0AiMessagesContainer/components/ScrollShadow"
import { useI18n } from "@/lib/providers/i18n"

import { CHAT_COMPOSER_HEIGHT } from "../utils/chat-layout"
import { EASE_OUT_SWIFT } from "../utils/chat-motion"
import { DateTimeSeparator } from "./DateTimeSeparator"

export const ChatViewportOverlays = ({
  atTop,
  scrolledUp,
  hasMoreOlder,
  loadingOlder,
  stickyDate,
  showJumpButton,
  unreadCount,
  hasMoreNewer,
  reducedMotion,
  onJumpToBottom,
}: {
  atTop: boolean
  scrolledUp: boolean
  hasMoreOlder: boolean
  loadingOlder: boolean
  stickyDate: string | null
  showJumpButton: boolean
  unreadCount: number
  hasMoreNewer: boolean
  reducedMotion: boolean
  onJumpToBottom: () => void
}): ReactNode => {
  const i18n = useI18n()
  const transitionDuration = reducedMotion ? 0 : 0.15

  return (
    <>
      <AnimatePresence>
        {!atTop && <ScrollShadow position="top" key="chat-header-shadow" />}
      </AnimatePresence>

      <AnimatePresence>
        {scrolledUp &&
          (!atTop || hasMoreOlder || loadingOlder) &&
          stickyDate && (
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-2 flex justify-center"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: transitionDuration }}
            >
              <div
                className="z-50"
                aria-label={loadingOlder ? i18n.chat.loadingOlder : undefined}
              >
                <DateTimeSeparator
                  at={stickyDate}
                  withTime
                  loading={loadingOlder}
                />
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      <AnimatePresence>
        {showJumpButton && (
          <motion.div
            data-testid="chat-jump-overlay"
            className="pointer-events-none absolute inset-x-0 flex justify-center"
            style={{ bottom: `calc(${CHAT_COMPOSER_HEIGHT} + 0.75rem)` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: transitionDuration,
              ease: EASE_OUT_SWIFT,
            }}
          >
            <motion.div
              key={unreadCount}
              className="pointer-events-auto"
              initial={
                reducedMotion || unreadCount === 0 ? false : { scale: 0.95 }
              }
              animate={{ scale: 1 }}
              transition={{
                duration: transitionDuration,
                ease: EASE_OUT_SWIFT,
              }}
            >
              <ButtonInternal
                onClick={onJumpToBottom}
                variant="neutral"
                icon={ArrowDown}
                label={
                  unreadCount > 0
                    ? i18n.t(
                        unreadCount === 1
                          ? "chat.unreadCount.one"
                          : "chat.unreadCount.other",
                        { count: unreadCount }
                      )
                    : hasMoreNewer
                      ? i18n.chat.backToLatest
                      : i18n.chat.scrollToBottom
                }
                hideLabel={unreadCount === 0 && !hasMoreNewer}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
