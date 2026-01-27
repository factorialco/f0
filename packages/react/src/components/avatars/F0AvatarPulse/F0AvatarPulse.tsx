import { AnimatePresence, motion } from "motion/react"
import { ComponentProps, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, F0IconProps, IconType } from "@/components/F0Icon"
import {
  FaceNegative,
  FaceNeutral,
  FacePositive,
  FaceSuperNegative,
  FaceSuperPositive,
  Reaction,
} from "@/icons/app"
import { EmojiImage } from "@/lib/emojis"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action"

import { BaseAvatar } from "../internal/BaseAvatar"

export const pulses = [
  "superNegative",
  "negative",
  "neutral",
  "positive",
  "superPositive",
] as const
export type Pulse = (typeof pulses)[number]

export const pulseIcon: Record<Pulse, IconType> = {
  superNegative: FaceSuperNegative,
  negative: FaceNegative,
  neutral: FaceNeutral,
  positive: FacePositive,
  superPositive: FaceSuperPositive,
}

export const pulseIconColor: Record<Pulse, F0IconProps["color"]> = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive",
}

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

export type F0AvatarPulseProps = {
  /**
   * The first name of the person.
   */
  firstName: string
  /**
   * The last name of the person.
   */
  lastName: string
  /**
   * The source of the person's image.
   */
  src?: string
  /**
   * The pulse to display on the avatar.
   */
  pulse?: Pulse
  /**
   * The callback to be called when the pulse is clicked.
   */
  onPulseClick: () => void
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const F0AvatarPulse = ({
  firstName,
  lastName,
  src,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  pulse,
  onPulseClick,
}: F0AvatarPulseProps) => {
  const translations = useI18n()
  const [showWave, setShowWave] = useState(!pulse)

  return (
    <div className="relative h-10 w-10">
      <AnimatePresence mode="popLayout" initial={showWave ? true : false}>
        {showWave ? (
          <motion.div
            className="relative h-10 w-10 rounded-full bg-f1-background-warning"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 290,
                damping: 15.1,
                mass: 1.4,
              },
              opacity: {
                type: "linear",
                duration: 0.2,
              },
            }}
          >
            <motion.div
              key="wave"
              initial={{ opacity: 0, originX: 0.6, originY: 0.6 }}
              animate={{
                rotate: [-15, 20, -15],
                opacity: 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.4, ease: "easeOut" },
                rotate: {
                  repeat: 1,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              onAnimationComplete={() => setShowWave(false)}
              className="absolute inset-0 flex select-none items-center justify-center text-4xl"
            >
              <EmojiImage emoji="👋" size="md" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="relative h-10 w-10"
            transition={{
              scale: {
                type: "spring",
                stiffness: 290,
                damping: 15.1,
                mass: 1.4,
              },
              opacity: {
                type: "linear",
                duration: 0.2,
              },
            }}
          >
            <BaseAvatar
              type="rounded"
              name={[firstName, lastName]}
              src={src}
              size="lg"
              color="random"
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
            />
            {pulse ? (
              <div className="absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background">
                <Action
                  variant="neutral"
                  size="sm"
                  compact
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onPulseClick()
                  }}
                  aria-label={translations.actions.edit}
                >
                  <F0Icon
                    icon={pulseIcon[pulse]}
                    color={pulseIconColor[pulse]}
                    size="sm"
                  />
                </Action>
              </div>
            ) : (
              <motion.div
                key="reaction-button"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  opacity: { delay: 0.25 },
                  scale: { delay: 0.25 },
                }}
                className="absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background"
              >
                <ButtonInternal
                  compact
                  label={translations.actions.add}
                  variant="neutral"
                  size="sm"
                  icon={Reaction}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onPulseClick()
                  }}
                  hideLabel
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

F0AvatarPulse.displayName = "PulseAvatar"
