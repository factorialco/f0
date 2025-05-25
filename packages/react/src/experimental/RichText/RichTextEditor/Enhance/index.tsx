import { Icon } from "@/components/Utilities/Icon"
import { Ai } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
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
        <Button
          type="button"
          ref={enhanceButtonRef}
          variant="outline"
          size="md"
          onClick={(e) => {
            handleEnhanceClick(e)
          }}
          disabled={disableButtons || isLoadingEnhance}
          className={cn(
            "bg-gradient-to-r from-[#f9f0dd80] to-[#d4ccfd80] text-[#6143a7] [&>button>svg]:text-[#6143a7]",
            hideLabel && "[&>button]:aspect-square [&>button]:px-0"
          )}
        >
          <Icon icon={Ai} />
          {!hideLabel &&
            (enhanceConfig?.enhanceLabels.enhanceButtonLabel ?? "Magic")}
        </Button>
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
