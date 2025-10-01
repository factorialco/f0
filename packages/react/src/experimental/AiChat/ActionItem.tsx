import { F0Icon } from "@/components/F0Icon"
import OutlineCircle from "@/icons/animated/CheckCircleLine"
import DottedCircle from "@/icons/app/DottedCircle"
import { motion } from "motion/react"
import { ChatSpinner } from "./components/ChatSpinner"

export interface ActionItemProps {
  title: string
  status?: "inProgress" | "executing" | "completed"
  inGroup?: boolean
}

export const ActionItem = ({ title, status, inGroup }: ActionItemProps) => {
  return (
    <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
      {status === "inProgress" && (
        <div className="-mt-[2px] *:block">
          <F0Icon
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={DottedCircle}
          />
        </div>
      )}
      {status === "executing" && (
        <div className="-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center">
          <ChatSpinner />
        </div>
      )}
      {status === "completed" && (
        <div className="-mt-[2px] *:block">
          <F0Icon
            color="secondary"
            state="animate"
            size={inGroup ? "md" : "lg"}
            icon={OutlineCircle}
          />
        </div>
      )}
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
