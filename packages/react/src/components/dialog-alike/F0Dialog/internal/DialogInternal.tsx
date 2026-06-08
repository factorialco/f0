import { FC, useEffect, useMemo, useState } from "react"

import { Content } from "../../common/Content"
import { Footer } from "../../common/Footer"
import { Header } from "../../common/Header"
import { DialogWrapper } from "../../common/Wrapper"
import { DialogInternalProps } from "./internal-types"

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
  type = "default",
}) => {
  const [localIsOpen, setLocalIsOpen] = useState(isOpen)

  useEffect(() => {
    setLocalIsOpen(isOpen)
  }, [isOpen])

  const _memoizedDialogLayout = useMemo(() => {
    return (
      <>
        {variant !== "notification" && (
          <Header
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
        <Content disableContentPadding={disableContentPadding ?? false}>
          {children}
        </Content>
        <Footer
          primaryAction={primaryAction ?? []}
          secondaryAction={secondaryAction ?? []}
          variant={variant}
          type={type}
          onClose={() => setLocalIsOpen(false)}
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
    variant,
    type,
  ])

  return (
    <DialogWrapper
      isOpen={localIsOpen}
      onClose={onClose}
      position="center"
      size={size}
      modal={modal}
      onOpenChange={setLocalIsOpen}
    >
      {_memoizedDialogLayout}
    </DialogWrapper>
  )
}
