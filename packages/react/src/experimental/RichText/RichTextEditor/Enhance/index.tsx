import { F0Icon } from "@/components/F0Icon"
import { Ai } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"
import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import { useRef, useState } from "react"
import { enhanceConfig } from "../utils/types"
import { AIEnhanceMenu } from "./EnhanceMenu"

interface EnhanceActivatorProps {
  editor: Editor
  onEnhanceWithAI: (
    selectedOption?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  enhanceConfig?: enhanceConfig
  disableButtons: boolean
  hideLabel?: boolean
  position?: "top" | "bottom"
  setLastIntent: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
}

const EnhanceActivator = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  disableButtons,
  hideLabel,
  position = "bottom",
  setLastIntent,
}: EnhanceActivatorProps) => {
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const handleEnhanceClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!enhanceButtonRef.current) setOpen(false)
    else setOpen((prev) => !prev)
  }

  return (
    <Popover.Root
      open={open}
      modal={false}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) {
          editor.view.dom.classList.remove("maintain-selection")
        }
      }}
    >
      <Popover.Trigger asChild>
        <Action
          type="button"
          ref={enhanceButtonRef}
          variant="outline"
          size="md"
          onClick={(e) => {
            handleEnhanceClick(e)
          }}
          aria-label={
            enhanceConfig?.enhanceLabels.enhanceButtonLabel ?? "Magic"
          }
          disabled={disableButtons || isLoadingEnhance}
          className={cn(
            "bg-gradient-to-r from-[#f9f0dd80] to-[#d4ccfd80] text-[#6143a7] dark:from-[#6143a7] dark:to-[#7846ef] dark:text-f1-foreground [&>button>svg]:text-[#6143a7] dark:[&>button>svg]:text-f1-foreground",
            hideLabel && "[&>button]:aspect-square [&>button]:px-0"
          )}
        >
          <F0Icon icon={Ai} />
          {!hideLabel &&
            (enhanceConfig?.enhanceLabels.enhanceButtonLabel ?? "Magic")}
        </Action>
      </Popover.Trigger>
      <Popover.Portal container={document.body}>
        <Popover.Content
          side={position}
          align="start"
          sideOffset={10}
          alignOffset={0}
          collisionPadding={10}
          style={{ zIndex: 9999 }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <AIEnhanceMenu
                  onSelect={({ selectedIntent, customIntent }) => {
                    onEnhanceWithAI(selectedIntent, customIntent)
                    setLastIntent({
                      selectedIntent: selectedIntent || undefined,
                      customIntent: customIntent || undefined,
                    })
                    setOpen(false)
                  }}
                  onClose={() => {
                    setOpen(false)
                  }}
                  enhancementOptions={enhanceConfig?.enhancementOptions || []}
                  inputPlaceholder={
                    enhanceConfig?.enhanceLabels.customPromptPlaceholder || ""
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { EnhanceActivator }
