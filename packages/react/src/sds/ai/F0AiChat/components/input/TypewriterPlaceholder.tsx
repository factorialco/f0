import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

export interface TypewriterPlaceholderProps {
  placeholders: string[]
  defaultPlaceholder: string
  inputValue: string
  inProgress: boolean
}

export const TypewriterPlaceholder = ({
  placeholders,
  defaultPlaceholder,
  inputValue,
  inProgress,
}: TypewriterPlaceholderProps) => {
  const shouldReduceMotion = useReducedMotion()
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("")
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const placeholderTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typeIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const deleteIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const placeholderText =
    placeholders[currentPlaceholderIndex] ?? defaultPlaceholder

  useEffect(() => {
    const clearAllIntervals = () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current)
        typeIntervalRef.current = null
      }
      if (deleteIntervalRef.current) {
        clearInterval(deleteIntervalRef.current)
        deleteIntervalRef.current = null
      }
      if (placeholderTimeoutRef.current) {
        clearTimeout(placeholderTimeoutRef.current)
        placeholderTimeoutRef.current = null
      }
    }

    if (inputValue.length > 0 || inProgress) {
      setIsTyping(false)
      setDisplayedPlaceholder("")
      clearAllIntervals()
      return
    }

    // When reduced motion is preferred, show the full placeholder without animation
    if (shouldReduceMotion) {
      setIsTyping(false)
      setDisplayedPlaceholder(placeholderText)
      clearAllIntervals()

      // Rotate to next placeholder after a delay
      placeholderTimeoutRef.current = setTimeout(() => {
        const nextIndex =
          (currentPlaceholderIndex + 1) % Math.max(placeholders.length, 1)
        setCurrentPlaceholderIndex(nextIndex)
      }, 4000)

      return () => {
        clearAllIntervals()
      }
    }

    setIsTyping(true)
    setDisplayedPlaceholder("")

    let currentIndex = 0
    const typeSpeed = 50
    const deleteSpeed = 30
    const pauseBeforeDelete = 2000
    const pauseBeforeNext = 1000

    typeIntervalRef.current = setInterval(() => {
      if (currentIndex < placeholderText.length) {
        setDisplayedPlaceholder(placeholderText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current)
          typeIntervalRef.current = null
        }
        placeholderTimeoutRef.current = setTimeout(() => {
          deleteIntervalRef.current = setInterval(() => {
            if (currentIndex > 0) {
              currentIndex--
              setDisplayedPlaceholder(placeholderText.slice(0, currentIndex))
            } else {
              if (deleteIntervalRef.current) {
                clearInterval(deleteIntervalRef.current)
                deleteIntervalRef.current = null
              }
              placeholderTimeoutRef.current = setTimeout(() => {
                const nextIndex =
                  (currentPlaceholderIndex + 1) %
                  Math.max(placeholders.length, 1)
                setCurrentPlaceholderIndex(nextIndex)
              }, pauseBeforeNext)
            }
          }, deleteSpeed)
        }, pauseBeforeDelete)
      }
    }, typeSpeed)

    return () => {
      clearAllIntervals()
    }
  }, [
    inputValue,
    inProgress,
    placeholderText,
    currentPlaceholderIndex,
    placeholders.length,
    shouldReduceMotion,
  ])

  if (inputValue.length > 0 || inProgress) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        className={cn(
          "col-start-1 row-start-1",
          "pointer-events-none",
          "text-f1-foreground-secondary",
          "text-[16px] sm:text-[14px] leading-[20px] font-normal",
          "pt-3 px-3"
        )}
      >
        <div
          className={cn(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          )}
        >
          {displayedPlaceholder}
          {isTyping && !shouldReduceMotion && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              |
            </motion.span>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
