import { F0Icon } from "@/components/F0Icon"
import OutlineCircle from "@/icons/animated/CheckCircleLine"
import DottedCircle from "@/icons/app/DottedCircle"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Spinner } from "../Information/Spinner"

export interface ActionItemProps {
  title: string
  status?: "inProgress" | "executing" | "completed"
  inGroup?: boolean
}

export const ActionItem = ({ title, status, inGroup }: ActionItemProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-1 text-f1-foreground-secondary",
        inGroup ? "items-start" : "items-center"
      )}
    >
      <div className="*:block">
        {status === "inProgress" && (
          <F0Icon
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={DottedCircle}
          />
        )}
        {status === "executing" && (
          <Spinner className={inGroup ? "h-4 w-4" : "h-6 w-6"} />
        )}
        {status === "completed" && (
          <F0Icon
            color="secondary"
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={OutlineCircle}
          />
        )}
      </div>
      <motion.p
        key={title}
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
        className="text-pretty"
      >
        {title}
      </motion.p>
    </div>
  )
}
