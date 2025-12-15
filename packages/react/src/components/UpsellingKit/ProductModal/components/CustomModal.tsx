import { ButtonInternal } from "@/components/F0Button/internal"
import { F0AvatarModule, ModuleId } from "@/components/avatars/F0AvatarModule"
import CrossIcon from "@/icons/app/Cross"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog/dialog"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useEffect, useState } from "react"

type CustomModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  module?: ModuleId
  portalContainer?: HTMLElement | null
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  module,
  portalContainer,
}: CustomModalProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} modal>
      <DialogContent
        className="max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background"
        container={portalContainer}
      >
        <div className="flex flex-row items-center justify-between px-4 py-4">
          <DialogTitle className="flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground">
            {module && <F0AvatarModule module={module} size="lg" />}
            {title}
          </DialogTitle>
          <ButtonInternal
            variant="outline"
            icon={CrossIcon}
            onClick={onClose}
            label="Close modal"
            hideLabel
          />
        </div>
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col">
          {children}
          <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
