import { motion } from "motion/react"
import { ReactNode, useState } from "react"

import { F0Icon, IconType } from "@/components/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import { useReducedMotion } from "@/lib/a11y"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../ui/collapsible"

export type AiCollapsibleMessageProps = {
  icon: IconType
  title: string
  children: ReactNode
}

export const AiCollapsibleMessage = ({
  icon,
  title,
  children,
}: AiCollapsibleMessageProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Collapsible
      className="mb-1 w-full"
      open={isExpanded}
      onOpenChange={setIsExpanded}
    >
      <CollapsibleTrigger className="flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90">
        <span className="mr-2 *:block">
          <F0Icon icon={icon} className="block" />
        </span>
        <span className="mr-[2px]">{title}</span>
        <F0Icon
          icon={ChevronRight}
          className="h-4 w-4 transition-transform duration-200"
        />
      </CollapsibleTrigger>
      <CollapsibleContent forceMount className="data-[state=open]:mt-3">
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="flex flex-col gap-2"
        >
          {children}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}
