import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { F0Icon } from "@/components/F0Icon"
import { Badge } from "@/experimental/Information/Badge"
import {
  Alert,
  Check,
  Cross,
  CrossedCircle,
  Link as LinkIcon,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

interface LinkPopupProps {
  editor: Editor
  disabled: boolean
}

export const LinkPopup = ({ editor, disabled }: LinkPopupProps) => {
  const translations = useI18n()
  const [openLinkPopover, setOpenLinkPopover] = useState(false)
  const [url, setUrl] = useState(editor.getAttributes("link").href || "")

  const handleLinkButtonClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (disabled) return
    setOpenLinkPopover(!openLinkPopover)
  }

  const checkIfUrlIsValid = (url: string) => {
    const trimmedUrl = url.trim()
    const isValidUrl =
      /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/i.test(
        trimmedUrl
      )
    return isValidUrl
  }

  const handleSave = () => {
    const trimmedUrl = url.trim()
    if (!trimmedUrl) return
    if (!checkIfUrlIsValid(trimmedUrl)) return
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: trimmedUrl })
      .run()

    setOpenLinkPopover(false)
  }

  const handlePaste = () => {
    setUrl("")
    navigator.clipboard.readText().then((text) => {
      setUrl(text)
    })
  }

  const handleDelete = () => {
    editor.chain().focus().unsetLink().run()
    setUrl("")
  }

  const handleClose = () => {
    setOpenLinkPopover(false)
  }

  return (
    <Popover.Root
      open={openLinkPopover}
      onOpenChange={(open) => {
        setOpenLinkPopover(open)
        if (open) {
          setUrl(editor.getAttributes("link").href || "")
        }
      }}
    >
      <Popover.Trigger asChild>
        <F0ButtonToggle
          selected={editor.isActive("link") || openLinkPopover}
          label={translations.richTextEditor.linkLabel}
          icon={LinkIcon}
          disabled={disabled}
          onSelectedChange={() => handleLinkButtonClick()}
        />
      </Popover.Trigger>

      <Popover.Portal container={document.body}>
        <Popover.Content
          side="top"
          align="start"
          sideOffset={10}
          collisionPadding={10}
          alignOffset={-5}
          style={{ zIndex: 9999 }}
        >
          <AnimatePresence>
            {openLinkPopover && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="Link popup"
              >
                <div className="dark z-50 flex w-max flex-row gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
                  <ButtonInternal
                    compact
                    variant="ghost"
                    size="md"
                    onClick={(e) => {
                      e.preventDefault()
                      handleClose()
                    }}
                    className="[&>button]:aspect-square [&>button]:px-0"
                    label="Close link popup"
                    hideLabel
                    icon={Cross}
                  ></ButtonInternal>
                  <div
                    className={cn(
                      "flex w-80 appearance-none items-center gap-2 rounded border-0 bg-f1-background py-1 pl-2 pr-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary",
                      !editor.isActive("link")
                        ? focusRing("focus:ring-f1-border-hover") +
                            "hover:ring-f1-border-hover"
                        : "cursor-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center",
                        url.length > 0 ? "w-6" : "w-4"
                      )}
                    >
                      <Badge
                        icon={
                          url.length > 0
                            ? checkIfUrlIsValid(url)
                              ? Check
                              : Alert
                            : LinkIcon
                        }
                        type={
                          url
                            ? checkIfUrlIsValid(url)
                              ? "positive"
                              : "warning"
                            : "neutral"
                        }
                        size={url.length > 0 ? "sm" : "lg"}
                      />
                    </div>

                    <input
                      className="w-full shrink text-f1-foreground disabled:cursor-not-allowed"
                      type="text"
                      placeholder={translations.richTextEditor.linkPlaceholder}
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSave()
                        }
                      }}
                    />

                    {editor.isActive("link") && (
                      <F0Icon
                        size="md"
                        icon={CrossedCircle}
                        className="cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary"
                        onClick={handleDelete}
                      />
                    )}

                    <F0Button
                      variant="outline"
                      type="button"
                      size="sm"
                      onClick={handlePaste}
                      label={translations.richTextEditor.linkPaste}
                    ></F0Button>
                  </div>
                  <F0Button
                    variant="default"
                    type="button"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSave()
                    }}
                    label={translations.actions.save}
                  ></F0Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
