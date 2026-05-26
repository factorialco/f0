import { AnimatePresence, motion } from "motion/react"
import { useCallback, useMemo, useRef, useState } from "react"

import { F0OneIcon } from "../../F0OneIcon"

import { PongBall } from "../../F0AiPong"
import { type Message } from "../types"

// Streaming text effect — reveals chars in cascade so the greeting feels typed.
const STREAM_CHAR_DURATION = 0.025
const GREETING_START_DELAY = 0.4
const STREAM_GAP = 0.15

const streamCharVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

type StreamedTextProps = {
  text: string
  startDelay: number
  className?: string
}

const StreamedText = ({ text, startDelay, className }: StreamedTextProps) => {
  const containerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: STREAM_CHAR_DURATION,
          delayChildren: startDelay,
        },
      },
    }),
    [startDelay]
  )

  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-label={text}
    >
      {[...text].map((char, index) => (
        <motion.span key={index} variants={streamCharVariants} aria-hidden>
          {char}
        </motion.span>
      ))}
    </motion.p>
  )
}

export type WelcomeScreenProps = {
  greeting?: string
  // todo make it string
  initialMessages?: Message[]
  /** Optional click on the One icon (factorial uses it for the pong easter egg). */
  onIconClick?: () => void
}

export const WelcomeScreen = ({
  greeting,
  initialMessages = [],
  onIconClick,
}: WelcomeScreenProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setIsHovered(true), 80)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setIsHovered(false)
  }, [])

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key="welcome"
        className="flex w-full flex-1 flex-col justify-end gap-6 sm:gap-4"
        initial={{ opacity: 1 }}
      >
        <div className="px-1">
          <motion.div
            className="flex w-fit justify-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <div
              className={onIconClick ? "relative cursor-pointer" : "relative"}
              onClick={onIconClick}
              onMouseEnter={onIconClick ? handleMouseEnter : undefined}
              onMouseLeave={onIconClick ? handleMouseLeave : undefined}
            >
              <motion.div
                animate={{
                  opacity: isHovered ? 0 : 1,
                  scale: isHovered ? 0.6 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <F0OneIcon spin size="lg" className="my-4" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <PongBall size={40} className="shadow-lg" />
              </motion.div>
            </div>
          </motion.div>
          {greeting && (
            <StreamedText
              text={greeting}
              startDelay={GREETING_START_DELAY}
              className="text-2xl font-semibold leading-[28px] text-f1-foreground-tertiary"
            />
          )}
          {initialMessages.map((message, msgIdx) => {
            const content =
              typeof message.content === "string" ? message.content : ""
            const priorChars =
              (greeting?.length ?? 0) +
              initialMessages
                .slice(0, msgIdx)
                .reduce(
                  (sum, m) =>
                    sum +
                    (typeof m.content === "string" ? m.content.length : 0),
                  0
                )
            const startDelay =
              GREETING_START_DELAY +
              priorChars * STREAM_CHAR_DURATION +
              STREAM_GAP * (msgIdx + (greeting ? 1 : 0))
            return (
              <StreamedText
                key={message.id}
                text={content}
                startDelay={startDelay}
                className="text-2xl font-semibold leading-[28px] text-f1-foreground"
              />
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
