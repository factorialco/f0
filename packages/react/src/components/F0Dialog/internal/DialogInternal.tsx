import { FC, useMemo } from "react"
import { DialogInternalProps } from "./internal-types"
import { DialogWrapper } from "../components/DialogWrapper"
import { DialogHeader } from "../_components/DialogHeader"
import { DialogContent } from "../_components/DialogContent"
import { DialogFooter } from "../_components/DialogFooter"

export const DialogInternal: FC<DialogInternalProps> = ({
  disableClose = false,
  onClose,
  isOpen,
  children,
  size = "md",
  primaryAction,
  secondaryAction,
  title,
  description,
  module,
  otherActions,
  tabs,
  modal = false,
  activeTabId,
  setActiveTabId,
  disableContentPadding,
  variant = "default",
}) => {
  const _memoizedDialogLayout = useMemo(() => {
    return (
      <>
        {variant !== "notification" && (
          <DialogHeader
            title={title}
            description={description}
            module={module}
            otherActions={otherActions}
            tabs={tabs}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
            disableClose={disableClose}
          />
        )}
        <DialogContent disableContentPadding={disableContentPadding ?? false}>
          {children}
        </DialogContent>
        <DialogFooter
          primaryAction={primaryAction ?? []}
          secondaryAction={secondaryAction ?? []}
          variant={variant}
        />
      </>
    )
  }, [
    title,
    description,
    module,
    otherActions,
    tabs,
    activeTabId,
    setActiveTabId,
    disableClose,
    disableContentPadding,
    children,
    primaryAction,
    secondaryAction,
  ])

  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      size={size}
      modal={modal}
    >
      {_memoizedDialogLayout}
    </DialogWrapper>
  )
}
