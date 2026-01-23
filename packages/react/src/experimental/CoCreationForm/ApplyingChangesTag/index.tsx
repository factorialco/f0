import { motion } from "motion/react"
import { memo } from "react"

import { F0OneIcon as OneIcon } from "@/ai/F0OneIcon"
import { useI18n } from "@/lib/providers/i18n"

const IconMotion = motion.create(OneIcon)

const ApplyingChangesTag = () => {
  const i18n = useI18n()

  return (
    <div className="flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md">
      <IconMotion
        size="xs"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
        }}
        transition={{
          rotate: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1, // Adds a 0.5s delay between each repetition
          },
          scale: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          },
          filter: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      />
      <span className="font-medium">
        {i18n.t("coCreationForm.labels.applyingChanges")}
      </span>
    </div>
  )
}

export default memo(ApplyingChangesTag)
