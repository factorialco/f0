import { motion } from "motion/react"

import { Spinner } from "@/experimental/Information/Spinner"
import { cn } from "@/lib/utils"

interface LoadingEnhanceProps {
  label?: string
  isFullscreen: boolean
}

const LoadingEnhance = ({ label, isFullscreen }: LoadingEnhanceProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center rounded-xl bg-f1-background p-2",
        !isFullscreen && "max-h-60"
      )}
    >
      <motion.div
        className="flex h-full w-full flex-row items-center justify-center gap-3 rounded-md"
        style={{
          background:
            "linear-gradient(90deg, #E5561980, #A1ADE580, #E5194380, #E5561980)",
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Spinner size="small" />
        <p className="font-medium">{label || "Loading..."}</p>
      </motion.div>
    </div>
  )
}

export { LoadingEnhance }
