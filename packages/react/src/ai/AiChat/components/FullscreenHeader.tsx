"use client"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Cross } from "@/icons/app"
import { motion } from "motion/react"
import { useAiChat } from "../providers/AiChatStateProvider"
import OneIcon from "../OneIcon"

export const FullscreenHeader = () => {
  const { greeting, setOpen, setVisualizationMode } = useAiChat()

  const handleClose = () => {
    setVisualizationMode("sidepanel")
    setOpen(false)
  }

  return (
    <header className="flex flex-col items-center gap-8 px-4 pt-12">
      {/* Close button */}
      <div className="absolute right-4 top-4">
        <ButtonInternal
          variant="ghost"
          icon={Cross}
          hideLabel
          onClick={handleClose}
          label="Close"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <OneIcon spin size="sm" />
      </motion.div>

      {/* Greeting */}
      {greeting && (
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h1 className="text-center text-2xl font-semibold">
            {greeting.includes(",") ? (
              <>
                <span className="text-purple-600">
                  {greeting.substring(0, greeting.indexOf(","))}
                </span>
                <span className="text-red-600">
                  {greeting.substring(greeting.indexOf(","))}
                </span>
              </>
            ) : (
              <span className="text-purple-600">{greeting}</span>
            )}
          </h1>
          <p className="text-lg text-gray-600">
            What would you like to create?
          </p>
        </motion.div>
      )}
    </header>
  )
}
