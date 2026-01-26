import { FC, useMemo } from "react"

import { Content } from "../../common/Content"
import { Footer } from "../../common/Footer"
import { Header } from "../../common/Header"
import { DialogWrapper } from "../../common/Wrapper"
import { DrawerInternalProps } from "./internal-types"

export const DrawerInternal: FC<DrawerInternalProps> = ({
  disableClose = false,
  onClose,
  isOpen,
  children,
  position = "right",
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
}) => {
  const _memoizedDialogLayout = useMemo(() => {
    return (
      <>
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
        <Content disableContentPadding={disableContentPadding ?? false}>
          {children}
        </Content>
        <Footer
          primaryAction={primaryAction ?? []}
          secondaryAction={secondaryAction ?? []}
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
      position={position}
      size={size}
      modal={modal}
      showOverlay={modal}
      fullHeight
    >
      {_memoizedDialogLayout}
    </DialogWrapper>
  )
}
