import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import Star from "@/icons/app/Star"
import StarFilled from "@/icons/app/StarFilled"
import { cn, focusRing } from "@/lib/utils"

const IconMotion = motion.create(F0Icon)

const iconVariants = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 },
}

interface FavoriteButtonProps {
  /**
   * the state of the button pressed/unpressed
   */
  isMarked: boolean
  onChange: (newValue: boolean) => void
  /**
   * Label of the button, will be used as accessibility
   */
  label: string
}

export const FavoriteButton = ({
  isMarked,
  onChange,
  label,
}: FavoriteButtonProps) => {
  const [hasTransitioned, setHasTransitioned] = useState(false)

  const handleClick = () => {
    setHasTransitioned(true)
    onChange(!isMarked)
  }

  return (
    <AnimatePresence mode="wait">
      <button
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded",
          focusRing()
        )}
        onClick={handleClick}
        aria-label={label}
      >
        {isMarked ? (
          <IconMotion
            size="sm"
            key="favorite"
            icon={StarFilled}
            className="text-[hsl(var(--promote-50))] outline-none"
            variants={iconVariants}
            initial={hasTransitioned ? "enterFromUnfavorite" : "initial"}
            animate="animate"
            exit="exit"
            transition={{
              ease: [0.175, 0.885, 0.27, 2],
            }}
            aria-hidden="true"
            focusable={false}
            tabIndex={-1}
          />
        ) : (
          <IconMotion
            size="sm"
            key="not-favorite"
            whileTap={{ scale: 0.8 }}
            icon={Star}
            className="outline-none"
            variants={iconVariants}
            initial={hasTransitioned ? "enterFromFavorite" : "initial"}
            aria-hidden="true"
            focusable={false}
            tabIndex={-1}
            animate="animate"
            exit="exit"
            transition={{
              ease: [0, 0, 0.58, 1],
            }}
          />
        )}
      </button>
    </AnimatePresence>
  )
}
